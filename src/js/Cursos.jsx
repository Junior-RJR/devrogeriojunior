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
import diploma10 from '../assets/cursos/redescomputadores.png';
import diploma11 from '../assets/cursos/logicadeprogramacao.png';
import diploma12 from '../assets/cursos/industria4.0.png';

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
        <div className={styles.diplomaCard} onClick={() => openModal(diploma1)}>
          <img src={diploma1} alt="Diploma 1" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>React JS</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma2)}>
          <img src={diploma2} alt="Diploma 2" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Fundamentos de Python</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma3)}>
          <img src={diploma3} alt="Diploma 3" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Scrum Foundation</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma4)}>
          <img src={diploma4} alt="Diploma 4" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>CyberSecurity Awareness</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma5)}>
          <img src={diploma5} alt="Diploma 5" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Análise de Dados</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma6)}>
          <img src={diploma6} alt="Diploma 6" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Power BI</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma7)}>
          <img src={diploma7} alt="Diploma 7" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>AWS</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma8)}>
          <img src={diploma8} alt="Diploma 8" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Product Owner</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma9)}>
          <img src={diploma9} alt="Diploma 9" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Redes TCP/IP</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma10)}>
          <img src={diploma10} alt="Diploma 10" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Redes de Computadores</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma11)}>
          <img src={diploma11} alt="Diploma 11" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Lógica de Programação</p>
        </div>
        <div className={styles.diplomaCard} onClick={() => openModal(diploma12)}>
          <img src={diploma12} alt="Diploma 12" className={styles.diplomaImageThumbnail} />
          <p className={styles.diplomaText}>Desvendando Indústria 4.0</p>
        </div>
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
