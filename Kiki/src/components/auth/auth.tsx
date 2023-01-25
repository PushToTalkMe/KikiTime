import React from "react";
import { useDispatch } from "react-redux";

import "./auth.css";

function Auth({ setAuthActive }: any) {
  const dispatch = useDispatch();

  return (
    <div
      className="popup"
      onClick={(e: any) => {
        if (e.target.classList[0] === "popup") {
          setAuthActive(false);
        }
      }}
    >
      <div className="auth">
        <h1>Авторизация</h1>
        <form
          action=""
          onSubmit={(e: any) => {
            e.preventDefault();
            dispatch({
              type: "LOGIN",
              payload: {
                login: e.target[0].value,
                password: e.target[1].value,
              },
            });
            setAuthActive(false);
          }}
        >
          <input type="text" placeholder="Логин" />
          <input type="password" placeholder="Пароль" />
          <button className="confirmButton">Войти</button>
        </form>
      </div>
    </div>
  );
}

export { Auth };
