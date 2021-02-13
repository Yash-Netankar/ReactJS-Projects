import React, { useState, useLayoutEffect } from "react";
import {Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthCtx";
import Nav from "./Nav";
import "../styles/nav.css";
import Logo1 from '../styles/images/logo1.svg';
import Logo2 from '../styles/images/logo2.svg';
import SearchDiv from './SearchDiv';
import Templates from './TemplatesDiv';

function Dashboard() {
  const [loggedin, setLoggedin] = useState(false);
  const [Error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState();

  const searchValue = (searchVal)=>{
    setSearch(searchVal)
  }

  const history = useHistory();

  const { CurrentUser, logout } = useAuth();

  useLayoutEffect(() => {
    if (CurrentUser) {
      setLoggedin(true);
    }
  });

  const HandleLogout = async () => {
    setError("");

    try {
      await logout();
      setLoggedin(false);
      history.push("/login");
    } catch {
      setError("Failed To Log Out!!");
      alert(Error);
    }
  };

  if (loggedin) {
    return (
      <div>
        <Nav login="/login" logout={HandleLogout} signup="/signup" logo={Logo1} logo2={Logo2}/>
        <SearchDiv login={true} searchValue={searchValue}/>
        <Templates login={true} search={search}/>
      </div>
    );
  } else {
    return (
      <>
        {/* navbar */}
        <nav>
          <div className="logo">
           <Link to="/">
             <img src={Logo1} alt="Logo"/>
           </Link>
          </div>
          <div className="navbar">
            <ul className="nav_items">
              <Link to="/login" className="li">Login</Link>
              <Link to="/signup" className="li">Signup</Link>
              <i className='fas fa-bars'></i>
            </ul>
          </div>
          <i className='fas fa-bars' onClick={()=>setOpen(!open)}></i>
        </nav>
        {/* sidebar */}
        <div className= {open? "sidebar show": "sidebar hide"}>
            <div className="logo">
                <div className="img">
                    <Link to="/">
                        <img src={Logo2} alt="Logo"/>
                    </Link>
                </div>
                
                <div className="close">
                    <i class='fas fa-times' onClick={()=>setOpen(false)}></i>
                </div>
            </div>
            <ul>
                <Link to="/singup" className="li">SignUp</Link>
                <Link to="/login" className="li">Login</Link>
            </ul>
            <p>Created With 💕</p>
        </div>
        {/* SearchDiv */}
        <div>
          <SearchDiv login={false}/>
        </div>
        <Templates login={false}/>
      </>
    );
  }
}

export default Dashboard;
