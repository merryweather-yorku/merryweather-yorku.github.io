import type { Project } from '../data/projects';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="project-detail-container fast-fade-in">
      <button className="back-button" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to Projects
      </button>
      
      <div className="project-detail-header">
        <img src={project.imageUrl} alt={project.name} className="project-detail-image" />
      </div>
      
      <div className="project-detail-content">
        <h1 className="project-title">{project.name}</h1>
        <p className="project-detail-short">{project.shortDescription}</p>
        
        <div className="project-detail-full">
          <h3>Project Overview</h3>
          <p>{project.fullDetails}</p>
        </div>
      </div>
    </div>
  );
}
