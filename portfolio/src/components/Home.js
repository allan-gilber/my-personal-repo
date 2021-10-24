import React from "react";
import NavigationButtonsComponent from "./NavigationButtonsComponent";
import Footer from "./Footer";
import Education from "./Education";
import { GeneralContainer, MainBody } from "./CSS";
import Resume from "./Resume";

const Home = (props) => {
  return (
    <GeneralContainer>
      <NavigationButtonsComponent 
      setActualPage={props.setActualPage} 
      />

      <MainBody>
        <Resume />

        <Education />
      </MainBody>

      <Footer />
    </GeneralContainer>
  );
};

export default Home;
