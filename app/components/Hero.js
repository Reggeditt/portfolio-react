'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-section h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero

