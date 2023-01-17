import React from "react";
import Pagination from "./Pagination/Pagination";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <h1>Фильтры:</h1>
      <button className="resetFilter">Сбросить все фильтры</button>
      <div>
        <p>Сортировать по:</p>
        <select
          className="select"
          onChange={(event) => console.log(event.target.value)}
        >
          <option value="descending">Популярные по убыванию</option>
          <option value="ascending">Популярные по возрастанию</option>
        </select>
      </div>
      <div>
        <p>Год релиза:</p>
        <select
          className="select"
          onChange={(event) => console.log(event.target.value)}
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <ul className="genres">
        <li className="genre">
          <input type="checkbox" id="action" />
          <label>боевик</label>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <label>приключения</label>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <label>мультфильм</label>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <label>боевик</label>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
        <li className="genre">
          <input type="checkbox" id="action" />
          <p>боевик</p>
        </li>
      </ul>
      <Pagination></Pagination>
    </div>
  );
}

export default Filter;
