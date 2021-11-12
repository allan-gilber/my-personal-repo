import { useState } from "react";
import axios from "axios";
import { useForm } from "./useForm";
import { numberRenderConfig } from "../Constants/SegmentNumbersDisposition";

export function useFunctionHook(){
  const [secretNumber, setSecretNumber] = useState(Number);
  const [didTheUserGuessedRight, setDidTheUserGuessedRight] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(8);
  const [newGame, setNewGame] = useState(false);
  const [statusMessageArgument, setStatusMessageArgument] = useState(null);
  const { form, inputChange, cleanInput } = useForm({
    inputNumber: "",
  });
  const [ errorInRequest, setErrorInRequest ] = useState(false)

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

  const getSecretNumber = async () => {
    try {
      const request = await axios.get(
        "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300"
      );
      const number = request.data.value;
      const digitsArray = request.data.value.toString().split("");
      setSecretNumber({ number, digitsArray });
    } catch (error) {
      setErrorInRequest(true)
      setDisplayNumber(['5','0','2']);
      setOpacityOfSegment1(numberRenderConfig('5'));
      setOpacityOfSegment2(numberRenderConfig('0'));
      setOpacityOfSegment3(numberRenderConfig('2'));
      setStatusMessageArgument(4);
      setNewGame(true);
      setDidTheUserGuessedRight(null);
      setSecretNumber(null);
      cleanInput();
    }
  };

  function startNewGame() {
    setErrorInRequest(false)
    setDisplayNumber([8]);
    setOpacityOfSegment1(numberRenderConfig('8'));
    getSecretNumber();
    cleanInput();
    setNewGame(false);
    setStatusMessageArgument(null);
    setDidTheUserGuessedRight(null);
    setSecretNumber(null);
  }

  function enableNewGame() {
    setNewGame(true);
  }

  const tryToGuessTheNumber = (event) => {
    event.preventDefault();

    const guessedNumber = parseInt(form.inputNumber, 10);

    const guessedDigitsArray = guessedNumber.toString().split("");

    if (secretNumber.number.toString() === guessedNumber) {
      setDisplayNumber(guessedNumber);
      setDidTheUserGuessedRight(true);
      setStatusMessageArgument(3);
      setOpacityOfSegment1(numberRenderConfig(guessedDigitsArray[0]));
      setOpacityOfSegment2(numberRenderConfig(guessedDigitsArray[1]));
      setOpacityOfSegment3(numberRenderConfig(guessedDigitsArray[2]));
      enableNewGame();
      cleanInput();
    } else {
      setDisplayNumber(guessedNumber);
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
      return 2;
    } else {
      return 1;
    }
  };

  function setStyleSegment1(value) {
    if (!didTheUserGuessedRight){
      return opacityOfSegment1[value] ? (errorInRequest ? '#CC3300' : "#262A34") : "#DDDDDD";
    } else {
      return opacityOfSegment1[value] ? "#32BF00" : "#DDDDDD";
    }
  }

  function setStyleSegment2(value) {
    if (!didTheUserGuessedRight) {
      return opacityOfSegment2[value] ? (errorInRequest ? '#CC3300' : "#262A34") : "#DDDDDD";
    } else {
      return opacityOfSegment2[value] ? "#32BF00" : "#DDDDDD";
    }
  }

  function setStyleSegment3(value) {
    if (!didTheUserGuessedRight) {
      return opacityOfSegment3[value] ? (errorInRequest ? '#CC3300' : "#262A34") : "#DDDDDD";
    } else {
      return opacityOfSegment3[value] ? "#32BF00" : "#DDDDDD";
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
        return <p style={{ color: "#CC3300" }}>ERRO</p>;
      default:
        <p style={{ color: "#CC3300" }}>ERRO</p>;
    }
  }

  return {
    secretNumber,
    getSecretNumber,
    setSecretNumber,
    setDisplayNumber,
    setNewGame,
    setStatusMessageArgument,
    setDidTheUserGuessedRight,
    setOpacityOfSegment1,
    setOpacityOfSegment2,
    setOpacityOfSegment3,
    opacityOfSegment1,
    opacityOfSegment2,
    opacityOfSegment3,
    didTheUserGuessedRight,
    displayNumber,
    newGame,
    statusMessageArgument,
    setStyleSegment1,
    setStyleSegment2,
    setStyleSegment3,
    tryToGuessTheNumber,
    renderStatusMessage,
    startNewGame,
    form,
    inputChange,
    errorInRequest, 
    setErrorInRequest
  };
}
