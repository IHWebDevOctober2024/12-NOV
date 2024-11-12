import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditForm({ project, setProjects }) {
  const [project_name, setProject_name] = useState(project.project_name);
  const [deployed, setDeployed] = useState(project.deployed);
  const [participants, setParticipants] = useState(project.participants);
  const [start_date, setStart_date] = useState(project.start_date);
  const [end_date, setEnd_date] = useState(project.end_date);
  const navigate = useNavigate(); // initialize useNavigate

  function handleSubmit(e) {
    e.preventDefault();
    /*    const updatedProject = {
      _id: project._id,
      project_name,
      deployed,
      participants,
      start_date,
      end_date,
    }; */

    project.project_name = project_name;
    project.deployed = deployed;
    project.participants =
      typeof participants === "string" ? participants.split(",") : participants;
    project.start_date = start_date;
    project.end_date = end_date;

    setProjects((prev) => [...prev]);
    console.log("UPDATED PROJECT: ", project);

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="project_name">Project Name:</label>
        <input
          value={project_name}
          type="text"
          id="project_name"
          name="project_name"
          onChange={(e) => setProject_name(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="deployed">Deployed:</label>
        <input
          onChange={(e) => setDeployed(e.target.checked)}
          checked={deployed}
          type="checkbox"
          id="deployed"
          name="deployed"
        />
      </div>

      <div>
        <label htmlFor="participants">Participants:</label>
        <input
          onChange={(e) => setParticipants(e.target.value)}
          value={participants}
          type="text"
          id="participants"
          name="participants"
        />
        <small>Separate names with commas</small>
      </div>

      <div>
        <label htmlFor="start_date">Start Date:</label>
        <input
          onChange={(e) => setStart_date(e.target.value)}
          value={start_date}
          type="date"
          id="start_date"
          name="start_date"
        />
      </div>

      <div>
        <label htmlFor="end_date">End Date:</label>
        <input
          onChange={(e) => setEnd_date(e.target.value)}
          value={end_date}
          type="date"
          id="end_date"
          name="end_date"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EditForm;
