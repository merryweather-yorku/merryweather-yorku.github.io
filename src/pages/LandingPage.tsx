import './LandingPage.css';

export default function LandingPage({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="landing-container fast-fade-in">
      <div className="landing-content">
        <h1 className="landing-title">Engineering the Future</h1>
        <p className="landing-subtitle">
          We are an Engineering design team with national defense at the heart of all of our projects.
        </p>
        <button className="landing-cta" onClick={onExplore}>
          Explore Projects
        </button>
      </div>
      <div className="landing-hero-image">
        <img 
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80" 
          alt="Engineering Team"
        />
      </div>
    </div>
  );
}
