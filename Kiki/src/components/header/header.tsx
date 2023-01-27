import React, { PropsWithChildren } from "react";
import { useState } from "react";
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
      <Link to={"/"}>
        <p>Home</p>
      </Link>
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
