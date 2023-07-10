import React from "react";
import style from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <a className={style.logo} href="/">
        Rick and Morty
      </a>
    </div>
  );
}

export default Logo;
