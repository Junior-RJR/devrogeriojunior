import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/HeaderDash.css';

const HeaderDash = () => {
    return (
        <header className="dashboardDash-header">
            <div className="logoDash-container">
                <img src="/images/RJR-Branco.svg" alt="Logo" className="logoDash" />
                <div className="dividerDash"></div>
                <Link to="/" className="homeDash-link">
                    <img src="/images/house.svg" alt="Home Icon" className="homeDash-icon" />
                </Link>
                <span className="backDash-to-site">
                    <Link to="/" className="siteDash-link">Voltar ao Site</Link>
                </span>
            </div>
            <div className="horizontalDash-line"></div> 
        </header>
    );
}

export default HeaderDash;