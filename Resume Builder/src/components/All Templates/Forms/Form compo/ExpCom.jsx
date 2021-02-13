import React from 'react'

function ExpCom({setExp}) {
    const Exparr = [1];

    const input = (e)=>{
        let{name, value} = e.target;
        setExp(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <div className="ex_div">
                    <h1 className="ex_heading">Experience</h1>
                    {
                        Exparr.map(item=>{
                            return(
                            <div className="ex_container" key={item} >
                                <label>Worked For/As
                                    <input type="text" placeholder="Enter whom you worked for" name="exname" required="true" onChange={input}/>
                                </label>
                                <label>About Experience
                                    <input type="text" name="exdesc" placeholder="Tell us Something About Experience you gained" required="true" onChange={input}/>
                                </label>
                            </div>
                        )
                        })
                    }
                </div>
    )
}

export default ExpCom
