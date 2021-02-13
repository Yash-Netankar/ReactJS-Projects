import React from 'react';
import "../../../styles/Forms/Form1.css";
// Form components
import NameCom from "./Form compo/NameCom";
import AboutCom from "./Form compo/AboutCom";
import SocialPlat from "./Form compo/SocialPlat";
import ProjectsCom from './Form compo/ProjectsCom';
import ExpCom from './Form compo/ExpCom';
import SkillTools from './Form compo/Skill&Tools';
import Extra from './Form compo/Extra';

function Form({setName, setAbout, setEmail, setSocial, setProjects, setProjects2, setExp, setEd, setSkills, setTools, setPost, extra, setSkillsprogress ,setLang, setlangprogress}) {

    const Email = (e)=>{
        setEmail(e.target.value);
    }

    const education = (e)=>{
        let{name,value} = e.target;
        setEd(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    return (
        <div className="resume_form_container">
            <h1 className="resume_form_title">Fill The Info To Build Your <span>Perfect Resume</span></h1>
            <form className="resume_form">
                <NameCom setName={setName}/>
                <div className="ip_div post_div">
                    <label>Post You Would Like to Apply For?
                        <input type="email" name="post" placeholder="What Post You Want To Apply For" required="true" className="post" onChange={(e)=>setPost(e.target.value)}/>
                    </label>
                </div>
                <AboutCom setAbout={setAbout}/>
                <div className="ip_div">
                    <label>Email
                        <input type="email" name="email" placeholder="Enter Your Email" required="true" className="email" onChange={Email}/>
                    </label>
                </div>
                <SocialPlat setSocial={setSocial}/>
                <ProjectsCom setProjects={setProjects} setProjects2={setProjects2}/>
                <ExpCom setExp={setExp}/>
                <div className="ed_div">
                <h1 className="ed_heading">Education</h1>
                    <div className="ed_container">
                        <label>Univercity/College
                            <input type="text" placeholder="Enter where you learnt" name="edname" required="true" onChange={education}/>
                        </label>
                        <label>About Education
                            <textarea name="eddesc" placeholder="Marks/CGPA etc" required="true" onChange={education}/>
                        </label>
                    </div>
                </div>
                {/* div 8 */}
                <h1 className="sk_heading">Skills & Tools</h1>
                <SkillTools setSkills={setSkills} setTools={setTools} extra={extra} setSkillsprogress={setSkillsprogress}/>
                {extra?<Extra setLang={setLang} setlangprogress={setlangprogress}/>:null}
            </form>
            {/* <button>Button</button> */}
        </div>
    )
}

export default Form;
