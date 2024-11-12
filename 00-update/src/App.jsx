import "./App.css";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import projectsJson from "./data/data.json";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState(projectsJson);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectsPage projects={projects} />} />
        <Route
          path="/project/:projectId"
          element={
            <ProjectDetailsPage projects={projects} setProjects={setProjects} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
