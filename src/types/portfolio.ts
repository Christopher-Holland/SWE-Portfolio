/**
 * Shared TypeScript contracts for portfolio content.
 * Keeping content shapes here lets components stay presentation-focused
 * while `portfolioData.ts` remains the single editable source of truth.
 */

export interface SocialLink {
  /** Display label used in the UI and accessible names */
  label: string;
  /** Absolute URL — use `#` only for unfinished placeholders */
  href: string;
  /** Optional icon key mapped in the SocialLinks component */
  icon: 'github' | 'linkedin' | 'twitter' | 'email' | 'globe';
}

export interface NavItem {
  label: string;
  /** In-page section id without the `#` prefix */
  href: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  availability: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  highlights: string[];
  location: string;
  yearsExperience: string;
}

export interface SkillItem {
  name: string;
  /** Relative proficiency used only for visual bars (0–100) */
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longSummary: string;
  technologies: string[];
  /**
   * Path to a screenshot under /public or src/assets.
   * Placeholder SVG visuals ship with the project so demos never 404.
   */
  imageSrc: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
  highlights: string[];
}

export interface ContactContent {
  heading: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  formNote: string;
}

export interface SiteMeta {
  siteTitle: string;
  siteDescription: string;
  authorName: string;
  copyrightName: string;
}

export interface PortfolioData {
  meta: SiteMeta;
  nav: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  contact: ContactContent;
  social: SocialLink[];
}
