/* ==========================================================================
   NESTORA — main.js
   Global chrome: sticky nav scroll state, mobile menu, scroll reveal.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- sticky nav shadow on scroll ---- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- mobile menu ---- */
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileScrim = document.querySelector(".mobile-nav-scrim");

  function closeMobileNav() {
    mobileNav?.classList.remove("is-open");
    mobileScrim?.classList.remove("is-open");
    menuToggle?.classList.remove("is-active");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  function toggleMobileNav() {
    const isOpen = mobileNav?.classList.toggle("is-open");
    mobileScrim?.classList.toggle("is-open", !!isOpen);
    menuToggle?.classList.toggle("is-active", !!isOpen);
    menuToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("no-scroll", !!isOpen);
  }

  menuToggle?.addEventListener("click", toggleMobileNav);
  mobileScrim?.addEventListener("click", closeMobileNav);
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  /* ---- scroll reveal (single, restrained treatment) ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-revealed"));
  }

  /* ---- footer year ---- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
