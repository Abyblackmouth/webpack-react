
import React, {useContext, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom"

export default function TodoEdit() {
    const {id} = useParams()
    const todos = useSelector((state) => state.todoReducer.todos)

    const [activeTodo, setActiveTodo] = useState({})

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
                    <p>Status: {activeTodo.description}</p>
                    </>
                ) : ( 'Loading...')
            }
        </div>
    )
}