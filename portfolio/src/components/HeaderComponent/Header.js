import React from "react";
import { Link } from "react-router-dom";
import { HeaderGeneralContainer } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderGeneralContainer>
      <div>
        <Link to="/">
          <button>Página Inicial</button>
        </Link>
        <Link to="/portfoliogalery">
          <button>Galeria do Portfolio</button>
        </Link>
        <Link to="/personalskills">
          <button>Habilidades pessoais</button>
        </Link>
      </div>
      <div>
        <Link to="/contactpage">
          <button>Contato</button>
        </Link>
      </div>
    </HeaderGeneralContainer>
  );
};

export default Header;
