import { useState } from "react";

export const useForm = (initialState) =>{

    const [form, setForm] = useState(initialState)

    const inputChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
        console.log(value)
    }

    const statusChange = (event, value) =>{
        event.preventDefault()
        setForm({...form, didTheUserGuessedRight: value})
    }

    return {form, inputChange, statusChange}
}