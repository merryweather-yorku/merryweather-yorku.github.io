import { useState } from 'react';
import './App.css';
import Navbar from './navbar.tsx';
import ContactForm from './ContactForm.tsx';
import LandingPage from './pages/LandingPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import { projectsData } from './data/projects.ts';

function App() {
  const [page, setPage] = useState(0);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSetPage = (p: number) => {
    setPage(p);
    setSelectedProjectId(null); // Clear selected project when navigating via nav
  };

  const selectedProject = selectedProjectId ? projectsData.find(p => p.id === selectedProjectId) : null;

  return (
    <div className="app-container">
      <Navbar setPage={handleSetPage} hideLinks={!!selectedProjectId} />
      <div className="page-content">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={() => setSelectedProjectId(null)} />
        ) : (
          <div key={page} className="page-transition">
            {page === 0 && <LandingPage onExplore={() => handleSetPage(2)} />}
            {page === 1 && <AboutPage />}
            {page === 2 && <ProjectsPage onSelectProject={setSelectedProjectId} />}
            {page === 3 && <JoinPage />}
          </div>
        )}
      </div>
    </div>
  );
}

function JoinPage() {
  return (
    <div className="fast-fade-in">
      <h1>Join Our Team</h1>
      <p>We're always looking for passionate student engineers.</p>

      <p>
        Contact us via <a href="https://discord.gg/tRP87GKqBE">Discord</a> or send a message below.
      </p>
      
      <ContactForm />
    </div>
  );
}

export default App;
