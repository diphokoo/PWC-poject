import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Store from "./pages/Statics";
import Message from "./pages/Message";
import Statics from "./pages/Statics";
import Invoices from "./pages/Invoices";
import ToDoList from "./pages/ToDoList";
import Finances from "./pages/Finances";

function App() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        {/* Sidebar */}
        <div className="col-3 col-md-2 bg-dark text-white p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-9 col-md-10 p-4">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/store" element={<Store />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/statics" element={<Statics />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/finances" element={<Finances />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;