import React, { useState } from 'react';
import '../css/FaleConosco.css';

const FaleConosco = () => {
    const [email, setEmail] = useState('');
    const [duvida, setDuvida] = useState('');
    const [enviado, setEnviado] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEnviado(false);
    };

    const handleDuvidaChange = (event) => {
        setDuvida(event.target.value);
        setEnviado(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnviado(true);
        console.log("Email:", email, "Dúvida:", duvida);
        setEmail('');
        setDuvida('');
         setTimeout(() => {
            setEnviado(false);
        }, 3000);
    };

    return (
        <div className="fale-conosco">
            <form onSubmit={handleSubmit}>
                <div className="grid-container">
                    <div className="campoFale">
                        <label htmlFor="email">Fale conosco:</label>
                    </div>
                    <div className="campoFaleInput">
                        <div className="input-wrapper">
                            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="Seu email" className="email-input" />
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="campoDuvida">
                        <label htmlFor="duvida">Descreva sua dúvida:</label>
                    </div>
                    <div className="campoDuvidaInput">
                        <div className="input-wrapper">
                            <textarea id="duvida" name="duvida" value={duvida} onChange={handleDuvidaChange} placeholder="Sua dúvida"></textarea>
                        </div>
                    </div>
                </div>
                {email && duvida && (
                    <button type="submit" className="enviar-btn">Enviar</button>
                )}
                {enviado && <div className="mensagem-enviada">Mensagem enviada!</div>}
            </form>
        </div>
    );
}

export default FaleConosco;
