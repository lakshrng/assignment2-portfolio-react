import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <section className="loading-screen" aria-live="polite">
        <div className="loader" aria-label="Loading portfolio" />
      </section>
    );
  }

  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Full Stack Developer & Designer</p>
          <h1>Laksh Rangnekar</h1>
          <p className="lead">
            I build thoughtful digital experiences that blend engineering precision with
            product design, with a strong focus on clean interfaces and reliable systems.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-button">
              View Projects
            </Link>
            <Link to="/contact" className="secondary-button">
              Let's Connect
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="mini-card">
            <span className="mini-label">Current</span>
            <strong>3rd Year CSE</strong>
            <small>NIT Warangal</small>
          </div>
          <div className="mini-card accent-card">
            <span className="mini-label">Next</span>
            <strong>Salesforce Intern</strong>
            <small>Incoming opportunity</small>
          </div>
        </div>
      </div>
    </section>
  );
}
