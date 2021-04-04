import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getContact, updateContact } from "../Redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const UpdateContact = () => {
    const { id } = useParams();
    const h = useHistory();

    const dispatch = useDispatch();

    let contact = useSelector(state => state.reducer.contact)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(getContact(id));
    }, [contact]);

    const updateExistingContact = (e) => {
        e.preventDefault();
        let obj = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(obj));
        h.push("/")
    }

    return (
        <div className="createContact_div">
            <form id="create_form" autoComplete="off" onSubmit={updateExistingContact}>
                <input type="text" placeholder="Enter Name" name="name" required value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Enter Contact No" name="phone" required value={phone} onChange={e => setPhone(e.target.value)} />
                <input type="email" placeholder="Enter Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Button className="create_btn" type="submit">Update Existing Contact<AddIcon /></Button>
            </form>
        </div>
    )
}

export default UpdateContact

