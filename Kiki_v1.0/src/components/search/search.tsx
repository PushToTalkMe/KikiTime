import React, { SetStateAction } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataListGenres } from "../../data/data_list_genres";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./search.css";

function Search() {
  const films = useTypedSelector((state) => state.searchReducer);
  const [genre, setGenre] = useState("");
  const [vote, setVote] = useState("");
  const [popularity, setPopularity] = useState("");
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState(
    "Выберите жанр, оценку и популярность, и тогда предложим вам фильм, который соотвествует вашим желаниям!"
  );

  const nameGenres = () => {
    const ids = dataListGenres.map((genreOfList) => {
      if (films[index].genre_ids.some((id) => id === genreOfList.id)) {
        return genreOfList.name;
      }
    });
    return ids.filter((name) => name !== undefined);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (genre && vote && popularity) {
      dispatch({ type: "GENRE", payload: +genre });
      dispatch({ type: vote });
      dispatch({ type: popularity });
      setIndex(0);
      setTitle("К сожалению, больше фильмов не найдено");
      setActive(true);
    } else {
      setTitle(
        "Выберите жанр, оценку и популярность, и тогда предложим вам фильм, который соотвествует вашим желаниям!"
      );
      setIndex(0);
      setActive(false);
    }
  }, [genre, vote, popularity]);

  return (
    <div className="search">
      <div className="form">
        {`Жанр`}
        <select
          className="select"
          onChange={(
            event: React.ChangeEvent<HTMLSelectElement> & {
              target: string;
            }
          ) => {
            setGenre(event.target.value);
          }}
          value={genre}
        >
          <option value="">Не выбрано</option>
          {dataListGenres.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </select>
        {`Оценка`}
        <select
          className="select"
          onChange={(
            event: React.ChangeEvent<HTMLSelectElement> & {
              target: string;
            }
          ) => {
            setVote(event.target.value);
          }}
          value={vote}
        >
          <option value="">Не выбрано</option>
          <option value="HIGH">Высокая</option>
          <option value="LOW">Низкая</option>
        </select>
        {`Популярность`}
        <select
          className="select"
          onChange={(
            event: React.ChangeEvent<HTMLSelectElement> & {
              target: string;
            }
          ) => {
            setPopularity(event.target.value);
          }}
          value={popularity}
        >
          <option value="">Не выбрано</option>
          <option value="POPULAR">Популярный</option>
          <option value="UNKNOWN">Неизвестный</option>
        </select>
      </div>
      {active === true && index !== films.length ? (
        <>
          <div className="film" key={films[index].id}>
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${films[index].poster_path}`}
                alt="poster"
              />
              <div className="overview">
                <h1>{films[index].title}</h1>
                <div className="genres">
                  <h4 style={{ flex: 0, padding: 1, margin: 0 }}>Жанры:</h4>
                  {nameGenres().map((name, index) =>
                    index + 1 === nameGenres().length ? (
                      <p key={index}>{name}.</p>
                    ) : (
                      <p key={index}>{name},</p>
                    )
                  )}
                </div>
                <p>{films[index].overview}</p>
              </div>
            </div>
          </div>
          <div className="choice">
            <button
              className="no"
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              Не подходит
            </button>
            <Link
              onClick={() => {
                dispatch({ type: "ADD_FILM", payload: films[index].id });
              }}
              to={`/KikiTime/${films[index].id}`}
            >
              <button className="yes">Подходит</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="film">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}
export { Search };
