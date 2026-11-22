/*
 * Portfolio motion layer
 * GSAP + ScrollTrigger + Lenis.
 *
 * This module only animates DOM content. It does not import,
 * modify, or coordinate the existing Three.js canvas scene.
 */

(() => {
  "use strict";

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const Lenis = window.Lenis;

  if (!gsap || !ScrollTrigger || typeof Lenis !== "function") {
    console.warn("[Motion] GSAP, ScrollTrigger, or Lenis failed to load.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lenis = null;
  let lenisTicker = null;

  if (!reducedMotion.matches) {
    lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.085
    });

    // Keep Lenis and ScrollTrigger on the same animation frame.
    lenis.on("scroll", ScrollTrigger.update);

    lenisTicker = (time) => lenis?.raf(time * 1000);
    gsap.ticker.add(lenisTicker);
    gsap.ticker.lagSmoothing(0);
  }

  window.portfolioLenis = lenis;

  function animateGrid(container, selector, stagger = 0.045) {
    if (!container) return;

    let frame = 0;
    let activeTween = null;

    const animateNewItems = () => {
      const items = Array.from(container.querySelectorAll(selector))
        .filter((item) => item.dataset.motionReady !== "true");

      if (!items.length) return;

      items.forEach((item) => {
        item.dataset.motionReady = "true";
      });

      if (reducedMotion.matches) {
        gsap.set(items, { clearProps: "all" });
        return;
      }

      // Re-rendered filters/API results should not leave stale triggers behind.
      if (activeTween) {
        activeTween.scrollTrigger?.kill();
        activeTween.kill();
      }

      activeTween = gsap.fromTo(
        items,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.52,
          stagger,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: container,
            start: "top 86%",
            once: true
          }
        }
      );

      ScrollTrigger.refresh();
    };

    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(animateNewItems);
    });

    observer.observe(container, { childList: true });
    animateNewItems();
  }

  animateGrid(document.getElementById("skills-grid"), ".skill-card", 0.035);
  animateGrid(document.getElementById("repos-grid"), ".repo-card", 0.06);

  window.addEventListener(
    "load",
    () => ScrollTrigger.refresh(),
    { once: true }
  );

  // If reduced motion is enabled while the page is open, stop smooth scrolling
  // and remove scroll-triggered transforms rather than continuing animations.
  reducedMotion.addEventListener?.("change", (event) => {
    if (!event.matches) return;

    if (lenisTicker) {
      gsap.ticker.remove(lenisTicker);
      lenisTicker = null;
    }

    if (lenis) {
      lenis.destroy();
      lenis = null;
      window.portfolioLenis = null;
    }

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.set(".skill-card, .repo-card", {
      clearProps: "opacity,visibility,transform"
    });
  });
})();
