import React from "react";
import style from "./Description.module.css";
import photoMe from "../../Photos/photome.png";

const Description = () => {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.imgDescrption}>
        <div className={style.rectangleImg}></div>
        <img src={photoMe} alt="photo of me" />
        <div className={style.imgOverlay}></div>
      </div>
      <div className={style.infoDescription}>
        <h1>Full Stack Developer</h1>
        <p>
          I'm Ricardo, a Full Stack Developer with a focus on Front End
          development. Throughout my experience, I have honed my skills in React
          JS, Node JS, Express, and PostgreSQL, showcasing proficiency in agile
          methodologies, GIT, and various CSS and HTML frameworks.
        </p>
      </div>
    </div>
  );
};

export default Description;
