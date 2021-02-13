import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "../styles/nav.css";

function Nav(props) {

    const [open, setOpen] = useState(false);

    return (
    <>
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src={props.logo} alt="Logo"/>
                </Link>
            </div>
            <div className="navbar">
                <ul className="nav_items">
                    <Link to={props.signup} className="li">SignUp</Link>
                    <Link to="" onClick={props.logout} className="li">Logout</Link>
                </ul>
            </div>
            <i className='fas fa-bars' onClick={()=>setOpen(!open)}></i>
        </nav>

        {/* Sidebar */}
        <div className= {open? "sidebar show": "sidebar hide"}>
            <div className="logo">
                <div className="img">
                    <Link to="/">
                        <img src={props.logo2} alt="Logo"/>
                    </Link>
                </div>
                
                <div className="close">
                    <i class='fas fa-times' onClick={()=>setOpen(false)}></i>
                </div>
            </div>
            <ul>
                <Link to={props.signup} className="li">SignUp</Link>
                <Link to="" onClick={props.logout} className="li">Logout</Link>
            </ul>
            <p>Created With 💕</p>
        </div>
    </>
    )  
}

export default Nav;
