import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useHistory, useParams} from 'react-router-dom';

 const View = ()=>{

    const{id} = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        pass: "",
        organisation: "",
      });

      useEffect(()=>{
        async function LoadUser(){
            const res = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(res.data);
        }
        LoadUser();
    },[])

    return(
            <div className="container">
                <Link to="/" className="btn btn-success mt-5">Back</Link>
                <h1>User Id: {id}</h1>
                <hr/>
                <ul className="list-group w-50">
                    <li className="list-group-item">Name: {user.name}</li>
                    <li className="list-group-item">UserName: {user.username}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">Organisation: {user.organisation}</li>
                </ul>
            </div>
    )
 }
 export default View;