
import React from "react";
import {Link, useParams} from "react-router-dom"

export default function TodoEdit() {
    const {id} = useParams()

    return (
        <div className="TodoEdit">
            <Link to="/">Back to Todo List</Link>
            <h1>Todo {id}</h1>
        </div>
    )
}