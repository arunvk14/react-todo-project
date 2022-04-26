import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css"
import {
    AiOutlineDelete, AiOutlineEdit, AiOutlineSave
} from "react-icons/ai"
const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }
    const editTodoProps = id => {
 

        setEditing(true)
}
const Update = () => {
    setEditing(false)
}
const { completed, id, title } = props.todo
let viewMode = {}
let editMode = {}

if (editing) {
    viewMode.display = "none"
}
else {
    editMode.display = "none"
}

useEffect(() => {
    return () => {
        console.log("Cleaning Up..")
    }
}, [])
return (

    <li className={styles.item}>
        <div onDoubleClick={handleEditing}>

            <input type="checkbox" checked={completed}
                className={styles.checkbox} style={editMode}
                onChange={() => props.handleChangeProps(id)} />

            <input type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone} />


            <button style={viewMode} onClick={() => editTodoProps(id)}>
                <AiOutlineEdit style={{color:"darkblue",fontSize:"20px"}}/>
            </button>

            <button style={editMode} onClick={() => Update()} >
                <AiOutlineSave style={{color:"darkgreen",fontSize:"20px"}}/>
            </button>

            <button style={viewMode} onClick={() => props.deleteTodoProps(id)}>
                <AiOutlineDelete style={{color:"orangered",fontSize:"20px"}}/>
            </button>
            <div className="div" style={viewMode}>
                <input type="checkbox" checked={completed}
                    className={styles.checkbox} disabled
                    onChange={() => props.handleChangeProps(id)} style={viewMode} />
                {/* <span >
                        <i className="fa-light fa-pen-to-square"></i>
                        {title}
                    </span> */}
                <span >{title}</span>
            </div>
        </div>


    </li>

)
}
export default TodoItem
// class TodoItem extends React.Component {
//     state = {
//         editing: false,
//         titlename: ''
//     }
//     handleEditing = () => {
//         this.setState({
//             editing: true
//         })
//     }
//     handleUpdatedDone = event => {
//         if (event.key === "Enter") {
//             this.setState({ editing: false })
//         }
//     }
//     editTodoProps = id => {
//         this.setState({
//             editing: true
//         })

//     }
//     Update() {
//         this.setState({
//             editing: false
//         })
//     }
//     componentWillUnmount() {
//         console.log("Cleaning up...../.../....")
//     }
//     render() {

//         const { completed, id, title } = this.props.todo
//         let viewMode = {}
//         let editMode = {}

//         if (this.state.editing) {
//             viewMode.display = "none"
//         }
//         else {
//             editMode.display = "none"
//         }
//         return (
            // <li className={styles.item}>
            //     <div onDoubleClick={this.handleEditing}>


            //         <input type="checkbox" checked={completed}
            //             className={styles.checkbox} style={editMode}
            //             onChange={() => this.props.handleChangeProps(id)} />

            //         <input type="text"
            //             style={editMode}
            //             className={styles.textInput}
            //             value={title}
            //             onChange={e => {
            //                 this.props.setUpdate(e.target.value, id)
            //             }}
            //             onKeyDown={this.handleUpdatedDone} />


            //         <button style={viewMode} onClick={() => this.editTodoProps(id)}>

            //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            //                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
            //                 <path strokeLinecap="round" strokeLinejoin="round"
            //                     d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            //             </svg>
            //         </button>
            //         <button style={editMode} onClick={() => this.Update()} ><svg xmlns="http://www.w3.org/2000/svg"
            //             className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            //             <path strokeLinecap="round" strokeLinejoin="round"
            //                 d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            //         </svg></button>
            //         <button style={viewMode} onClick={() => this.props.deleteTodoProps(id)}>
            //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  >
            //                 <path d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h4.75a.75.75 0 010 1.5H3.5a1 1 0 100 2h4.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9z"></path>
            //                 <path d="M11.28 10.22a.75.75 0 10-1.06 1.06L11.94 13l-1.72 1.72a.75.75 0 101.06 1.06L13 14.06l1.72 1.72a.75.75 0 101.06-1.06L14.06 13l1.72-1.72a.75.75 0 10-1.06-1.06L13 11.94l-1.72-1.72z"></path></svg>
            //         </button>
            //         <div className="div" style={viewMode}>
            //             <input type="checkbox" checked={completed}
            //                 className={styles.checkbox} disabled
            //                 onChange={() => this.props.handleChangeProps(id)} style={viewMode} />
            //             <span >
            //                 {/* <i className="fa-light fa-pen-to-square"></i> */}
            //                 {title}
            //             </span>
            //         </div>
            //     </div>


            // </li>
//         )
//     }
// }

// export default TodoItem