import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  Counter,
  NumberContainer,
  ButtonForNewMatchStyle,
  StatusMessageStyle,
} from "./HomeStyle";
import { useForm } from "./Hooks/useForm";
import { numberRenderConfig } from "./Constants/SegmentNumbersDisposition";
import { useGetData } from "./Hooks/useGetData";
import Refresh from "../img/refresh.png";

const Home = () => {
  const { secretNumber, getSecretNumber } =
    useGetData();
  const { form, inputChange, cleanInput } = useForm({
    inputNumber: null,
  });
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

  function handleDisabledStatus(id, argument){
    console.log(id)
    document.getElementById({id}).disabled = argument
  }
  const tryToGuessTheNumber = (event) => {
    event.preventDefault();

    const guessedNumber = form.inputNumber;

    const guessedDigitsArray = form.inputNumber.toString().split("");

    if (secretNumber.number.toString() === guessedNumber) {
      setDisplayNumber(form.inputNumber);
      setDidTheUserGuessedRight(true);
      setStatusMessageArgument(3);
      setOpacityOfSegment1(numberRenderConfig(guessedDigitsArray[0]));
      setOpacityOfSegment2(numberRenderConfig(guessedDigitsArray[1]));
      setOpacityOfSegment3(numberRenderConfig(guessedDigitsArray[2]));
      enableNewGame();
      cleanInput();
    } else {
      setDisplayNumber(form.inputNumber);
      setDidTheUserGuessedRight(false);
      setStatusMessageArgument(greaterOrLesser());
      setOpacityOfSegment1(numberRenderConfig(guessedDigitsArray[0]));
      setOpacityOfSegment2(numberRenderConfig(guessedDigitsArray[1]));
      setOpacityOfSegment3(numberRenderConfig(guessedDigitsArray[2]));
      cleanInput();
    }
  };
  const greaterOrLesser = () => {
    if (secretNumber.number > form.inputNumber) {
      console.log('comparar', secretNumber.number, form.inputNumber)
      return 2;
    } else {
      console.log('comparar', secretNumber.number, form.inputNumber)
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
          ? "#32BF00"
          : "#DDDDDD"
        : opacityOfSegment1[value]
        ? "red"
        : "#DDDDDD";
      return color;
    }
  }

  function setStyleSegment2(value) {
    if (didTheUserGuessedRight === null) {
      return "black";
    } else {
      const color = didTheUserGuessedRight
        ? opacityOfSegment2[value]
          ? "#32BF00"
          : "#DDDDDD"
        : opacityOfSegment2[value]
        ? "red"
        : "#DDDDDD";
      return color;
    }
  }

  function setStyleSegment3(value) {
    if (didTheUserGuessedRight === null) {
      return "black";
    } else {
      const color = didTheUserGuessedRight
        ? opacityOfSegment3[value]
          ? "#32BF00"
          : "#DDDDDD"
        : opacityOfSegment3[value]
        ? "red"
        : "#DDDDDD";
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
        return <p style={{ color: "#32BF00" }}>Você acertou!!!!</p>;
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
          {displayNumber.length > 1 ? (
            <NumberContainer>
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
        {displayNumber.length > 2 ? (
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
          <nav onClick={() => window.location.reload()}>
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
