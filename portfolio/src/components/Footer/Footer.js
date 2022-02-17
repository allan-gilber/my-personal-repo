import React from "react";
import { SocialNetworkContainer } from "./FooterStyle";

const Footer = () => {
  return (
    <SocialNetworkContainer>
      <h3>Me siga nas redes sociais!</h3>
        <img
        src="https://image.flaticon.com/icons/png/512/38/38401.png" 
        onClick={()=> window.open("https://github.com/allan-gilber", "_blank")}
        />
        <img
          src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
          onClick={()=> window.open("https://www.linkedin.com/in/allan-gilber/", "_blank")}
        />
    </SocialNetworkContainer>
  );
};

export default Footer;
