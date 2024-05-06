import React from 'react';
import '../css/Servicos.css';

const Servicos = () => {
    return (
        <div className="servicos">
            <div className="textServicos">
                <p>Tipos de Serviços</p>
            </div>
            <div className="grid-container">
                <div className="servico">
                    <h3 className='Titulo'>Sites</h3>
                    <p>Realizamos a criação, manutenção, limpeza e reparação no código em diversos sites, tais como da btrefinish, bellacor, PVT Consultoria<br/> e muito mais.</p>
                </div>
                <div className="servico">
                    <img src="/images/imagem3.jpg" alt="Seu Site" className='imageSite'/>
                </div>
            </div>
            <div className="grid-container">
                <div className="servico">
                    <h3>Aplicação Web</h3>
                    <p>Realizamos a criação e manutenção em aplicações personalizadas para utiliziação em navegador padrão, como aplicativos de uso de empresas e organizações.</p>
                </div>
                <div className="servico">
                    <img src="/images/imagem2.jpg" alt="Seu Site" className='imageSite'/>
                </div>
            </div>
            <div className="grid-container">
                <div className="servico">
                    <h3>Muito Mais ...</h3>
                    <p>Além disso temos outros serviços como helpdesk, criação de Dashboard, PowerBI, Palestra sobre Metodologia Scrum e muito mais.</p>
                </div>
                <div className="servico">
                    <img src="/images/imagem1.jpg" alt="Seu Site" className='imageSite'/>
                </div>
            </div>
        </div>
    );
}

export default Servicos;