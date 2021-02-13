import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Users from "./Users.jsx";
import Home from "./Home";
import Error from "./Error";
import axios from "axios";
// nav
import Filter from "./Filter";
import "../styles/nav.css";

const App = () => {
  const API_ID = "a744698f";
  const API_KEY = "4c15392af0b507f0a076256618a85104";

    // for nav
    const [filter, setFilter] = useState();
        const label = (e) => {
        setFilter(e.target.value);
    };
    // for nav

  const [search, setSearch] = useState("paneer");
  const [recipe, setRecepi] = useState([]);

    useEffect(() => {
        FetchRecepi();
   }, []);

  const FetchRecepi = async () => {
        const res = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`)
        setRecepi(res.data.hits);
  };

  const input = (e) => {
    setSearch(e.target.value);
  };

  const Submit = () => {
    FetchRecepi();
  };


  return (
    <div className="main-app">
    <nav>
            <div className="logo">
                <NavLink to="/" className="logo-div" style={{textDecoration:"none"}}>
                <i className='fas fa-hamburger'></i>
                <h1>NyFood</h1>
                </NavLink>
            </div>
            <div className="nav-items">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/Users" className="nav-link">Recent Orders</NavLink>
                <Filter f={label}/>
            </div>
        </nav>
      <Switch>
        <Route exact path="/"  render={() => (
            <Home
              search={search}
              onChangeI={input}
              recepi={recipe}
              onSubmitB={Submit}/>
          )}></Route>
          <Route exact path="/Users" component={Users}></Route>
          <Route component={Error}></Route>
      </Switch>
    </div>
  );
};
export default App;
