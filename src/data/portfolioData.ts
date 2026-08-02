import type { PortfolioData } from '../types/portfolio';

/**
 * Centralized portfolio content.
 *
 * Replace every [PLACEHOLDER] value with your real information before deploying.
 * Components import from this file only — edit here, not in section components.
 */
export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: '[PLACEHOLDER: Full Name] | Software Engineer',
    siteDescription:
      'Portfolio of [PLACEHOLDER: Full Name], a software engineer specializing in [PLACEHOLDER: specialty area].',
    authorName: '[PLACEHOLDER: Full Name]',
    copyrightName: '[PLACEHOLDER: Full Name]',
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
    greeting: 'Hello — I build software that ships.',
    name: '[PLACEHOLDER: Full Name]',
    title: '[PLACEHOLDER: Professional Title, e.g. Full-Stack Software Engineer]',
    tagline:
      'I design and deliver reliable web applications with clear architecture, thoughtful UX, and measurable impact. Currently open to [PLACEHOLDER: role type] opportunities.',
    primaryCta: { label: 'View projects', href: '#projects' },
    secondaryCta: { label: 'Download resume', href: '#resume-placeholder' },
    availability: '[PLACEHOLDER: Available for new opportunities — City, ST]',
  },

  about: {
    heading: 'Professional summary',
    paragraphs: [
      '[PLACEHOLDER: Opening biography paragraph. Summarize your background in 2–3 sentences — years of experience, primary stack, and the kinds of problems you enjoy solving.]',
      '[PLACEHOLDER: Second paragraph. Mention collaboration style, ownership habits, and a concrete example of impact such as improving performance, shipping a product feature, or mentoring teammates.]',
      '[PLACEHOLDER: Closing paragraph. State what you are looking for next and what environments help you do your best work.]',
    ],
    highlights: [
      '[PLACEHOLDER: Highlight — e.g. Shipped production systems used by thousands of users]',
      '[PLACEHOLDER: Highlight — e.g. Strong focus on testing, observability, and maintainability]',
      '[PLACEHOLDER: Highlight — e.g. Comfortable owning features end-to-end from design to deploy]',
      '[PLACEHOLDER: Highlight — e.g. Clear written communication across engineering and product]',
    ],
    location: '[PLACEHOLDER: City, State / Remote]',
    yearsExperience: '[PLACEHOLDER: X+ years]',
  },

  skills: [
    {
      title: 'Languages',
      description: 'Day-to-day languages used to ship product features.',
      skills: [
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 78 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      title: 'Frontend',
      description: 'Interfaces, accessibility, and client-side architecture.',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 82 },
        { name: 'HTML & CSS', level: 94 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend & Data',
      description: 'APIs, services, and persistence layers.',
      skills: [
        { name: 'Node.js', level: 86 },
        { name: 'REST & GraphQL', level: 84 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      title: 'Tooling & Practices',
      description: 'Delivery, quality, and collaboration habits.',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'CI/CD', level: 78 },
        { name: 'Testing (Jest / Playwright)', level: 76 },
        { name: 'Docker', level: 72 },
      ],
    },
  ],

  projects: [
    {
      id: 'project-atlas',
      title: '[PLACEHOLDER: Project Name — Atlas Dashboard]',
      shortDescription:
        'A real-time operations dashboard for monitoring distributed service health.',
      longSummary:
        '[PLACEHOLDER: Longer project summary. Describe the problem, your role, technical approach, and outcome. Example: Designed a React + Node dashboard that reduced incident triage time by surfacing latency and error budgets in one place.]',
      technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'PostgreSQL'],
      imageSrc: '/project-atlas.svg',
      imageAlt:
        'Placeholder screenshot of the Atlas Dashboard project showing a dark analytics interface',
      githubUrl: 'https://github.com/placeholder-username/atlas-dashboard',
      liveUrl: 'https://example.com/atlas-dashboard',
      featured: true,
    },
    {
      id: 'project-harbor',
      title: '[PLACEHOLDER: Project Name — Harbor CMS]',
      shortDescription:
        'A content platform with role-based publishing workflows and preview environments.',
      longSummary:
        '[PLACEHOLDER: Longer project summary. Cover architecture decisions such as draft/publish flows, access control, and how preview deployments were integrated into the editorial process.]',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      imageSrc: '/project-harbor.svg',
      imageAlt:
        'Placeholder screenshot of the Harbor CMS project showing an editorial content layout',
      githubUrl: 'https://github.com/placeholder-username/harbor-cms',
      liveUrl: 'https://example.com/harbor-cms',
      featured: true,
    },
    {
      id: 'project-signal',
      title: '[PLACEHOLDER: Project Name — Signal CLI]',
      shortDescription:
        'A developer CLI that scaffolds observability hooks into existing Node services.',
      longSummary:
        '[PLACEHOLDER: Longer project summary. Explain why the CLI exists, what boilerplate it removes, and how teams adopted it for consistent logging and metrics instrumentation.]',
      technologies: ['Node.js', 'TypeScript', 'Commander', 'OpenTelemetry'],
      imageSrc: '/project-signal.svg',
      imageAlt:
        'Placeholder screenshot of the Signal CLI project showing a terminal-inspired interface',
      githubUrl: 'https://github.com/placeholder-username/signal-cli',
      liveUrl: 'https://example.com/signal-cli',
      featured: true,
    },
    {
      id: 'project-northwind',
      title: '[PLACEHOLDER: Project Name — Northwind Maps]',
      shortDescription:
        'An interactive mapping tool for visualizing field service coverage and routes.',
      longSummary:
        '[PLACEHOLDER: Longer project summary. Describe map rendering trade-offs, data ingestion, and performance work needed to keep interactions smooth on mobile devices.]',
      technologies: ['React', 'Mapbox GL', 'TypeScript', 'Express', 'MongoDB'],
      imageSrc: '/project-northwind.svg',
      imageAlt:
        'Placeholder screenshot of the Northwind Maps project showing a map-centric product UI',
      githubUrl: 'https://github.com/placeholder-username/northwind-maps',
      liveUrl: 'https://example.com/northwind-maps',
      featured: true,
    },
  ],

  experience: [
    {
      id: 'exp-1',
      role: '[PLACEHOLDER: Job Title — Senior Software Engineer]',
      company: '[PLACEHOLDER: Employer Name]',
      location: '[PLACEHOLDER: City, ST / Remote]',
      startDate: '[PLACEHOLDER: Mon YYYY]',
      endDate: 'Present',
      summary:
        '[PLACEHOLDER: One-sentence role summary covering team scope and product domain.]',
      achievements: [
        '[PLACEHOLDER: Achievement with measurable outcome, e.g. reduced API p95 latency by 35%.]',
        '[PLACEHOLDER: Achievement about ownership, e.g. led migration of legacy module to TypeScript.]',
        '[PLACEHOLDER: Achievement about collaboration, e.g. partnered with design to ship accessible UI.]',
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      id: 'exp-2',
      role: '[PLACEHOLDER: Job Title — Software Engineer]',
      company: '[PLACEHOLDER: Previous Employer Name]',
      location: '[PLACEHOLDER: City, ST]',
      startDate: '[PLACEHOLDER: Mon YYYY]',
      endDate: '[PLACEHOLDER: Mon YYYY]',
      summary:
        '[PLACEHOLDER: Role summary describing product area and engineering responsibilities.]',
      achievements: [
        '[PLACEHOLDER: Shipped feature X that improved conversion / retention / reliability.]',
        '[PLACEHOLDER: Improved test coverage or CI pipeline reliability for the squad.]',
        '[PLACEHOLDER: Mentored interns or improved onboarding documentation.]',
      ],
      technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Docker'],
    },
    {
      id: 'exp-3',
      role: '[PLACEHOLDER: Job Title — Junior / Associate Software Engineer]',
      company: '[PLACEHOLDER: Earlier Employer Name]',
      location: '[PLACEHOLDER: City, ST]',
      startDate: '[PLACEHOLDER: Mon YYYY]',
      endDate: '[PLACEHOLDER: Mon YYYY]',
      summary:
        '[PLACEHOLDER: Early-career role summary focusing on growth and foundational contributions.]',
      achievements: [
        '[PLACEHOLDER: Delivered bug fixes and small features across the product surface.]',
        '[PLACEHOLDER: Learned production debugging, code review, and agile delivery practices.]',
      ],
      technologies: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      degree: '[PLACEHOLDER: Degree — B.S. Computer Science]',
      school: '[PLACEHOLDER: University Name]',
      location: '[PLACEHOLDER: City, ST]',
      startDate: '[PLACEHOLDER: YYYY]',
      endDate: '[PLACEHOLDER: YYYY]',
      details:
        '[PLACEHOLDER: Brief note about focus area, honors, or relevant coursework.]',
      highlights: [
        '[PLACEHOLDER: Relevant coursework — Algorithms, Distributed Systems, HCI]',
        '[PLACEHOLDER: Capstone / thesis title]',
        '[PLACEHOLDER: Academic honor or leadership role]',
      ],
    },
    {
      id: 'edu-2',
      degree: '[PLACEHOLDER: Certificate — Full-Stack Web Development]',
      school: '[PLACEHOLDER: Bootcamp or Platform Name]',
      location: 'Online',
      startDate: '[PLACEHOLDER: YYYY]',
      endDate: '[PLACEHOLDER: YYYY]',
      details:
        '[PLACEHOLDER: Optional additional education or professional certificate details.]',
      highlights: [
        '[PLACEHOLDER: Built X full-stack applications as part of the program]',
        '[PLACEHOLDER: Focus areas — React, Node, databases, deployment]',
      ],
    },
  ],

  contact: {
    heading: 'Let’s build something useful',
    description:
      'Open to [PLACEHOLDER: full-time / contract / remote] roles. Prefer email for first contact — I typically respond within two business days.',
    email: 'hello@placeholder-email.com',
    phone: '[PLACEHOLDER: +1 (555) 000-0000]',
    location: '[PLACEHOLDER: City, State — Open to remote]',
    resumeUrl: '#resume-placeholder',
    formNote:
      'This page does not submit a live form. Use the email link or update the contact section to wire your preferred form provider.',
  },

  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/placeholder-username',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/placeholder-profile',
      icon: 'linkedin',
    },
    {
      label: 'Portfolio site',
      href: 'https://example.com',
      icon: 'globe',
    },
    {
      label: 'Email',
      href: 'mailto:hello@placeholder-email.com',
      icon: 'email',
    },
  ],
};
