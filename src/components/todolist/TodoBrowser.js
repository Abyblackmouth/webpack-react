import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useNavigate } from "react-router-dom";

export default function TodoBrowser() {

    const todosDb = [
        {
            id: 5,
            name: "Examen de Nodejs",
            description: "Hacer el examen de Nodejs",
            done: false
        },
        {
            id: 8,
            name: "Examen de React",
            description: "Hacer el examen de React",
            done: true
        },
        {
            id: 3,
            name: "Examen de Angular",
            description: "Hacer el examen de Angular",
            done: false
        }
    ];

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate()

    function removeTodo(id) {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(newTodos);
    }

    function editTodo(id) {
        navigate(`/todolist/edit/${id}`)
    }

    useEffect(() => {
        setTodos(todosDb);
    }, []);

    console.log(todos)

    return (
        <div className="TodoBrowser container card">
            <div className="text-center pt-3">
                <h1>Todo List</h1>
            </div>
            {
                todos.map((todo) => {
                    return <TodoItem key={todo.id} data={todo} remove={removeTodo} edit={editTodo}/>
                })
            }
        </div>
    );
}