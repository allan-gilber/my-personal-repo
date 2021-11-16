import React from "react";
import { EducationStyle } from "./EducationStyle";
import UFMGImage from '../../img/UFMGImage.png';
import LogoLabenu from '../../img/LogoLabenu.png';

const Education = () => {
  return (
    <EducationStyle>
        <img 
        src={LogoLabenu} alt="Slogan da Labenu" 
        onClick={()=> window.open("https://drive.google.com/file/d/1Z02L8X3cprASAHp6aPX3kw7mrYQ3YKVS/view", "_blank")}
        />
        <p>Período: 08/2021-02/2022</p>

        <img src={UFMGImage} alt="Arte da Faculdade de Direito da UFMG" 
        onClick={()=> window.open("https://www.direito.ufmg.br/?page_id=4044", "_blank")}
        />
        <p>Período: 06/2016-12/2022</p>
    </EducationStyle>
  );
};

export default Education;
