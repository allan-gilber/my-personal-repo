import styled from "styled-components";

export const HeaderGeneralContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  height: 7%;
  padding: 0 4%;
  margin: 0 0 1% 0;
  -webkit-box-shadow: 2px 24px 43px -20px #000000;
  box-shadow: 2px 24px 43px -20px #000000;
  background-color: #d1d1e9;
  border-radius: 3px;
  div {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: initial;
  }
  button {
    background-color: #d1d1e9;
    color: #2b2c34;
    padding: 8px 15px;
    height: 100%;
    margin: 0;
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