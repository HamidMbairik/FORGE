import '../styles/Logo.css'

// the brand mark: an F being forged over a flame on a dark hearth.
// all hand-drawn SVG, no icon library — the flame flickers and throws
// sparks on hover (see Logo.css). compact drops the wordmark for tight
// spots like the footer.
export default function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? 'logo-compact' : ''}`}>
      <svg
        className="logo-emblem"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="forgeFlame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#FF4D00" />
            <stop offset="100%" stopColor="#FFB199" />
          </linearGradient>
          <radialGradient id="forgeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="100" height="100" rx="24" fill="#111111" />
        <rect
          x="1.5"
          y="1.5"
          width="97"
          height="97"
          rx="23"
          fill="none"
          stroke="#242424"
          strokeWidth="1.5"
        />
        <circle className="forge-glow" cx="50" cy="56" r="34" fill="url(#forgeGlow)" />

        {/* flame rising behind the F */}
        <path
          className="forge-flame"
          d="M50 5 C58.5 14.5 66 22.5 66 34 C66 46 59 53 50 53 C41 53 34 46 34 34 C34 22.5 41.5 14.5 50 5 Z"
          fill="url(#forgeFlame)"
        />
        <path
          className="forge-flame-inner"
          d="M50 21 C53.5 26.5 57 31 57 37 C57 42.5 54 46 50 46 C46 46 43 42.5 43 37 C43 31 46.5 26.5 50 21 Z"
          fill="#FFB199"
          opacity="0.95"
        />

        {/* sparks */}
        <circle className="forge-spark s1" cx="67" cy="13" r="2.6" fill="#FF4D00" />
        <circle className="forge-spark s2" cx="79" cy="24" r="1.8" fill="#FF4D00" />
        <circle className="forge-spark s3" cx="23" cy="17" r="2.1" fill="#FF4D00" />

        {/* the F */}
        <rect className="forge-f outer" x="32" y="26" width="15" height="46" rx="2" />
        <rect className="forge-f top" x="32" y="26" width="46" height="15" rx="2" />
        <rect className="forge-f mid" x="32" y="46" width="28" height="13" rx="2" />
      </svg>

      {!compact && (
        <span className="logo-word">
          FORGE<span className="logo-dot">.</span>
        </span>
      )}
    </span>
  )
}