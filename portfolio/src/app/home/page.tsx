'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import PageLayout from '../components/PageLayout'

const EXPERIENCES = [
  {
    company: 'FEDCON',
    link: 'https://federalgovernment.info',
    timeline: 'current',
    role: 'AI Engineer Intern',
    description:
      "Currently, I've been working on building a full-stack internal platform that helps consultants and clients generate custom federal contracting packages and quotes. I set up auth and UM using Redis, built an admin panel, and integrated everything with HubSpot through automated workflows (n8n) so that selected line items turn directly into draft quotes. I also developed a campaign builder interface, drag-and-drop phase selection, and an internal Kanban-style sales system, and managed to ship the core product in under 30 hours. A big focus was security and automation - hashing passwords, hiding credentials, and making sure submissions flow cleanly into CRM tools without manual work.",
  },
  {
    company: 'CacheAi',
    link: 'https://cacheai.us',
    timeline: "july '25 - sep '25",
    role: 'Software Engineer Intern',
    description:
      'At CacheAI, I worked on building an LLM-based ranking and scoring system for a job board platform. I deployed a user-scoring pipeline using the Gemini API to automatically rank 200+ users instead of doing it manually, and built a Python pipeline that cleaned and processed data from over 2,000 U.S. engineering schools. I designed a weighted 60/40 scoring framework and validated it against real profiles to make sure the rankings actually reflected candidate quality. It was a mix of data engineering and applied LLM work, where I focused on making the system deterministic, testable, and scalable.',
  },
  {
    company: 'Rare Lab (USF College of Engineering)',
    link: 'https://therarelab.com/people/deep-akbari/',
    timeline: "may '25 - july '25",
    role: 'ML Researcher & Software Developer',
    description:
      "At USF's RARE Lab, I worked on a low-cost LLM-powered social robot that was later accepted to the ACM HRI 2026 Companion. I built a conversational robotics system on a Raspberry Pi running Linux, integrating Vosk for speech-to-text, Gemini for reasoning, and Piper for text-to-speech. I also helped fine-tune Gemini 2.5 Flash and LLaMA2 for multimodal assistive tasks, which improved task success rates by 35%. It was hands-on research - wiring hardware, optimizing latency on constrained devices, and making LLMs actually usable in a real-world robotics setup.",
  },
]

const PROJECTS = [
  {
    name: '🏆 Talkio (Swamphacks 2026 Winner)',
    subtitle: 'AI-powered sales conversation intelligence platform',
    github: 'https://github.com/Talkio2026/swamp-hacks',
    image: '/talkio.jpeg',
    highlights: [
      'Won Best Use of DigitalOcean at UF for building an AI-powered sales conversation intelligence platform.',
      'Built an LLM-driven transcript analysis pipeline with MongoDB semantic search across client conversations.',
      'Created a multi-agent AI system with Gemini and ElevenLabs, hosted GPT-OSS-120B model on DigitalOcean.',
    ],
    tech: ['React', 'Radix', 'Node', 'MongoDB', 'Openrouter'],
  },
  {
    name: 'Haraesume',
    subtitle: 'Go, Langchain, AuroraDB, Auth0',
    github: 'https://github.com/ackberry/haraesume',
    image: '/haraesume.png',
    highlights: [
      'Created resume optimisng platform in Go to generate ATS-ready resumes and CVs with inner validation.',
      'Designed AI agent system using LangChain and PostgreSQL + pgvector for optimizing resumes and retrieval.',
    ],
    tech: ['Go', 'Langchain', 'AuroraDB', 'Auth0'],
  },
]

export default function HomePage() {
  return (
    <PageLayout>
      <section className={cn('w-full px-4 sm:px-6 lg:px-12')}>
        <div className="py-8 lg:py-12">
          <div className="relative lg:min-h-[420px]">
            <article className="max-w-3xl lg:ml-16 xl:ml-20">
              <div className="space-y-8 py-6 sm:py-8">
                <section className="space-y-4">
                  <h1 className="text-3xl font-bold text-white sm:text-4xl">
                    Deep Akbari
                  </h1>
                  <p className="text-base font-mono text-gray-300 sm:text-lg">
                    Software Engineer
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-300">Introduction</h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    Hi, I&apos;m Deep Akbari, an aspiring software engineer. I&apos;m
                    passionate about building cool projects with AI, or any new technology that
                    interests me. Currently, I am working on a reddit query api.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold text-blue-300">About Me</h2>
                  <p className="max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
                    19 yo, computer science sophomore, going to university of south florida (on a
                    presidential scholarship yay). i&apos;ve been getting more into programming
                    recently and i do so by creating side projects to solve my daily problems :)
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="font-mono text-xl font-bold text-white">projects</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {PROJECTS.map((project) => (
                      <div
                        key={project.name}
                        className="h-full rounded-md border border-white/10 px-3 py-2"
                      >
                        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                          <p className="font-mono text-sm text-white">{project.name}</p>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-blue-300 hover:text-blue-200"
                          >
                            <span className="font-mono text-[11px]">github</span>
                            <span className="font-mono text-[11px]">↗</span>
                          </a>
                        </div>
                        <p className="text-xs text-gray-400">{project.subtitle}</p>
                        <div className="pt-3">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={980}
                            height={560}
                            className="h-auto w-full rounded-md border border-white/10 object-cover"
                          />
                        </div>
                        <ul className="ml-4 list-disc space-y-1 pt-3 text-xs leading-relaxed text-gray-300">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                          ))}
                        </ul>
                        <p className="pt-3 font-mono text-xs text-gray-400">
                          {project.tech.join(' · ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </article>

            <aside className="mt-8 space-y-4 lg:absolute lg:right-0 lg:top-[5.9rem] lg:mt-0 lg:w-[620px]">
              <h2 className="font-mono text-xl font-bold text-white">experience</h2>
              <div className="space-y-4">
                {EXPERIENCES.map((experience) => (
                  <details
                    key={experience.company}
                    className="group rounded-md border border-white/10 px-3 py-2"
                  >
                    <summary className="cursor-pointer list-none">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                        <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
                          <p className="font-mono text-sm text-white">{experience.company}</p>
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-1 text-blue-300 hover:text-blue-200"
                          >
                            <span className="font-mono text-[11px]">open link</span>
                            <span className="font-mono text-[11px]">↗</span>
                          </a>
                        </div>
                        <p className="shrink-0 whitespace-nowrap font-mono text-[13px] tracking-wide text-gray-400">
                          {experience.timeline}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">{experience.role}</p>
                    </summary>
                    <p className="pt-3 text-xs leading-relaxed text-gray-300">
                      {experience.description}
                    </p>
                  </details>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
