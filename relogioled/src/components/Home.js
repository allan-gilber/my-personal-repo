import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  Counter,
  FirstNumberContainer,
  ButtonForNewMatchStyle,
  StatusMessageStyle,
} from "./HomeStyle";
import { useForm } from "./Hooks/useForm";
import { numberRenderConfig } from "./Constants/SegmentNumbersDisposition";
import { useGetData } from "./Hooks/useGetData";
import Refresh from "../img/refresh.png";

const Home = () => {
  const { secretNumber, getSecretNumber, errorMessage, setErrorMessage } =
    useGetData();
  const { form, inputChange, cleanInput } = useForm({
    inputNumber: Number,
  });
  const [guessedNumberLength, setGuessedNumberLength] = useState(1);
  const [didTheUserGuessedRight, setDidTheUserGuessedRight] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(0);
  const [newGame, setNewGame] = useState(false);
  const [statusMessageArgument, setStatusMessageArgument] = useState(null);

  const [opacityOfSegment1, setOpacityOfSegment1] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [opacityOfSegment2, setOpacityOfSegment2] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [opacityOfSegment3, setOpacityOfSegment3] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  function enableNewGame() {
    setNewGame(true);
  }
  const tryToGuessTheNumber = (event) => {
    event.preventDefault();

    const guessedNumber = form.inputNumber;

    const guessedDigitsArray = form.inputNumber.toString().split("");

    if (secretNumber.number.toString() === guessedNumber) {
      setGuessedNumberLength(secretNumber.digitsArray.length);
      setDisplayNumber(form.inputNumber);
      setDidTheUserGuessedRight(true);
      setErrorMessage(3);
      setOpacityOfSegment1(numberRenderConfig(guessedDigitsArray[0]));
      setOpacityOfSegment2(numberRenderConfig(guessedDigitsArray[1]));
      setOpacityOfSegment3(numberRenderConfig(guessedDigitsArray[2]));
      enableNewGame();
      cleanInput();
    } else {
      setDisplayNumber(form.inputNumber);
      setGuessedNumberLength(secretNumber.digitsArray.length);
      setDidTheUserGuessedRight(false);
      setStatusMessageArgument(greaterOrLesser());
      setOpacityOfSegment1(numberRenderConfig(guessedDigitsArray[0]));
      setOpacityOfSegment2(numberRenderConfig(guessedDigitsArray[1]));
      setOpacityOfSegment3(numberRenderConfig(guessedDigitsArray[2]));
      enableNewGame();
      cleanInput();
    }
  };
  const greaterOrLesser = () => {
    if (secretNumber > form.inputNumber) {
      return 2;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    getSecretNumber();
  }, []);

  function setStyleSegment1(value) {
    if (didTheUserGuessedRight === null) {
      return "black";
    } else {
      const color = didTheUserGuessedRight
        ? opacityOfSegment1[value]
          ? "green"
          : "gray"
        : opacityOfSegment1[value]
        ? "red"
        : "gray";
      return color;
    }
  }

  function setStyleSegment2(value) {
    if (didTheUserGuessedRight === null) {
      return "black";
    } else {
      const color = didTheUserGuessedRight
        ? opacityOfSegment2[value]
          ? "green"
          : "gray"
        : opacityOfSegment2[value]
        ? "red"
        : "gray";
      return color;
    }
  }

  function setStyleSegment3(value) {
    if (didTheUserGuessedRight === null) {
      return "black";
    } else {
      const color = didTheUserGuessedRight
        ? opacityOfSegment3[value]
          ? "green"
          : "gray"
        : opacityOfSegment3[value]
        ? "red"
        : "gray";
      return color;
    }
  }

  function renderStatusMessage(argument) {
    switch (argument) {
      case 1:
        return <p style={{ color: "#d98324" }}>É menor</p>;
      case 2:
        return <p style={{ color: "#d98324" }}>É maior</p>;
      case 3:
        return <p style={{ color: "green" }}>Você acertou</p>;
      case 4:
        return <p style={{ color: "red" }}>Erro</p>;
      default:
        <p style={{ color: "red" }}>Erro</p>;
    }
  }

  function renderCounter() {
    return (
      <Counter>
        <>
          <FirstNumberContainer>
            <div
              style={{
                backgroundColor: setStyleSegment1(0),
                opacity: opacityOfSegment1[0] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(1),
                opacity: opacityOfSegment1[1] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(2),
                opacity: opacityOfSegment1[2] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(3),
                opacity: opacityOfSegment1[3] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(4),
                opacity: opacityOfSegment1[4] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(5),
                opacity: opacityOfSegment1[5] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment1(6),
                opacity: opacityOfSegment1[6] ? 1 : 0.2,
              }}
            />
          </FirstNumberContainer>
        </>
        <>
          {displayNumber.length > 1 ? (
            <FirstNumberContainer>
              <div
                style={{
                  backgroundColor: setStyleSegment2(0),
                  opacity: opacityOfSegment2[0] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(1),
                  opacity: opacityOfSegment2[1] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(2),
                  opacity: opacityOfSegment2[2] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(3),
                  opacity: opacityOfSegment2[3] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(4),
                  opacity: opacityOfSegment2[4] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(5),
                  opacity: opacityOfSegment2[5] ? 1 : 0.2,
                }}
              />
              <div
                style={{
                  backgroundColor: setStyleSegment2(6),
                  opacity: opacityOfSegment2[6] ? 1 : 0.2,
                }}
              />
            </FirstNumberContainer>
          ) : (
            <></>
          )}
        </>
        {displayNumber.length > 2 ? (
          <FirstNumberContainer>
            <div
              style={{
                backgroundColor: setStyleSegment3(0),
                opacity: opacityOfSegment3[0] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(1),
                opacity: opacityOfSegment3[1] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(2),
                opacity: opacityOfSegment3[2] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(3),
                opacity: opacityOfSegment3[3] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(4),
                opacity: opacityOfSegment3[4] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(5),
                opacity: opacityOfSegment3[5] ? 1 : 0.2,
              }}
            />
            <div
              style={{
                backgroundColor: setStyleSegment3(6),
                opacity: opacityOfSegment3[6] ? 1 : 0.2,
              }}
            />
          </FirstNumberContainer>
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
            name="inputNumber"
            value={form.inputNumber}
            onChange={inputChange}
            pattern="300|[1-2]\d{0,2}|^(0|[1-9][0-9]{0,1})$|\b^(0|[1-9]{0,1})$\b"
            title="number between 1 and 300"
            placeholder="Digite o palpite"
            disabled
            required
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
            pattern="300|[1-2]\d{0,2}|^(0|[1-9][0-9]{0,1})$|\b^(0|[1-9]{0,1})$\b"
            title="number between 1 and 300"
            placeholder="Digite o palpite"
            required
          />
          <button disable={secretNumber}>ENVIAR</button>
        </form>
      );
    }
  }

  return (
    <HomeContainer>
      <h3>QUAL É O NÚMERO?</h3>
      {newGame ? (
        <StatusMessageStyle>
          {statusMessageArgument === null ? (
            <></>
          ) : (
            renderStatusMessage(statusMessageArgument)
          )}
        </StatusMessageStyle>
      ) : (
        <></>
      )}
      {renderCounter()}
      {newGame ? (
        <ButtonForNewMatchStyle>
          <nav onClick={() => window.location.reload()}>
            <img src={Refresh} />
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
