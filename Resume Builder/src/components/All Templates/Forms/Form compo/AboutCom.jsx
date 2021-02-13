import React from 'react'

function AboutCom({setAbout}) {

    const input = (e)=>{
       setAbout(e.target.value);
    }

    return (
        <div className="ip_div">
                    <label>About You
                        <textarea name="about" placeholder="Write in Short About Yourself" required="true" onChange={input}>
                        </textarea>
                    </label>
                </div>
    )
}

export default AboutCom
