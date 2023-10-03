import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddmisionList from "./componet/AddmisionList";
import Sidebar from "./sidebar";
import Addform from "./componet/Addform";
function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/addmissions" element={<AddmisionList />} />
            <Route path="addmissions/add" element={<Addform />} />
            <Route path="/addmissions/edit/" element={<Addform />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
