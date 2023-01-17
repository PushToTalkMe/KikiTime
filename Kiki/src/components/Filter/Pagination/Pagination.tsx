import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <div className="directions">
        <button className="direction">Назад</button>
        <button className="direction active">Вперёд</button>
      </div>
      <div>1 of 1455</div>
    </div>
  );
}

export default Pagination;
