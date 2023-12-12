import React, { useEffect, useState } from "react";
import "./Carousel.css";
import prev from "../../../Photos/prev.svg";
import next from "../../../Photos/next.svg";

const Carousel = () => {
  const [element1, setElement1] = useState();
  const [element2, setElement2] = useState();
  const [element3, setElement3] = useState();

  useEffect(() => {
    setElement1(document.getElementById("1"));
    setElement2(document.getElementById("2"));
    setElement3(document.getElementById("3"));
  }, []);

  const handleClick = (e) => {
    if (e.target.alt === "next") {
      if (element1.classList.contains("activeCarousel")) {
        element1.classList.remove("activeCarousel");
        element2.classList.add("activeCarousel");
      } else if (element2.classList.contains("activeCarousel")) {
        element2.classList.remove("activeCarousel");
        element3.classList.add("activeCarousel");
      } else if (element3.classList.contains("activeCarousel")) {
        element3.classList.remove("activeCarousel");
        element1.classList.add("activeCarousel");
      }
    }
    if (e.target.alt === "prev") {
      if (element1.classList.contains("activeCarousel")) {
        element1.classList.remove("activeCarousel");
        element3.classList.add("activeCarousel");
      } else if (element2.classList.contains("activeCarousel")) {
        element2.classList.remove("activeCarousel");
        element1.classList.add("activeCarousel");
      } else if (element3.classList.contains("activeCarousel")) {
        element3.classList.remove("activeCarousel");
        element2.classList.add("activeCarousel");
      }
    }
  };
  return (
    <div className="carousel">
      <div className="carouselInner">
        <a href="#" id="1" className="carouselItem">
          <h1>Distrubuidora Ruiz</h1>
        </a>
        <a href="#" id="2" className="carouselItem activeCarousel">
          <h1>Carousel 2</h1>
        </a>
        <a href="#" id="3" className="carouselItem">
          <h1>Carousel 3</h1>
        </a>
      </div>
      <div className="carouselBtns">
        <button>
          <img src={prev} alt="prev" onClick={handleClick} />
        </button>
        <button>
          <img src={next} alt="next" onClick={handleClick} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
