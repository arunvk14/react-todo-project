import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import NotMatch from "./NotMatch"
import Navbar from "./Navbar";
const TodoContainer = () => {
    const [todos, setTodos] = useState([])

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }))
    }
    useEffect(() => {

        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, []);

    // function getInitialTodos() {
    //     //getting stored item
    //     const temp = localStorage.getItem('todos')
    //     const savedTodos = JSON.parse(temp)
    //     return savedTodos || []
    // }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const addTodoItem = (title, completed) => {
        debugger
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: completed === 'on' ? true : false
        }
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }
    const UpdateTodoProps = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {

                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <TodosList todos={todos} handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdate={setUpdate}
                                UpdateTodoProps={UpdateTodoProps}
                            />
                        </div>
                    </div>
                </Route>


                <Route path="/about"> 
                    <About />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </>
    )
}
export default TodoContainer