import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 70%;
  min-width: 350px;
  max-width: 588px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background: rgb(238, 238, 238);
  background: linear-gradient(
    180deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  span {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    text-align: center;
    margin-top: 15%;
    padding: 8px;
    color: #a40606;
    background: -webkit-linear-gradient(#a40606 0%, #d98324 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
    font-weight: 700;
  }
  span:after {
    content: "";
    background: #d9dadb;
    position: absolute;
    bottom: 0;
    height: 10%;
    max-height: 1px;
    width: 80%;
    min-width: initial;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    button {
      cursor: pointer;
      border-radius: 4px;
      border: none;
      color: #FFFFFF;
      width: 19%;
      height: 35%;
      min-width: 60px;
      min-height: 28px;
      margin-left: 12px;
      font-size: 90%;
      font-weight: 800;
      background: rgb(239,108,0);
      background: linear-gradient(202deg, rgba(239,108,0,1) 0%, rgba(192,102,28,1) 100%); 
      :disabled{
        background: #dddddd;
      }
    }

    input {
      box-sizing: border-box;
      width: 60%;
      height: 35%;
      min-width: 40px;
      min-height: 20px;
      padding: 0 2%;
      border-color: #CFCFCF;
      border-style: solid;
      border-radius: 4px;
      color: #9E9E9E;
      background-color: #FFFFFF;
    }
    input:focus {
      box-sizing: border-box;
      outline: none;
      color: #222222;
      border: 1px solid #FF6600;
    }
    input:disabled {
      border: 1px solid #CFCFCF;
      background-color: #F5F5F5;
      color: #9E9E9E;
    }
  }
`;

export const ButtonForNewMatchStyle = styled.div`
  height: 10%;
  width: 100%;
  nav {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: black;
    border-radius: 4px;
    border: none;
    color: white;
    width: 28%;
    height: 70%;
    min-width: 148px;
    min-height: 28px;
    margin: 0;
    font-size: 50%;
    font-weight: 800;
    text-align: center;
    background: rgb(201, 195, 195);
    background: linear-gradient(
      0deg,
      rgba(201, 195, 195, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    img {
      width: 10%;
      margin-left: 10%;
      background-color: transparent;
    }
    p {
      margin-left: 10%;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 140%;
    }
  }
`;

export const StatusMessageStyle = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;
  height: 10%;
  min-width: 100%;
  min-height: 10%;
  color: black;
  text-align: center;
  font-size: 100%;
  font-weight: 800;
`;

export const Counter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const NumberContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 40%;
  min-width: 74px;
  min-height: 135px;
  margin: 0 4px;
  div {
    background-color: black;
  }
  div:active {
    background-color: green;
  }
  div:invalid {
    background-color: red;
  }
  div:nth-child(1) {
    position: absolute;
    bottom: 90%;
    left: 1%;
    height: 8%;
    width: 97%;
    clip-path: polygon(100% 0, 74% 100%, 26% 100%, 0 0);
  }
  div:nth-child(2) {
    position: absolute;
    left: 80%;
    bottom: 50%;
    height: 48%;
    width: 20%;
    background-color: black;
    clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
  }
  div:nth-child(3) {
    position: absolute;
    bottom: 46%;
    left: 7%;
    height: 10px;
    width: 85%;
    clip-path: polygon(0 54%, 14% 0, 84% 0, 100% 46%, 84% 100%, 15% 100%);
  }
  div:nth-child(4) {
    position: absolute;
    top: 50%;
    left: 80%;
    height: 48%;
    width: 20%;
    clip-path: polygon(100% 0, 100% 100%, 21% 82%, 23% 16%);
  }
  div:nth-child(5) {
    position: absolute;
    top: 90%;
    left: 1%;
    height: 8%;
    width: 97%;
    clip-path: polygon(77% 0, 100% 100%, 0 100%, 27% 0);
  }
  div:nth-child(6) {
    position: absolute;
    left: 0px;
    bottom: 1%;
    height: 47%;
    width: 20%;
    clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
  }
  div:nth-child(7) {
    position: absolute;
    left: 0px;
    bottom: 50%;
    height: 47%;
    width: 20%;
    clip-path: polygon(75% 19%, 74% 75%, 0 100%, 0 0);
  }
`;
