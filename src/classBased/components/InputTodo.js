import React from "react";
import { Component, useState } from "react/cjs/react.production.min";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const notify = (message, hasError = false) => {
    debugger
    if (hasError) {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    else {
        toast(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

}
// const handleCopyPassword = (e) => {
//     if (password === "") {
//         notify(COPY_Fail, true)
//     }
//     else {
//         copyToClipboard(password)
//         notify(COPY_SUCCESS)
//     }

// }
class InputTodo extends Component {
    state = {
        title: '',
        completed: false
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            // [e.target.name]: e.target.value
        })
        debugger
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title, this.state.completed)
            this.setState({
                title: '',
                completed: false
            })
        }
        else {
            alert("Please write item")
            // notify("Please write item", true)
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <div className="checkbox-container">
                    <input type="checkbox" name="completed" className="input-checkbox"
                        checked={this.state.completed}
                        onChange={this.onChange} />
                </div>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo...."
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                />



                <button className="input-submit" >Submit</button>
            </form>
        )
    }
}
export default InputTodo