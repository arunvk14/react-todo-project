import React from "react";
import TodoItem from "./TodoItem"
class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            setUpdate={this.props.setUpdate}
                            UpdateTodoProps={this.props.UpdateTodoProps}
                            deleteTodoProps={this.props.deleteTodoProps}

                        />
                    ))
                }
            </ul >
        )
    }
}
export default TodosList