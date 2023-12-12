import React from "react";
import { Link } from "react-router-dom";
import style from "./SocialBanner.module.css";
import twitter from "../../Photos/twitter.svg";
import insta from "../../Photos/insta.svg";
import gitHub from "../../Photos/github.svg";
import linkedin from "../../Photos/linkedin.svg";
import codepen from "../../Photos/codepen.svg";

const SocialBanner = () => {
  return (
    <div className={style.socialBannerContainer}>
      <ul>
        <li>
          <a href="https://twitter.com/Gmez892" target="_blank">
            <img src={twitter} alt="twitter logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ricardoggmz/" target="_blank">
            <img src={insta} alt="insta logo" />
          </a>
        </li>
        <li>
          <a href="https://github.com/DonRicardoG" target="_blank">
            <img src={gitHub} alt="gitHub logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ricardo-g%C3%B3mez-aguirre-42068b205/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </li>
        {/* <li>
          <a href="#">
            <img src={codepen} alt="codepen logo" />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SocialBanner;
