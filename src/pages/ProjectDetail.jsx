import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects.js';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="project-detail-page empty-state">
        <h1>Project Not Found</h1>
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
              View Project
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
