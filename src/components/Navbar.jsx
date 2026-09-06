import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'
import Logo from './Logo'
import '../styles/Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // shrink the header + give it a blur once you've scrolled a bit
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // on mobile the menu is a full-screen overlay that closes on any link tap
  const closeMenu = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="FORGE home">
          <Logo />
        </a>

        <nav className={`nav-menu ${open ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={closeMenu}>
              <span className="nav-idx">{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-solid nav-cta">
          Let's talk
          <span className="cta-arrow">↗</span>
        </a>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
