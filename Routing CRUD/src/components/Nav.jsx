import React from "react";
import "../styles/nav.css";
import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return(
        <nav>
            <div className="logo">
                <NavLink to="/" className="logo-div" style={{ textDecoration: "none"}}>
                <h1>React Routing</h1>
                </NavLink>
            </div>
            <div className="nav-items">
                <NavLink exact className="nav-link" activeClassName="active" to="/" >Home</NavLink>
                <NavLink exact className="nav-link" activeClassName="active" to="/Services" >Services</NavLink>
                <NavLink exact className="nav-link" activeClassName="active" to="/Contact" >Contact</NavLink>
                <NavLink className="btn btn-outline-light" to="../users/Add">Add User</NavLink>
            </div>
        </nav>
    )
}
export default Nav;