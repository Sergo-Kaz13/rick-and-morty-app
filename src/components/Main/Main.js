import React from "react";
import style from "./Main.module.css";

export const Main = (props) => {
  return <div className={style.main}>{props.children}</div>;
};
