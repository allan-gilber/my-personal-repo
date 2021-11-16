import React from "react";
import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/Footer/Footer";
import Education from "../../components/Education/Education";
import { GeneralContainer, MainBody } from "./HomeStyle";
import Resume from "../../components/Resume/Resume";

const Home = () => {
  return (
    <GeneralContainer>
      <Header />
      <MainBody>
        <Resume />
        <Education />
      </MainBody>
      <Footer />
    </GeneralContainer>
  );
};

export default Home;
