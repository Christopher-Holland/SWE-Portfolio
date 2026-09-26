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
      href: '/Christopher_Holland_Resume.pdf',
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
      'I build AutoCAD automation that takes repeated steps out of production drafting',
      'I build full-stack applications with React, Next.js, TypeScript, and Node.js',
      'I turn operational problems into software other people can maintain',
      'I communicate clearly, own the work, and watch the details',
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
        { name: 'TypeScript', proficiency: 'daily' },
        { name: 'JavaScript', proficiency: 'daily' },
        { name: 'AutoLISP', proficiency: 'daily' },
        { name: 'Python', proficiency: 'comfortable' },
        { name: 'SQL', proficiency: 'comfortable' },
        { name: 'C++', proficiency: 'learning' },
      ],
    },
    {
      title: 'Frontend',
      description:
        'Responsive interfaces, reusable components, and accessible user experiences.',
      skills: [
        { name: 'React', proficiency: 'daily' },
        { name: 'HTML & CSS', proficiency: 'daily' },
        { name: 'Tailwind CSS', proficiency: 'daily' },
        { name: 'Next.js', proficiency: 'comfortable' },
      ],
    },
    {
      title: 'Backend & Data',
      description:
        'Application logic, APIs, authentication, and persistent data.',
      skills: [
        { name: 'Node.js', proficiency: 'comfortable' },
        { name: 'REST APIs', proficiency: 'comfortable' },
        { name: 'PostgreSQL', proficiency: 'comfortable' },
        { name: 'Prisma', proficiency: 'comfortable' },
        { name: 'Supabase', proficiency: 'comfortable' },
        { name: 'Firebase', proficiency: 'comfortable' },
      ],
    },
    {
      title: 'Tooling & Practices',
      description:
        'Tools and practices used to build, test, version, and deliver software.',
      skills: [
        { name: 'Git & GitHub', proficiency: 'daily' },
        { name: 'Responsive Design', proficiency: 'daily' },
        { name: 'AutoCAD Automation', proficiency: 'daily' },
        { name: 'Agile Development', proficiency: 'comfortable' },
        { name: 'CI/CD', proficiency: 'learning' },
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
        'Built to solve production bottlenecks in utility drafting, this AutoLISP suite automates block placement, text creation, layer processing, roadway geometry handling, rotations, duplicate cleanup, and other repetitive AutoCAD tasks. In one multi-step workflow, the automation reduced approximately three hours of manual drafting work to roughly five minutes. The suite is designed around modular tools that can be tested, refined, and expanded as production requirements evolve.',
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
        'A full-stack platform for organizing Magic: The Gathering decks, cards, and collections.',
      longSummary:
        'DeckHaven is a responsive portfolio application built to help Magic: The Gathering players organize decks and collection data in one place. The project demonstrates full-stack development, relational data modeling, reusable React components, responsive layouts, and iterative product design. ',
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
        'Write AutoLISP tools for block placement, text generation, rotations, layer processing, and drawing cleanup so designers skip those repeated manual steps.',
        'Turn GIS data, DXF files, markups, and field notes into construction drawings and as-builts the team can release with less rework.',
        'Work with designers, engineers, and end users to find workflow problems, test fixes, and keep the tools in daily production use.',
        'Named Employee of the Month for accuracy, reliability, and automation that made production drawings more consistent.',
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
        'Revised underground utility drawings in AutoCAD against client standards before they went to construction.',
        'Kept drawings accurate to CAD standards while still hitting production deadlines.',
        'Moved from contract to a permanent role on the strength of accuracy and follow-through.',
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
        'Completed a software engineering-focused computer science degree while working full-time.',
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
    email: 'christophermholland0045@gmail.com',
    location: 'Kentucky — Open to remote opportunities',
    resumeUrl: '/Christopher_Holland_Resume.pdf',
    formNote:
      'Use the email link to contact me directly.',
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
      href: 'mailto:christophermholland0045@gmail.com',
      icon: 'email',
    },
  ],
};