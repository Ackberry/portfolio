'use client'

import { useMemo, useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
  SiScikitlearn
} from 'react-icons/si';
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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
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
  
  // Get the actual background color based on theme
  const isDark = mounted && (resolvedTheme === 'dark' || (resolvedTheme === 'system' && theme === 'dark'));
  // Softer gradient with more gradual fade - less sharp edges
  const bgGradient = isDark 
    ? 'linear-gradient(to right, hsl(222.2, 84%, 4.9%), hsl(222.2, 84%, 4.9% / 0.98), hsl(222.2, 84%, 4.9% / 0.94), hsl(222.2, 84%, 4.9% / 0.87), hsl(222.2, 84%, 4.9% / 0.77), hsl(222.2, 84%, 4.9% / 0.65), hsl(222.2, 84%, 4.9% / 0.50), hsl(222.2, 84%, 4.9% / 0.35), hsl(222.2, 84%, 4.9% / 0.20), hsl(222.2, 84%, 4.9% / 0.10), transparent)'
    : 'linear-gradient(to right, hsl(0, 0%, 100%), hsl(0, 0%, 100% / 0.98), hsl(0, 0%, 100% / 0.94), hsl(0, 0%, 100% / 0.87), hsl(0, 0%, 100% / 0.77), hsl(0, 0%, 100% / 0.65), hsl(0, 0%, 100% / 0.50), hsl(0, 0%, 100% / 0.35), hsl(0, 0%, 100% / 0.20), hsl(0, 0%, 100% / 0.10), transparent)';
  
  const bgGradientLeft = isDark
    ? 'linear-gradient(to left, hsl(222.2, 84%, 4.9%), hsl(222.2, 84%, 4.9% / 0.98), hsl(222.2, 84%, 4.9% / 0.94), hsl(222.2, 84%, 4.9% / 0.87), hsl(222.2, 84%, 4.9% / 0.77), hsl(222.2, 84%, 4.9% / 0.65), hsl(222.2, 84%, 4.9% / 0.50), hsl(222.2, 84%, 4.9% / 0.35), hsl(222.2, 84%, 4.9% / 0.20), hsl(222.2, 84%, 4.9% / 0.10), transparent)'
    : 'linear-gradient(to left, hsl(0, 0%, 100%), hsl(0, 0%, 100% / 0.98), hsl(0, 0%, 100% / 0.94), hsl(0, 0%, 100% / 0.87), hsl(0, 0%, 100% / 0.77), hsl(0, 0%, 100% / 0.65), hsl(0, 0%, 100% / 0.50), hsl(0, 0%, 100% / 0.35), hsl(0, 0%, 100% / 0.20), hsl(0, 0%, 100% / 0.10), transparent)';

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
        {mounted && (
          <>
            <div 
              className="absolute inset-y-0 left-0 w-40 pointer-events-none z-10 transition-all duration-500 ease-in-out"
              style={{ background: bgGradient }}
            ></div>
            <div 
              className="absolute inset-y-0 right-0 w-40 pointer-events-none z-10 transition-all duration-500 ease-in-out"
              style={{ background: bgGradientLeft }}
            ></div>
          </>
        )}
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
    { id: 'c', name: 'C', icon: <SiCplusplus className="text-blue-600 dark:text-blue-400" />, category: 'Languages' },
    { id: 'cpp', name: 'C++', icon: <SiCplusplus className="text-black dark:text-white" />, category: 'Languages' },
  ];

  const frameworks: Skill[] = [
    { id: 'react', name: 'React', icon: <SiReact className="text-cyan-400" />, category: 'Frameworks' },
    { id: 'nextjs', name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, category: 'Frameworks' },
    { id: 'nodejs', name: 'Node.js', icon: <FaNodeJs className="text-black dark:text-white" />, category: 'Frameworks' },
    { id: 'tailwind', name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" />, category: 'Frameworks' },
    { id: 'vite', name: 'Vite', icon: <SiVite className="text-[#06B6D4]" />, category: 'Frameworks' },
  ];

  const databases: Skill[] = [
    { id: 'postgres', name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" />, category: 'Databases' },
    { id: 'firebase', name: 'Firebase', icon: <RiFirebaseFill className="text-[#FF7F24]" />, category: 'Databases' },
    { id: 'supabase', name: 'Supabase', icon: <RiSupabaseFill className="text-[#2CC27B]" />, category: 'Databases' },
  ];

  const cloudDevOps: Skill[] = [
    { id: 'azure', name: 'Azure', icon: <VscAzure className="text-blue-700" />, category: 'Cloud & DevOps' },
    { id: 'gcp', name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400" />, category: 'Cloud & DevOps' },
    { id: 'linode', name: 'Linode', icon: <FaLinode className="text-green-500" />, category: 'Cloud & DevOps' },
    { id: 'linux', name: 'Linux', icon: <FaLinux className="text-black dark:text-white" />, category: 'Cloud & DevOps' },
  ];

  const tools: Skill[] = [
    { id: 'git', name: 'Git', icon: <SiGit className="text-orange-500" />, category: 'Tools' },
    { id: 'gemini', name: 'Gemini API', icon: <RiGeminiFill className="text-[#5E7DD3]" />, category: 'Tools' },
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

