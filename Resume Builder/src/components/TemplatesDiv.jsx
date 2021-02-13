import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/template_div.css";
import Template1 from './All Templates/Temp_imgs/Template1_Img';
import Template2 from './All Templates/Temp_imgs/Template2_Img';
import Template3 from './All Templates/Temp_imgs/Template3_Img';
import Template4 from './All Templates/Temp_imgs/Template4_Img';
import Template5 from './All Templates/Temp_imgs/Template5_Img';
import Template6 from './All Templates/Temp_imgs/Template6_Img';

function TemplatesDiv(props) {
    let no_of_temps = [<Template1/>, <Template2/>, <Template3/>, <Template4/>, <Template5/>, <Template6/>];
    console.log(props.search, typeof(props.search));
    return (
        <>
        <div className="all_templates_div">
            <h1 className="div_name">{props.search!==""&&props.search!==undefined?`${props.search} Templates`:"All Templates"}</h1>
            {/* showing tempaltes on page */}
            <div className="templates_div">
                {
                  no_of_temps.map((v, i)=>  
                    <div className="template_div">
                        {v}
                        {
                        props.login? 
                        <Link to={`template${i+1}`}><button>Build Resume</button></Link>
                        :null
                        }
                    </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default TemplatesDiv;
