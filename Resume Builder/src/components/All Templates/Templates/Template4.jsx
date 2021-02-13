import React, {useRef,useState } from 'react';
import Form from "../Forms/Form";
import "../../../styles/All templates/Template4/Template4.css";
import { useReactToPrint } from 'react-to-print';

// FORM FOR RESUME
const ResumeFillForm = ()=>{

    // name state for form
    const [name, setName] = useState({
        fname:"",
        mname:"",
        lname:""
    })
    // about
    const [about, setAbout] = useState();
    // post
    const [post, setPost] = useState();
    // email
    const [email, setEmail] = useState();
    // social platforms
    const [social, setSocial] = useState({
        github:"",
        linkedIn:""
    })
    // projects for form
    const [projects, setProjects] = useState({
        pname:"",
        plink:"",
        pdesc:"",
        ptech:""
    })
    const [projects2, setProjects2] = useState({
        pname:"",
        plink:"",
        pdesc:"",
        ptech:""
    })
    // experience 
    const [exp, setExp] = useState({
        exname:"",
        exdesc:""
    });
    // education 
    const [ed, setEd] = useState({
        edname:"",
        eddesc:""
    });
    // skills 
    const [skills, setSkills] = useState({
        skill1:"",
        skill2:"",
        skill3:"",
        skill4:"",
        skill5:"",
    });
    // tools 
    const [tools, setTools] = useState({
        tool1:"",
        tool2:"",
        tool3:"",
        tool4:"",
        tool5:"",
    });
    // skills progress
    const [skillsprogress, setSkillsprogress] = useState({
        skill_pro1:50,
        skill_pro2:50,
        skill_pro3:50,
        skill_pro4:50,
        skill_pro5:50,
    });
    // languages
    const [lang, setLang] = useState({
        lang1:"",
        lang2:"",
        lang3:""
    });
    // languages progress
    const [langprogress, setlangprogress] = useState({
        lang_pro1:50,
        lang_pro2:50,
        lang_pro3:50
    });

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
    <>
    {/* passing data to class compomnents */}
        <Form setName={setName} setAbout={setAbout} setPost={setPost} setEmail={setEmail}
            setSocial={setSocial}
            setProjects={setProjects} setProjects2={setProjects2}
            setExp={setExp}
            setEd={setEd}
            setSkills={setSkills} setTools={setTools}
            setSkillsprogress={setSkillsprogress}
            setLang={setLang}  setlangprogress={setlangprogress}
            extra={true}
        />
        <ComponentToPrint fname={name.fname} mname={name.mname} lname={name.lname}
            about={about}
            post={post}
            email={email}
            github={social.github} linkedIn={social.linkedIn}
            pname={projects.pname} pdesc={projects.pdesc} ptech={projects.ptech} plink={projects.plink}
            pname2={projects2.pname} pdesc2={projects2.pdesc} ptech2={projects2.ptech} plink2={projects2.plink}
            expname={exp.exname} expdesc={exp.exdesc}
            edname={ed.edname} eddesc={ed.eddesc}
            skill1={skills.skill1} skill2={skills.skill2} skill3={skills.skill3} skill4={skills.skill4} skill5={skills.skill5}
            skill_p1={skillsprogress.skill_pro1} skill_p2={skillsprogress.skill_pro2} skill_p3={skillsprogress.skill_pro3} skill_p4={skillsprogress.skill_pro4} skill_p5={skillsprogress.skill_pro5}
            tool1={tools.tool1} tool2={tools.tool2} tool3={tools.tool3} tool4={tools.tool4} tool5={tools.tool5}
            lang1={lang.lang1} lang2={lang.lang2} lang3={lang.lang3}
            lang_p1={langprogress.lang_pro1} lang_p2={langprogress.lang_pro2} lang_p3={langprogress.lang_pro3}
            ref={componentRef}
        />
        <button className="pdf_btn" onClick={handlePrint}>Download Your Resume</button>
    </>
    )
}

