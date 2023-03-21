import React from "react";
import { useDispatch } from "react-redux";
import "./auth.css";

interface AuthProps {
  setAuthActive: (authActive: boolean) => void;
}

function Auth({ setAuthActive }: AuthProps) {
  const dispatch = useDispatch();

  return (
    <div
      className="popup"
      onClick={(
        e: React.MouseEvent<HTMLDivElement> & {
          target: HTMLDivElement;
        }
      ) => {
        if (e.target.className === "popup") {
          setAuthActive(false);
        }
      }}
    >
      <div className="auth">
        <h1>Авторизация</h1>
        <form
          action=""
          onSubmit={(
            e: React.FormEvent<HTMLFormElement> & {
              target: {
                0: HTMLInputElement;
                1: HTMLInputElement;
              };
            }
          ) => {
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
