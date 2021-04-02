import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rafeeu Adebara',
  subtitle: 'A self-Taught front end developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'Building easy to use, user friendly websites and apllications, has been an amazing experice. Being a self-taught developer has been a difficult journey and humbling experience because it allowed me to gain skills such as html, css and javascript(working with APIs).',
  paragraphTwo:
    'I love learning new tecnologies and looking for better way to improve my skills, that is why i had the pleasure to learn sass and react which allows me to use state and props to create real web applications.',
  paragraphThree:
    'Web devlopment is a passion of mine, the industry fascinates me with its level of growth and innovation which is why i am always researching new tecnologies to improve myself as a frontend developer.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'explorate.png',
    title: 'Explorate',
    info:
      'Explorate is a react website for tourism, using react router and hooks. I designed it to be mobile responsive and great animations for smooth effect',
    info2: '',
    url: 'https://explorate.netlify.app/',
    repo: 'https://github.com/rafeeuadebara/explore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'Amazon products',
    info:
      'Amazon products is a react online directory site that uses API data to fetch prices and rating of products for users.',
    info2:
      'For this site, i used axios to fetch my data, used state to re-render component after getting data from the API and users input  while using props to pass data through components.',
    url: 'https://amazonpay.netlify.app/',
    repo: 'https://github.com/rafeeuadebara/amazon__products', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'adebeauty.png',
    title: 'Adebeauty',
    info: 'A makeup commerce website built using Html, css and vanilla javascript',
    info2:
      'I used vanilla javascript to give visual animations for clicking and hovering, also, made sure it was visually pleasing with the image choice picked',
    url: 'https://adebeauty.netlify.app/',
    repo: 'https://github.com/rafeeuadebara/Adebeauty', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather',
    info: 'A weather app built with vanilla javascript',
    info2:
      'For this web app, i fetched api data using vanilla javscrpit to create a responsive weather application',
    url: 'https://weather-rafeeu.netlify.app/',
    repo: 'https://github.com/rafeeuadebara/weather', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};
// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rafeeu-adebara-658a6420a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rafeeuadebara',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
