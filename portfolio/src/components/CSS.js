import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "../img/backgroundimage.png";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fffffe;
  background-image: url(${BackgroundImage});
}
div{
  min-width: 110vw;
}
`;

export const NavigationButtonsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  height: 7%;
  padding: 0 3%;
  margin: 0 0 8px 0;
  -webkit-box-shadow: 2px 24px 43px -20px #000000;
  box-shadow: 2px 24px 43px -20px #000000;
  background-color: #d1d1e9;
  border-radius: 3px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }
  button {
    background-color: #d1d1e9;
    color: #2b2c34;
    padding: 8px 15px;
    margin: 1px;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    outline: none;
    border: none;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
  }
  button:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #6246ea;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  button:hover {
    cursor: pointer;
    color: #fffffe;
  }
  button:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export const AvatarImage = styled.div`
  img {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    width: 500px;
    height: 400px;
  }
`;

export const GeneralTitleFormat = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px 50px;
  color: #2b2c34;
  background-color: #d1d1e9;
  width: 100%;
`;

export const Header = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #2b2c34;
  padding: 10px 50px;
  width: 100%;
  height: 10%;
`;
export const ResumeBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  text-align: center;
  width: 75%;
  max-width: 700px;
`;

export const EducationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  /* div{
    display: flex;
    justify-content: center;
    align-items: center;
} */
  img {
    cursor: pointer;
    width: 50%;
    height: auto;
    max-height: 25%;
    text-align: center;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 6px;
    margin: 0 12px;
  }
  p {
    font-weight: 700;
    width: 50%;
  }
`;

export const GeneralTextFormat = styled.div`
  padding: 12px;
  color: #2b2c34;
  border-radius: 3px;
  width: 90%;
  p {
    line-height: 1.8;
    text-align: justify;
    font-weight: 500;
    justify-content: center;
  }
  h2 {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 2rem;
  }

  div {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px, 200px 200px;
    row-gap: 4px;
    column-gap: 12px;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    justify-content: center;
  }
`;

export const SocialNetworkContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0vh;
  width: 100%;
  height: 7%;
  min-height: 50px;
  padding: 0 10px;
  margin: 0 12px;
  color: #2b2c34;
  background-color: #d1d1e9;
  img {
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    height: 80%;
    width: auto;
    margin: 8px 8px;
  }
  h3 {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 0 8px;
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: #d1d1e9; */
  width: 90%;
  height: 80%;
  /* -webkit-box-shadow: 2px 15px 43px -20px #000000;
  box-shadow: 2px 15px 43px -20px #000000; */
  border-radius: 3px;
`;

// Galery Styles

export const ProjectGaleryStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* background-color: #d1d1e9; */
  width: 90%;
  min-height: 80%;
  /* height: auto; */
  /* background-color: white; */
  border-radius: 3px;
  margin-top: 10px;
`

export const ElementDispostionGalery = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
min-height: 40%;
width: 100vw;
padding: 20px 12px;
background-color: #094067;
img{
  box-sizing: border-box;
  position: relative;
  border-radius: 3px;
  height: 100%;
  width: 47%;
  margin: 10px 0;
}
label{
  position: absolute;
  color: #fffffe;
  bottom: 10px;
  width: 70%;
}
`

export const ProjectBanner = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
width: 10%;
height: 100%;
a{
  cursor: pointer;
  color: #3da9fc;
  margin-top: 20px;
  width: 80%;
max-width: 150px;
height: auto;
}
a > img{
  margin: 0;
  height: 12px;
  width: 12px;
}
img{
cursor: pointer;
border-radius: 50%;
width: 80%;
max-width: 150px;
height: auto;
}
`

export const ProjectDescription = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
color: #d8eefe;
width: 40%;
height: 100%;
padding: 20px;
p{
  color: #d8eefe;
  text-align: justify;
  font-size: 18px;
  font-weight: 500;
  /* height: 80%; */
  max-width: 750px;
}
h2{
  text-align: left;
  color: #fffffe;
  width: 50%;
  max-width: 750px;
}
a{
  color: #3da9fc;
}
`

