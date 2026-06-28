import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a className="mini-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  )
}
