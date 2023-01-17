import React from "react";
import CardFilm from "./CardFilm/CardFilm";
import "./ListFilms.css";

function ListFilms() {
  return (
    <div className="listfilms">
      <CardFilm></CardFilm>
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
    </div>
  );
}

export default ListFilms;
