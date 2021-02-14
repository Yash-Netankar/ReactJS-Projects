import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();

    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      pass: "",
      organisation: "",
    });
  
    const input = (e)=>{
      setUser({...user, [e.target.name]: e.target.value });
    }
  
    const Submit = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }

    useEffect(()=>{
        async function LoadUser(){
            const res = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(res.data);
        }
        LoadUser();
    },[])
  
    return (
        <div className="container mt-4">
          <h1 className="text-center">Edit the Form</h1>
          <form autoComplete="off" onSubmit={Submit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Enter You Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="name"
                value={user.name}
                onChange={input}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="Username">Enter You Username</label>
              <input
                type="text"
                className="form-control"
                id="Username"
                aria-describedby="emailHelp"
                name="username"
                value={user.username}
                onChange={input}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Enter You Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                name="email"
                value={user.email}
                onChange={input}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="pass">Enter You PassWord</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                name="pass"
                value={user.pass}
                onChange={input}
                />
            </div>
  
            <div className="form-group">
              <label htmlFor="curr">Enter You Currrent Organisation</label>
              <input
                type="text" 
                className="form-control" 
                id="curr" 
                name="organisation" 
                value={user.organisation} 
                onChange={input} />
            </div>
  
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
    );
  };
  
  export default EditUser;