const intersecting = {};

const offsetMargin = "-20px";
const offsetTop = 5;

const normalizeName = (name) =>
  name?.replaceAll(".", "")?.replaceAll("#", "")?.replaceAll(">", "");

const intersection = ({ callback, name, sentinel }) => {
  const observer = new IntersectionObserver((changes) => {
    const changed = changes?.[0];
    if (!changed) return;

    if (
      changed.isIntersecting !== intersecting[name] &&
      changed.boundingClientRect?.top > offsetTop
    ) {
      const isStuck = !changed?.isIntersecting;

      callback({ isStuck });
      intersecting[name] = changed?.isIntersecting;
    }
  }, {});

  observer.observe(sentinel, {
    rootMargin: offsetMargin,
    threshold: [1],
  });
}

const createSentinel = (name) => {
  const target = document.querySelector(name);
  const sentinel = document.createElement("div");
  sentinel.classList.add(`intersection-sentinel__${normalizeName(name)}`);
  if(!target?.parentNode) {
     throw new Error("Can't selector parent from selector");
  }
  
  target?.parentNode?.insertBefore(sentinel, target);
  return sentinel;
};

export function observe({ callback, selector }) {
  if (!selector) {
    throw new Error("HTMLElement selector is required");
  }
  const sentinel = createSentinel(selector);
  intersection({
    callback: callback,
    name: selector,
    sentinel,
  });
}
