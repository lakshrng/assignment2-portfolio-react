import { useState } from 'react';
import { Link } from 'react-router-dom';
import TechStack from './TechStack.jsx';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <TechStack techStack={project.techStack} />

        <div className="project-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setExpanded((prevState) => !prevState)}
          >
            {expanded ? 'Hide Details' : 'View Details'}
          </button>

          <Link to={`/projects/${project.id}`} className="text-link">
            Open full project
          </Link>
        </div>

        {expanded && (
          <div className="project-expanded">
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="link-button">
              GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
