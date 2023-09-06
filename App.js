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
            <Route path="/addmision_list" element={<AddmisionList />} />
            <Route path="addmision_list/add" element={<Addform />} />
            <Route path="/addmision_list/edit/" element={<Addform />} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
