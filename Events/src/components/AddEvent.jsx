import Axios from 'axios';
import React, { useState } from 'react';
import "../styles/add.css";

const Add = (props)=>{
    const[event, setEventName] = useState({
        eventName:"",
        date:""
    });

    const getEvent = (e)=>{
        const{name, value} = e.target;
        setEventName((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const AddEventToData = async(e)=>{
        e.preventDefault();
        Axios.post(`http://localhost:3003/users`, event);
        props.getData();
    }

    return(
        <form onSubmit={AddEventToData} autoComplete="off">
            <label htmlFor="name">Add Event</label>  
            <input type="text" 
                placeholder="Enter Event name"
                id="name"
                name="eventName" 
                onChange={getEvent} 
                value={event.eventName}
                />

            <label htmlFor="date">Add Date</label>  
            <input type="text" 
                id="date"
                placeholder="Enter Date in dd/mm format only"
                name="date"
                onChange={getEvent} 
                value={event.date}
                />
            <small>eg: 12/5</small>
            <small>eg: 1/12</small>
            
            
            <button type="submit" title="Add new Event" >Add</button>
        </form>
    )
}

export default Add;