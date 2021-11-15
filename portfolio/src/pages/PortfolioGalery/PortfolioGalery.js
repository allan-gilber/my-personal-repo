import React from "react";
import NavigationButtonsComponent from "../../components/NavigationButtonsComponent";
import Footer from "../../components/Footer";
import BlackJackImage from "../../img/BlackJackImage.jpg";
import GreaterThan from "../../img/GreaterThan.png";
import BlackJackInterface from "../../img/BlackJackInterface.png";
import {
  GeneralContainer,
  GeneralTextFormat,
  ElementDispostionGalery,
  ProjectGaleryStyle,
  ProjectBanner,
  ProjectDescription,
} from "../../components/CSS";

function PortfolioGalery(props) {
  return (
    <GeneralContainer>
      <NavigationButtonsComponent setActualPage={props.setActualPage} />
      <ProjectGaleryStyle>
        <GeneralTextFormat>
          <h2>Projetos elaborados até o momento.</h2>
        </GeneralTextFormat>
        <ElementDispostionGalery>
          <ProjectBanner>
            <img
              class="imagem-blackjack"
              src={BlackJackImage}
              alt="Imagem de um slogan do jogo Blackjack/Vinte-e-um."
            />
            <a>
              Clique para mais informações <img src={GreaterThan} />
            </a>
          </ProjectBanner>
          <ProjectDescription>
            <h2>BlackJack/Vinte-e-um</h2>
            <p>
              Blackjack ou Vinte-e-um é um jogo praticado com cartas em casinos
              e que pode ser jogado com 1 a 8 baralhos de 52 cartas, em que o
              objetivo é ter mais pontos do que o adversário, mas sem
              ultrapassar os 21 (caso em que se perde). O dealer só pode pedir
              até um máximo de 5 cartas ou até chegar ao número 17. (...) Fonte:{" "}
              <a href="https://pt.wikipedia.org/wiki/Blackjack">Wikipedia</a>.
            </p>
            <p>
              Neste projeto elaborei meu primeiro jogo utilizando apenas o{" "}
              <strong>JavaScript</strong>. Dado as limitações técnicas do
              momento, o jogo não possui interface, tendo toda a interação do
              jogo se dado por meio de "console.logs" e "confirm".
            </p>
          </ProjectDescription>
          <img src={BlackJackInterface} />
        </ElementDispostionGalery>
      </ProjectGaleryStyle>
      <Footer />
    </GeneralContainer>
  );
}

export default PortfolioGalery;
