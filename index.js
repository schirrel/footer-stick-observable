const intersecting = {}
function intersection({ callback, name, sentinel }) {
  const observer = new IntersectionObserver((changes) => {
    if (
      changes[0].isIntersecting !== intersecting[name] &&
      changes[0].boundingClientRect.top > 5
    ) {
      callback(changes[0].isIntersecting)
      intersecting[name] = changes[0].isIntersecting
    }
  }, {})

  observer.observe(sentinel, {
    rootMargin: '-20px',
    threshold: [1],
  })
}

const createSentinel = (name) => {
  const target = document.querySelector(name)
  const sentinel = document.createElement('div')
  sentinel.classList.add(`intersection-sentinel__${name.replace('.', '')}`)
  target.parentNode.insertBefore(sentinel, target)
  return sentinel
}
export function observe({ callback, name }) {
  const sentinel = createSentinel(name)
  intersection({
    callback: callback,
    name: name,
    sentinel,
  })
}

window.observeStickyBottom = observe
