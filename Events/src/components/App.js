import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Events from "./Event";
import axios from 'axios';

import Add from "./AddEvent";

const App = ()=>{

    const[event, SetEvent] = useState([]);

    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const res = await axios.get("http://localhost:3003/users");
        SetEvent(res.data);
    }

    const Clear = ()=>{
        SetEvent([])
    }

    return(<>
        <div className="main-app">
            <div className="app">
                <h2>Total &nbsp;Events = {event.length}</h2>
                <h5>Today's Events are shown below</h5>
                <div className="events-div">
                     <Events events={event} getData={getData}/> 
                </div>
                <div className="btn-div">
                    <button className="addBtn" title="Clear List" onClick={Clear}>Clear All</button>
                    <button className="addBtn" title="See List" onClick={getData}>See All</button>
                </div>
            </div>
         <Add event={event} getData={getData}/>
        </div>
        </>
    )
}
export default App;