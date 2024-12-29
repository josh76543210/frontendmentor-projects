import Card from "./Card";

import "./App.css";

function App() {
  return (
    <>
      <h1>My Frontend Mentor Projects</h1>
      <input type="text" placeholder="Search challenges..." />
      <div className="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <footer>
        <p>Coded by Josh</p>
      </footer>
    </>
  );
}

export default App;
