import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataListGenres } from "../../data/data_list_genres";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./search.css";

function Search() {
  const films = useTypedSelector(state => state.searchReducer)
  const [genre, setGenre] = useState(28);
  const [vote, setVote] = useState("HIGH");
  const [popularity, setPopularity] = useState("POPULAR");
  const [count, setCount] = useState(0);

  const nameGenres = () => {
    const ids = dataListGenres.map(genreOfList => {
      if (films[count].genre_ids.some(id => id === genreOfList.id)) {
        return genreOfList.name
      }
    })
    return ids.filter(name => name !== undefined)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: "GENRE", payload: genre })
    dispatch({type: vote})
    dispatch({type: popularity})
    setCount(0)
  }, [genre, vote, popularity]);

  return (
    <div className="search">
      <div className="form">
        <select className="select"
        onChange={(event: React.ChangeEvent<HTMLSelectElement> & {
          target: string
        }) => {
          setGenre(+event.target.value);
        }}
        value={genre}>
          {dataListGenres.map((genre) => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>;
          })}
        </select>
        <select className="select" 
        onChange={(event: React.ChangeEvent<HTMLSelectElement> & {
          target: string
        }) => {
          setVote(event.target.value);
        }}
        value={vote}>
          <option value="HIGH">Высокая</option>
          <option value="LOW">Низкая</option>
        </select>
        <select className="select" 
        onChange={(event: React.ChangeEvent<HTMLSelectElement> & {
          target: string
        }) => {
          setPopularity(event.target.value);
        }}
        value={popularity}>
          <option value="POPULAR">Популярный</option>
          <option value="UNKNOWN">Неизвестный</option>
        </select>
      </div>
      {
        films.length > 0 && count !== films.length  ? (
        <>
        <div className="film" key={films[count].id}>
          <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w500${films[count].poster_path}`} alt="poster" />
            <div className="overview">
              <h1>{films[count].title}</h1>
              <div className="genres">Жанры:{nameGenres().map((name, index) => <p key={index}>{name};</p>)}</div>
              <p>{films[count].overview}</p>
            </div>
          </div>
        </div>
        <div className="choice">
        <button className="no" onClick={() => {
          setCount(count + 1)
        }}>Не подходит</button>
        <Link onClick={() => {
              dispatch({ type: "ADD_FILM", payload: films[count].id });
            }} to={`/${films[count].id}`}><button className="yes">Подходит</button></Link>
      </div>
      </>
        ) : <div className="film">
          <h1>К сожалению, фильмов не найдено</h1>
        </div>
      }
      
      
    </div>
  );
}
export { Search };
