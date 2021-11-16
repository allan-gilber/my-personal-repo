import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioGalery from "./pages/PortfolioGalery/PortfolioGalery";
import PersonalSkills from "./pages/PersonalSkills/PersonalSkills";
import ContactPage from "./pages/ContactPage/ContactPage";

ReactDOM.render(
  <div>
  <GlobalStyle/>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfoliogalery" element={<PortfolioGalery />} />
      <Route path="/personalskills" element={<PersonalSkills />} />
      <Route path="/contactpage" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
  </div>,
  document.getElementById("root")
);
