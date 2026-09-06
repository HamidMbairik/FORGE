import { stats } from '../data/content'
import '../styles/Studio.css'

export default function Studio() {
  return (
    <section id="studio" className="section studio">
      <div className="hero-marquee marquee studio-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="marquee-group" key={i}>
              <span>Manifesto</span><em>✦</em>
              <span>We break things on purpose</span><em>✦</em>
              <span>Manifesto</span><em>✦</em>
            </div>
          ))}
        </div>
      </div>

      <div className="studio-intro container reveal">
        <p className="studio-statement">
          We believe the bravest ideas deserve the boldest craft. FORGE is a collective
          of <em>designers</em>, <em>developers</em>, <em>writers</em> and <em>dreamers</em>{' '}
          working at the edge of convention — where art meets utility and restraint meets
          the <span className="stat-accent">unexpected</span>.
        </p>
      </div>

      <div className="container studio-grid">
        <div className="studio-collage reveal">
          <div className="collage-block block-a" aria-hidden="true">
            <span>F</span>
          </div>
          <div className="collage-block block-b" aria-hidden="true">
            <img src="/images/studio-forge.jpg" alt="" className="collage-photo" loading="lazy" />
          </div>
          <div className="collage-block block-c" aria-hidden="true" />
          <div className="collage-stamp" aria-hidden="true">
            EST. 2017
          </div>
        </div>

        <div className="studio-side">
          <div className="studio-manifesto reveal">
            <span className="eyebrow">The studio</span>
            <h2 className="studio-title">
              INDEPENDENT.
              <br />
              <span className="accent-stroke">RESTLESS.</span>
              <br />
              UNTAMED.
            </h2>
            <p className="studio-copy">
              Since 2017 we've forged brands, products and campaigns for founders and
              visionaries who'd rather be remembered than ignored. No templates. No
              hand-me-downs. Just sharp thinking and honest craft.
            </p>
          </div>

          <ul className="studio-stats reveal">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}