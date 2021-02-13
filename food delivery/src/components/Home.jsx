import React from "react";
import Recepi from "./Recepi";
import "../styles/home.css";

const Home = (props)=>{
    return(
        <>
        <div className="search-div">
                <div className="search">
                        <input 
                        type="text" 
                        placeholder="Seach For Your Meal"
                        onChange={props.onChangeI}
                        value={props.search}
                        />
                        <button onClick={props.onSubmitB}>
                            Search<i className='fas fa-search'></i>
                        </button>
                </div>
        </div>
        <Recepi data={props.recepi}/>
        </>
    )
}
export default Home;