import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <div className="layout">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />

      <div className="main-content">
        <h1>{activeItem}</h1>

        <p>
          This item {activeItem} section content.
        </p>
      </div>
    </div>
  );
}

export default App;