// ACTUAL RESUME
class ComponentToPrint extends React.Component{
    constructor(props) {
       super(props);
   }
    render(){
       return (
        <div className="template4">
        {/* section 1 */}
            <section className="sec1">
            {/* name_social */}
                <div className="name_social">
                    <h1 className="name">{this.props.fname} {this.props.mname} {this.props.lname}</h1>
                    <p><i className='fas fa-user-alt'></i>{this.props.post}</p>
                    <p><i className='fas fa-at'></i>{this.props.email}</p>
                    <a href={this.props.github}><i className='fab fa-github'></i>Github</a>
                    <a href={this.props.linkedIn}><i className='fab fa-linkedin-in'></i>LinkedIn</a>
                </div>
            {/* about */}
                <div className="about_container">
                    <h1 className="about_heading"><i className="far fa-edit"></i>Professional Summary</h1>
                    <p className="about">{this.props.about}</p>
                </div>
            {/* experience */}
                <div className="exp_container">
                    <h1 className="exp_heading"><i className='fas fa-globe'></i>Employement History</h1>
                    <p className="exp_name">{this.props.expname}</p>
                    <p className="exp_desc">{this.props.expdesc}</p>
                </div>
            {/* education */}
                <div className="ed_container">
                    <h1 className="ed_heading"><i className='fas fa-graduation-cap'></i>Education</h1>
                    <p className="ed_name">{this.props.edname}</p>
                    <p className="ed_desc">{this.props.eddesc}</p>
                </div>
            {/* projects */}
                <div className="project_container">
                    <h1 className="pro_heading"><i className="fas fa-lightbulb"></i>Projects OR Activities</h1>
                    <div className="projects">
                    <div>
                        <a href={this.props.plink}>{this.props.pname}</a>
                        <p className="pdesc">{this.props.pdesc}</p>
                        <p className="ptech">Technology Used: {this.props.ptech}</p>
                    </div>
                    <div>
                        <a href={this.props.plink2}>{this.props.pname2}</a>
                        <p className="pdesc">{this.props.pdesc2}</p>
                        <p className="ptech">Technology Used: {this.props.ptech2}</p>
                    </div>
                    </div>
                </div>
            </section>
            {/* section 2 */}
            <section className="sec2">
                <div className="sk_container">
                    <h1 className="sk_heading"><i className='fab fa-gratipay'></i>Skills</h1>
                    <div className="skills">
                        <section className="skill_item">
                            <label htmlFor="skill1">{this.props.skill1}</label>
                            <progress id="skill1" value={this.props.skill_p1} max="100"></progress>
                        </section>
                        <section className="skill_item">
                            <label htmlFor="skill2">{this.props.skill2}</label>
                            <progress id="skill2" value={this.props.skill_p2} max="100"></progress>
                        </section>
                        <section className="skill_item">
                            <label htmlFor="skill3">{this.props.skill3}</label>
                            <progress id="skill3" value={this.props.skill_p3} max="100"></progress>
                        </section>
                        <section className="skill_item">
                            <label htmlFor="skill4">{this.props.skill4}</label>
                            <progress id="skill4" value={this.props.skill_p4} max="100"></progress>
                        </section>
                        <section className="skill_item">
                            <label htmlFor="skill5">{this.props.skill5}</label>
                            <progress id="skill5" value={this.props.skill_p5} max="100"></progress>
                        </section>

                    </div>
                </div>
                {/* tools */}
                <div className="tool_container">
                    <h1 className="tool_heading"><i className='fas fa-tools'></i>Tools</h1>
                    <p className="tool">{this.props.tool1}</p>
                    <p className="tool">{this.props.tool2}</p>
                    <p className="tool">{this.props.tool3}</p>
                </div>
                {/* languages */}
                <div className="lang_container">
                    <h1 className="lang_heading"><i className='fas fa-microphone'></i>Languages</h1>
                    <div className="lang">
                        <section className="lang_item">
                            <label htmlFor="lang1">{this.props.lang1}</label>
                            <progress id="lang1" value={this.props.lang_p1} max="100"></progress>
                        </section>
                        <section className="lang_item">
                            <label htmlFor="lang2">{this.props.lang2}</label>
                            <progress id="lang2" value={this.props.lang_p2} max="100"></progress>
                        </section>
                        <section className="lang_item">
                            <label htmlFor="lang3">{this.props.lang3}</label>
                            <progress id="lang3" value={this.props.lang_p3} max="100"></progress>
                        </section>
                    </div>
                </div>

            </section>
        </div>
        )
    }
}

{/* <progress id="file" value="32" max="100"> 32% </progress> */}
export default ResumeFillForm;