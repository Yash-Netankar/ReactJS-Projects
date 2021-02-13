import React,{useState}from 'react';
import {Link} from 'react-router-dom';
import "../styles/SearchDiv.css";

function SearchDiv({login, searchValue}) {

    const[search, setSearch] = useState("");

    const sendSearchVal = ()=>{
        searchValue(search);
    }

    return (
        <main className="search_div">
        <div className="bg_div">
            <h1>Build Impressive Resumes</h1>
            <ul>
                <li>❤️Build Your Resumes For Free</li>
                <li>❤️Download As PDF For Free</li>
                <li>❤️Impress The HR, And Land Your Dream Job</li>
                <li>❤️Login & SignUp For Free</li>
            </ul>
        </div>
        <div className="border"></div>
        {
        login?
            <div className="search_box">
                <input type="text" name="search" placeholder="Search For Your Technology" onChange={(e)=>setSearch(e.target.value)} className="search"/>
                <button onClick={sendSearchVal} ><i className='fas fa-search'></i></button>
            </div>
            :
            <h1 className="login_reminder"><Link to="/login" className="span">LOGIN NOW</Link> To Access And Build Free Resumes</h1>
        }
        </main>
    )
}

export default SearchDiv;
