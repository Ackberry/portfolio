'use client'

import { useMemo } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiGooglecloud,
  SiGit,
  SiPostgresql,
  SiCplusplus,
  SiVite,
  SiScikitlearn,
  SiRust,
  SiRadixui,
  SiLangchain,
  SiMongodb,
  SiDigitalocean,
  SiHeroku,
  SiElevenlabs,
  SiOpenai,
  SiGithubactions
} from 'react-icons/si';
import { TbVectorTriangle } from 'react-icons/tb';
import { VscAzure } from "react-icons/vsc";
import { RiFirebaseFill, RiSupabaseFill, RiGeminiFill } from "react-icons/ri";
import { FaNodeJs, FaLinode, FaLinux } from "react-icons/fa";

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface SkillsCarouselProps {
  category: string;
  skills: Skill[];
  direction?: 'left' | 'right';
  speed?: number;
}

const SkillsCarousel = ({ category, skills, direction = 'right', speed = 1 }: SkillsCarouselProps) => {
  const plugin = useMemo(
    () =>
      AutoScroll({
        speed: direction === 'right' ? speed : -speed,
        startDelay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    [direction, speed]
  );

  const bgGradient = 'linear-gradient(to right, rgba(242,237,228,1), rgba(242,237,228,0.98), rgba(242,237,228,0.94), rgba(242,237,228,0.87), rgba(242,237,228,0.77), rgba(242,237,228,0.65), rgba(242,237,228,0.50), rgba(242,237,228,0.35), rgba(242,237,228,0.20), rgba(242,237,228,0.10), transparent)';
  const bgGradientLeft = 'linear-gradient(to left, rgba(242,237,228,1), rgba(242,237,228,0.98), rgba(242,237,228,0.94), rgba(242,237,228,0.87), rgba(242,237,228,0.77), rgba(242,237,228,0.65), rgba(242,237,228,0.50), rgba(242,237,228,0.35), rgba(242,237,228,0.20), rgba(242,237,228,0.10), transparent)';

  return (
    <div className="mb-12 w-full">
          <h3 className="text-2xl font-bold font-mono mb-6 text-center text-foreground/80">
            {category}
          </h3>
      <div 
        className="relative w-full max-w-3xl mx-auto flex items-center justify-center overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <Carousel
          opts={{ 
            loop: true,
            align: "start",
            dragFree: false,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {/* Render items multiple times to ensure seamless infinite loop */}
            {[...Array(5)].map((_, loopIndex) =>
              skills.map((skill, skillIndex) => (
                <CarouselItem
                  key={`${skill.id}-${loopIndex}-${skillIndex}`}
                  className="flex basis-auto justify-center pl-0"
                >
                  <div className="flex shrink-0 flex-col items-center justify-center gap-2 min-w-[120px] pr-20">
                    <div className="text-5xl flex items-center justify-center h-16 w-16">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center text-foreground">
                      {skill.name}
                    </span>
                  </div>
                </CarouselItem>
              ))
            )}
          </CarouselContent>
        </Carousel>
        {/* Gradient fade edges - background color fade */}
        <div
          className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10"
          style={{ background: bgGradient }}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-40 pointer-events-none z-10"
          style={{ background: bgGradientLeft }}
        ></div>
      </div>
    </div>
  );
};

export default function SkillsCarousels() {
  // Categorize skills
  const languages: Skill[] = [
    { id: 'js', name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'Languages' },
    { id: 'ts', name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, category: 'Languages' },
    { id: 'python', name: 'Python', icon: <SiPython className="text-yellow-500" />, category: 'Languages' },
    { id: 'rust', name: 'Rust', icon: <SiRust className="text-orange-600" />, category: 'Languages' },
    { id: 'c', name: 'C', icon: <SiCplusplus className="text-blue-600" />, category: 'Languages' },
    { id: 'cpp', name: 'C++', icon: <SiCplusplus className="text-[#1A1A1A]" />, category: 'Languages' },
  ];

  const frameworks: Skill[] = [
    { id: 'react', name: 'React', icon: <SiReact className="text-cyan-400" />, category: 'Frameworks' },
    { id: 'nextjs', name: 'Next.js', icon: <SiNextdotjs className="text-[#1A1A1A]" />, category: 'Frameworks' },
    { id: 'nodejs', name: 'Node.js', icon: <FaNodeJs className="text-[#1A1A1A]" />, category: 'Frameworks' },
    { id: 'radix', name: 'Radix UI', icon: <SiRadixui className="text-[#1A1A1A]" />, category: 'Frameworks' },
    { id: 'tailwind', name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" />, category: 'Frameworks' },
    { id: 'vite', name: 'Vite', icon: <SiVite className="text-[#06B6D4]" />, category: 'Frameworks' },
  ];

  const databases: Skill[] = [
    { id: 'postgres', name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" />, category: 'Databases' },
    { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Databases' },
    { id: 'firebase', name: 'Firebase', icon: <RiFirebaseFill className="text-[#FF7F24]" />, category: 'Databases' },
    { id: 'supabase', name: 'Supabase', icon: <RiSupabaseFill className="text-[#2CC27B]" />, category: 'Databases' },
  ];

  const cloudDevOps: Skill[] = [
    { id: 'azure', name: 'Azure', icon: <VscAzure className="text-blue-700" />, category: 'Cloud & DevOps' },
    { id: 'gcp', name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400" />, category: 'Cloud & DevOps' },
    { id: 'digitalocean', name: 'DigitalOcean', icon: <SiDigitalocean className="text-[#0080FF]" />, category: 'Cloud & DevOps' },
    { id: 'heroku', name: 'Heroku', icon: <SiHeroku className="text-[#430098]" />, category: 'Cloud & DevOps' },
    { id: 'githubactions', name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF]" />, category: 'Cloud & DevOps' },
    { id: 'linode', name: 'Linode', icon: <FaLinode className="text-green-500" />, category: 'Cloud & DevOps' },
    { id: 'linux', name: 'Linux', icon: <FaLinux className="text-[#1A1A1A]" />, category: 'Cloud & DevOps' },
  ];

  const tools: Skill[] = [
    { id: 'git', name: 'Git', icon: <SiGit className="text-orange-500" />, category: 'Tools' },
    { id: 'gemini', name: 'Gemini API', icon: <RiGeminiFill className="text-[#5E7DD3]" />, category: 'Tools' },
    { id: 'langchain-tool', name: 'LangChain', icon: <SiLangchain className="text-[#1C3C3C]" />, category: 'Tools' },
    { id: 'langgraph-tool', name: 'LangGraph', icon: <TbVectorTriangle className="text-[#1C3C3C]" />, category: 'Tools' },
    { id: 'elevenlabs-tool', name: 'ElevenLabs', icon: <SiElevenlabs className="text-[#1A1A1A]" />, category: 'Tools' },
    { id: 'openrouter-tool', name: 'OpenRouter', icon: <SiOpenai className="text-[#10A37F]" />, category: 'Tools' },
    { id: 'sklearn', name: 'Scikit-learn', icon: <SiScikitlearn className="text-[#D9B300]" />, category: 'Tools' },
  ];

  return (
    <section className="my-12 w-full">
      <h2 className="text-4xl font-bold font-mono mb-12 text-center">skills i&apos;ve worked with so far..</h2>
      
      <div className="space-y-8 w-full">
        <SkillsCarousel category="Languages" skills={languages} direction="left" speed={1} />
        <SkillsCarousel category="Frameworks & Libraries" skills={frameworks} direction="right" speed={1} />
        <SkillsCarousel category="Databases" skills={databases} direction="left" speed={1} />
        <SkillsCarousel category="Cloud & DevOps" skills={cloudDevOps} direction="right" speed={1} />
        <SkillsCarousel category="Tools & APIs" skills={tools} direction="left" speed={1} />
      </div>
    </section>
  );
}

