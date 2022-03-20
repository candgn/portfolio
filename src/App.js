import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeContainer from "./Components/Resume/ResumeContainer";
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeContainer />} />
        <Route path="/portfolio" element={<PortfolioContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
