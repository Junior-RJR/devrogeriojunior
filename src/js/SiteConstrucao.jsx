import React from 'react';
import styles from '../css/SiteConstrucao.module.css'; // Certifique-se de que o caminho esteja correto
import logo from '../assets/RJR-Branco.svg'; // Atualizado com o novo caminho

const SiteConstrucao = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Site em Construção</h1>
        <div className={styles.loader}></div>
      </main>
      <footer className={styles.footer}>
        &copy; 2024 - Rogério Junior
      </footer>
    </div>
  );
};

export default SiteConstrucao;
