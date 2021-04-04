import { useState } from "react";
import { useSelector } from "react-redux";
// import { deleteContact } from "../Redux/actions"
import Phone from "./Phone";
import AllContacts from "./AllContacts";
import Notification from "./Notification";
import Button from "@material-ui/core/Button"

const ContactBook = () => {

    const [tab, setTab] = useState(false);
    let contacts = useSelector(state => state.reducer.contactBook);

    return (
        <main className="home_container">
            <Notification />
            <div className="tabs">
                <Button className="tab_btn" onClick={() => setTab(false)} >Phone</Button>
                <Button className="tab_btn" onClick={() => setTab(true)} >Contacts</Button>
            </div>
            {
                tab ?
                    <AllContacts contacts={contacts} /> :
                    <Phone />
            }
        </main>
    )
}

export default ContactBook
