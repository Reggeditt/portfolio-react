'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Afrikiki - Kikibuy E-commerce Platform",
    description: "Developed a scalable e-commerce platform with features including user authentication, product catalog, shopping cart, online wallet and secure checkout. Used react context for managing state, firebase to manage authentication and backend. Integrated hubtel for payment processing and firebase storage for image storage, ensuring secure and efficient transactions.",
    technologies: ["React", "Next.js", "AntD", "firebase", "Hubtel API"],
    image: "/images/afrikiki/dashboard.png",
    demoLink: "https://kikibuy.org",
    githubRepo: ""
  },
  {
    title: "DevLinkz - Social Media Platform for Developers",
    description: "Built a platform for developers to keep all the links to their social media profiles in one place. Implemented user authentication, profile creation, link sharing, and preview generation. Designed a responsive UI with Tailwind CSS and AntD, ensuring consistent user experience across devices. Deployed the app on Vercel, ensuring fast load times and high availability.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    image: "/images/devlinkz/linkspage.png",
    demoLink: "https://devlinkz.vercel.app",
    githubRepo: "https://github.com/Reggeditt/devlinkz"
  },
  {
    title: "Fordstan - Real-time data management system for healthcare company",
    description: "Developed a real-time data management system for a healthcare company to track patient data, and appointments. Implemented a responsive UI with AntD and tailwindcss, ensuring a consistent user experience across devices. Used Firebase for real-time data synchronization and authentication, ensuring secure and efficient data management.",
    technologies: ["Reactjs", "Next.js", "Firebase", "AntD", "Tailwind CSS"],
    image: "/images/fordstan/dashboard.png",
    demoLink: "https://fordstan.vercel.app",
    githubRepo: "https://github.com/Reggeditt/fordstan"
  },
  {
    title: "AfriBNB - A crypto platform for Africa",
    description: "Developed a platform for users to buy, sell and trade cryptocurrencies. Implemented user authentication, wallet creation, and secure transactions. Designed a responsive UI with Tailwind CSS and AntD, ensuring a consistent user experience across devices. Used Firebase for authentication and real-time data synchronization, ensuring secure and efficient transactions.",
    technologies: ["Next.js", "React", "Tailwind CSS" ],
    image: "/images/afribnb/splash.png",
    demoLink: "",
    githubRepo: "https://github.com/narteysarso/afribnb"
  },
  {
    title: "Cryptomomo Africa - A crypto platform for a crypto company",
    description: "Developed a platform for a crypto company to showcase their products and services and also provide an API for developers to use their technology. Implemented a responsive UI with Tailwind CSS, ensuring a consistent user experience across devices. Used Next.js for server-side rendering, ensuring fast load times and high availability.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/cryptomomo/splash.png",
    demoLink: "https://cryptomomo.africa/",
    githubRepo: "https://github.com/narteysarso/cryptomomo-africa-web-app"
  },
  {
    title: "Ashlands - Website for a farming and exports company",
    description: "Designed and developed a website for a farming and exports company to showcase their products and services. Implemented a responsive UI with Tailwind CSS, ensuring a consistent user experience across devices. Used Next.js for server-side rendering, ensuring fast load times and high availability.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/ashlands/splash.png",
    demoLink: "https://ashlandsexports.com/",
    githubRepo: "https://github.com/Reggeditt/ashlandsExports"
  },
  {
    title: "Lucbilt - Website for a vocational training institute",
    description: "Designed and developed a website for a vocational training institute to showcase their programs and services.",
    technologies: ["HTML", "Js", "CSS"],
    image: "/images/lucbilt/splash.png",
    demoLink: "https://lucbilt.org",
    githubRepo: ""
  },
  {
    title: "lexitainment - a website for an entertainmaint consult",
    description: "Created a website for an entertainment consultancy to showcase their services and portfolio. Implemented a responsive design with Tailwind CSS, ensuring a seamless user experience across devices. Deployed the website on Vercel for optimal performance and reliability.",
    image: '/images/lexitainment/splash.png',
    technologies: ["Next.js", "React", "Tailwind CSS"],
    demoLink: 'https://lexitainment.vercel.app/',
    githubRepo: 'https://github.com/Reggeditt/lexitainment'
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
              className="relative bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
                <div className="flex justify-between mt-4 absolute bottom-6 left-6 right-6">
                  {project.demoLink && (
                    <a href={project.demo} target="_blank" className="text-blue-500 hover:underline transition-colors">Demo link</a>
                  )}
                  {project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" className="text-blue-500 hover:underline transition-colors">Github repo</a>
                  )}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

