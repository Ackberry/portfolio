import ExternalLink from './ExternalLink'
import { contributions } from '../data/contributions'

export default function OpenSourceList() {
  return (
    <ul className="mini-list">
      {contributions.map(({ name, organization, description, number, url }) => (
        <li key={url}>
          <ExternalLink href={url}>{name}</ExternalLink>
          <div>
            <span>{organization} · {description}</span>
            <p className="mini-contribution-meta">PR #{number} · merged</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
