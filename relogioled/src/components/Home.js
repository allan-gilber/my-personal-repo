import React, { useState, useEffect } from "react";
import {
  HomeContainer,
  Counter,
  FirstNumberContainer,
  SecondNumberContainer,
  ThirdNumberContainer,
} from "./HomeStyle";
import { useForm } from "./Hooks/useForm";
import {
    numberRenderConfig
//   zero,
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eigth,
//   nine,
} from "./Constants/SegmentNumbersDisposition";
import {useGetData} from './Hooks/useGetData'

const Home = () => {
    
    const {secretNumber, loading, guessedNumberLength} = useGetData()

  const [opacityOfSegments1, setOpacityOfSegment1] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [opacityOfSegments2, setOpacityOfSegment2] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const [opacityOfSegments3, setOpacityOfSegment3] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const { form, inputChange, statusChange } = useForm({
    guessedNumber: Number,
    didTheUserGuessedRight: false,
    firstRenderNumber: false,
  });

  useEffect(() => {
    setOpacityOfSegment1(numberRenderConfig.zero);
    setOpacityOfSegment2(numberRenderConfig.three);
    setOpacityOfSegment3(numberRenderConfig.zero);
  }, [form.didTheUserGuessedRight, form.firstRenderNumber]);

  function numberStyle(){
      if(form.didTheUserGuessedRight === true){
        return 
      }
  }

  function renderCounter() {
    return (
      <Counter>
          <>
        <FirstNumberContainer
        //   style={
        //     form.firstRenderNumber
        //       ? {}
        //       : {
        //               backgroundColor: form.didTheUserGuessedRight
        //             ? "green"
        //             : "red",
        //         }
        //   }
        >
          <div
            style={{ opacity: opacityOfSegments1[0] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[1] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[2] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[3] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[4] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[5] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments1[6] ? 1 : 0.2 }}
          />
        </FirstNumberContainer>
        </>
        <>
        {form.guessedNumberLength > 1 ? 
        (<SecondNumberContainer>
          <div
            style={{ opacity: opacityOfSegments2[0] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[1] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[2] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[3] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[4] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[5] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments2[6] ? 1 : 0.2 }}
          />
        </SecondNumberContainer>) : (<></>)}
        </>
        {form.guessedNumberLength === 3 ? 
        (<ThirdNumberContainer>
          <div
            style={{ opacity: opacityOfSegments3[0] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[1] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[2] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[3] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[4] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[5] ? 1 : 0.2 }}
          />
          <div
            style={{ opacity: opacityOfSegments3[6] ? 1 : 0.2 }}
          />
        </ThirdNumberContainer>) : (<></>)}
      </Counter>
    );
  }

  return (
    <HomeContainer>
      <h3>QUAL É O NÚMERO?</h3>
      {renderCounter()}
      <form>
        <input
          name="guessedNumber"
          value={form.guessedNumber}
          onChange={inputChange}
          pattern="^(300|[1-2]\d{0,2})$"
          title="number between 1 and 300"
          placeholder="Digite o palpite"
          required
        />
        <button 
        onSubmit={() => statusChange(true)}
        disable={secretNumber}
        >Enviar</button>
      </form>
    </HomeContainer>
  );
};

export default Home;
