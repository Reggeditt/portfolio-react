'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tetteh Kodjo-Sarso</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8">Full-Stack Web Developer</h2>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero

