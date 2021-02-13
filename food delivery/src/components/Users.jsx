import React, { useEffect, useState } from "react";
import FireBase from '../firebase.js';

const Users = () => {
  const [users, setAddr] = useState({});

  useEffect(() => {
    FireBase.child("user").on('value', snapshot=>{
      if(snapshot.val()!=null)
        setAddr({
          ...snapshot.val()
        });
    })
    
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1 className="text-center">Recent Orders</h1>
        <small style={{fontSize:"11px"}} className="text-danger">*Names are hidden for privacy reasons</small><br/>
        <small style={{fontSize:"11px"}} className="text-danger">*Limited Data is shown</small>
        <h4 className="text-center text-danger">This page's Devlopment in Progress!!</h4>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th style={{fontSize:"18px"}} >Name</th>
              <th style={{fontSize:"18px"}} >Address</th>
            </tr>
          </thead>
          <tbody>
            {
             Object.keys(users).map(key=>{
             return(
                <tr>
                  <td style={{fontSize:"14px"}} >{`${users[key].name}`.substr(0,2)+"xxx"}</td>
                  <td style={{fontSize:"14px"}} >{users[key].address}</td>
                </tr>
                 )
             })
                
              }
              
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
