import React, { useState ,Component} from 'react';
import styles from "./styles.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const Projects = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Slider {...settings} className={styles.projects}>    
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </Slider>
    </section>
  );
};

export default Projects
