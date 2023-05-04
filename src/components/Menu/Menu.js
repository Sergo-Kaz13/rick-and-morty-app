import React from "react";
import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul className={style.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? `${style.active}` : "")}
          >
            Character
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/location"
            className={({ isActive }) => (isActive ? `${style.active}` : "")}
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episode"
            className={({ isActive }) => (isActive ? `${style.active}` : "")}
          >
            Episode
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
