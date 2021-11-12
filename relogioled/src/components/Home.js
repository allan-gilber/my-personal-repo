import React, { useEffect } from "react";
import {
  HomeContainer,
  Counter,
  NumberContainer,
  ButtonForNewMatchStyle,
  StatusMessageStyle,
} from "./HomeStyle";
import { useFunctionHook } from "./Hooks/useFunctionHook";
import Refresh from "../img/refresh.png";

const Home = () => {
  const { getSecretNumber, displayNumber, newGame, statusMessageArgument, setStyleSegment1, setStyleSegment2, setStyleSegment3, tryToGuessTheNumber, renderStatusMessage, startNewGame, form, inputChange } = useFunctionHook();

  useEffect(() => {
    getSecretNumber();
  },[]);

  function renderCounter() {
    return (
      <Counter>
        <>
          <NumberContainer>
            <div
              style={{
                backgroundColor: setStyleSegment1(0),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(1),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(2),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(3),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(4),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(5),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(6),
              }}
            />
          </NumberContainer>
        </>
        <>
          {displayNumber.toString().length > 1 ? (
            <NumberContainer>
              <div
                style={{
                  backgroundColor: setStyleSegment2(0),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(1),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(2),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(3),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(4),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(5),
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(6),
                }}
              />
            </NumberContainer>
          ) : (
            <></>
          )}
        </>
        {displayNumber.toString().length > 2 ? (
          <NumberContainer>
            <div
              style={{
                backgroundColor: setStyleSegment3(0),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(1),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(2),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(3),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(4),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(5),
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(6),
              }}
            />
          </NumberContainer>
        ) : (
          <></>
        )}
      </Counter>
    );
  }

  function renderForm() {
    if (newGame) {
      return (
        <form onSubmit={tryToGuessTheNumber}>
          <input
            value={form.inputNumber}
            placeholder="Digite o palpite"

            disabled
          />
          <button disabled>ENVIAR</button>
        </form>
      );
    } else {
      return (
        <form onSubmit={tryToGuessTheNumber}>
          <input
            name="inputNumber"
            value={form.inputNumber}
            onChange={inputChange}
            pattern="^(?!0+$)(0*300|0*[1-9]{1}[0-9]{0,1}|0*[1-2]?[0-9]{1,2}|0*[1-9]{1})$"
            title="number between 1 and 300"
            placeholder="Digite o palpite"
            required
            style={ form.inputNumber ? {
               color: '#222222',
            } : {
              color: '#9E9E9E',
           }}
          />
          <button>ENVIAR</button>
        </form>
      );
    }
  }

  return (
    <HomeContainer>
      <span>QUAL É O NÚMERO?</span>
        <StatusMessageStyle>
          {statusMessageArgument === null ? (
            <p></p>
          ) : (
            renderStatusMessage(statusMessageArgument)
          )}
        </StatusMessageStyle>
      {renderCounter()}
      {newGame ? (
        <ButtonForNewMatchStyle>
          <nav onClick={() => startNewGame()}>
            <img alt="Refresh" src={Refresh} />
            <p>NOVA PARTIDA</p>
          </nav>
        </ButtonForNewMatchStyle>
      ) : (
        <></>
      )}
      {renderForm()}
    </HomeContainer>
  );
};

export default Home;
