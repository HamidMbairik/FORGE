import { useEffect } from 'react'

// fade sections in as you scroll. nothing fancy, just an IntersectionObserver
// that adds a class when something dips into view. we unobserve after showing
// it once so we don't keep doing work on elements already on screen.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// custom cursor: tiny dot follows the mouse exactly, and a lazy ring lags
// behind it (that's the lerp below). the ring grows when hovering anything
// clickable. this is the kind of detail that makes a site feel alive.
export function useCursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot')
    const ring = document.querySelector('.cursor-ring')
    if (!dot || !ring) return

    // start off-screen so the cursor doesn't flash in the corner on load
    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const onOver = (e) => {
      // anything interactive makes the ring balloon up
      if (e.target.closest('a, button, .work-tile')) {
        ring.classList.add('grow')
      } else {
        ring.classList.remove('grow')
      }
    }

    // the ring chases the dot — classic easing, ~0.14 feels right on most screens
    const animate = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px, ${ry - ring.offsetHeight / 2}px)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])
}