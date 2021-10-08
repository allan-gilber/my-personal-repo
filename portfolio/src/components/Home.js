import React from 'react';
import NavigationButtonsComponent from './NavigationButtonsComponent';
import {GeneralContainer, GeneralTitleFormat, GeneralTextFormat, GithubText, SocialNetworkContainer, Header} from './StylesComponent';
import UFMGImage from '../img/faculdade-de-direito.png';
import LogoLabenu from '../img/labenu.png';
import HeaderTitle from './HeaderTitle';

const Home = () => {
    return (
        <GeneralContainer>
            
            <HeaderTitle/>

            <NavigationButtonsComponent/>

            <GeneralTextFormat>

                <h2>Um pouco de mim...</h2>

                <p>
                    Inicialmente, me tornei estudante de Direito da Vetusta "Casa de Afonso Pena" (UFMG-DIREITO). Durante o curso, me especializei na atuação em Direito Civil, mais especifcamente, Direito Contratual Civil. No 10º período, optei por me matricular na Labenu para satisfazer uma curiosidade que me acompanhava desde quando ainda estava estudando no Segundo Grau, a vontade de aprender programação. Atualmente me encontro cursando de forma integral o curso de Fullstack Developer pela Labenu e, concomitantemente, estou no último período da faculdade de Direito.
                </p>

            </GeneralTextFormat>

            <GeneralTextFormat>

                <h2>Formação Acadêmica</h2>

                <div>
                    <img src={UFMGImage} alt="Arte da Faculdade de Direito da UFMG"/>
                    <img src={LogoLabenu} alt="Slogan da Labenu"/>
                    <p>06/2016-12/2022</p>
                    <p>08/2021-02/2022</p>
                </div>
            </GeneralTextFormat>

            <SocialNetworkContainer>

                <h3>Me siga nas redes sociais!</h3>
                <div>
                    <img src="https://image.flaticon.com/icons/png/512/38/38401.png"/>
                    <img src="https://image.flaticon.com/icons/png/512/1384/1384014.png" href="https://twitter.com"/>
                </div>

            </SocialNetworkContainer>
            
        </GeneralContainer>
    )
}

export default Home
