'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-10 bg-black dark:bg-none shadow-md"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-white/80">
        <Link href="/" className="text-2xl font-bold">
          TKS
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="hover:text-blue-500 transition-colors">About</Link></li>
          <li><Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link></li>
          <li><Link href="#experience" className="hover:text-blue-500 transition-colors">Experience</Link></li>
          <li><Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
          <li>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

