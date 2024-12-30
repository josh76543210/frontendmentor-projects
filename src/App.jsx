import Card from "./Card";
import projectsData from "./assets/data/projects.json";

import "./App.css";

function App() {
  return (
    <>
      <h1>My Frontend Mentor Projects</h1>
      <input type="text" placeholder="Search challenges..." />
      <div className="card-grid">
        {projectsData.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
      <footer>
        <p>Coded by Josh</p>
      </footer>
    </>
  );
}

export default App;
