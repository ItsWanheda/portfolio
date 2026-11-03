const defaultApiBase = process.env.NODE_ENV === "production" ? "/api/v1" : "http://localhost:4000/api/v1";
const API_BASE = (process.env.NEXT_PUBLIC_API_URL || defaultApiBase).replace(/\\/$/, "");
let csrfToken: string | null = null;

type ApiOptions = Omit<RequestInit, "headers"> & { headers?: HeadersInit };

async function send<T>(path: string, options: ApiOptions, allowRefresh: boolean): Promise<T> {
  const method = (options.method || "GET").toUpperCase();
  const headers = new Headers(options.headers);
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  if (options.body && !isFormData && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (!["GET", "HEAD", "OPTIONS"].includes(method) && csrfToken) {
    headers.set("X-CSRF-Token", csrfToken);
  }

  const response = await fetch(API_BASE + path, {
    ...options,
    method,
    headers,
    credentials: "include",
    cache: "no-store",
  });

  const payload = await response.json().catch(() => ({})) as Record<string, unknown>;
  if (typeof payload.csrfToken === "string") csrfToken = payload.csrfToken;

  if (response.status === 401 && allowRefresh && !["/auth/login", "/auth/register", "/auth/refresh"].includes(path)) {
    const refreshed = await fetch(API_BASE + "/auth/refresh", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    if (refreshed.ok) {
      const refreshedPayload = await refreshed.json().catch(() => ({})) as Record<string, unknown>;
      if (typeof refreshedPayload.csrfToken === "string") csrfToken = refreshedPayload.csrfToken;
      return send<T>(path, options, false);
    }
    csrfToken = null;
  }

  if (!response.ok) {
    throw new Error(typeof payload.error === "string" ? payload.error : "The request could not be completed.");
  }
  return payload as T;
}

export function api<T>(path: string, options: ApiOptions = {}): Promise<T> {
  return send<T>(path, options, true);
}

export function clearClientSession(): void {
  csrfToken = null;
}
