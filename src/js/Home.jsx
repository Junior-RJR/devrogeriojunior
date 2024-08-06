import React from 'react';
import styles from '../css/Home.module.css';
import fundo from '../assets/fundo5.jpg';
import eu from '../assets/eu2.png';

const Home = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footerId');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div id='homeId' className={styles.home} style={{ backgroundImage: `url(${fundo})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Rogério Junior</h1>
        <h2 className={styles.subtitle}>Desenvolvedor de Software</h2>
        <ul className={styles.servicesList}>
          <li>Experiência em Desenvolvimento Web e Mobile</li>
          <li>Habilidades em Front-end e Back-end</li>
          <li>Especialista em React, Python e outras tecnologias</li>
          <li>Projetos realizados com sucesso para diversos clientes</li>
        </ul>
         <button className={styles.requestButton} onClick={scrollToFooter}>Entre em contato</button>
      </div>
      <div className={styles.rightSection}>
        <img src={eu} alt="Imagem Lado Direito" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default Home;
