import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setProjects(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError('Unable to load projects right now. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="projects-page page-shell">
        <div className="page-header">
          <p className="eyebrow">Selected Work</p>
          <h1>Projects</h1>
        </div>
        <div className="loading-screen" aria-live="polite">
          <div className="loader" aria-label="Loading projects" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="projects-page page-shell">
        <div className="page-header">
          <p className="eyebrow">Selected Work</p>
          <h1>Projects</h1>
        </div>
        <p className="form-error">{error}</p>
      </section>
    );
  }

  return (
    <section className="projects-page page-shell">
      <div className="page-header">
        <p className="eyebrow">Selected Work</p>
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
