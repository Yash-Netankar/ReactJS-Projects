import React from 'react'

function SocialPlat({setSocial}) {

    const input = (e)=>{
        let{name,value} = e.target;
        setSocial(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <div className="ip_div">
        <label>GitHub Link
            <input type="text" name="github" placeholder="Enter Your GitHub Link" required="true" onChange={input}/>
        </label>
        <label>LinkedIn Link
            <input type="text" name="linkedIn" placeholder="Enter Your Linked Link" required="true" onChange={input}/>
        </label>
    </div>
    )
}

export default SocialPlat
