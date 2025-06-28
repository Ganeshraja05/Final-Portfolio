import { Project, Skill, Experience, Certification, Education, Achievement } from '../types';
// Removed invalid import statement
export const projects: Project[] = [
  {
    id: '1',
    title: 'VoiceOrder - E-commerce Platform',
    description: 'Modern React-based e-commerce solution with admin dashboard',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js,MongoDB.Its Voice based ordering system allows users to place orders using voice commands, enhancing accessibility and user experience.',
    image: 'https://codup.co/wp-content/uploads/2021/01/What-is-voice-commerce.png',
    technologies: ['React', 'Node.js','MongoDB', 'Voice Recognition'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Voiceorder-e-commerce-.git',
    featured: true
  },
  {
    id: '2',
    title: 'QR based Password Manager',
    description: 'Chrome extension for secure password management with Web Dashoard',
    longDescription: 'A secure password manager that uses QR codes for easy access and management of passwords. The Chrome extension integrates with a web dashboard for seamless user experience.',
    image: 'https://www.technipages.com/wp-content/uploads/2023/05/How-to-add-Chrome-Password-Manager-to-Home-Screen-600x338.jpg',
    technologies: ['Php', 'Javascript', 'Mysql', 'json', 'HTML', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/password_management.git',
    featured: true
  },
  {
    id: '3',
    title: 'Voice-Assisstant-LEXI',
    description: 'Voice assistant application with real-time speech recognition and task management',
    longDescription: 'A voice assistant application that utilizes real-time speech recognition to perform tasks such as setting reminders, searching the web, and managing schedules. The app is built with Web Speech API and integrates with various APIs for enhanced functionality.',
    image: 'https://keymedium.com/wp-content/uploads/2019/01/afab5b62-voice-search-mobile-web-optimization.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Voice-Assisstant-LEXI.git',
    featured: false
  },
  {
    id: '4',
    title: 'Employee-Management-System',
    description: 'Web-based application for managing employee records and performance',
    longDescription: 'A web application for managing employees list With features like adding, updating, and deleting employee records, tracking performance. The application is built with HTML, CSS and Php, ensuring a responsive and user-friendly interface.',
    image: 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Employee-and-Staff-Management2--1-.jpg',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Employee-Management-System.git',
    featured: false
  },
  {
    id: '5',
    title: 'Real-Time-Chat-Application',
    description: 'Real-time chat application with user authentication and group chats',
    longDescription: 'A real-time chat application with user authentication and group chats. The application is built with HTML, CSS and javascript, ensuring a responsive and user-friendly interface.',
    image: 'https://miro.medium.com/v2/resize:fit:700/1*mLE5ZxhtATxrwh20SL2Tlg.png',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Real-Time-Chat-Application.git',
    featured: false
  },
  {
    id: '6',
    title: 'Portfolix',
    description: 'Portfolix is a Next.js application that analyzes user resumes and portfolios using AI to provide suggestions and list statistics.',
    longDescription: 'Portfolix is a Next.js application that analyzes user resumes and portfolios using AI to provide suggestions and list statistics. It helps users improve their professional profiles by offering personalized feedback and insights.',
    image: 'https://www.equisoft.com/assets/images/products/_1200x630_crop_center-center_82_none/Equisoft-Analyze-Advisors-Asset-Allocation-and-Wealth-Analysis-3840x1540.png?mtime=1706563649',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/portfolix.git',
    featured: false
  },
  {
    id: '7',
    title: 'Fake-News-Detection-System',
    description: 'A system that detects fake news using sentance transformer and  algorithms',
    longDescription:' Fake News Detection System is a web application that uses machine learning algorithms to detect fake news articles. It employs sentence transformers for text embedding and classification, providing users with a reliable tool to verify the authenticity of news content.',
    image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iE6gXWv2kPUU/v0/-1x-1.webp',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/portfolix.git',
    featured: false
  },
   {
    id: '8',
    title: 'Typing-Speed-Checker',
    description: 'A web application that measures typing speed and accuracy',
    longDescription:' Typing Speed Checker is a web application that allows users to test their typing speed and accuracy. It provides real-time feedback on performance, helping users improve their typing skills over time.',
    image: 'https://img.freepik.com/vetores-premium/homem-de-negocios-empresario-trabalhando-em-um-computador-portatil-em-seu-local-de-trabalho-de-mesa_530733-2962.jpg',
    technologies: ['React', 'Nodejs', 'Expressjs'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Typing-Speed-Checker.git',
    featured: false
  },
  {
    id: '9',
    title: 'Weather-Webapp-MERN',
    description: 'A web application that provides real-time weather information',
    longDescription:' Weather Webapp is a MERN stack application that provides real-time weather information. It allows users to search for weather conditions in different locations and view forecasts, making it a useful tool for planning daily activities.',
    image: 'https://cosaslearning.com/wp-content/uploads/2022/08/Screenshot-339.png',
    technologies: ['React', 'Nodejs', 'Expressjs'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Typing-Speed-Checker.git',
    featured: false
  },
  {
    id: '10',
    title: 'Text-Summarizer-AI',
    description: 'A web application that summarizes text using AI algorithms',
    longDescription:' Text Summarizer AI is a web application that uses advanced AI algorithms to summarize long texts into concise summaries. It helps users quickly grasp the main points of lengthy articles, research papers, and documents.',
    image: 'https://dkk4qeqny48s0.cloudfront.net/wp-content/uploads/2021/08/sd_blog60.jpg',
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Text-Summarizer-AI.git',
    featured: false
  },
  {
    id: '11',
    title: 'Metamind-Extension',
    description: 'Metamind-extension is a Chrome extension that enhances user productivity by providing AI-driven insights and suggestions while browsing.',
    longDescription:'A tool that extracts metadata (title, description, keywords, OG tags), analyzes performance (load time, FCP, CLS), checks SEO (headings, alt text), supports dark mode, tracks history, exports to JSON, provides accessibility insights, and offers real-time updates.',
    image: 'https://res.cloudinary.com/cloudinary-marketing/images/w_1540,h_847/f_auto,q_auto/v1649730799/Web_Assets/blog/cloudinary_blog_dam_metadata_21986e3716/cloudinary_blog_dam_metadata_21986e3716-jpg?_i=AA',
    technologies: ['HTML', 'CSS', 'Javascript','JSON'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/Ganeshraja05/Metamind-extension.git',
    featured: false
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
  { name: 'Javascript', level: 90, category: 'Frontend', icon: '🌐' },
  { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
  { name: 'Python', level: 85, category: 'Backend', icon: '🐍' },
  { name: 'CSS3', level: 82, category: 'Frontend', icon: '🎨' },
  { name: 'Servicenow', level: 80, category: 'Tools', icon: '🚀' },
  { name: 'Jenkins', level: 78, category: 'Tools', icon: '🔨' },
  { name: 'Git', level: 92, category: 'Tools', icon: '📂' },
  { name: 'HTML5', level: 90, category: 'Frontend', icon: '🌐' },
  { name: 'MongoDB', level: 80, category: 'Database', icon: '📦' },
  {name: 'Java', level: 85, category: 'Backend', icon: '💻' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Selgosys.',
    role: 'Full Stack Developer Intern',
    duration: 'May 2025',
    description: [
      'Developed MERN stack applications using React.js, Node.js, Express.js, and MongoDB.',
      'Created secure RESTful APIs with JWT authentication and role-based access control.',
      'Integrated third-party APIs and collaborated using Git/GitHub.'
    ],
    technologies: ['React', 'MongoDB', 'Node.js', 'express.js', 'JWT', 'Git']
  },
  {
    id: '2',
    company: 'ChainAim',
    role: ' AI Research Intern',
    duration: ' April 2025- May 2025',
    description: [
      'Worked on Eliza OS, an AI agent development operating system designed for modular, context-aware agent deployment and interaction.',
      'Contributed to MCP (Modal Context Protocol), enabling agents to maintain contextual memory and perform dynamic multi-modal reasoning.',
      'AI agents with adaptive behavior, real-time decision-making, and modal context awareness across varied environments.'
    ],
    technologies: ['typescript', 'prompt engineering', 'MCP', 'Git']
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Jenkins - From Zero to Hero',
    issuer: 'LearnKartS',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/CGJOU7NPXKZW',
    logo: '☁️'
  },
  {
    id: '2',
    name: 'Google Project Management',
    issuer: 'Google',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/7GX3WML369QZ',
    logo: '📊'
  },
  {
    id: '3',
    name: 'Scrum Master Certification',
    issuer: 'LearnQuest',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/R1F3XKBYHCR1',
    logo: '🏆'
  },
  {
    id: '4',
    name: 'ChatGPT for Project Management ',
    issuer: 'Vanderbilt University ',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/P9QTYQ71517Q',
    logo: '🤖'
  },
 {
    id: '5',
    name: 'Meta Front-End Developer',
    issuer: 'Meta',
    date: '2024',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/9UFG3EWWVW6E',
    logo: '🖥️'
  },
  {
    id: '7',
    name: 'Google Cloud Platform',
    issuer: 'Google',
    date: '2025',
    verificationUrl: '/src/google certificate.pdf',
    logo: '☁️'
  },
  {
    id: '8',
    name: 'Google Cloud Skill Boost(Gen AI Cloud Jam)',
    issuer: 'Google',
    date: '2025',
    verificationUrl: 'https://www.cloudskillsboost.google/public_profiles/5362d71d-41a8-4e6c-a2c0-f40adbb8506c',
    logo: '🤖'
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Sri Krishna Arts and Science College',
    degree: 'Bachelor of Science',
    field: 'Computer Science With Cognitive Systems',
    duration: '2023 - 2026',
    cgpa: '7.7/10',
    achievements: [ 'Winner of Internal Hackathons (2023 & 2024)']
  },
  {
    id: '2',
    institution: ' Bharathi Matric Hr Sec School',
    degree: 'HSC',
    field: 'Computer Application,Commerce,Economics,Accountancy',
    duration: '2022 - 2023',
    cgpa: '88%',
    achievements: [ 'Centum in computer application and 99% in Accountancy' ]
  }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Winner of Internal Hackathon (2023 & 2024)',
    description: ' Gained hands-on experience in team collaboration and rapid development during inter-collegiate hackathons',
    date: '2023',
    type: 'award'
  },
  {
    id: '2',
    title: ' Awarded 1st place ',
    description: ' a state-level technical fest for presenting innovative ideas and showcasing technical expertise at a national depth.',
    date: '2024',
    type: 'Winning'
  },
  {
    id: '3',
    title: 'Secured 1st place',
    description: ' APP-ATHON event at INTESA25, hosted by Sri Ramakrishna College of Arts & Science for showcasing innovative mobile applications.(Qoute generator)',
    date: '2025',
    type: 'Winning'
  },
  {
    id: '4',
    title: 'Participation ',
    description: 'Presented a research paper at the National Level Technical Meet hosted by KPR College, representing Sri Krishna Arts and Science College as a II Year Cognitive Systems student.',
    date: '2025',
    type: 'Participation',
    url: 'https://www.linkedin.com/posts/ganeshraja2005_certificate-activity-7312418337794183169-fkiN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERG-7YBn4OEaMmLMYyRpeEXMzvrgwiEWOI'
  }
];