import React, { useRef, useState, useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const servicosRef = useRef(null);
    const projetosRef = useRef(null);
    const contatosRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
            <div>
                <img src={isScrolled ? "/images/RJR-Cinza.svg" : "/images/RJR-Branco.svg"} alt="Logo" className="Logo" />
            </div>
            <div className='divMenu'>
                <nav>
                    <ul>
                        <li className='topicoMenu'><a href="#sobreMim" onClick={() => scrollToSection(servicosRef)}>Sobre Mim</a></li>
                        <li className='topicoMenu'><a href="#experiencias" onClick={() => scrollToSection(projetosRef)}>Expêriencias</a></li>
                        <li className='topicoMenu'><a href="#cursosCertificados" onClick={() => scrollToSection(projetosRef)}>Cursos e Certificados</a></li>
                        <li className='topicoMenu'><a href="#projetos" onClick={() => scrollToSection(projetosRef)}>Projetos</a></li>
                        <li className='topicoMenu'><Link to="/dashboard">Dashboard</Link></li>                    
                        <li className='topicoMenu'><a href="#contatos" onClick={() => scrollToSection(contatosRef)}>Contatos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
