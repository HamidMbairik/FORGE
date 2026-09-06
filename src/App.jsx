import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Studio from './components/Studio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal, useCursor } from './hooks/useEffects'

function App() {
  // loader blocks the page for the first ~1.7s, then unmounts itself
  const [hideLoader, setHideLoader] = useState(false)
  useReveal()
  useCursor()

  useEffect(() => {
    // lock scrolling while the loader is up so people don't scroll the real
    // page behind it and get disoriented
    if (!hideLoader) document.body.style.overflow = 'hidden'
  }, [hideLoader])

  return (
    <>
      {!hideLoader && (
        <Loader
          onFinish={() => {
            setHideLoader(true)
            document.body.style.overflow = ''
          }}
        />
      )}

      {/* cursor + film grain are just fixed overlays, feels expensive, is cheap */}
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App