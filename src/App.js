import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeContainer from "./Components/Resume/ResumeContainer";
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<ResumeContainer />} />
          <Route path="/portfolio" element={<PortfolioContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
