import React from "react";

function SkillTools({setSkills, setTools, extra, setSkillsprogress}) {
  const Skillarr = [1, 2, 3, 4, 5];
  const Toolarr = [1, 2, 3];

  const input = (e)=>{
     let {name,value} = e.target;
     setSkills(prev=>{
       return{
         ...prev,
         [name]:value
       }
     })
  }
  const input2 = (e)=>{
    let {name,value}= e.target;
    setTools(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const progress = (e)=>{
    let {name, value} = e.target;
    setSkillsprogress(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  return (
    <>
    <div className="skills_div">
      <div className="sk_container">
        <h1>Skills</h1>
        <div className="skills">
          {Skillarr.map((item) => {
            return (
              <label>
                Skill {item}:
                <input
                  type="text"
                  name={`skill${item}`}
                  placeholder={`Enter Skill${item}`}
                  required="true"
                  onChange={input}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div className="tool_container">
        <h1>Tools</h1>
        <div className="tools">
          {Toolarr.map((item) => {
            return (
              <label>
                Tool {item}
                <input
                  type="text"
                  name={`tool${item}`}
                  placeholder={`Enter Tool${item}`}
                  required="true"
                  onChange={input2}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>

    {
      extra?
      <div className="skill_level_cont">
      <h1>Let's See How Much You Know The Skills You Entered</h1>
      <h2>Enter Skill % for all skills out of 100</h2>
      <div className="levels">
      {
        Skillarr.map((v, i)=>{
          return(
            <input type="number" name={`skill_pro${v}`} placeholder={`Level of Skill ${v}`} onChange={progress}></input>
          )
        })
      }
      </div>
    </div> 
    :null
    }
    </>
  );
}

export default SkillTools;
