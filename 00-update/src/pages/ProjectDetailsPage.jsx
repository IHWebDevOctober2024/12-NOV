import { useParams } from "react-router-dom";
import "./ProjectDetailsPage.css";
import EditForm from "../components/EditForm";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectDetailsPage({ projects, setProjects }) {
  // the project ID is the part of the url after /project/dsdsafdslkfndsafdsa we can identify this project from the array
  const { projectId } = useParams(); // initializing this hook

  const [isEditing, setIsEditing] = useState(false);

  const project = projects.find((eachProject) => eachProject._id === projectId);

  const { project_name, end_date, deployed, participants } = project;

  return (
    <div className="project-container">
      {!isEditing ? (
        <article>
          <h2>{project_name}</h2>
          <p>End Date: {end_date}</p>
          <p>Deployed: {deployed ? "✔️" : "❌"}</p>
          <h3>Participants: </h3>
          <ul>
            {participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </article>
      ) : (
        <article>
          <EditForm project={project} setProjects={setProjects} />
          <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
        </article>
      )}
      <Link to="/">Go back</Link>
    </div>
  );
}

export default ProjectDetailsPage;
