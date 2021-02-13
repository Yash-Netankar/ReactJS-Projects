import React from 'react'

function NameCom({setName}) {

    const input = (e)=>{
        let {name, value} = e.target;
        setName(prev=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    return (
    <div className="ip_div">
        <label>First Name
            <input type="text" name="fname" placeholder="Enter Your First Name" required="true" onChange={input}/>
        </label>
        <label>Middle Name (optional)
            <input type="text" name="mname" placeholder="Enter Your Middle Name" required="true" onChange={input}/>
        </label>
        <label>Last Name
            <input type="text" name="lname" placeholder="Enter Your Last Name" required="true" onChange={input}/>
        </label>
    </div>
    )
}

export default NameCom;
