import type { PortfolioData } from '../types/portfolio';

/**
 * Centralized portfolio content.
 *
 * Replace remaining TODO values with your real links, contact details,
 * screenshots, and resume path before deploying.
 */
export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: 'Christopher Holland | Software Engineer',
    siteDescription:
      'Portfolio of Christopher Holland, a software engineer and automation developer building practical web applications, internal tools, and AutoCAD workflow automation.',
    authorName: 'Christopher Holland',
    copyrightName: 'Christopher Holland',
  },

  nav: [
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' },
  ],

  hero: {
    greeting: 'Hello — I build software that solves real problems.',
    name: 'Christopher Holland',
    title: 'Software Engineer & Automation Developer',
    tagline:
      'I build full-stack applications, internal tools, and workflow automation with a focus on practical design, maintainable code, and measurable improvements. Currently seeking full-time software engineering and automation opportunities.',
    primaryCta: { label: 'View projects', href: '#projects' },
    secondaryCta: {
      label: 'Download resume',
      href: '/TODO-christopher-holland-resume.pdf',
    },
    availability: 'Open to full-time opportunities — Kentucky / Remote',
  },

  about: {
    heading: 'Professional summary',
    paragraphs: [
      'I am a software engineer and senior CAD technician with more than seven years of professional experience supporting utility design workflows. My background combines software development, mechanical design, AutoCAD, and hands-on process improvement.',
      'I enjoy identifying repetitive or inefficient work and turning it into reliable tools. In my current role, I have developed AutoLISP automation that reduces manual drafting steps, improves consistency, and gives designers more time to focus on higher-value work.',
      'I am now pursuing a full-time software engineering or automation role where I can contribute across the development lifecycle, continue solving practical business problems, and grow alongside a collaborative engineering team.',
    ],
    highlights: [
      'Built AutoCAD automation tools for real production workflows',
      'Develops full-stack applications with React, Next.js, TypeScript, and Node.js',
      'Comfortable translating operational problems into maintainable software',
      'Strong technical communication, ownership, and attention to detail',
    ],
    location: 'Kentucky / Remote',
    yearsExperience: '7+ years of technical experience',
  },

  skills: [
    {
      title: 'Languages',
      description:
        'Languages used across web development, automation, coursework, and personal projects.',
      skills: [
        { name: 'TypeScript', level: 86 },
        { name: 'JavaScript', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'SQL', level: 76 },
        { name: 'C++', level: 68 },
        { name: 'AutoLISP', level: 82 },
      ],
    },
    {
      title: 'Frontend',
      description:
        'Responsive interfaces, reusable components, and accessible user experiences.',
      skills: [
        { name: 'React', level: 87 },
        { name: 'Next.js', level: 82 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'Tailwind CSS', level: 86 },
      ],
    },
    {
      title: 'Backend & Data',
      description:
        'Application logic, APIs, authentication, and persistent data.',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 78 },
        { name: 'PostgreSQL', level: 74 },
        { name: 'Prisma', level: 76 },
        { name: 'Supabase', level: 78 },
        { name: 'Firebase', level: 72 },
      ],
    },
    {
      title: 'Tooling & Practices',
      description:
        'Tools and practices used to build, test, version, and deliver software.',
      skills: [
        { name: 'Git & GitHub', level: 86 },
        { name: 'Responsive Design', level: 88 },
        { name: 'AutoCAD Automation', level: 90 },
        { name: 'CI/CD', level: 66 },
        { name: 'Agile Development', level: 78 },
      ],
    },
  ],

  projects: [
    {
      id: 'autocad-automation-suite',
      title: 'AutoCAD Automation Suite',
      shortDescription:
        'A collection of AutoLISP tools that automate repetitive drafting and utility-design workflows.',
      longSummary:
        'Built to solve real production bottlenecks in utility drafting, this suite automates block placement, text creation, layer processing, roadway geometry handling, rotations, duplicate cleanup, and other repetitive AutoCAD tasks. The project demonstrates workflow analysis, modular automation design, iterative testing, debugging, and the application of software development techniques to a professional CAD environment.',
      technologies: [
        'AutoLISP',
        'AutoCAD',
        'CAD Automation',
        'DXF',
        'Workflow Design',
      ],
      imageSrc: 'After_DXF.png',
      imageAlt:
        'AutoCAD utility drawing demonstrating custom drafting automation tools',
      githubUrl: 'https://github.com/Christopher-Holland/AutoCAD-Automation',
      featured: true,
      inProgress: false,
    },
    {
      id: 'deckhaven',
      title: 'DeckHaven',
      shortDescription:
        'A full-stack platform for organizing trading card game decks, cards, and collections.',
      longSummary:
        'DeckHaven is a responsive portfolio application built to help trading card game players organize decks and collection data in one place. The project demonstrates full-stack development, relational data modeling, reusable React components, responsive layouts, and iterative product design. \n\nThe current version only supports Magic: The Gathering, but additional card games will be added in the future.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'Supabase',
      ],
      imageSrc: 'DeckHaven-Dashboard.png',
      imageAlt: 'DeckHaven interface showing trading card game deck and collection management tools',
      githubUrl: 'https://github.com/Christopher-Holland/DeckHaven',
      liveUrl: 'https://deck-haven.vercel.app/',
      featured: true,
    },
    {
      id: 'utilityops-workload-tracker',
      title: 'UtilityOps Workload Tracker',
      shortDescription:
        'An internal operations dashboard for tracking projects, assignments, workload, deadlines, and team capacity.',
      longSummary:
        'UtilityOps Workload Tracker is a production-inspired management platform designed around the needs of utility design teams. It brings project status, employee workload, scheduling, deadlines, and operational reporting into one interface. The project demonstrates dashboard architecture, data visualization, component-driven design, and business-focused product development.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'PostgreSQL',
      ],
      imageSrc: 'Workload-dashboard.png',
      imageAlt:
        'UtilityOps dashboard showing project status, team workload, and operational metrics',
      githubUrl: 'https://github.com/Christopher-Holland/workload-tracker',
      liveUrl: 'TODO_LIVE_URL_UTILITYOPS',
      featured: true,
      inProgress: true,
    },  
    /*{
      id: 'drag-tree',
      title: 'Drag Racing Tree Simulator',
      shortDescription:
        'An interactive drag-racing reaction-time game with staging, countdown, green-light, and red-light logic.',
      longSummary:
        'The Drag Racing Tree Simulator recreates the timing and pressure of a drag-racing starting tree in the browser. It uses carefully managed timers and application state to handle pre-stage, stage, amber countdowns, reaction times, and early-launch red lights. The project combines a personal interest in drag racing with focused frontend engineering.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'Web APIs'],
      imageSrc: 'DragTree.png',
      imageAlt:
        'Drag Racing Tree Simulator showing staged lights and reaction-time controls',
      githubUrl: 'https://github.com/Christopher-Holland/drag-tree',
      liveUrl: 'TODO_LIVE_URL_DRAG_TREE',
      featured: true,
    }*/
  ],

  experience: [
    {
      id: 'exp-entrust',
      role: 'Senior CAD Technician',
      company: 'ENTRUST Solutions Group',
      location: 'Remote',
      startDate: 'Aug 2019',
      endDate: 'Present',
      summary:
        'Support underground natural-gas design and drafting workflows while developing automation that improves speed, consistency, and usability.',
      achievements: [
        'Developed AutoLISP tools that automate repetitive drafting tasks including block placement, text generation, rotations, layer processing, and drawing cleanup.',
        'Translate engineering information, GIS data, DXF files, markups, and field documentation into accurate construction drawings and as-built records.',
        'Collaborate with designers, engineers, managers, and end users to identify workflow problems, test solutions, and refine production tools.',
        'Recognized as Employee of the Month for performance, reliability, and contributions to team operations.',
      ],
      technologies: [
        'AutoCAD',
        'AutoLISP',
        'DXF',
        'GIS Data',
        'Utility Design',
        'Process Automation',
      ],
    },
    {
      id: 'exp-aerotek',
      role: 'CAD Technician',
      company: 'Aerotek — Contract Assignment',
      location: 'Kentucky / Remote',
      startDate: 'Feb 2019',
      endDate: 'Aug 2019',
      summary:
        'Produced and revised utility design drawings while learning client standards, drafting workflows, and quality-control requirements.',
      achievements: [
        'Created and updated underground utility drawings using AutoCAD and client-provided design information.',
        'Maintained drawing accuracy while working within established CAD standards and production deadlines.',
        'Transitioned from contract status into a permanent role based on performance and reliability.',
      ],
      technologies: [
        'AutoCAD',
        'Technical Drafting',
        'Utility Design',
        'Quality Control',
      ],
    },
  ],

  education: [
    {
      id: 'edu-bachelors',
      degree:
        'Bachelor of Science in Computer Science — Software Engineering',
      school: 'Southern New Hampshire University',
      location: 'Online',
      startDate: '2023',
      endDate: '2025',
      details:
        'Completed a software engineering-focused computer science degree with a 3.97 GPA while working full-time.',
      highlights: [
        'Coursework included software engineering, algorithms, databases, application development, testing, and secure coding',
        'Built applications using JavaScript, TypeScript, Python, C++, SQL, and modern web frameworks',
        'Graduated with a 3.97 GPA',
      ],
    },
    {
      id: 'edu-mechanical-design',
      degree: 'Associate of Arts in Mechanical Design',
      school: 'Maysville Community and Technical College',
      location: 'Kentucky',
      startDate: '2020',
      endDate: '2020',
      details:
        'Completed an applied degree focused on technical drafting, mechanical design, 3D modeling, and CAD workflows.',
      highlights: [
        'Graduated with a 4.0 GPA',
        'Completed technical training in AutoCAD and 3D modeling',
        'Developed a strong foundation in design documentation and manufacturing-oriented problem solving',
      ],
    },
    {
      id: 'edu-general-studies',
      degree: 'Associate of Science in General Studies',
      school: 'Maysville Community and Technical College',
      location: 'Kentucky',
      startDate: '2012',
      endDate: '2015',
      details:
        'Completed a broad undergraduate program that provided a foundation for later technical and software-focused education.',
      highlights: [
        'Graduated with a 3.5 GPA',
        'Completed foundational mathematics, science, communication, and general education coursework',
      ],
    },
  ],

  contact: {
    heading: 'Let’s build something useful',
    description:
      'I am open to full-time software engineering, automation, and development opportunities. Email is the best way to reach me.',
    email: 'christophermholland004@gmail.com',
    location: 'Kentucky — Open to remote opportunities',
    resumeUrl: '/TODO-christopher-holland-resume.pdf',
    formNote:
      'Use the email link to contact me directly. A live contact form may be added in a future update.',
  },

  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/christopher-holland',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cmholland',
      icon: 'linkedin',
    },
    
    {
      label: 'Email',
      href: 'mailto:christophermholland004@gmail.com',
      icon: 'email',
    },
  ],
};