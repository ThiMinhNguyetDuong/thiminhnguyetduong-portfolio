'use client'

import { useCallback, useMemo, useRef, useState } from 'react'

const MAX_SCALE = 1.45
const INFLUENCE_RADIUS = 100

function getScales(
  chars: HTMLSpanElement[],
  mouseX: number,
  mouseY: number
): number[] {
  return chars.map((char) => {
    const rect = char.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distance = Math.hypot(mouseX - centerX, mouseY - centerY)
    const influence = Math.exp(
      -(distance * distance) / (2 * INFLUENCE_RADIUS * INFLUENCE_RADIUS)
    )
    return 1 + (MAX_SCALE - 1) * influence
  })
}

export function MagnifyText({
  text,
  className = '',
  as: Component = 'h1',
}: {
  text: string
  className?: string
  as?: 'h1' | 'span' | 'p'
}) {
  const containerRef = useRef<HTMLElement | null>(null)
  const characters = useMemo(() => text.split(''), [text])
  const [scales, setScales] = useState<number[]>(() =>
    characters.map(() => 1)
  )

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const container = containerRef.current
      if (!container) return

      const chars = container.querySelectorAll<HTMLSpanElement>('[data-char]')
      setScales(getScales(Array.from(chars), event.clientX, event.clientY))
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    setScales(characters.map(() => 1))
  }, [characters])

  return (
    <Component
      ref={(node) => {
        containerRef.current = node
      }}
      className={`title ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          data-char
          className="title-char"
          style={{ transform: `scale(${scales[index]})` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  )
}
