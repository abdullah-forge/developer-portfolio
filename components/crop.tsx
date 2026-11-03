import type { CSSProperties } from "react"

type CropProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  // Visible part of the image in source pixels; leave it out when a CSS class sets the crop
  area?: { x: number; y: number; w: number; h: number }
  eager?: boolean
}

// Shows one part of a screenshot at a fixed aspect ratio (see .crop in globals.css)
export function Crop({ src, alt, width, height, className, area, eager = false }: CropProps) {
  const style = area
    ? ({ "--iw": width, "--cx": area.x, "--cy": area.y, "--cw": area.w, "--ch": area.h } as CSSProperties)
    : undefined

  return (
    <div className={className ? `crop ${className}` : "crop"} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element -- the crop positions a plain img */}
      <img src={src} width={width} height={height} alt={alt} loading={eager ? undefined : "lazy"} />
    </div>
  )
}
