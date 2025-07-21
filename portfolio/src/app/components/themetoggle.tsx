'use client';

import { useTheme } from 'next-themes';
import { SunMoon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
    >
      <SunMoon size={20} />
    </button>
  );
}
