import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import "./Pagination.css";

function Pagination() {
  const listFilms = useTypedSelector((state) => state.listFilmsReducer);
  const currentPage = useTypedSelector((state) => state.currentPageReducer);
  const dispatch = useDispatch();

  const cardsPerPage = 10;
  const totalPages = Math.ceil(listFilms.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch({ type: "NEXT_CURRENT_PAGE" });
    } else {
      return;
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: "PREV_CURRENT_PAGE" });
    } else {
      return;
    }
  };

  return (
    <div className="pagination">
      <div className="directions">
        <button
          className={currentPage > 1 ? "direction active" : "direction"}
          onClick={() => prevPage()}
        >
          Назад
        </button>
        <button
          className={
            currentPage < totalPages ? "direction active" : "direction"
          }
          onClick={() => nextPage()}
        >
          Вперёд
        </button>
      </div>
      <div>
        {currentPage} of {totalPages}
      </div>
    </div>
  );
}

export default Pagination;
