import React from "react";
import "./CardFilm.css";

function CardFilm() {
  return (
    <div className="card">
      <img src="/brother.jpeg" alt="poster" />
      <div className="cardContent">
        <div className="cardHeader">
          <p>Рейтинг: 8.4</p>
          <button>
            <img src="/star.png" alt="star" />
          </button>
          <button>
            <img src="/mark.png" alt="mark" />
          </button>
        </div>
        <h4>Брат</h4>
        <div className="cardFooter">
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
