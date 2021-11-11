import { useState} from "react";
import axios from "axios";

export function useGetData() {

    const [secretNumber, setSecretNumber] = useState(Number)
    const [errorMessage, setErrorMessage] = useState(false)

    const getSecretNumber= async () => {
      try { 
        const request = await axios
      .get('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
        const number = request.data.value
        const digitsArray = request.data.value.toString().split('')
        setSecretNumber({number, digitsArray})
        console.log('request', request)
        console.log('number', number)
        console.log('array', digitsArray)
      } catch(error){
      console.log("deu erro")
    }
  }

  return {secretNumber, getSecretNumber, errorMessage, setErrorMessage};
}
