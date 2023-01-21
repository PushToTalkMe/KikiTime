import React from "react";
import "./CardFilm.css";

interface CardFilmProps {
  title: string;
  poster: string;
  vote: number;
}

function CardFilm({ title, poster, vote }: CardFilmProps) {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
      <div className="cardContent">
        <div className="cardHeader">
          <p>Рейтинг: {vote}</p>
          <button>
            <img src="/star.png" alt="star" />
          </button>
          <button>
            <img src="/mark.png" alt="mark" />
          </button>
        </div>
        <h4>{title}</h4>
        <div className="cardFooter">
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
