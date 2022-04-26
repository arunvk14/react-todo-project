import React from "react";
import TodoItem from "./TodoItem"

const TodosList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                    UpdateTodoProps={props.UpdateTodoProps}
                />
            ))
            }
        </ul>
    )
}

// class TodosList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 {
//                     this.props.todos.map(todo => (
//                         <TodoItem key={todo.id} todo={todo}
//                             handleChangeProps={this.props.handleChangeProps}
//                             setUpdate={this.props.setUpdate}
//                             UpdateTodoProps={this.props.UpdateTodoProps}
//                             deleteTodoProps={this.props.deleteTodoProps}

//                         />
//                     ))
//                 }
//             </ul >
//         )
//     }
// }
export default TodosList