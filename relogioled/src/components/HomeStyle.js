import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 50%;
height: 70%;
border: 1px solid lightgray;
border-radius: 4px;
h3{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100% ;
    text-align: center;
    /* color: #c4742f; */
    margin: 0;
    color: #a40606;
    background: -webkit-linear-gradient( #a40606 0%, #d98324 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
h3:after{
content: "";
  background: #d9dadb;
  position: absolute;
  bottom: 0;
  left: 35%;
  height: 0.9px;
  width: 30%;
}

form{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;
    button{
    cursor: pointer;
    background-color: orange;
    border-radius: 4px;
    border: none;
    color: white;
    width: 10%;
    height: 40%;
    margin-left: 12px;
}
}
`

export const Counter = styled.div`
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
height: 60%;
`

export const FirstNumberContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 24%;
div:nth-child(1){
background-color: black;
position: absolute;
bottom: 90%;
left: 4%;
height: 8%;
width: 90%;
clip-path: polygon(100% 0, 74% 100%, 26% 100%, 0 0);
}
div:nth-child(2){
position: absolute;
left: 80%;
bottom: 50%;
height: 50% ;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(3){
background-color: black;
position: absolute;
bottom: 44% ;
left: 4px;
height: 10px ;
width: 80% ;
clip-path: polygon(0 54%, 14% 0, 84% 0, 100% 46%, 84% 100%, 15% 100%);
}
div:nth-child(4){
position: absolute;
top: 50%;
left: 80%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(5){
position: absolute;
top: 90%;
left: 4%;
height: 8% ;
width: 90% ;
background-color: black;
clip-path: polygon(77% 0, 100% 100%, 0 100%, 27% 0);
}
div:nth-child(6){
position: absolute;
left: 0px;
bottom: 1%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
div:nth-child(7){
position: absolute;
left: 0px;
bottom: 48%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
`

export const SecondNumberContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 24%;
margin: 0 2%;

div:nth-child(1){
background-color: black;
position: absolute;
bottom: 90%;
left: 4%;
height: 8%;
width: 90%;
clip-path: polygon(100% 0, 74% 100%, 26% 100%, 0 0);
}
div:nth-child(2){
position: absolute;
left: 80%;
bottom: 50%;
height: 50% ;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(3){
background-color: black;
position: absolute;
bottom: 44% ;
left: 4px;
height: 10px ;
width: 80% ;
clip-path: polygon(0 54%, 14% 0, 84% 0, 100% 46%, 84% 100%, 15% 100%);
}
div:nth-child(4){
position: absolute;
top: 50%;
left: 80%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(5){
position: absolute;
top: 90%;
left: 4%;
height: 8% ;
width: 90% ;
background-color: black;
clip-path: polygon(77% 0, 100% 100%, 0 100%, 27% 0);
}
div:nth-child(6){
position: absolute;
left: 0px;
bottom: 1%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
div:nth-child(7){
position: absolute;
left: 0px;
bottom: 48%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
`
export const ThirdNumberContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 24%;
div:nth-child(1){
background-color: black;
position: absolute;
bottom: 90%;
left: 4%;
height: 8%;
width: 90%;
clip-path: polygon(100% 0, 74% 100%, 26% 100%, 0 0);
}
div:nth-child(2){
position: absolute;
left: 80%;
bottom: 50%;
height: 50% ;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(3){
background-color: black;
position: absolute;
bottom: 44% ;
left: 4px;
height: 10px ;
width: 80% ;
clip-path: polygon(0 54%, 14% 0, 84% 0, 100% 46%, 84% 100%, 15% 100%);
}
div:nth-child(4){
position: absolute;
top: 50%;
left: 80%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
}
div:nth-child(5){
position: absolute;
top: 90%;
left: 4%;
height: 8% ;
width: 90% ;
background-color: black;
clip-path: polygon(77% 0, 100% 100%, 0 100%, 27% 0);
}
div:nth-child(6){
position: absolute;
left: 0px;
bottom: 1%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
div:nth-child(7){
position: absolute;
left: 0px;
bottom: 48%;
height: 50%;
width: 20%;
background-color: black;
clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
}
`