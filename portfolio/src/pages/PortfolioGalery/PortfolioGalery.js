import React from "react";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/Footer/Footer";
import Blackjack from "../../components/ProjectsDescriptionComponents/Blackjack/Blackjack";
import {
  GeneralContainer,
  GeneralTextFormat,
  ProjectGaleryStyle,
} from "./PortfolioGaleryStyle";

function PortfolioGalery() {
  return (
    <GeneralContainer>
      <Header />
      <ProjectGaleryStyle>
        <GeneralTextFormat>
          <h2>Projetos elaborados até o momento.</h2>
        </GeneralTextFormat>
        <Blackjack/>
      </ProjectGaleryStyle>
      <Footer />
    </GeneralContainer>
  );
}

export default PortfolioGalery;
