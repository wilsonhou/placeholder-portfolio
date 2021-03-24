import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wilson Hou | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Wilson Hou',
  subtitle: "I'm a full-time student, tinkerer, and frontend developer.",
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://cloud.pdfelement.io/sign/documentDetail/ebaf6fe4648a2a2fd20e9c514062603d/yourDoc', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'symbyx.jpg',
    title: 'SYMBYX Biome Shopify Store',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'energy-estate.jpg',
    title: 'Energy Estate Site',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sort Visualiser',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'maze.jpg',
    title: 'Canvas Maze Game',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
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
