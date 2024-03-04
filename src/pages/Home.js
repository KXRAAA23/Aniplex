import React from "react";
import animeImage from "../images/anime.jpg";
import "../styles/Contact.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${animeImage})` }}>
      <div className="headerContainer">
        <h1>ANIPLEX</h1>
        <p>ANIMES TO FIT ANY TASTE</p>
        <button>WATCH NOW</button>
      </div>
    </div>
  );
}

export default Home;
