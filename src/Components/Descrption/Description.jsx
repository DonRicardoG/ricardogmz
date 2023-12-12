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
          Sed dictum placerat nisl et consequat. Curabitur velit ante, commodo
          non elementum in, volutpat non ex. Sed sit amet luctus ante. Quisque
          vestibulum id augue maximus suscipit. Praesent non nibh nec magna
          convallis tincidunt. Vivamus sit amet commodo justo, sit amet mattis
          odio.
        </p>
      </div>
    </div>
  );
};

export default Description;
