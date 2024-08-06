import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from '../css/Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img 
                    src="/images/RJR-Branco.svg" 
                    alt="Logo" 
                    className={styles.logo}
                />
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Link to="homeId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Sobre Mim</Link></li>
                    <li className={styles.navItem}><Link to="skillsId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Skills</Link></li>
                    <li className={styles.navItem}><Link to="experienciasId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Experiências</Link></li>
                    <li className={styles.navItem}><Link to="cursosId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Cursos</Link></li>
                    <li className={styles.navItem}><Link to="meusProjetosId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Projetos</Link></li>
                    {/* <li className={styles.navItem}><Link to="/dashboard" className={styles.navLink}>Dashboard</Link></li> */}
                    <li className={styles.navItem}><Link to="footerId" className={styles.mobileNavLink} smooth={true} duration={500} onClick={toggleMenu}>Contatos</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;             