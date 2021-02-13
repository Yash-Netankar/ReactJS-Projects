import React, {useRef,useState } from 'react';
import "../../../styles/All templates/Template2/Template2.css";
import Form from "../Forms/Form";
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
            tool1={tools.tool1} tool2={tools.tool2} tool3={tools.tool3} tool4={tools.tool4} tool5={tools.tool5}
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
           <>
            <div className="template2">
                    <h1 className="name">{this.props.fname} {this.props.mname} {this.props.lname}</h1>
                {/* INFO */}
                <div className="info_container">
                    <h1 className="info_heading">Info</h1>
                        <div className="info">
                            <p><span>Applying For: </span> {this.props.post}</p>
                            <p><span>Email: </span> {this.props.email}</p>
                            <div className="social">
                                <a href={this.props.github}>GitHub</a>
                                <a href={this.props.linkedIn}>LinkedIn</a>
                            </div>
                        </div>
                </div>
                {/* ABOUT */}
                <div className="about_container">
                    <h1 className="about_heading">Summary</h1>
                    <section className="about">
                        {this.props.about}
                    </section>
                </div>
                {/* EXPERIENCE */}
                <div className="exp_container">
                    <h1 className="exp_heading">Experience</h1>
                    <div className="experience">
                        <h3 className="exp_name">{this.props.expname} </h3>
                        <p className="exp_desc">{this.props.expdesc}</p>
                    </div>
                </div>
                {/* EDUCATION */}
                <div className="edu_container">
                <h1 className="edu_heading">Education</h1>
                    <div className="education">
                        <h3 className="ed_name">{this.props.edname} </h3>
                        <p className="ed_desc">{this.props.eddesc}</p>
                    </div>
                </div>
                {/* Projects / Activities */}
                <div className="pro_container">
                <h1 className="pro_heading">Projects &nbsp;OR&nbsp; Activities</h1>
                    <div className="projects">
                        <section className="sec1">
                            <h3 className="p_title"> <a href={this.props.plink}>{this.props.pname}</a></h3>
                            <h4>{this.props.ptech}</h4>
                        </section>
                        <p className="p_desc">{this.props.pdesc}</p>
                    </div>
                </div>
                {/* Skills & Tools */}
                <div className="ski_container">
                <h3 className="ski_heading">Skills &nbsp;&&nbsp; Tools</h3>
                        <div className="skillDiv">
                            <ul>
                                <li>⭐{this.props.skill1}</li>
                                <li>⭐{this.props.skill2}</li>
                                <li>⭐{this.props.skill3}</li>
                                <li>⭐{this.props.skill4}</li>
                                <li>⭐{this.props.skill5}</li>
                            </ul>
                            <ul>
                                <li>⭐{this.props.tool1}</li>
                                <li>⭐{this.props.tool2}</li>
                                <li>⭐{this.props.tool3}</li>
                            </ul>
                        </div>
                </div>

            </div>
           </>
        )
    }
}



export default ResumeFillForm;