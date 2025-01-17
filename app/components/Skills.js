'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Front-End",
    skills: ["JavaScript (ES6+)", "React", "Redux", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Back-End",
    skills: ["SQL", "Ruby on Rails", "Firebase", "GCP", "RESTful APIs"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    title: "Testing & Debugging",
    skills: ["Jest", "RSpec", "Chrome DevTools", "Cypress"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "Heroku", "Webpack", "Babel"]
  },
  {
    title: "Methodologies",
    skills: ["Agile", "Scrum", "Test-Driven Development (TDD)", "CI/CD"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="list-disc list-inside">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-300 mb-2">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

