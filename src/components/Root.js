import React from "react";
import "./root.css"

import NavBar from "./NavBar";
import { Outlet } from "react-router";

export default function Root(){
    return(
        <div className="root-container">
            <NavBar />
            <Outlet />
        </div>
    )
}