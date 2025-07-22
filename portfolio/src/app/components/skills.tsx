// components/Skills.tsx
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

const skills = [ 
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-black dark:text-white" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Node.js', icon: <FaNodeJs className='text-black dark:text-white'/>},
  { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Vite', icon: <SiVite className='text-[#06B6D4]'/>},
  { name: 'GeminiAPI', icon: <RiGeminiFill className='text-[#5E7DD3]'/>},
  { name: 'Azure', icon: <VscAzure className="text-blue-700" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400" /> },
  { name: 'Linode', icon: <FaLinode className='text-green-500'/>},
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" /> },
  {name: 'Firebase', icon: <RiFirebaseFill className='text-[#FF7F24]'/>},
  { name: 'Supabase', icon: <RiSupabaseFill className='text-[#2CC27B]'/>},
  {name: 'Linux', icon: <FaLinux className='text-black dark:text-white'/>},
  
  
  
  {name: 'Scikit-learn', icon:<SiScikitlearn className=' text-[#D9B300]'/>},
  
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },

];

export default function Skills() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-mono mb-6 text-center">skills i’ve worked with so far..</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
