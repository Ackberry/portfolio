'use client'

import { motion } from 'framer-motion'
import { FlickeringGrid } from './components/FlickeringGrid'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 pointer-events-none"
        squareSize={4}
        gridGap={6}
        flickerChance={0.2}
        maxOpacity={0.2}
      />
      {/* Centered welcome text */}
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-black dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Deep Akbari
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Software Engineer
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base text-gray-500 dark:text-gray-500 font-mono mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            click a button below to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
