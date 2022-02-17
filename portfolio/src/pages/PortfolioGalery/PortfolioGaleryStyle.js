import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const GeneralTextFormat = styled.div`
  color: #2b2c34;
  border-radius: 3px;
  width: 100%;
  height: 20%;
  p {
    line-height: 1.8;
    text-align: justify;
    font-weight: 500;
    justify-content: center;
  }
  h2 {
    width: 100%;
    padding: 0 4%;
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

export const ProjectGaleryStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  /* height: 86%; */
  min-height: 86%;
  border-radius: 3px;
  /* overflow: scroll; */
  /* overflow-y: hidden; */
  /* overflow-x: hidden; */
  
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: auto;

`;
