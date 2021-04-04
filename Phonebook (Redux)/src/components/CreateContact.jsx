import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createContact } from "../Redux/actions.js"
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import shortid from "short-id"

const CreateContact = () => {
    const dispatch = useDispatch();
    const h = useHistory();
    const [uInfo, setUInfo] = useState({
        name: "",
        phone: "",
        email: ""
    });

    const setUserInfo = (e) => {
        let { name, value } = e.target;

        setUInfo(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const createNewContact = (e) => {
        e.preventDefault();
        let obj = Object.assign(uInfo, { id: shortid.generate() })
        dispatch(createContact(obj));
        h.push("/")
    }

    return (
        <div className="createContact_div">
            <form id="create_form" autoComplete="off" onSubmit={createNewContact}>
                <input type="text" placeholder="Enter Name" name="name" required value={uInfo.name} onChange={setUserInfo} />
                <input type="text" placeholder="Enter Contact No" name="phone" required value={uInfo.phone} onChange={setUserInfo} />
                <input type="email" placeholder="Enter Email" name="email" value={uInfo.email} onChange={setUserInfo} />
                <Button className="create_btn" type="submit">Create New Contact <AddIcon /></Button>
            </form>
        </div>
    )
}

export default CreateContact
