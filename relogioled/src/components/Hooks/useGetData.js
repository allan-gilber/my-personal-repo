import { useState, useEffect } from "react";
import axios from "axios";

export function useGetData() {

    const [secretNumber, setSecretNumber] = useState(Number)
    const [guessedNumberLength, setGuessedNumberLength] = useState(1)
    const [loading, setLoading] = useState()

  useEffect(() => {
    axios
      .get('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
      .then((response) => {
        if(response.data.value){
        setSecretNumber(response.data.value)
        setGuessedNumberLength(secretNumber.length)

        console.log(secretNumber, 'numero recebido')
        console.log(response, 'resposta')
        console.log(guessedNumberLength, 'numero length')
      }
        console.log(response)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error, 'erro')
        setSecretNumber(0)
        setLoading(false);
      });
  }, []);

  return {secretNumber, loading, guessedNumberLength};
}
