import React from "react";
import Logo from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Container } from "./../Container/Container";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerBlock}>
          <Logo />
          <Menu />
        </div>
        <div className="search"></div>
      </Container>
    </header>
  );
};
