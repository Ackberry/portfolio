import ExternalLink from './ExternalLink'
import { contributions } from '../data/contributions'

export default function OpenSourceList() {
  return (
    <ul className="mini-list">
      {contributions.map(({ name, organization, url, pullRequests }) => (
        <li key={url}>
          <ExternalLink href={url}>{name}</ExternalLink>
          <div>
            {pullRequests.length > 1 ? (
              <>
                <span>{organization} · {pullRequests.length} merged PRs</span>
                <ul className="mini-contribution-prs">
                  {pullRequests.map(({ description, number, url }) => (
                    <li key={url}>
                      <span>{description}</span>
                      <p className="mini-contribution-meta">
                        <ExternalLink href={url}>PR #{number}</ExternalLink> · merged
                      </p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <span>{organization} · {pullRequests[0].description}</span>
                <p className="mini-contribution-meta">PR #{pullRequests[0].number} · merged</p>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
