import React, { PropsWithChildren } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/use_typed_selector";
import "./Header.css";

function Header({ setAuthActive }: any) {
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);

  const dispatch = useDispatch();
  return (
    <div className="header">
      <p>Home</p>
      {isAuth ? (
        <button
          className="login"
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="login"
          onClick={() => {
            setAuthActive(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export { Header };
