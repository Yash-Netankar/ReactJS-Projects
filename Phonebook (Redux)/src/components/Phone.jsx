import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CallIcon from '@material-ui/icons/Call';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import BlockIcon from '@material-ui/icons/Block';

const Phone = () => {
    const ContactNumbers = useSelector(state => state.reducer.contactBook)

    const [number, setNumber] = useState([]);

    const pNumber = (e) => {
        setNumber(p => {
            return [
                ...p,
                e.target.innerText
            ]
        })
    }

    const Cut = () => {
        let arr = number;
        if (arr.length >= 1) {
            arr.pop();
            setNumber(() => ([...arr]))
        }
        else setNumber(arr)

    }

    return (
        <div className="phone_container">
            {/* getting numbers displayed on screen if found in saved contacts */}
            <ul className="search_results">
                {
                    ContactNumbers.map(contact => {
                        if (number.length >= 1 && contact.phone.includes(number.join(""))) {
                            return (
                                <li>
                                    <p>{contact.name}</p>
                                    <p className="search_num">{contact.phone}</p>
                                </li>
                            )
                        }
                        else return ""
                    })
                }
            </ul>
            <div className="keypad">
                <div className="display_number">{number}</div>
                <div className="btns">
                    <Button className="num_btn" onClick={pNumber} >1</Button>
                    <Button className="num_btn" onClick={pNumber} >2</Button>
                    <Button className="num_btn" onClick={pNumber} >3</Button>
                    <Button className="num_btn" onClick={pNumber} >4</Button>
                    <Button className="num_btn" onClick={pNumber} >5</Button>
                    <Button className="num_btn" onClick={pNumber} >6</Button>
                    <Button className="num_btn" onClick={pNumber} >7</Button>
                    <Button className="num_btn" onClick={pNumber} >8</Button>
                    <Button className="num_btn" onClick={pNumber} >9</Button>
                    <Button className="num_btn" onClick={pNumber} >*</Button>
                    <Button className="num_btn" onClick={pNumber} >0</Button>
                    <Button className="num_btn" onClick={pNumber} >#</Button>
                </div>
                <div className="call">
                    <Button className="call_btn" onClick={alert("Out Of Reach")}>
                        <CallIcon />
                    </Button>
                    <Button className="cut_btn" onClick={Cut}>
                        <HighlightOffIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Phone
