import styled from "styled-components";

export const SocialNetworkContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-self: center;
  width: 100%;
  height: 7%;
  min-height: 60px;
  margin: 0 12px;
  padding: 0 4%;
  color: #2b2c34;
  background-color: #d1d1e9;
  img {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    height: 70%;
    width: auto;
    margin: 0.5%;
  }
  h3 {
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 0 0.5%;
    margin: 0;
  }
`;
