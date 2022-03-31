import styled from 'styled-components';

interface Props {
  closeMenu: boolean;
  menucolor?:string;
  textcolor?:string;
}


export const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: flex-end;
  z-index: 4;
  right: -7%;
  height: 5%;
  border-radius: 50%;
  cursor: pointer;
  ${(props: Props) =>
		props.closeMenu &&
    `
    right: -7%;
  `}
`;

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15vw;
  height: fit-content;
  min-height: calc(100% - 100px);
  min-width: fit-content;
  z-index: 1;
  background-color: var(--white);
  margin: 0 3rem 0 0;
  padding: 0;
  list-style: none;
  scrollbar-width: thin;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  ul {
    div:nth-of-type(6n + 0) {
      margin-bottom: 16%;
    }
  }
  ${(props: Props) =>
		props.closeMenu &&
    `
    ul {
        div:nth-of-type(6n + 0) {
            margin-bottom: 16%;
        }
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  min-width: 60px;
  min-height: 100vh;
  height: auto;
  z-index: 1;
  background-color: var(--white);
  list-style: none;
  scrollbar-width: thin;
  `}
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8%;
  width: 100%;
  margin-bottom: 0.1rem;
  padding-left: 10%;
  cursor: pointer;
  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    color: var(--menu-text);
    font-weight: 600;
    font-size: 1rem;
    padding: 0.5rem;
  }
  img {
    position: absolute;
    left: 10%;
    padding-right: 10px;
    font-size: 20px;
  }
  :hover {
    border-radius: 0.25rem;
    border-left: 0.5rem solid red;
    box-shadow: 0px 4px 28px rgba(51, 51, 51, 0.2);
    span {
      color: var(--red-text);
    }
    img {
      filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
        saturate(600%) contrast(4);
    }
  }
  ${(props: Props) =>
		props.closeMenu &&
    `
    display: flex;
    align-items: center;
    img{position: static;}
    min-height: 50px;
    span {
      display: none;
    }
  `}
`;

export const OpenStoreWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  margin: 7% 4% 8% 4%;
  padding: 0 4%;
  background-color: #ffffff;
  box-shadow: 0px 4px 28px rgba(51, 51, 51, 0.2);
  border-radius: 0.5rem;
  z-index: 3;
  p {
    color: var(--success);
    margin-left: 4%;
    font-size: 1rem;
  }
  img {
    height: 1rem;
  }
  ${(props: Props) =>
		props.closeMenu &&
    `
    width: 100%;
    margin: 0;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
        p {
            display: none;
        }
    `}
`;

export const LogoImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: 10%;
  margin-top: 10%;
  img {
    height: 2.5rem;
  }
  h4 {
    font-size: 1.2rem;
    margin-top: 10%;
  }
  ${(props: Props) =>
		props.closeMenu &&
    `
    padding: 0%;
    height: 5%;
    margin-top: 5vh;
    img{
        height: 80%;
        padding: 1vw;
    }
    h4{
        margin-top: 5vh%;
    }
  `}
`;