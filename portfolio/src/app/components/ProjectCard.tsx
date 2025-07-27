import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  skills: string[];
  features: string[];
};

export default function ProjectCard({
  title,
  description,
  githubLink,
  liveLink,
  skills,
  features,
}: ProjectCardProps) {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 w-full h-full shadow-md hover:shadow-lg transition-all border border-white/10">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex gap-4 items-center mb-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" title="GitHub">
          <Github className="w-5 h-5 hover:text-blue-400" />
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:text-blue-400"
          >
            Live
          </a>
        )}
      </div>
      <p className="text-sm text-muted-foreground font-oxygen mb-3">{description}</p>

        {features && (
          <ul className="list-disc pl-5 mb-3 text-sm text-muted-foreground font-oxygen">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}

      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-white/20 dark:bg-black/30 rounded-md backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
