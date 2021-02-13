import React from "react";
import Card from "./Recipe_Card";
import "../styles/recepi.css";

const Recepi = (props)=>{
    return(<>
    <div className="recepi-container">
        <h1 className="text-center">Available Meals😋</h1>
        <h3 className="text-black-60 text-center">Surpricing Prices😮</h3>
        <div className="recepi-card-container">{
            props.data.map(r=>{
                return <Card r={r}/>
            })
        }
        </div>
    </div>
    </>
    )
}
export default Recepi;