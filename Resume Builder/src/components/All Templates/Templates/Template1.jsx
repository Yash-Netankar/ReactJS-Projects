import React, {useRef,useState } from 'react';
import "../../../styles/All templates/Template1/Template1.css";
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
            <div className="template">
                <section className="sec1">
                    <div className="name">
                        <h2>{this.props.fname} {this.props.mname} {this.props.lname}</h2>
                        <p className="position">{this.props.post}</p>
                    </div>
                    <div className="about">
                        <h1>About Me</h1>
                        <p className="about_desc">
                            {this.props.about}
                        </p>
                    </div>
                    <div className="contact">
                        <p>{this.props.email}</p>
                    </div>
                    <div className="social_platforms">
                        <div className="platform1">
                            <a href={this.props.github}>Github</a>
                        </div>
                        <div className="platform2">
                            <a href={this.props.linkedIn}>Linked In</a>
                        </div>
                    </div>
                    {/* section 2 */}
                </section>
                <section className="sec2">
                    <div className="projects">
                        <h3 className="sec_name">Projects OR Activities</h3>
                        <h3 className="p_title"> <a href={this.props.plink}>{this.props.pname}</a></h3>
                        <p className="p_desc">{this.props.pdesc}</p>
                        <h4>Technology used:{this.props.ptech}</h4>
                        <h3 className="p_title"> <a href={this.props.plink2}>{this.props.pname2}</a></h3>
                        <p className="p_desc">{this.props.pdesc2}</p>
                        <h4>Technology used: {this.props.ptech2}</h4>
                    </div>
                    <div className="experience">
                    <h3 className="sec_name">Experience</h3>
                        <h1 className="ex_title">{this.props.expname}</h1>
                        <p className="ex_desc">{this.props.expdesc}</p>
                    </div>
                    <div className="education">
                    <h3 className="sec_name">Education</h3>
                        <h1 className="edu_title">{this.props.edname}</h1>
                        <p className="edu_desc">{this.props.eddesc}
                        </p>
                    </div>
                    <div className="skills">
                        <h3 className="sec_name">Skills & Tools</h3>
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
                </section>
            </div>
        </>
        )
     }
 }

// PRINTING THE ABOVE COMPO
//  const Print = () => {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//       content: () => componentRef.current,
//     });
  
//     return (
//       <div>
//         { <ResumeFillForm/> }
//         <ComponentToPrint ref={componentRef} />
//         <button className="pdf_btn" onClick={handlePrint}>Download Your Resume</button>
//       </div>
//     );
// }

export default ResumeFillForm;
