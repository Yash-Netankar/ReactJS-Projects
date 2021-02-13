import React from "react";
import Row from "./Row";
import requests from "./request.js";
import Banner from "./Banner";
import Nav from "./Nav";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Ny Originals" fetchUrl={requests.fetchNetflixoriginals} isLarge/>
      <Row title="Ny Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
