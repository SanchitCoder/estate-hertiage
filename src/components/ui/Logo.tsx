import { Link } from 'react-router-dom'
import { companyLogo } from '@/lib/images'

interface LogoProps {
  className?: string
  imageClassName?: string
  link?: boolean
}

export default function Logo({
  className = '',
  imageClassName = 'h-10 w-auto max-w-[200px]',
  link = true,
}: LogoProps) {
  const image = (
    <img
      src={companyLogo}
      alt="Estates & Heritage Advisors"
      className={`object-contain object-left ${imageClassName}`}
    />
  )

  if (link) {
    return (
      <Link
        to="/"
        className={`inline-flex items-center shrink-0 ${className}`}
        aria-label="Estates & Heritage Advisors Home"
      >
        {image}
      </Link>
    )
  }

  return <div className={`inline-flex items-center shrink-0 ${className}`}>{image}</div>
}
