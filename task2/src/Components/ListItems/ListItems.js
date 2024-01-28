import React, { useState, useEffect } from "react";
import { films } from "../../data.js";

const ListItems = () => {
  const [filmList, setFilmList] = useState(films);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFilmIndex = Math.floor(Math.random() * filmList.length);
      const updatedList = filmList.map((film, index) => {
        if (index === randomFilmIndex) {
          const newImdb = parseFloat(film.imdb) + (Math.random() < 0.5 ? -0.1 : 0.1);
          return {
            ...film,
            imdb: newImdb >= 0 && newImdb <= 10 ? newImdb.toFixed(1) : film.imdb,
          };
        }
        return film;
      });
      setFilmList(updatedList);
    }, 1000);

    return () => clearInterval(interval);
  }, [filmList]);

  const listItems = filmList.map((film) => (
    <li className="film-card" key={film.id}>
      <img className="film-image" src={film.image} alt={film.name} />
      <p className="film-name">{film.name}</p>
      <p className="film-description">{film.description}</p>
      <p className="film-genre">Genre: {film.genre}</p>
      <p className="film-producer">Producer: {film.producer}</p>
      <div>
        <p className="film-imdb">{film.imdb}</p>
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="film-list">{listItems}</ul>
    </div>
  );
};

export default ListItems;