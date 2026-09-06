import '../styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="eyebrow reveal">Contact</span>
        <h2 className="contact-title reveal">
          GOT A BOLD<br />
          IDEA? <span className="contact-underline">LET'S BUILD IT.</span>
        </h2>

        <div className="contact-row">
          <a href="mailto:hello@forge.agency" className="contact-mail reveal">
            hello@forge.agency <span className="cta-arrow">↗</span>
          </a>
          <p className="contact-note reveal">
            Studio openings for new projects — always. We reply within 24 hours.
          </p>
        </div>

        <div className="contact-socials reveal">
          {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map((s, i) => (
            <a key={s} href="#top" className="social-link">
              <span className="social-num">{String(i + 1).padStart(2, '0')}</span>
              {s}
              <span className="cta-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}