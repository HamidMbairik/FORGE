import Logo from './Logo'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#top" className="footer-brand" aria-label="FORGE home">
          <Logo compact />
        </a>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">
          © 2026 FORGE Studio · Crafted in-house, forged to last.
        </p>
      </div>
    </footer>
  )
}