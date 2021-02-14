import React from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Service from "./Service";
import Home from "./Home";
import Nav from "./Nav";
import Error from './Error';
import AddUser from "../users/Add";
import EditUser from "../users/Edit";
import View from "../users/View";

const App = ()=>{
    return(
        <div className="main-app">
        <Nav/>
            <Switch>
                <Route exact path="/"component={Home}></Route>
                <Route exact path="/Contact" component={Contact}></Route>
                <Route exact path="/Services" component={Service}></Route>
                <Route exact path="/users/add" component={AddUser}></Route>
                <Route exact path="/users/edit/:id" component={EditUser}></Route>
                <Route exact path="/users/:id" component={View}></Route>
                <Route  component={Error}></Route>
            </Switch>
        </div>
    )
}
export default App;