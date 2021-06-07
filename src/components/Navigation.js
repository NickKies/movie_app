import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">UseState</Link>
            <Link to="/useInput">UseInput</Link>
            <Link to="/useTabs">UseTabs</Link>
            <Link to="/useTitle">UseTitle</Link>
            <Link to="/useClick">UseClick</Link>
            <Link to="/useConfirm">UseConfirm</Link>
        </div>
    );
}

export default Navigation;