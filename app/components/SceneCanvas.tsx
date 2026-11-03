"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SceneCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      host.dataset.fallback = "true";
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const coreGeometry = new THREE.IcosahedronGeometry(1.28, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x25252d,
      metalness: 0.88,
      roughness: 0.28,
      wireframe: true,
      emissive: 0x26000b,
      emissiveIntensity: 0.72,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0x17171d,
        metalness: 0.75,
        roughness: 0.18,
        transmission: 0.12,
        transparent: true,
        opacity: 0.92,
        emissive: 0x5e001b,
        emissiveIntensity: 0.34,
      }),
    );
    scene.add(inner);

    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(1.85, 0.012, 8, 180),
      new THREE.MeshBasicMaterial({ color: 0xff174f, transparent: true, opacity: 0.72 }),
    );
    ringA.rotation.set(0.9, 0.35, 0.2);
    scene.add(ringA);

    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.006, 6, 180),
      new THREE.MeshBasicMaterial({ color: 0x767681, transparent: true, opacity: 0.54 }),
    );
    ringB.rotation.set(1.3, -0.5, 0.9);
    scene.add(ringB);

    const starPositions = new Float32Array(420 * 3);
    for (let index = 0; index < 420; index += 1) {
      starPositions[index * 3] = (Math.random() - 0.5) * 10;
      starPositions[index * 3 + 1] = (Math.random() - 0.5) * 8;
      starPositions[index * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0x9a9aa5, size: 0.014, transparent: true, opacity: 0.7 }),
    );
    scene.add(stars);

    scene.add(new THREE.AmbientLight(0x9a9aa8, 1.2));
    const keyLight = new THREE.PointLight(0xff174f, 28, 15);
    keyLight.position.set(2.7, 2.2, 3.8);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x8b8be8, 18, 14);
    rimLight.position.set(-3, -1.5, -2);
    scene.add(rimLight);

    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const render = () => {
      core.rotation.y += 0.0023;
      core.rotation.x += 0.0008;
      inner.rotation.y -= 0.0018;
      ringA.rotation.z += 0.0015;
      ringB.rotation.x += 0.0005;
      stars.rotation.y += 0.00012;
      renderer.render(scene, camera);
      if (!reducedMotion) frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="scene-canvas" aria-hidden="true" />;
}
