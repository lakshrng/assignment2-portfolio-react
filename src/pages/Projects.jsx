import ProjectCard from '../components/ProjectCard.jsx';
import projects from '../data/projects.js';

export default function Projects() {
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
