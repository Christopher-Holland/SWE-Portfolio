import { portfolioData } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

/**
 * Application shell.
 * Sections are composed here and fed exclusively from portfolioData so content
 * edits never require hunting through presentational components.
 */
function App() {
  const { theme, toggleTheme } = useTheme();
  const {
    meta,
    nav,
    hero,
    about,
    skills,
    projects,
    experience,
    education,
    contact,
    social,
  } = portfolioData;

  return (
    <div className="bg-app text-app min-h-screen">
      {/* Skip link: first focusable control for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to main content
      </a>

      <Navbar
        items={nav}
        brandName={meta.authorName}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content">
        <HeroSection content={hero} />
        <AboutSection content={about} />
        <SkillsSection categories={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection items={experience} />
        <EducationSection items={education} />
        <ContactSection content={contact} social={social} />
      </main>

      <Footer copyrightName={meta.copyrightName} social={social} />
    </div>
  );
}

export default App;
