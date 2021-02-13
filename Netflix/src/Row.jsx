import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);

  const opts={
    heigth:"390",
    width:"100%",
    palyerVars:{
      autoplay:1
    }
  }

  const handleClick = (movie)=>{
    if(trailerUrl){
      settrailerUrl("")
    }
    else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams);
        settrailerUrl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img 
          key = {movie.id}
          onClick={() => handleClick(movie)}
          src={`${baseURL}${isLarge? movie.poster_path: movie.backdrop_path}`} 
          alt={movie.name}
          className={`poster ${isLarge && "poster_large"}`} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
    </div>
  );
}
export default Row;
