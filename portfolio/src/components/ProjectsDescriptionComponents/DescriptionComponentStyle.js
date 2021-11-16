import styled from "styled-components";

export const ElementDispostionGalery = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  min-height: 50%;
  width: 100%;
  padding: 0 4%;
  margin: 2% 0;
  background-color: #094067;
  img {
    box-sizing: border-box;
    position: relative;
    height: 100%;
    width: 47%;
    margin: 10px 0;
  }
  label {
    position: absolute;
    color: #fffffe;
    bottom: 10px;
    width: 70%;
  }
`;

export const ProjectBanner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  a {
    cursor: pointer;
    color: #3da9fc;
    margin-top: 20px;
    width: 80%;
    max-width: 150px;
    height: auto;
  }
  a > img {
    margin: 0;
    height: 12px;
    width: 12px;
  }
  img {
    cursor: pointer;
    border-radius: 50%;
    width: 80%;
    max-width: 150px;
    height: auto;
  }
`;

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
  p {
    color: #d8eefe;
    text-align: justify;
    font-size: 18px;
    font-weight: 500;
    height: 80%;
    max-width: 750px;
    overflow-y: auto;
  }
  h2 {
    text-align: left;
    color: #fffffe;
    width: 50%;
    height: 10%;
    max-width: 750px;
  }
  a {
    color: #3da9fc;
  }
`;
