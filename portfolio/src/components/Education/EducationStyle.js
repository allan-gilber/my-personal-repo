import styled from "styled-components";

export const EducationStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  img {
    cursor: pointer;
    /* width: 50%; */
    height: auto;
    max-height: 25%;
    text-align: center;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    border-radius: 6px;
  }
  p {
    font-weight: 700;
    width: 50%;
  }
`;