import React from "react";

export default function Navbar() {
    return (
        <div className="Navbar navbar bg-light mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Todo list app</a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/todolist">TL home</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}