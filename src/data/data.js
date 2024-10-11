import chatRoomImg from '../assets/project_images/chat_room.png'
import movieManiacImg from '../assets/project_images/movie_maniac.png'
import passwordGenIcon from '../assets/project_images/password_generator.png'
import jobsApiIcon from '../assets/project_images/jobs_api.png'
import portfolioIcon from '../assets/project_images/portfolio_site.png'
import dummy_ecomm from '../assets/project_images/dummy-ecomm-site.png'

export const timelines = [
  {
    year: '2021-24',
    title: 'Project Engineer at Wipro',
    text: 'I helped in developing and maintaining enterprise IT solution for international clients. Our tech stack consisted of JavaScript, Python, Documentum, Node.js and CMS (Staffbase).',
  },
  {
    year: '2020',
    title: "Bachelor's Degree in Computer Science",
    text: "Completed my Bachelor's Degree in Computer Science and Engineering with honors from Dr. APJ Abdul Kalam Technical University.",
  },
]

export const projects = [
  {
    demoLink: 'https://dummy-ecomm.netlify.app/',
    projectName: 'React E-Commerse Site',
    projectImg: dummy_ecomm,
    techStackUsed: ['React', 'TailwindCSS'],
    githubLink: 'https://github.com/shann592/react-e-commerce-site',
  },

  {
    demoLink: 'https://shann-movie-maniac.netlify.app',
    projectName: 'Movie Maniac',
    projectImg: movieManiacImg,
    techStackUsed: ['TMDB API', 'React', 'TailwindCSS'],
    githubLink: 'https://github.com/shann592/movie-maniac',
  },
  {
    demoLink: 'https://shann-chat-room.netlify.app',
    projectName: 'Chat Room',
    projectImg: chatRoomImg,
    techStackUsed: ['Firebase', 'React', 'TailwindCSS'],
    githubLink: 'https://github.com/shann592/chat-room',
  },
  {
    demoLink: 'https://passcode-creator.netlify.app',
    projectName: 'Password Generator',
    projectImg: passwordGenIcon,
    techStackUsed: ['React', 'TailwindCSS'],
    githubLink: 'https://github.com/shann592/password_generator',
  },
  {
    demoLink: 'https://jobs-api-usoi.onrender.com/api-docs',
    projectName: 'Jobs API',
    projectImg: jobsApiIcon,
    techStackUsed: ['Express', 'MongoDB', 'SwaggerUI'],
    githubLink: 'https://github.com/shann592/jobs-api',
  },
  {
    demoLink: 'https://shantanu-dev.netlify.app/',
    projectName: 'Portfolio',
    projectImg: portfolioIcon,
    techStackUsed: ['React', 'TailwindCSS', 'DaisyUI'],
    githubLink: 'https://github.com/shann592/portfolio-site',
  },
]
