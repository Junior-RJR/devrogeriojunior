import React, { useState } from 'react';
import styles from '../css/Cookies.module.css';

const Cookies = () => {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
    };

    if (accepted) {
        return null; 
    }

    return (
        <div className={styles.cookiesBanner}>
            <div className={styles.cookiesContent}>
                <p>
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa
                    <a href="/politica-de-privacidade" className={styles.link} target="_blank" rel="noopener noreferrer"> Política de Privacidade</a>.
                </p>
                <button className={styles.acceptButton} onClick={handleAccept}>
                    Ok, entendi
                </button>
            </div>
        </div>
    );
};

export default Cookies;
