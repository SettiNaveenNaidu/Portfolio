import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

const ProjectCard = ({
  project: { id, title, imageSrc, description, skills, demo,date,basis, source },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    setIsModalOpen(true);
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {(skills || []).map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} onClick={() => openModal(id)}>
          View
        </a>
        <a href={source} className={styles.link}>
          Github
        </a>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeModal} onClick={closeModal}>
              X
            </span>
            <h3>Title</h3>
            <span> {projects.find((p) => p.id === selectedProject).title}</span>
            <h3>Description</h3>
            <p>{projects.find((p) => p.id === selectedProject).description}</p>
            <h3>Date</h3>
            <p>{projects.find((p) => p.id === selectedProject).date}</p>
            <h3>Basis</h3>
            <p>{projects.find((p) => p.id === selectedProject).basis}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
