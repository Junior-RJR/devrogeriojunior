import React from 'react';
import styles from '../css/SiteVazio.module.css'; 
import Footer from './Footer';
import logo from '../assets/RJR-Branco.svg'; 

const SiteVazio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Rogério Junior" className={styles.logo} />
      </div>
      <div className={styles.message}>
        <h1>O link não foi liberado para acesso.</h1>
        <p>Entre em contato com o administrador para mais informações.</p>
      </div>
        <Footer />
    </div>
  );
};

export default SiteVazio;
