import React, { useState, createRef } from "react";
import style from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      <div className={style.navBarContainer}>
        <Link
          to="intro"
          spy={true}
          smooth={true}
          activeClass={style.activeLink}
          offset={50}
          duration={600}
        >
          RG.
        </Link>
        <div
          onClick={handleMenu}
          className={open === true ? style.menuBtnClose : style.menuBtn}
        >
          <hr className={open === true ? style.bigHrX : style.bigHr} />
          <hr className={open === true ? style.littleHrX : style.littleHr} />
        </div>
      </div>
      <div className={open === true ? style.open : style.close}>
        <ul className={style.menuList}>
          <li>
            <Link
              to="box-1"
              spy={true}
              smooth={true}
              activeClass={style.activeLink}
              offset={50}
              duration={600}
              onClick={handleMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="box-2"
              spy={true}
              activeClass={style.activeLink}
              smooth={true}
              offset={50}
              duration={600}
              onClick={handleMenu}
            >
              Projects
            </Link>
          </li>
          {/* <li>
            <Link
              activeClass={style.activeLink}
              to="box-31"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleMenu}
            >
              Projects
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="box-3"
              spy={true}
              smooth={true}
              activeClass={style.activeLink}
              offset={50}
              duration={600}
              onClick={handleMenu}
            >
              Education
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
