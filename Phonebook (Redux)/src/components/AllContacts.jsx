import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "../Redux/actions"
import { NavLink } from "react-router-dom"
import Avatar from 'react-avatar';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

const AllContacts = ({ contacts }) => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [actionDiv, setActionDiv] = useState(false);

    const Search = () => {
        let allContacts = document.querySelectorAll(".info_name");
        allContacts.forEach(ele => {
            let uname = ele.innerText;
            let contact = ele.parentElement.parentElement.parentElement.parentElement;
            if (uname.toLowerCase().includes(search.toLowerCase()))
                contact.style.display = "block"
            else
                contact.style.display = "none"
        })
    }

    const ActionDiv = (id) => {
        setActionDiv(!actionDiv);
        let className = `${id}_actions`;
        let allActionsDiv = document.querySelectorAll(".actions");
        allActionsDiv.forEach(ele => {
            if (ele.classList.contains(className)) {
                ele.style.display = "block";
            }
            else {
                ele.style.display = "none"
            }
        })
    }

    return (
        <ul className="allContacts_div">
            {/* search box */}
            <input type="search" id="contact_search" placeholder={`Search Amoung ${contacts.length} Contacts`} onChange={(e) => setSearch(e.target.value)} onKeyUp={Search} value={search} />
            {/* all contacts */}
            {
                contacts.map(contact => {
                    return (
                        <div className="wrapper">
                            <li key={contact.id} className="allContact_contact">
                                <div className="info_div_container">
                                    <div className="info_div">
                                        <Avatar name={contact.name} round={true} size="35" />
                                        <div className="info">
                                            <p className="info_name">{contact.name}</p>
                                            <p className="info_phone">{contact.phone}</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => ActionDiv(contact.id)}><InfoIcon className="i" /></Button>
                                </div>
                                <div className={`${contact.id}_actions actions`} style={{ display: "none" }}>
                                    <NavLink className="actionLink" to={`update/${contact.id}`}>
                                        <Button>
                                            <EditIcon className="actionIcon" />
                                        </Button>
                                    </NavLink>
                                    <Button onClick={() => dispatch(deleteContact(contact.id))}>
                                        <DeleteIcon className="actionIcon" />
                                    </Button>
                                </div>
                            </li>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default AllContacts
