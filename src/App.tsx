// src/App.tsx
import { useEffect } from 'react';
import { LangContext, useLangState } from './hooks/useLang';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { projects } from './data/projects';
import { setProjectUrl } from './utils/projectUrl';

function App() {
  const langState = useLangState();

  useEffect(() => {
    const projectIds = new Set(projects.map((project) => project.id));
    const params = new URLSearchParams(window.location.search);
    const queryProject = params.get('project');
    const hashProject = window.location.hash.replace(/^#/, '');
    const projectId =
      queryProject && projectIds.has(queryProject)
        ? queryProject
        : projectIds.has(hashProject)
          ? hashProject
          : null;

    if (!projectId) {
      return;
    }

    if (!queryProject && projectIds.has(hashProject)) {
      setProjectUrl(hashProject);
    }

    window.requestAnimationFrame(() => {
      document.getElementById(projectId)?.scrollIntoView({ block: 'start' });
    });
  }, []);

  return (
    <LangContext.Provider value={langState}>
      <div className="min-h-screen bg-cream">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
