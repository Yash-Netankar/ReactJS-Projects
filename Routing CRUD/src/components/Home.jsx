import React, { createContext, useEffect, useState } from "react";
import "../styles/home.css";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UData from "./UserData";

const ObjData = createContext();

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    LoadUser();
  }, []);

    const LoadUser = async()=>{
      const res = await axios.get("http://localhost:3003/users");
      setUser(res.data);
    }

  return (
    <>
    <div className="container">
      <div className="py-4">
    <h1>Users Table</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{
            <ObjData.Provider value={user}>
              <UData load={()=>LoadUser()}/>
            </ObjData.Provider>
          }
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
export default Home;
export {ObjData}
