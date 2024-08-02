import React, { useEffect, useRef } from 'react';
import styles from '../css/Skills.module.css';
import phoneSkills from '../assets/phoneSkills.png';

import aws from '../assets/skills/aws.svg';
import css from '../assets/skills/css.svg';
import django from '../assets/skills/django.svg';
import html5 from '../assets/skills/html5.svg';
import js from '../assets/skills/js.svg';
import pbi2 from '../assets/skills/pbi2.svg';
import python from '../assets/skills/python.svg';
import react from '../assets/skills/react.svg';
import typescript from '../assets/skills/typescript.svg';

const Skills = () => {
  const skills = [
    { name: 'AWS', image: aws },
    { name: 'CSS', image: css },
    { name: 'Django', image: django },
    { name: 'HTML5', image: html5 },
    { name: 'JavaScript', image: js },
    { name: 'Power BI', image: pbi2 },
    { name: 'Python', image: python },
    { name: 'React', image: react },
    { name: 'TypeScript', image: typescript },
  ];

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

  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.phoneContainer}>
        <img src={phoneSkills} alt="Phone" className={styles.phoneImage} />
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`${styles.skill}`}
            >
              <img src={skill.image} alt={skill.name} className={styles.skillIcon} />
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
