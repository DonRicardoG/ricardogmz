import React from "react";
import NavBar from "../NavBar/NavBar";
import Intro from "../Intro/Intro";
import SocialBanner from "../SocialBanner/SocialBanner";
import Description from "../Descrption/Description";
import LatestProjects from "../LatestProjects/LatestProjects";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <SocialBanner />
      <div>
        <Intro />
      </div>
      <div id="box-1">
        <Description />
      </div>
      <div id="box-2">
        <LatestProjects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
