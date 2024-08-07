import React from 'react';
import '../css/style.css';
import Footer from './Footer';
// import FaleConosco from './FaleConosco';
import MeusProjetos from './MeusProjetos';
import Header from './Header';
// import SobreMim from './SobreMim';
import Experiencias from './Experiencias';
import Home from './Home';
import Skills from './Skills';
import Cursos from './Cursos';
// import Projetos from './Projetos';
// import SiteConstrucao from './SiteConstrucao';

const RJR = () => {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <div>
            <Header />
            <div>
                <Home />
            </div>
            <main>


                {/* <div>
                    <SiteConstrucao />
                </div> */}


                <div>
                    <Skills />
                </div>
                <div id="experiencia">
                    <Experiencias />
                </div>
                <div>
                    <Cursos />
                </div>
                <div id="MeusProjetos">
                    <MeusProjetos/>
                </div>
                {/* <div id="projetos">
                    <Projetos/>
                </div> */}
                {/* <div id="contatos">
                    <FaleConosco/>
                </div> */}
            </main>
            <footer>
               <Footer/>
            </footer>
            <div className="whatsapp-logo">
                <a href="https://api.whatsapp.com/send?phone=11946252220" target="_blank" rel="noopener noreferrer">
                    <img src="/images/whatsVerde.svg" alt="WhatsApp Logo" className="whatsapp-icon" />
                </a>
            </div>
            {/* <div id="scrollToTop" className="scroll-to-top" onClick={scrollToTop}>
                <img src="/images/seta.svg" alt="Seta" className="seta-icon" />
            </div> */}
        </div>
    );
}

export default RJR;
