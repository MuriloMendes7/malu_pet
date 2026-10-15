import { useMemo } from 'react'

// Pequeno PRNG determinístico para as partículas não "pularem" a cada render
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

/** Partículas douradas cintilantes, inspiradas no fundo da logo. */
export default function GoldDust({ count = 60, seed = 7, className = '' }) {
  const dots = useMemo(() => {
    const rnd = seeded(seed)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rnd() * 100,
      top: rnd() * 100,
      size: 1.5 + rnd() * 4.5,
      delay: rnd() * 6,
      duration: 3 + rnd() * 5,
      opacity: 0.35 + rnd() * 0.65,
    }))
  }, [count, seed])

  return (
    <div className={`gold-dust ${className}`} aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            '--o': d.opacity,
          }}
        />
      ))}
    </div>
  )
}
