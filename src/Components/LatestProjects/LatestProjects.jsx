import React, { useState, useEffect } from "react";
import style from "./LatestProjects.module.css";

const INITIAL_STATE = [
  {
    id: 1,
    name: "Distribuidora Ruiz",
    img: "https://i.ibb.co/LQMvkjB/distribuidora.png",
    url: "https://distribuidoraruiz.mx/",
  },
  {
    id: 2,
    name: "Quick Cargo",
    img: "https://i.ibb.co/zbDxsw6/Screenshot-2023-12-12-at-9-32-51.png",
    url: "https://quickcargomx.com/",
  },
  {
    id: 3,
    name: "GR SafeMovement",
    img: "https://i.ibb.co/HdtVYZL/Screenshot-2023-12-12-at-9-35-00.png",
    url: "https://grsafemovement.com/",
  },
];

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(INITIAL_STATE);
  }, []);
  return (
    <div className={style.latestProjectsContainer}>
      <h1>My Latest Projects</h1>
      <hr />
      <div className={style.projectCards}>
        {projects.map((project) => {
          return (
            <a
              key={project.id}
              href={project.url}
              className={style.projectCard}
              target="_blank"
            >
              <div className={style.projectImg}>
                <img src={project.img} alt={`Image for ${project.name}`} />
                <div className={style.overlay}></div>
              </div>
              <h1>{project.name}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
