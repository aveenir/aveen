// Adds `.is-inview` once to any [data-inview], [data-draw] or [data-reveal]
// element when it enters the viewport. CSS in global.css does the animation,
// so the finished state is the default without JS or with reduced motion.
export function observeInView(root: ParentNode = document): void {
  const targets = root.querySelectorAll<Element>('[data-inview], [data-draw], [data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-inview'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-inview');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
  );
  targets.forEach((el) => io.observe(el));
}
