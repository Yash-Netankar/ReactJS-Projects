import React, {useEffect, useState} from "react";
import "./Nav.css";

function Nav(){
    const[show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false);
        })
            return ()=>{
                window.removeEventListener("scroll");
            }
                
    }, []);

    return(
    <nav className={`Nav ${show && "nav_black"}`}>
        <h1 className="logo">NETFLIX</h1>
        <div className="bars">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </nav>
    )
}
export default Nav;