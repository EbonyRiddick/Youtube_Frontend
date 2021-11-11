import { useState } from "react";

const useForm = (callback) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.name]: event.target.value })
        //setFormValues({...formValues, searchWord: dog })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
        callback(formValues.searchWord)
    }

    return {formValues, handleChange, handleSubmit}
}

export default useForm