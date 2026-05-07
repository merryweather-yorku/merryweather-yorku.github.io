import { useState } from 'react';
import './App.css';
import Navbar from './navbar.tsx';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="app-container">
      <Navbar setPage={setPage} />
      <div className="page-content">
        {page === 0 && <Landing />}
        {page === 1 && <AboutPage />}
        {page === 2 && <ProjectsPage />}
        {page === 3 && <JoinPage />}
      </div>
    </div>
  );
}

function Landing() {
  return (
    <>
      <h1>Welcome to Merryweather Technologies</h1>
      <p>We are an Engineering design team with national defense at the heart of all of our projects.</p>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Merryweather Technologies</h1>
      <p>
        Founded at York University.
      </p>
    </>
  );
}

function ProjectsPage() {
  const projects = [
    { name: 'MW1: Military Radio', description: 'A military-style radio equipped with the newest features and engineered to last.' },
    { name: 'Template', description: 'Description here:' }
  ];
  return (
    <>
      <h1>Our Projects</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <strong>{p.name}</strong>: {p.description}
          </li>
        ))}
      </ul>
    </>
  );
}

function JoinPage() {
  return (
    <>
      <h1>Join Our Team</h1>
      <p>We're always looking for passionate students and researchers.</p>
      <p>
        Submit your interest via <a href="">Discord</a>.
      </p>
    </>
  );
}

export default App;
