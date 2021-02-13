import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request.js";
import "./banner.css";

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function Fetchdata() {
      const request = await axios.get(requests.fetchNetflixoriginals);
      let randomNo = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setmovie(request.data.results[randomNo]);
    }
    Fetchdata();
  }, []);

  function truncate(str, n){
      return str?.length>n? str.substr(0 ,n-1)+'...' : str;
  }

  return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center"
    }}>
      <div className="banner_content">
        <h1 className="banner_title">
            {movie?.name || movie?.title || movie?.orignal_name}
        </h1>
        <div className= "banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>
        <h2 className="banner_desc">
            {truncate(movie?.overview, 150)}
        </h2>
        <div className="fade"></div>
      </div>
    </header>
  );
}
export default Banner;
