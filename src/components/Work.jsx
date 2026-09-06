import { useState } from 'react'
import { projects } from '../data/content'
import '../styles/Work.css'

export default function Work() {
  const [active, setActive] = useState(projects[0])

  // little 3D tilt on the tiles, same trick as the hero headline but cheaper
  // (no lerp, instant) so it feels snappier under the cursor
  const handleMove = (e) => {
    const tile = e.currentTarget
    const rect = tile.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    tile.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`
  }

  const reset = (e) => {
    e.currentTarget.style.transform = 'perspective(700px) rotateY(0) rotateX(0)'
  }

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="work-head reveal">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="work-title">
              STUFF WE
              <br />
              <span className="accent-stroke">FORGED</span>
            </h2>
          </div>
          <a href="#contact" className="work-all">
            <span>Start your project</span>
            <span className="work-all-icon">↗</span>
          </a>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="work-tile"
              onMouseMove={handleMove}
              onMouseLeave={reset}
              onMouseEnter={() => setActive(p)}
            >
              <div className="work-visual">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.category}`}
                  className="work-img"
                  loading="lazy"
                />
                <div className="work-tint" aria-hidden="true" />
                <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="work-tag">{p.category}</span>
              </div>
              <div className="work-info">
                <div>
                  <h3 className="work-name">{p.name}</h3>
                  <p className="work-desc">{p.desc}</p>
                </div>
                <span className="work-year">{p.year}</span>
              </div>
            </article>
          ))}
        </div>

        {/* live preview rail */}
        <div className="work-preview reveal">
          <div className="preview-left">
            <span className="eyebrow">Currently featured</span>
            <h3 className="preview-name">{active.name}</h3>
            <p className="preview-desc">{active.desc}</p>
            <div className="preview-swatches">
              {active.colors.map((c) => (
                <span key={c} className="swatch" style={{ background: c }} title={c} />
              ))}
            </div>
          </div>
          <div className="preview-canvas">
            <div className="preview-frame">
              <img
                src={active.image}
                alt={active.name}
                className="preview-img"
                loading="lazy"
              />
              <div className="preview-tint" aria-hidden="true" />
              <div
                className="canvas-ring"
                style={{
                  background: `conic-gradient(from 40deg, ${active.colors[0]}, ${active.colors[1]}, ${active.colors[2]}, ${active.colors[0]})`,
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}