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
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Welcome to Merryweather Technologies</h1>
      <p>Innovating at the intersection of weather analytics and smart campus solutions.</p>
      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>Clicks: {count}</button>
        <p>Edit src/App.tsx and save to test HMR.</p>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About Merryweather Technologies</h1>
      <p>
        Founded at York University, our mission is to harness weather data to improve campus life,
        from energy savings to event planning.
      </p>
      <p>
        Our team blends expertise in meteorology, data science, and software engineering to deliver actionable insights.
      </p>
    </>
  );
}

function ProjectsPage() {
  const projects = [
    { name: 'Campus Climate Dashboard', description: 'Real‑time weather visualisation for campus buildings.' },
    { name: 'Predictive Irrigation Scheduler', description: 'AI‑driven watering plans for university gardens.' },
    { name: 'Event Weather Advisor', description: 'Smart notifications for outdoor events based on forecasts.' },
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
        Submit your interest via the university's internal portal or email us at <a href="mailto:tech@yr.edu">tech@yr.edu</a>.
      </p>
    </>
  );
}

export default App;
