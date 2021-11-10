import { useState } from "react";

const SearchResults = (callback) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
        callback(formValues.searchWord)
    }

    return {formValues, handleChange, handleSubmit}
}

export default SearchResults