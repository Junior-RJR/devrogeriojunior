import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/Skills.module.css';
import phoneSkills from '../assets/phoneSkills1.png';
import Modal from 'react-modal';

import aws from '../assets/skills/aws.svg';
import css from '../assets/skills/css3.svg';
import django from '../assets/skills/django.svg';
import html5 from '../assets/skills/html5.svg';
import js from '../assets/skills/javascript.svg';
// import pbi2 from '../assets/skills/pbi2.svg';
import python from '../assets/skills/python.svg';
import react from '../assets/skills/react.svg';
import typescript from '../assets/skills/typescript.svg';
import dotnet from '../assets/skills/dotnet.svg';
import gitforwindows from '../assets/skills/gitforwindows.svg';
import github from '../assets/skills/github.svg';
import gitlab from '../assets/skills/gitlab.svg';
import googleads from '../assets/skills/googleads.svg';
import linux from '../assets/skills/linux.svg';
import meta from '../assets/skills/meta.svg';
import nodejs from '../assets/skills/nodejs.svg';
import redhat from '../assets/skills/redhat.svg';
import scrum from '../assets/skills/scrum.svg';
import docker from '../assets/skills/docker.svg';
import mysql from '../assets/skills/mysql.svg';
import php from '../assets/skills/php.svg';
import csharp from '../assets/skills/csharp.svg';

const Skills = () => {
  const displayedSkills = [
    { name: 'React', image: react},
    { name: 'CSS', image: css},
    { name: 'Python', image: python},
    { name: 'HTML5', image: html5},
    { name: 'C#', image: csharp},
    { name: 'TypeScript', image: typescript},
    { name: 'Django', image: django},
    { name: 'JavaScript', image: js},
  ];

  const modalSkills = [
    { name: 'AWS', image: aws},
    { name: 'C#', image: csharp},
    { name: 'CSS', image: css},
    { name: 'Django', image: django},
    { name: 'HTML5', image: html5},
    { name: 'React', image: react},
    { name: 'JavaScript', image: js},
    { name: 'Python', image: python},
    { name: 'TypeScript', image: typescript},
    { name: 'Docker', image: docker},
    { name: 'MySQL', image: mysql},
    { name: 'PHP', image: php},
    { name: '.NET', image: dotnet},
    { name: 'Git for Windows', image: gitforwindows},
    { name: 'GitHub', image: github},
    { name: 'GitLab', image: gitlab},
    { name: 'Google ADS', image: googleads},
    { name: 'Linux', image: linux},
    { name: 'Meta', image: meta},
    { name: 'NodeJS', image: nodejs},
    { name: 'RedHat', image: redhat},
    { name: 'Metodologia Scrum', image: scrum},
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          } else {
            entry.target.classList.remove(styles.inView);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id='skillsId' className={styles.skillsSection}>
      <h1 className={styles.title}>Habilidades</h1>
      <div className={styles.phoneContainer}>
        <img src={phoneSkills} alt="Phone" className={styles.phoneImage} />
        <div className={styles.skillsContainer}>
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`${styles.skill}`}
            >
              <img src={skill.image} alt={skill.name} className={styles.skillIcon} />
            </div>
          ))}
        </div>
      </div>
      <button className={styles.viewAllButton} onClick={openModal}>
        Ver todas
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skills Modal"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        {/* <h2>Habilidades</h2> */}
        <div className={styles.modalGridContainer}>
          {modalSkills.map((skill, index) => (
            <div key={index} className={styles.modalSkill}>
              <img src={skill.image} alt={skill.name} className={styles.modalSkillIcon} />
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={closeModal} className={styles.closeButton}>Fechar</button>
      </Modal>
    </section>
  );
};

export default Skills;