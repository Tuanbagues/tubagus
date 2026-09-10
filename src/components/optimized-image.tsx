type OptimizedImageProps = {
  src: string
  alt: string
  widths: number[]
  sizes: string
  className?: string
  aspect?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

function cdnUrl(src: string, w: number, q = 78) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&q=${q}`
}

export function OptimizedImage({
  src,
  alt,
  widths,
  sizes,
  className,
  aspect,
  loading = 'lazy',
  fetchPriority = 'auto',
}: OptimizedImageProps) {
  const largest = widths[widths.length - 1]
  return (
    <img
      src={cdnUrl(src, largest)}
      srcSet={widths.map((w) => `${cdnUrl(src, w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      style={aspect ? { aspectRatio: aspect } : undefined}
      className={className}
    />
  )
}
