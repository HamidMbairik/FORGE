import { useState } from 'react'
import { services } from '../data/content'
import '../styles/Services.css'

export default function Services() {
  // which accordion row is opened; -1 = none. first one open by default
  // so the section doesn't look dead flat on arrival.
  const [openIdx, setOpenIdx] = useState(0)

  // clicking again collapses it (toggle), not just open-only
  const toggle = (i) => {
    setOpenIdx(openIdx === i ? -1 : i)
  }

  return (
    <section id="services" className="section services">
      <div className="container services-inner">
        <div className="services-title-col reveal">
          <span className="eyebrow">What we do</span>
          <h2 className="services-title">
            CHOOSE<br />
            YOUR<br />
            <span className="accent-block">WEAPON</span>
          </h2>
          <p className="services-note">
            Four forces. One obsession — forging work that cuts through the noise.
          </p>
        </div>

        <div className="services-list">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-row ${openIdx === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              // keyboard friendly so the accordion isn't mouse-only
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(i)
                }
              }}
            >
              <div className="service-top">
                <span className="service-num">{s.num}</span>
                <h3 className="service-name">{s.title}</h3>
                <span className="service-plus" aria-hidden="true">
                  <span className="plus-x" />
                  <span className="plus-y" />
                </span>
              </div>
              <div className="service-body">
                <p>{s.desc}</p>
                <a href="#contact" className="service-link">
                  Get started <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}