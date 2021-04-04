import React from 'react';
import { NavLink } from "react-router-dom"
import Button from "@material-ui/core/Button"

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" className="homeLink">
                <h1 className="logo">Phonebook</h1>
            </NavLink>
            <NavLink to="/create" className="create_btn_link">
                <Button className="create_btn">Create Contact</Button>
            </NavLink>
        </nav>
    )
}

export default Nav
