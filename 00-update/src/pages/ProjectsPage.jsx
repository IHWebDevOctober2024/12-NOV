import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css";

function ProjectsPage({ projects }) {
  return (
    <div>
      <h1>Projects</h1>
      <ul className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
