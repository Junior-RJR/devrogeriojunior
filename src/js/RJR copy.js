import React, { useRef, useState, useEffect } from 'react';
import '../css/style.css';
import Footer from './Footer';
import FaleConosco from './FaleConosco';
import Servicos from './Servicos';
import Projetos from './Projetos';

const RJR = () => {
    // const homeRef = useRef(null);
    const servicosRef = useRef(null);
    const projetosRef = useRef(null);
    const contatosRef = useRef(null);
    const [isLogoFixed, setIsLogoFixed] = useState(false); 
    const [isMenuHidden, setIsMenuHidden] = useState(false); 

    const logoRef = useRef(null); 

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsLogoFixed(true);
            setIsMenuHidden(true);
        } else {
            setIsLogoFixed(false);
            setIsMenuHidden(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='divHeader'>
            <header id="main-header" className={isLogoFixed ? 'fixed-logo' : ''}>
            <div >
                <img src="/images/logo.svg" alt="Logo" className='Logo' ref={logoRef} />
            </div>
            <div className='divMenu'>
                <nav className={isLogoFixed && isMenuHidden ? 'hidden-menu' : ''}>
                    <ul>
                        <li className='topicoMenu'><a href="#home" onClick={() => scrollToSection(null)}>Home</a></li>
                        <li className='topicoMenu'><a href="#servicos" onClick={() => scrollToSection(servicosRef)}>Serviços</a></li>
                        <li className='topicoMenu'><a href="#projetos" onClick={() => scrollToSection(projetosRef)}>Projetos</a></li>
                        <li className='topicoMenu'><a href="#contatos" onClick={() => scrollToSection(contatosRef)}>Contatos</a></li>
                    </ul>
                </nav>
                    </div>
            </header>
                </div>
            <div className="intro-text">
                <p>Somos uma empresa de tecnologia especializada em converter sonhos e ideias em realidade.<br/>Utilizando a tecnologia disponível e adequada para suas necessidades.</p>
            </div>
            <main>
                {/* <div ref={homeRef} id="home">
                    {scrollToTop}
                </div> */}
                <div ref={servicosRef} id="servicos">
                    <Servicos/>
                </div>
                <div ref={projetosRef} id="projetos">
                    <Projetos/>
                </div>
                <div ref={contatosRef} id="contatos">
                    <FaleConosco/>
                </div>
            </main>
            <footer>
               <Footer/>
            </footer>
                <div className="whatsapp-logo">
                    <a href="https://api.whatsapp.com/send?phone=1199999999" target="_blank" rel="noopener noreferrer">
                        <img src="/images/whatsVerde.svg" alt="WhatsApp Logo" className="whatsapp-icon" />
                    </a>
                </div>
            <div id="scrollToTop" className="scroll-to-top" onClick={scrollToTop}>
                <img src="/images/seta.svg" alt="Seta" className="seta-icon" />
            </div>
        </div>
    );
}

export default RJR;
