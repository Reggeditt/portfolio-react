'use client'

import { motion } from 'framer-motion'

const educations = [
  {
    title: "Remote Full-Stack Web Development Program",
    institution: "Microverse",
    period: "September 2022 – May 2023",
    description: [
      "Completed over 1,500 hours of rigorous training in full-stack development",
      "Built collaborative and technical skills through remote pair programming and international team projects"
    ]
  },
  {
    title: "Bachelor of Science, Telecommunications Engineering",
    institution: "Kwame Nkrumah University of Science and Technology, Kumasi, Ghana",
    period: "2014 – 2019",
    description: [
      "Focused on digital communication, network systems, and software integration"
    ]
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{edu.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {edu.description.map((item, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

