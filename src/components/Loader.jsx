import { useEffect, useState } from 'react'

const WORD = 'FORGE'

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // fake progress — it's purely cosmetic, we just want drama for ~1.7s
    // (long enough to feel intentional, short enough to not annoy)
    let value = 0
    const interval = setInterval(() => {
      value = Math.min(100, value + Math.random() * 18)
      setProgress(Math.floor(value))
    }, 90)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      setLeaving(true)
    }, 1700)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`loader ${leaving ? 'done' : ''}`} onTransitionEnd={onFinish}>
      <div className="loader-word" aria-hidden="true">
        {WORD.split('').map((c, i) => (
          <span key={i} className={c === 'O' ? 'loader-o' : ''} style={{ animationDelay: `${i * 0.09}s` }}>
            {c}
          </span>
        ))}
      </div>
      <div className="loader-bar">
        <i style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}