import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi"


const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: '',
    })

    const [completed, setCompleted] = useState(false)

    const onChange = e => {

        if (e.target.name === "completed") {
            setCompleted(e.target.checked)
            debugger
        }
        else {
            setInputText({
                ...inputText,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title, completed)
            setInputText({
                title: ''
            })
            setCompleted(false)
        }
        else {
            alert("Please write item")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            {/* <div className="container" style={ContainerStyle}> */}
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        name="completed"
                        className="input-checkbox"
                        checked={completed}
                        // value={completed}
                        onChange={onChange}
                    />
                </div>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add todo...."
                    value={inputText.title}
                    name="title"
                    onChange={onChange}
                />
                <button className="input-submit" ><BiAddToQueue /></button>
            {/* </div> */}
        </form >
    )

}
export default InputTodo