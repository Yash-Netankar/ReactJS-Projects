import React from 'react'

function ProjectsCom({setProjects, setProjects2}) {


    const input = (e)=>{
        let{name, value} = e.target;
        setProjects(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const input2 = (e)=>{
        let{name, value} = e.target;
        setProjects2(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <div className="project_div">
                        <h1 className="p_heading">Projects</h1>
                        <div className="p_container">
                            <div className="project">
                                <label>Project Name:
                                    <input type="text" name="pname" placeholder="Enter Project Name" required="true" onChange={input}/>
                                </label>
                                <label>Project Link:
                                    <input type="text" name="plink" placeholder="Enter Project Link" required="true" onChange={input}/>
                                </label>
                                <label>Project Description:
                                    <input type="text" name="pdesc" placeholder="Enter Project Description" required="true" onChange={input}/>
                                </label>
                                <label>Technologies Used:
                                    <input type="text" name="ptech" placeholder="Technologies used in Project" required="true" onChange={input}/>
                                </label>
                        </div>
                            {/* project 2 */}
                            <div className="project">
                                <label>Project Name:
                                    <input type="text" name="pname" placeholder="Enter Project Name" required="true" onChange={input2}/>
                                </label>
                                <label>Project Link:
                                    <input type="text" name="plink" placeholder="Enter Project Link" required="true" onChange={input2}/>
                                </label>
                                <label>Project Description:
                                    <input type="text" name="pdesc" placeholder="Enter Project Description" required="true" onChange={input2}/>
                                </label>
                                <label>Technologies Used:
                                    <input type="text" name="ptech" placeholder="Technologies used in Project" required="true" onChange={input2}/>
                                </label>
                        </div>
                        </div>
                </div>
    )
}

export default ProjectsCom;
