import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./header.css";

interface HeaderProps {
  setAuthActive: (authActive: boolean) => void;
}

function Header({ setAuthActive }: HeaderProps) {
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to={"/KikiTime/"}>
        <p>Домой</p>
      </Link>
      <Link to={"/KikiTime/search"}>
        <p>Поиск</p>
      </Link>
      {isAuth ? (
        <button
          className="login"
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
        >
          Выйти
        </button>
      ) : (
        <button
          className="login"
          onClick={() => {
            setAuthActive(true);
          }}
        >
          Войти
        </button>
      )}
    </div>
  );
}

export { Header };
