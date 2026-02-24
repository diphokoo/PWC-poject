import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Store", path: "/store" },
    { name: "Message", path: "/message" },
    { name: "Statics", path: "/statics" },
    { name: "Invoices", path: "/invoices" },
    { name: "To Do List", path: "/todo" },
    { name: "Finances", path: "/finances" },
  ];

  return (
    <div className="d-flex flex-column vh-100 p-3">
      <h4 className="text-center mb-4">MyApp</h4>

      <ul className="nav nav-pills flex-column">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.name}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link text-start ${
                  isActive
                    ? "active bg-primary text-white"
                    : "text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;