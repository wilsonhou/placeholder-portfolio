import { nanoid } from 'nanoid';
import Resume from '../documents/Resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Wilson Hou | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "👋🏻 Hi, I'm",
  name: 'Wilson Hou',
  subtitle: "I'm a full-time student, tinkerer, and frontend developer.",
  cta: 'Get to know me better',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey! I'm Wilson, a frontend developer passionate about empowering startups to change the world. I'm a strong believer of learning by doing, and built my skillset through several technical and non-technical projects in a variety of industries.",
  paragraphTwo:
    "I've worked on several startups in my free time as well, including (but not limited to) an AI sorting bin, a mask-distribution company and a freelance web development agency.",
  paragraphThree: 'Feel free to grab my resume down below and get in touch!',
  resume: Resume,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'symbyx.jpg',
    title: 'SYMBYX Biome Shopify Store (In Progress)',
    info:
      'This is a contracted web development project. I iteratively designed the frontend through Figma and chose to implement it in Gatsby. Products on the backend are sourced through the Shopify API.',
    info2: 'Tech Stack: GatsbyJS, Shopify',
    url: 'https://angry-allen-9dfa50.netlify.app/',
    // repo: 'https://github.com/wilsonhou/symbyx-biome-site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'energy-estate.jpg',
    title: 'Energy Estate Site (In Progress)',
    info:
      'This is a contracted web development project. I implemented the site in Gatsby and connected it to a headless CMS (Prismic). This allowed the client to generate blog posts and site pages without code.',
    info2: 'Tech Stack: GatsbyJS, Framer Motion, Prismic',
    url: 'https://energyestate.netlify.app/',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sort Visualiser',
    info:
      'In the process of learning data structures and algorithms, I built a visualiser in Vanilla JS to help understand sorting algorithms better.',
    info2: 'Tech Stack: Vanilla Javascript, SCSS',
    url: 'https://wilsonhou.github.io/sortVisualiser',
    repo: 'https://github.com/wilsonhou/sortVisualiser', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'maze.jpg',
    title: 'Canvas Maze Game',
    info:
      'One of my first projects built while first learning Javascript. Involves a simple recursive algorithm to generate the maze, then use of the MatterJS library to render shapes and objects.',
    info2: 'Tech Stack: MatterJS',
    url: 'https://wilsonhou.github.io/maze-game/',
    repo: 'https://github.com/wilsonhou/maze-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to get in touch?',
  btn: "Let's Chat",
  email: 'wilshou@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/itswilsonhou',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wilson-hou-665432164/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/wilsonhou',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
