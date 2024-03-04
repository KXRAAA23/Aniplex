import React from "react";
import { AnimeList } from "../helpers/AnimeList";
import AnimeItem from "../components/AnimeItem";
import "../styles/Product.css";

function AnimeMenu() {
  return (
    <div className="anime">
      <div className="animeList">
        {AnimeList.map((anime, key) => ( 
          <AnimeItem
            key={key}
            image={anime.image} 
            name={anime.name}  
            author={anime.author}
            studio={anime.studio}
            genre={anime.genre}

          />
        ))}
      </div>
    </div>
  );
}

export default AnimeMenu;
