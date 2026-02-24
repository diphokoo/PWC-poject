import React from "react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    "Dashboards",
    "Product",
    "Store",
    "Messages",
    "Statics",
    "Invoices",
    "To Do List",
    "Finances",
  ];

  return (
    <div className="d-flex flex-column vh-100 p-3">
      <h4 className="text-center mb-4">MyApp</h4>

      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li className="nav-item" key={item}>
            <button
              className={`nav-link text-start w-100 ${
                activeItem === item
                  ? "active bg-primary text-white"
                  : "text-white"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;