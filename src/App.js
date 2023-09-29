import React, {createContext, useState} from "react";
import Counter from "./Counter";
import EpisodeBrowser from "./EpisodeBrowser";
import Pokemon from "./Pokemon";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPokemon from "./pages/SearchPokemon";
import MainLayout from "./layouts/MainLayout";
import Hello from "./components/Hello";
import Todolist from "./pages/todolist/Todolist";
import TodoEdit from "./pages/todolist/TodoEdit";
import { UseSelector } from "react-redux/es/hooks/useSelector";

export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />} >
                        <Route index element={<Todolist />} />
                    </Route>
                    <Route path="/pokemon" element={<MainLayout />} >
                        <Route path=":name" element={<SearchPokemon />} />
                    </Route>
                    <Route path="/todolist/edit" element={<MainLayout />} >
                        <Route path=":id" element={<TodoEdit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    );
}