import React, { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <div className="Container-fluid">
      <div className="row vh-100">

        <div className="col-3 col-md-2 bg-dark text-white p-0">
          <Sidebar activeItem={activeItem} setActiveIte={setActiveItem} />
        </div>

        <div className="col-9 col-md-10 p-4">
          <h1>{activeItem}</h1>
          <p>
            {activeItem}
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;