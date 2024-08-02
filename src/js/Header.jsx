import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img 
                    src="/images/RJR-Branco.svg" 
                    alt="Logo" 
                    className={styles.logo}
                />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="#sobreMim" className={styles.navLink}>Sobre Mim</Link></li>
                    <li className={styles.navItem}><Link to="#experiencias" className={styles.navLink}>Experiências</Link></li>
                    <li className={styles.navItem}><Link to="#cursosCertificados" className={styles.navLink}>Cursos e Certificados</Link></li>
                    <li className={styles.navItem}><Link to="#projetos" className={styles.navLink}>Projetos</Link></li>
                    <li className={styles.navItem}><Link to="/dashboard" className={styles.navLink}>Dashboard</Link></li>
                    <li className={styles.navItem}><Link to="#contatos" className={styles.navLink}>Contatos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
