import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList"
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    state = {
        todos: [],
        //     {
        //         id: uuidv4(),
        //         title: "Todo 1",
        //         completed: true
        //     },
        //     {
        //         id: uuidv4(),
        //         title: "Todo 2",
        //         completed: false
        //     },
        //     {
        //         id: uuidv4(),
        //         title: "Todo 3",
        //         completed: true
        //     }
        // ]
    }
    componentDidMount() {

        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
        //     .then(res => res.json())
        //     .then(data => localStorage.setItem('todos', data))



        //     // const obj = {
        //     //     method: 'POST',
        //     //     headers: { 'Content-Type': 'application/json' },
        //     //     body: JSON.stringify({ title: 'React Post Request Example' })
        //     // };
        //     // fetch('https://reqres.in/api/posts', obj)
        //     //     .then(res => res.json())
        //     //     .then(data => this.setState({ postId: data.id }));


        const temp = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem('todos', temp)
        }
    }
    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }
    delTodo = id => {
        this.setState(
            {
                todos: [
                    ...this.state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            }
        )
    }
    addTodoItem = (title, completed) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: completed == 'on' ? true : false

        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }
    UpdateTodoProps = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {

                    todo.title = updatedTitle
                }
                return todo

            })
        })
    }

    render() {
        console.log('todo', this.state.todos)
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        setUpdate={this.setUpdate}
                        UpdateTodoProps={this.UpdateTodoProps}
                        deleteTodoProps={this.delTodo}

                    />
                </div>
            </div>
        )
    }
}
export default TodoContainer