import { projectsData } from '../data/projects';
import './ProjectsPage.css';

interface ProjectsPageProps {
  onSelectProject: (id: string) => void;
}

export default function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  // Pad the array to a minimum of 9, and ensure it's a multiple of 3.
  const minSlots = 9;
  const currentLen = projectsData.length;
  const targetLen = Math.max(minSlots, Math.ceil(currentLen / 3) * 3);
  
  const paddedProjects = [...projectsData];
  for (let i = currentLen; i < targetLen; i++) {
    paddedProjects.push({
      id: `placeholder-${i}`,
      name: 'Coming Soon',
      shortDescription: 'Currently in development. Check back later.',
      fullDetails: '',
      imageUrl: '',
      status: 'coming_soon'
    });
  }

  return (
    <div className="projects-container fast-fade-in">
      <h1 className="page-title">Our Projects</h1>
      <p className="projects-subtitle">Scroll to explore our engineering initiatives.</p>
      
      <div className="projects-grid-wrapper">
        <div className="projects-grid">
          {paddedProjects.map((p, i) => (
            <div 
              key={p.id} 
              className={`project-card ${p.status === 'coming_soon' ? 'coming-soon' : 'active'}`}
              onClick={() => p.status !== 'coming_soon' && onSelectProject(p.id)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {p.status === 'active' && (
                <div className="project-image-wrapper">
                  <img src={p.imageUrl} alt={p.name} />
                </div>
              )}
              {p.status === 'coming_soon' && (
                <div className="project-image-wrapper caution-tape">
                  <span>UNDER CONSTRUCTION</span>
                </div>
              )}
              <div className="project-card-content">
                <h3>{p.name}</h3>
                <p>{p.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
