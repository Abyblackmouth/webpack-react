
import React, {useContext, useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom"

import * as actionTypes from "../../store/actions/todoAction"

export default function TodoEdit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const todos = useSelector((state) => state.todoReducer.todos)

    const [activeTodo, setActiveTodo] = useState({})
    const todoNameImput = useRef(null)
    const todoDescriptionInput = useRef(null)
    const todoDoneCheckbox = useRef(null)

    function finishEdith(){
        const editedTodo = {
            id: Number(id),
            name: todoNameImput.current.value,
            description: todoDescriptionInput.current.value,
            done: todoDoneCheckbox.current.checked
        }

        dispatch({
            type: actionTypes.EDIT_TODO,
            payload: editedTodo

        })
        navigate('/')
    }



    useEffect(()=> {
        const newTodo = todos.find((todo) =>{
            return todo.id === Number(id)
        })

        setActiveTodo(newTodo)
    }, [id])


    return (
        <div className="TodoEdit">
            {
                activeTodo.name ? (
                    <>
                    <Link to="/">Back to Todo List</Link>
                    <h1>Task # {id} {activeTodo.name}</h1>
                    <div className="form-group">
                        <label htmlfor="todoName">Name</label>
                        <input ref={todoNameImput} className="from-control" id="todoName" defaultValue={activeTodo.name}/>
                    </div>
                    <div className="from-group">
                        <label htmlfor="todoDescription">Description</label>
                        <input ref={todoDescriptionInput} className="from-control" id="todoDescription" defaultValue={activeTodo.description}/>
                    </div>
                    <div className="from-group form-check">
                        <input ref={todoDoneCheckbox} type="checkbox" className="form-check-input" id="todoDone" defaultChecked={activeTodo.done}/>
                        <label htmlfor="todoDone" className="form-check-label">Done</label>
                    </div>
                    <button className="btn btn-primary btn-sm pull-right" onClick={()=> finishEdith()}>Finish Edit</button>
                    <p>Status: {activeTodo.description}</p>
                    </>
                ) : ( 'Loading...')
            }
        </div>
    )
}