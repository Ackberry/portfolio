import ExternalLink from './ExternalLink'
import type { projects } from '../data/projects'

type Project = (typeof projects)[number]

export default function ProjectList({ items }: { items: readonly Project[] }) {
  return (
    <ul className="mini-list">
      {items.map(([name, description, link]) => (
        <li key={name}>
          {link ? (
            <ExternalLink href={link}>{name}</ExternalLink>
          ) : (
            <span className="mini-project-name">{name}</span>
          )}
          <span>{description}</span>
        </li>
      ))}
    </ul>
  )
}
