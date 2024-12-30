import SearchBar from "./SearchBar";
import Grid from "./Grid";

import projectsData from "./assets/data/projects.json";

import "./App.css";

function App() {
  return (
    <>
      <h1>My Frontend Mentor Projects</h1>
      <SearchBar />
      <Grid projectsData={projectsData} />
      <footer>
        <p>Coded by Josh</p>
      </footer>
    </>
  );
}

export default App;
