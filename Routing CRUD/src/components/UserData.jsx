import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import {ObjData} from './Home';
import axios from "axios";

const Udata = (props)=>{
    const DelUser = async(id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        props.load();
    }

    const data = useContext(ObjData);
    return(<>
          {
            data.map((u,index)=>(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${u.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mr-3" to={`/users/edit/${u.id}`}>Edit</Link>
                    <Link className="btn btn-danger" onClick={()=>DelUser(u.id)}>Del</Link>
                    </td>
                </tr>
            ))
        }
        </>)

}
export default Udata;