import React from "react";
import { useParams } from "react-router-dom";

export default function Hello() {
    const {name} = useParams();

    return (
        <div className="container card p-2">
            <h1>Hello {name}!</h1>
        </div>
    );
}