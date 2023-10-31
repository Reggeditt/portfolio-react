import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    starbucks,
    threejs,
    github,
  } from "../assets";
  import bootstrap from "../assets/bootstrap.png";
  import ruby from "../assets/ruby.png";
  import rubyOnRails from "../assets/rubyOnRails.png";
  import sql from "../assets/sql.png";
  import postgresql from "../assets/postgresql.png";
  import antD from "../assets/antD.svg";
  import html5Icon from "../assets/html.png";
  import maura from "../assets/Maura.jpeg";
  import tvshows from "../assets/TVshows.jpg";
  import bookstore from "../assets/bookstore.jpg";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "works",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = {
    frontend: [
      // {
      //   name: "HTML5",
      //   icon: html5Icon,
      // },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Bootstrap",
        icon: bootstrap,
      },
      {
        name: "Ant Design",
        icon: antD,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
    backend: [
      {
        name: "SQL",
        icon: sql,
      },
      {
        name: "PostgreSQL",
        icon: postgresql,
      },
      {
        name: "Ruby",
        icon: ruby,
      },
      {
        name: "Ruby on Rails",
        icon: rubyOnRails,
      },
    ],  
    tools:
    [
      {
        name: "Git",
        icon: git,
      },
      {
        name: "GitHub",
        icon: github,
      },
    ],
  };
  
  const experiences = [
    {
      title: "Full-stack Web Developer",
      company_name: "Self-Employed",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];

  const projects = [
    {
      name: "Maura",
      description:
        "Web-based platform that allows church institutions to manage their organizational data.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Rails",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Ant Design",
          color: "pink-text-gradient",
        },
      ],
      image: maura,
      source_code_link: "https://github.com/reggeditt/church-management-software",
    },
    {
      name: "TV Shows App",
      description:
        "a front-end webapp that allows users to see their favorite shows and other shows that are related to their preferences. Built with React, Redux, and the TV Maze API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: tvshows,
      source_code_link: "https://github.com/reggeditt/react-capstone",
    },
    {
      name: "Book Store",
      description:
        "Web application that enables users to add and view books in their catalogue of books.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/reggeditt/Book-Store",
    },
  ];
  
  export { services, technologies, experiences, projects };
  