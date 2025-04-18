import bmwPrev from '../../assets/Projects-screenshots/BMW.png';
import gameStationPrev from '../../assets/Projects-screenshots/game-station.png';
import carsShowCasePrev from '../../assets/Projects-screenshots/cars-showcase.png';
import resumeBuilderPrev from '../../assets/Projects-screenshots/resume-builder.png';
import chatAppPrev from '../../assets/Projects-screenshots/chat-app.png';
import todoListPrev from '../../assets/Projects-screenshots/todo-list.jpg';
import holaMexico from '../../assets/Projects-screenshots/hola-mexico.png';
import atera from '../../assets/Projects-screenshots/Atera.png';
import peak from '../../assets/Projects-screenshots/peak.png';
import vitori from '../../assets/Projects-screenshots/vitori.png';

export const projects = [
  {
    name: 'Hola Mexico E-commerce',
    preview: holaMexico,
    description: `Solely responsible for building the entire store. Developed a fully custom Shopify theme based on Dawn, focusing on performance and modular design. Handled front-end and Liquid development, custom sections, and integrated third-party apps and libraries.`,
    tech: "Shopify Liquid, JavaScript (ES6), TailwindCSS, Swiper.js",
    github: 'private',
    live:'https://holamexico.de/'
  },
  {
    name: 'Vitori Sales-stream',
    preview: vitori,
    description: `Built full-stack features from API development to front-end implementation using Next.js and React. Integrated AWS services like S3 for efficient media handling and improved performance.`,
    tech: "Next.js, React, ReactQuery, Node.js, MaterialUI, AWS S3, REST APIs",
    github: 'private',
    live:'https://vitori.de/'
  },
  {
    name: 'Peak Performance E-commerce',
    preview: peak,
    description: 'Fully refactored an existing Shopify store to significantly improve scalability, code readability, and performance. Restructured the theme architecture, modularized components, and optimized Liquid templates and JavaScript logic.',
    tech: "Shopify Liquid, JavaScript (ES6), SCSS, Swiper.js",
    github: 'private',
    live:'https://www.peak.ag/en/'
  },
  {
    name: 'Atera E-commerce',
    preview: atera,
    description: `Contributed to various improvements across the store including leading the development of a custom multi-tab search feature for car parts, allowing users to filter by manufacturer, model, and make. Also improved overall site performance and SEO through front-end optimizations and best practices.`,
    tech: "Shopify Liquid, JavaScript (ES6), TailwindCSS",
    github: 'private',
    live:'https://www.atera.de/'
  },
  {
    name: 'BMWelektronika',
    preview: bmwPrev,
    description: `Spearheaded the development of the official website for BMWelektronika private business. Collaborated closely with a designer to translate creative concepts into pixel-perfect, high-performance 
    code. Designed and implemented a loading screen, seamlessly integrating fully animated elements into the website`,
    tech:'ReactJS, BootStrap, Framer motion, CSS Modules, React scroll',
    github: 'https://github.com/adoringdo/BMWelektronika.git',
    live: 'https:/bmwelektronika.tech',
  },
  {
    name: 'E-Commerce Website',
    preview: gameStationPrev,
    description:
      'A front-end implementation of an E-commerce website leveraging the up-to-date database of RAWG API.',
    tech: 'ReactJS, Bootstrap, CSS Modules, npm, React Router, RAWG API, Framer Motion, Date-fns',
    github: 'https://github.com/Khaled0P/Game-Station',
    live: 'https://khaled-game-station.netlify.app/',
  },
  // {
  //   name: 'Cars Showcase',
  //   preview: carsShowCasePrev,
  //   description:
  //     'A website to explore cars built with advanced filtering, pagination and NextJS routing',
  //   github: 'https://github.com/Khaled0P/Cars-Ecommerce.git',
  //   live: 'https://cars-ecommerce.vercel.app/',
  // },
  // {
  //   name: 'Chat App',
  //   preview: chatAppPrev,
  //   description:
  //     'Built a chat application which allows users to signup, chat with friends, create group chats and supports media attachments.',
  //   github: 'https://github.com/Khaled0P/chat-app.git',
  //   live: 'https://chat-app-khaled0p.vercel.app/chats',
  // },
  // {
  //   name: 'Resume Builder',
  //   preview: resumeBuilderPrev,
  //   description:
  //     'This web application empowers users to effortlessly create professional and polished resumes tailored to you career aspirations..',
  //   github: 'https://github.com/Khaled0P/Resume-Builder.git',
  //   live: 'https://khaled-cv-application.netlify.app/',
  // },
  // {
  //   name: 'To-Do List',
  //   preview: todoListPrev,
  //   description:
  //     'This web application is designed to streamline your task management and boost your productivity. With the ability to add, delete, and organize tasks, create custom projects, and prioritize your to-dos.',
  //   github: 'https://github.com/Khaled0P/To-Do-List.git',
  //   live: 'https://khaled0p.github.io/To-Do-List/',
  // },
];
