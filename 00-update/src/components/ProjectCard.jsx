import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard({
  project: { project_name, deployed, participants, start_date, end_date, _id },
}) {
  return (
    <li className="project-card">
      <Link to={`/project/${_id}`}>
        <h2>{project_name}</h2>
        <p>Start Date: {start_date}</p>
       
      </Link>
    </li>
  );
}

export default ProjectCard;
