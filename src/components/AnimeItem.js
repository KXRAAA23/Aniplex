import React from "react";

function AnimeItem({ image, name, author,studio,genre }) {
  return (
    <div className="animeItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <div className="animeName">
        <h1>{name}</h1>
        <p>{author}</p>
        <p>{studio}</p>
        <p>{genre}</p>

        <button className="button"><h2>Watch Now</h2></button>
      </div>
    </div>
  );
}

export default AnimeItem;
