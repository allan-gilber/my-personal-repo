import styled from 'styled-components';

export const NavigationButtonsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 8px;
    -webkit-box-shadow: 2px 24px 43px -20px #000000; 
    box-shadow: 2px 24px 43px -20px #000000;
    background-color: #d1d1e9;
    /* border-width: 0 0 1px 0;
    border-color: #2b2c34;
    border-style: solid; */
    border-radius: 3px;
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
        content: '';
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
    button:hover{
        cursor: pointer;
        color: #fffffe;
    }
    button:hover::before {
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
`

export const GeneralContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 70%;
div{
    margin: 8px 0;
}
`

export const AvatarImage = styled.div`
    img{
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    width: 500px;
    height: 400px;
    }
`

export const GeneralTitleFormat = styled.div`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 10px 50px;
    color: #2b2c34;
    background-color: #d1d1e9;
    width: 100%;
`

export const Header = styled.div`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 10px 50px;
    color: #2b2c34;
    /* background-color: #d1d1e9; */
    width: 100%;
`

export const GeneralTextFormat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    text-align: center;
    padding: 12px;
    margin: 0; 
    color: #2b2c34;
    background-color: #d1d1e9;
    width: 100%;
    -webkit-box-shadow: 2px 15px 43px -20px #000000; 
    box-shadow: 2px 15px 43px -20px #000000;
    border-radius: 3px;
    p{
        line-height: 1.8;
        /* margin: 0 16px 20px 16px; */
        text-align: justify;
        justify-content: center;
        padding: 0 16px 20px 16px;;
    }
    div > p{
        line-height: 1.8;
        margin: 0 12px 20px 12px;
        text-align: center;
        justify-content: center;
        padding: 4px;
        font-weight: 800;
    }
    h2{
        font-weight: 700;
        font-size: 2rem;
    }
    img {
        width: 200px;
        height: 200px;
        text-align: center;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        margin: 0 12px;
    }
    div {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 200px 200px;
        grid-template-rows: 200px,200px 200px;
        row-gap: 4px;
        column-gap: 12px;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        justify-content: center;
    }   
`

export const SocialNetworkContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 12px;
    color: #2b2c34;
    background-color: #d1d1e9;
    img{
        height: 50px;
        width: 50px;
        margin: 12px 8px;
    }
    div{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    h3{
        font-weight: 700;
        font-size: 2rem;
        margin: 0 8px;
    }
`


export const ListOfProjectsFormat = styled.div`
    display: grid;
    /* grid-template-columns: ;
    grid-row: ; */
`