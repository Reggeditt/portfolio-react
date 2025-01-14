'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center"
        >
          I'm a motivated and skilled Full-Stack Web Developer with expertise in modern web technologies, including JavaScript, React, Redux, and Ruby on Rails. I have a proven ability to build responsive, user-friendly web applications and optimize performance to enhance user experience. I'm passionate about coding, problem-solving, and collaborating with diverse teams to create impactful digital solutions. My commitment to continuous learning keeps me at the forefront of the ever-evolving tech landscape.
        </motion.p>
      </div>
    </section>
  )
}

export default About

