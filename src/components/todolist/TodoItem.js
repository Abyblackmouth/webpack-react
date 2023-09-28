import React from "react";

export default function TodoItem(props) {
    const {id, name, description, done} = props.data;
    const {remove, edit} = props;

    return (
        <div className="TodoItem container card m-2 py-1 px-2 d-flex flex-row">
            <div className="col-1">
                <input type="checkbox" checked={done} onChange={() => {}} />
            </div>
            <div className="col-9">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="col-2">
                <button className="btn btn-danger mx-2 py-1 px-3" onClick={() => {remove(id)}}>X</button>
                <button className="btn btn-success ml-1 py-1 px-3" onClick={() => {edit(id)}}>Editar</button>
            </div>
        </div>
    );
}