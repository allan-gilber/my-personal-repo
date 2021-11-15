import React from "react";
import NavigationButtonsComponent from "../../components/NavigationButtonsComponent";
import Footer from "../../components/Footer";
import Education from "../../components/Education";
import { GeneralContainer, MainBody } from "../../components/CSS";
import Resume from "../../components/Resume";

const Home = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
