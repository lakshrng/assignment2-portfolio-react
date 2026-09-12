import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${projectId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Project not found');
        }

        if (isMounted) {
          setProject(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || 'Project not found');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [projectId]);

  if (loading) {
    return (
      <section className="project-detail-page empty-state">
        <div className="loading-screen" aria-live="polite">
          <div className="loader" aria-label="Loading project details" />
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="project-detail-page empty-state">
        <h1>{error || 'Project Not Found'}</h1>
        <Link to="/projects" className="primary-button">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail-page">
      <div className="page-header compact-header">
        <p className="eyebrow">Portfolio Project</p>
        <h1>{project.title}</h1>
      </div>

      <article className="detail-card">
        <img src={project.image} alt={project.title} className="detail-image" />

        <div className="detail-copy">
          <p>{project.description}</p>

          <ul className="detail-tech">
            {project.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-actions">
            <a href={project.link} target="_blank" rel="noreferrer" className="primary-button">
              View Github Repo
            </a>
            <Link to="/projects" className="secondary-button">
              Back to projects
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
