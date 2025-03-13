import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../css/Cursos.module.css';
import diploma1 from '../assets/cursos/reactJS.png';
import diploma2 from '../assets/cursos/fundamentospython.png';
import diploma3 from '../assets/cursos/scrumfoundation.png';
import diploma4 from '../assets/cursos/cybersecurity.png';
import diploma5 from '../assets/cursos/analisesdedados.png';
import diploma6 from '../assets/cursos/powerbi.png';
import diploma7 from '../assets/cursos/aws.jpg';
import diploma8 from '../assets/cursos/po.png';
import diploma9 from '../assets/cursos/redestcpip.png';
// import diploma10 from '../assets/cursos/redescomputadores.png';
import diploma11 from '../assets/cursos/logicadeprogramacao.png';
// import diploma12 from '../assets/cursos/industria4.0.png';
import diploma13 from '../assets/cursos/figma.png';
import diploma14 from '../assets/cursos/next.js.png';
import diploma15 from '../assets/cursos/issabel.png';
import diploma16 from '../assets/cursos/seo.png';
import diploma17 from '../assets/cursos/redux.png';
import diploma18 from '../assets/cursos/cleancode.png';
import diploma19 from '../assets/cursos/ux_ui.png';
import diploma20 from '../assets/cursos/acessibilade reactJS.png';
import diploma21 from '../assets/cursos/dpostart.png';
import diploma22 from '../assets/cursos/reactNative.png';
import diploma23 from '../assets/cursos/linux.png';
import diploma24 from '../assets/cursos/frontend.png';
import diploma25 from '../assets/cursos/acessibilidadeweb.png';
import diploma26 from '../assets/cursos/python.png';
import diploma27 from '../assets/cursos/fullstackweek.jpeg';

Modal.setAppElement('#root'); 

const Cursos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage('');
  };

  return (
    <div id='cursosId' className={styles.container}>
      <h1 className={styles.title}>Meus Diplomas</h1>
      <div className={styles.diplomas}>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma26)}>
          <img src={diploma26} alt="Diploma 26" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Python</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma1)}>
          <img src={diploma1} alt="Diploma 1" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>React JS</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma22)}>
          <img src={diploma22} alt="Diploma 22" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>React Native</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma3)}>
          <img src={diploma3} alt="Diploma 3" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Scrum Foundation</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma18)}>
          <img src={diploma18} alt="Diploma 18" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Clean Code</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma16)}>
          <img src={diploma16} alt="Diploma 16" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>SEO for Devs</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma21)}>
          <img src={diploma21} alt="Diploma 21" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>DPO Start</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma23)}>
          <img src={diploma23} alt="Diploma 23" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Linux Fundamentos</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma2)}>
          <img src={diploma2} alt="Diploma 2" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Fundamentos de Python</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma4)}>
          <img src={diploma4} alt="Diploma 4" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>CyberSecurity Awareness</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma13)}>
          <img src={diploma13} alt="Diploma 13" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Figma for Devs</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma19)}>
          <img src={diploma19} alt="Diploma 19" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>UX / UI com Figma</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma17)}>
          <img src={diploma17} alt="Diploma 17" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Redux + Zustand</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma20)}>
          <img src={diploma20} alt="Diploma 20" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Acessibilidade com ReactJS</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma27)}>
          <img src={diploma27} alt="Diploma 27" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>FullStack Week</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma5)}>
          <img src={diploma5} alt="Diploma 5" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Análise de Dados</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma6)}>
          <img src={diploma6} alt="Diploma 6" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Power BI</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma14)}>
          <img src={diploma14} alt="Diploma 14" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Fundamentos do Next.js</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma15)}>
          <img src={diploma15} alt="Diploma 15" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Issabel PBX IP</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma7)}>
          <img src={diploma7} alt="Diploma 7" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>AWS</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma24)}>
          <img src={diploma24} alt="Diploma 24" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>FrontEnd</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma25)}>
          <img src={diploma25} alt="Diploma 25" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Acessibilidade Web</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma8)}>
          <img src={diploma8} alt="Diploma 8" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Product Owner</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma11)}>
          <img src={diploma11} alt="Diploma 11" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Lógica de Programação</p>
        </div>
        
        
        {/* <div className={styles.diplomaCard} onClick={() => openModal(diploma9)}>
          <img src={diploma9} alt="Diploma 9" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Redes TCP/IP</p>
        </div> */}
        {/* <div className={styles.diplomaCard} onClick={() => openModal(diploma10)}>
          <img src={diploma10} alt="Diploma 10" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Redes de Computadores</p>
        </div> */}
        {/* <div className={styles.diplomaCard} onClick={() => openModal(diploma12)}>
          <img src={diploma12} alt="Diploma 12" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Desvendando Indústria 4.0</p>
        </div> */}

        {/* PEGAR ESSES DOIS CERTIFICADOS ABAIXO NO HD EXTERNO */}
        {/*<div className={styles.diplomaCard} onClick={() => openModal(diploma12)}>
          <img src={diploma12} alt="Diploma 12" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Cobit 5</p>
        </div> */}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Visualização do Diploma"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.modalCloseButton}>X</button>
        <img src={modalImage} alt="Diploma" className={styles.modalImage} />
      </Modal>
    </div>
  );
};

export default Cursos;
