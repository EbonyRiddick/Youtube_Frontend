import { useState } from "react";

const useFormOne = (callback) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.name]: event.target.value })
        //setFormValues({...formValues, searchWord: dog })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
        callback(formValues.videoId)
    }

    return {formValues, handleChange, handleSubmit}
}

export default useFormOne