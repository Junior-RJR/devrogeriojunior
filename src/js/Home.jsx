import React from 'react';
import styles from '../css/Home.module.css';
import fundo4 from '../assets/fundo4.jpg';
import eu from '../assets/eu.jpeg';

const Home = () => {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${fundo4})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Transforme sua visão em realidade</h1>
        <h2 className={styles.subtitle}>Nós tornamos seus projetos possíveis</h2>
        <ul className={styles.servicesList}>
          <li>Suporte sem limites durante o projeto</li>
          <li>Parcelamento</li>
          <li>Nota fiscal</li>
          <li>Planos acessíveis</li>
        </ul>
        <button className={styles.requestButton}>Solicitar um orçamento</button>
      </div>
      <div className={styles.rightSection}>
        <img src={eu} alt="Imagem Lado Direito" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default Home;
