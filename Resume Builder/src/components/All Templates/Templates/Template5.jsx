import React, {useRef,useState } from 'react';
import Form from "../Forms/Form";
import "../../../styles/All templates/Template3/Template3.css";
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
        <div className="template3">
        {/* name and post*/}
            <h1 className="name" style={{color:"#3498db"}}>{this.props.fname} {this.props.mname} {this.props.lname}</h1>
            <h3 className="post">{this.props.post}</h3>
            {/* social */}
            <div className="social">
                <p className="email">{this.props.email}</p>
                <a href={this.props.github} className="github">Github</a>
                <a href={this.props.linkedIn} className="linkedIn">LinkedIn</a>
            </div>
            {/* about */}
            <div className="about_container">
                <h1 className="about_heading" style={{color:"#ecf0f1",background:"#3498db"}}>Professional Summary</h1>
                <p className="about">{this.props.about}</p>
            </div>
            {/* experience */}
            <div className="exp_container">
                <h1 className="exp_heading"  style={{color:"#ecf0f1",background:"#3498db"}}>Employement History</h1>
                <section className="exp">
                    <p className="exp_name">{this.props.expname}</p>
                    <p className="exp_desc">{this.props.expdesc}</p>
                </section>
            </div>
            {/* education */}
            <div className="edu_container">
                <h1 className="edu_heading"  style={{color:"#ecf0f1",background:"#3498db"}}>Education</h1>
                <section className="edu">
                    <p className="edu_name">{this.props.edname}</p>
                    <p className="edu_desc">{this.props.eddesc}</p>
                </section>
            </div>
            {/* projects */}
            <div className="projects">
                <h1 className="pro_heading" style={{color:"#ecf0f1",background:"#3498db"}}>Projects OR Activities</h1>
                <section className="pro">
                    <p className="p_name">{this.props.pname}</p>
                    <p className="p_desc">{this.props.pdesc}</p>
                </section>
                <section className="pro">
                    <p className="p_name">{this.props.pname2}</p>
                    <p className="p_desc">{this.props.pdesc2}</p>
                </section>
            </div>
            {/* Skills And Tools */}
            <div className="sk_container">
                <h1 className="sk_heading" style={{color:"#ecf0f1",background:"#3498db"}}>Skills & Tools</h1>
                <section className="skills">
                    <p className="sk_name">{this.props.skill1}</p>
                    <p className="sk_name">{this.props.skill2}</p>
                    <p className="sk_name">{this.props.skill3}</p>
                    <p className="sk_name">{this.props.skill4}</p>
                    <p className="sk_name">{this.props.skill5}</p>
                </section>
                <section className="tools">
                    <p className="tool_name">{this.props.tool1}</p>
                    <p className="tool_name">{this.props.tool2}</p>
                    <p className="tool_name">{this.props.tool3}</p>
                </section>
            </div>
        </div>
       )
    }
}

export default ResumeFillForm;