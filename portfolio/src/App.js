
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home'
import PortfolioGalery from './components/PortfolioGalery';


const GlobalStyle= createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fffffe;
}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
`


function App() {
  const [actualPage, setActualPage] = useState("home")
  
  function renderPage(){
    switch(actualPage){
      case "home":{
        return(
          <Home/>
        )
      }
      case "portfolioGalery": {
        <PortfolioGalery />
      }
    }
  }
  return (
    <div>
      <GlobalStyle/>
      {renderPage()}
    </div>
  )
}

export default App
