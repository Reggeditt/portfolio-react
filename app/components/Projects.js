'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "E-Commerce Web Application",
    description: "Developed a scalable e-commerce platform with features including user authentication, product catalog, shopping cart, and secure checkout. Implemented Redux for state management, resulting in a 30% improvement in application performance. Integrated Stripe for payment processing and AWS S3 for image storage, ensuring secure and efficient transactions. Achieved 95% test coverage using Jest and RSpec, significantly reducing bugs in production.",
    technologies: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "Stripe API", "AWS S3"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Portfolio Website",
    description: "Designed and developed a responsive personal portfolio showcasing projects and skills. Implemented server-side rendering and optimized images, achieving a Lighthouse performance score of 98%. Utilized Framer Motion for smooth animations, enhancing user experience and engagement.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "IoT Dashboard",
    description: "Created a real-time IoT device management dashboard with data visualization capabilities. Implemented Firebase real-time database and authentication for secure, instant data updates. Designed responsive UI components using Material-UI, ensuring consistent user experience across devices. Integrated Chart.js for dynamic data visualization, improving data interpretation efficiency by 50%.",
    technologies: ["React", "Firebase", "Chart.js", "Material-UI"],
    image: "/placeholder.svg?height=300&width=400"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

