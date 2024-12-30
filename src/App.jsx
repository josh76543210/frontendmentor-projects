import { useState } from "react";

import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";

import projectsData from "./assets/data/projects.json";

import "./App.css";

function filterProjects(projectsData, searchQuery, projectOrder) {
  // project order
  if (projectOrder === "new-to-old")
    projectsData = projectsData.sort((a, b) => b.id - a.id);
  else if (projectOrder === "old-to-new")
    projectsData = projectsData.sort((a, b) => a.id - b.id);

  // filter based on tools

  // filter based on search term
  if (searchQuery == "") return projectsData;
  else
    return projectsData.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projectTools, setProjectTools] = useState([]);
  const [projectOrder, setProjectOrder] = useState("new-to-old");

  return (
    <>
      <h1>My Frontend Mentor Projects</h1>
      <p>{projectTools}</p>
      <SearchBar
        projectsData={projectsData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setProjectOrder={setProjectOrder}
        projectTools={projectTools}
        setProjectTools={setProjectTools}
      />
      <Grid
        projectsData={filterProjects(projectsData, searchQuery, projectOrder)}
      />
      <footer>
        <p>Coded by Josh</p>
      </footer>
    </>
  );
}

export default App;
