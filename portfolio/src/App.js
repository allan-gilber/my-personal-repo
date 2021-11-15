// import React, { useState, useEffect } from "react";
// import { GlobalStyle } from "./components/CSS";
// import Home from "./pages/Home/Home";
// import PortfolioGalery from "./pages/PortfolioGalery/PortfolioGalery";
// import PersonalSkills from "./pages/PersonalSkills/PersonalSkills";
// import ContactPage from "./pages/ContactPage/ContactPage"
// import {BrowserRouter, Route, Routes } from 'react-router-dom'

// function App() {

//   function renderPage() {
//     switch (actualPage) {
//       case "home": {
//         return <Home 
//         setActualPage = {setActualPage}
//         />;
//       } break;
//       case "portfolioGalery": {
//         return <PortfolioGalery 
//         setActualPage = {setActualPage}
//         />;
//       } break;
//       case "personalSkills": {
//         return <PersonalSkills 
//         setActualPage = {setActualPage}
//         />;
//       } break;
//       case "contactPage": {
//         return <ContactPage 
//         setActualPage = {setActualPage}
//         />;
//       } break;
//       default:{
//         <p>Something has gone terrible wrong.</p>
//       }
//     }
//   }
//   return (
//     <BrowserRouter>
//       <Routes>
//          <Route path="/" element={<App />} />
//          <Route  path="/portfoliogalery" element={<PortfolioGalery />} />
//          <Route  path="/personalskills" element={<PersonalSkills />} />
//          <Route  path="/contactpage" element={<ContactPage />} />
//        </Routes>
//      </BrowserRouter>
//   );
// }

// export default App;
