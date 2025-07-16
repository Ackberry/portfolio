import { useEffect, useState} from 'react';


export default function Header() {
  const [dark, setDark] = useState(false);
  if (saved == 'dark' || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    setDark(true);
    document.doc
  }
  return (
    <header className="w-full py-4 px-8 bg-white shadow fixed top-0 left-0 z-50">
      <nav className="flex justify-center gap-8">
        <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Home</a>
        <a href="#experience" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Experience</a>
        <a href="#projects" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Projects</a>
        <a href="#skills" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Skills</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Contact</a>
      </nav>
    </header>
  )
}