import React from "react";
import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
}: PaginationProps) {
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
