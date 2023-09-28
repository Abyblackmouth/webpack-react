import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="MainLayout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}