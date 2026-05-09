import React from 'react';
import './AboutPage.css';

// Layout Helper: Split view
export function SplitLayout({ text, imageUrl, imageAlt }: { text: React.ReactNode, imageUrl: string, imageAlt: string }) {
  return (
    <div className="about-split-layout">
      <div className="about-text">{text}</div>
      <div className="about-image-container">
        <img src={imageUrl} alt={imageAlt} className="about-image" />
      </div>
    </div>
  );
}

// Layout Helper: Full width
export function FullWidthLayout({ text, imageUrl, imageAlt }: { text: React.ReactNode, imageUrl: string, imageAlt: string }) {
  return (
    <div className="about-full-layout">
      <div className="about-text">{text}</div>
      <div className="about-image-container">
        <img src={imageUrl} alt={imageAlt} className="about-image" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-container fast-fade-in">
      <h1 className="page-title">About Merryweather Technologies</h1>
      <SplitLayout 
        text={
          <>
            <p className="about-lead">
              Founded at York University by a dedicated team of engineering students, we focus on defense-oriented technologies.
            </p>
            <p>
              We strive to innovate in fields ranging from encrypted communications to autonomous tracking systems. Our club is built on the principles of rigorous testing, practical application, and pushing the boundaries of what student engineers can accomplish.
            </p>
          </>
        }
        imageUrl="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
        imageAlt="Team collaborating"
      />
    </div>
  );
}
