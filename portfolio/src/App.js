import React, { useState, useEffect } from "react";
import { GlobalStyle } from "./components/CSS";
import Home from "./components/Home";
import PortfolioGalery from "./components/PortfolioGalery";
import PersonalSkills from "./components/PersonalSkills";
import ContactPage from "./components/ContactPage"

function App() {
  const [actualPage, setActualPage] = useState("home");

  function renderPage() {
    switch (actualPage) {
      case "home": {
        return <Home 
        setActualPage = {setActualPage}
        />;
      } break;
      case "portfolioGalery": {
        return <PortfolioGalery 
        setActualPage = {setActualPage}
        />;
      } break;
      case "personalSkills": {
        return <PersonalSkills 
        setActualPage = {setActualPage}
        />;
      } break;
      case "contactPage": {
        return <ContactPage 
        setActualPage = {setActualPage}
        />;
      } break;
      default:{
        <p>Something has gone terrible wrong.</p>
      }
    }
  }
  return (
    <div>
      <GlobalStyle />
      {renderPage()}
    </div>
  );
}

export default App;
