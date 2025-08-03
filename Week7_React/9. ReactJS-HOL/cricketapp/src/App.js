import React, { useState } from "react";
import "./App.css";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [showAllPlayers, setShowAllPlayers] = useState(true);

  const toggleView = () => {
    setShowAllPlayers((prev) => !prev);
  };

  const DisplaySection = () => (
    showAllPlayers ? (
      <section className="players-section">
        <ListofPlayers className="player-list" />
      </section>
    ) : (
      <section className="players-section">
        <IndianPlayers />
      </section>
    )
  );

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">🏏 Cricket App</h1>
        <button onClick={toggleView} className="toggle-button">
          {showAllPlayers ? "Show Indian Players" : "Show All Players"}
        </button>
      </header>

      <main>
        <DisplaySection />
      </main>
    </div>
  );
}

export default App;
