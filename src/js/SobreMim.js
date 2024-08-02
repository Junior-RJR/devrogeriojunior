import React from 'react';
import '../css/SobreMim.css';

const SobreMim = () => {
    return (
        <section id="sobreMim" className="sobre-mim">
            <div className="container">
                <div className="content">
                    <div className="left">
                        <img src="/images/minha-foto.jpeg" alt="Minha Foto" className="profile-pic" />
                    </div>
                    <div className="right">
                        <h1>Rogério Junior</h1>
                        <h2>Desenvolvedor / Scrum Master</h2>
                        <p>
                            Desenvolvedor especializado em React, Python, HTML e CSS, com experiência prática como Scrum Master. Possuo habilidades em metodologias ágeis, incluindo Scrum e Kanban, e certificação como Scrum Master Professional. Sou dedicado, estudioso e adoro desafios, buscando sempre fornecer insights valiosos para a tomada de decisões.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMim;
