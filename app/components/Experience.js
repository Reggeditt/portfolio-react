'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Freelance",
    period: "May 2023 – Present",
    description: [
      "Developed and deployed 5+ responsive web applications using React, Next.js, and Ruby on Rails, resulting in a 65% increase in business efficiency for clients",
      "Implemented performance optimizations using lazy loading and code splitting, reducing page load times by 50% and improving Core Web Vitals scores",
      "Integrated third-party APIs and implemented RESTful services to enhance application functionality and user experience",
      "Utilized Git for version control and collaborated with clients using Agile methodologies"
    ]
  },
  {
    title: "Remote Student Mentor",
    company: "Microverse",
    period: "December 2022 – May 2023",
    description: [
      "Mentored 45+ international students in full-stack web development, focusing on JavaScript, React, Ruby on Rails, and best coding practices",
      "Conducted code reviews and provided constructive feedback, improving code quality and adherence to industry standards",
      "Facilitated daily stand-ups and retrospectives, fostering a collaborative learning environment and improving team productivity by 30%"
    ]
  },
  {
    title: "Intern",
    company: "Whizzy Academy, Tech Hub PLC",
    period: "November 2022 – January 2023",
    description: [
      "Developed and delivered workshops on web development fundamentals, reaching over 100 participants",
      "Created interactive learning materials using React and Node.js, increasing student engagement by 40%",
      "Implemented a ticketing system using Ruby on Rails to streamline technical support, reducing response time by 60%"
    ]
  },
  {
    title: "Network Administrator",
    company: "SpeedexWifi",
    period: "January 2018 – April 2019",
    description: [
      "Designed and implemented network solutions using Cisco technologies, improving speed and reliability by 25%",
      "Developed a custom monitoring dashboard using JavaScript and Python, increasing network uptime by over 80%",
      "Automated routine maintenance tasks using shell scripts, reducing manual workload by 40%"
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
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

export default Experience

