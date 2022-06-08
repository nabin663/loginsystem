import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
