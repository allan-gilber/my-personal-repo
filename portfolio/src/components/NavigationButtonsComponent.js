import React from 'react';
import {NavigationButtonsContainer} from './CSS';

const NavigationButtonsComponent = (props) => {
    return (
        <NavigationButtonsContainer>

                <div>
                    <button
                    onClick={() => {props.setActualPage("home")}}
                    >
                        Página Inicial
                    </button>
                    <button onClick={() => {props.setActualPage("portfolioGalery")}}>
                        Galeria do Portfolio
                    </button>
                    <button
                    onClick={() =>{props.setActualPage("personalSkills")}}
                    >
                        Habilidades pessoais
                    </button>
                </div>
                <div>
                    <button
                    onClick={() => {props.setActualPage("contactPage")}}
                    >
                        Contato
                    </button>
                </div>

        </NavigationButtonsContainer>
    )
}

export default NavigationButtonsComponent
