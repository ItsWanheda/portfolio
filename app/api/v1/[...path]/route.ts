const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "accept-encoding",
]);

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

async function proxyApiRequest(request: Request, context: RouteContext): Promise<Response> {
  const apiOrigin = process.env.API_SERVER_URL?.replace(/\\/+$/, "");
  const bypassSecret = process.env.API_DEPLOYMENT_BYPASS;

  if (!apiOrigin || !bypassSecret) {
    return Response.json(
      { error: "The API proxy is not configured for this deployment." },
      { status: 503 },
    );
  }

  try {
    const { path } = await context.params;
    const requestUrl = new URL(request.url);
    const encodedPath = path.map((segment) => encodeURIComponent(segment)).join("/");
    const target = new URL("/api/v1/" + encodedPath, apiOrigin);
    target.search = requestUrl.search;

    const headers = new Headers();
    for (const [name, value] of request.headers) {
      const normalized = name.toLowerCase();
      if (HOP_BY_HOP_HEADERS.has(normalized) || normalized.startsWith("x-vercel-")) continue;
      headers.set(name, value);
    }
    headers.set("x-vercel-protection-bypass", bypassSecret);

    const body = request.method === "GET" || request.method === "HEAD"
      ? undefined
      : await request.arrayBuffer();

    const upstream = await fetch(target, {
      method: request.method,
      headers,
      body,
      cache: "no-store",
      redirect: "manual",
    });

    const responseHeaders = new Headers(upstream.headers);
    for (const name of HOP_BY_HOP_HEADERS) responseHeaders.delete(name);

    return new Response(request.method === "HEAD" ? null : upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("[api-proxy] upstream request failed", error);
    return Response.json(
      { error: "The API service is temporarily unavailable." },
      { status: 502 },
    );
  }
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const GET = proxyApiRequest;
export const HEAD = proxyApiRequest;
export const POST = proxyApiRequest;
export const PUT = proxyApiRequest;
export const PATCH = proxyApiRequest;
export const DELETE = proxyApiRequest;
export const OPTIONS = proxyApiRequest;
