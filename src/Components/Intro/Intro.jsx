import React from "react";
import { Link } from "react-scroll";
import style from "./Intro.module.css";

const Intro = () => {
  return (
    <div id="intro" className={style.introContainer}>
      <h1>Hi there, My name is Ricardo Gomez</h1>
      <h2 id="secondTitle">I love design and build things for the web.</h2>
      <Link
        to="box-2"
        spy={true}
        smooth={true}
        offset={50}
        duration={600}
        className={style.projectBtn}
      >
        projects
      </Link>
    </div>
  );
};

export default Intro;
