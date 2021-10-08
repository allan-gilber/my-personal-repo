import React from 'react';
import NavigationButtonsComponent from './NavigationButtonsComponent';
import {GeneralContainer, GeneralTitleFormat, GeneralTextFormat, GithubText, SocialNetworkContainer, Header, ListOfProjectsFormat} from './StylesComponent';
import UFMGImage from '../img/faculdade-de-direito.png';
import LogoLabenu from '../img/labenu.png';
import PorcentagemDeProgramacao from '../img/porcentagem-programacao.png';
import HeaderTitle from './HeaderTitle';

function PortfolioGalery(props) {
    return (

            <GeneralContainer>

                <HeaderTitle/>
                <NavigationButtonsComponent/>

                <GeneralTextFormat>
                    <h2>Projetos elaborados até o momento.</h2>
                </GeneralTextFormat>

                <ListOfProjectsFormat>
                    <img class="imagem-blackjack" src="IMG/blackjack.jpg" alt="Imagem de um slogan do jogo Blackjack/Vinte-e-um."/>
                </ListOfProjectsFormat>
                
            </GeneralContainer>
    )
}

export default PortfolioGalery
