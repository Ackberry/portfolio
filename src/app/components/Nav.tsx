import Link from 'next/link'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'

export const RESUME_URL = 'https://drive.google.com/file/d/1R0LFPDq-tJ-R1ky_ZN_gWY4xNRgPbrUK/view?usp=sharing'
export const GITHUB_URL = 'https://github.com/ackberry'
export const LINKEDIN_URL = 'https://linkedin.com/in/deep-akbari'
export const EMAIL = 'ackberrie@gmail.com'

export default function Nav() {
  return (
    <header className="mini-nav">
      <div className="mini-nav-inner">
        <Link className="mini-nav-brand" href="/">deep akbari</Link>
        <nav className="mini-nav-links" aria-label="Primary">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FileText aria-hidden="true" />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}
