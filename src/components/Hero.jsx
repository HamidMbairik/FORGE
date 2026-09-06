import { useEffect, useRef, useState } from 'react'
import '../styles/Hero.css'

const STAMP_WORDS = ['BOLD', 'EXPERIMENTAL', 'CREATIVE', 'UNCONVENTIONAL']

export default function Hero() {
  const titleRef = useRef(null)
  const [stamp, setStamp] = useState(0)

  // the headline does a fake 3D tilt toward the cursor. it's literally just
  // rotating a div based on your mouse position, but the smooth lerp makes
  // it feel like the letters are floating.
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    let rx = 0
    let ry = 0
    let tx = 0
    let ty = 0
    let raf

    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      // normalize mouse to -5..5 degrees per axis
      rx = (e.clientX / innerWidth - 0.5) * 10
      ry = (e.clientY / innerHeight - 0.5) * 10
    }

    const animate = () => {
      // chase the target, don't snap — otherwise it's jittery garbage
      tx += (rx - tx) * 0.08
      ty += (ry - ty) * 0.08
      el.style.transform = `perspective(700px) rotateY(${tx}deg) rotateX(${-ty}deg)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // the ink stamp in the corner cycles through adjectives every ~2s
  useEffect(() => {
    const id = setInterval(() => {
      setStamp((s) => (s + 1) % STAMP_WORDS.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-blob blob-one" aria-hidden="true" />
      <div className="hero-blob blob-two" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-top-row">
          <span className="eyebrow">Creative digital agency</span>
          <span className="hero-coords">51.5072° N / 0.1276° W</span>
        </div>

        <div className="hero-main">
          <div className="hero-left">
            <h1 className="hero-title" ref={titleRef}>
              WE FORGE
              <br />
              <span className="hero-hollow">THE</span>
              <br />
              <span className="hero-accent">UNEX-PECTED</span>
            </h1>

            <p className="hero-sub">
              A collective of designers, developers and dreamers blending bold design and
              radical craft into digital experiences that refuse to blend in.
            </p>

            <div className="hero-actions">
              <a href="#work" className="btn btn-solid">
                View the work <span className="cta-arrow">↓</span>
              </a>
              <a href="#services" className="btn btn-outline">
                What we do
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-animation" aria-hidden="true">
              <div className="hero-orbit orbit-a">
                <span className="orbit-dot" />
              </div>
              <div className="hero-orbit orbit-b">
                <span className="orbit-dot" />
              </div>
              <div className="hero-anim-core">
                <span>F</span>
              </div>
            </div>

            <div className="hero-stamp" aria-hidden="true">
              <div className="stamp-rotator">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path id="circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
                  </defs>
                  <text className="stamp-text">
                    <textPath href="#circle">FORGE · EST 2017 · FORGE · EST 2017 ·</textPath>
                  </text>
                </svg>
              </div>
              <span className="stamp-center">{STAMP_WORDS[stamp]}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-group" key={i}>
              <span>Bold</span><em>✦</em>
              <span>Experimental</span><em>✦</em>
              <span>Creative</span><em>✦</em>
              <span>Unconventional</span><em>✦</em>
              <span>Fearless</span><em>✦</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
