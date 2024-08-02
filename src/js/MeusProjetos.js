import React, { useEffect, useRef } from 'react';
import '../css/MeusProjetos.css';

const projetos = [
    {
        titulo: 'Site KJR',
        descricao: 'Site de apresentação de empresa pessoal para desenvolvimento de software e mais.',
        imagem: '/images/imagem3.jpg',
        ordem: 'direita'
    },
    {
        titulo: 'Jogo de Mímica',
        descricao: 'Jogos para brincar com toda a família em momentos de descontração.',
        imagem: '/images/imagem2.jpg',
        ordem: 'esquerda'
    },
    {
        titulo: 'Site de CV',
        descricao: 'Meu site de portfólio pessoal.',
        imagem: '/images/imagem1.jpg',
        ordem: 'direita'
    },
    {
        titulo: 'Site KJR',
        descricao: 'Site de apresentação de empresa pessoal para desenvolvimento de software e mais.',
        imagem: '/images/imagem3.jpg',
        ordem: 'direita'
    },
    {
        titulo: 'Jogo de Mímica',
        descricao: 'Jogos para brincar com toda a família em momentos de descontração.',
        imagem: '/images/imagem2.jpg',
        ordem: 'esquerda'
    },
    {
        titulo: 'Site de CV',
        descricao: 'Meu site de portfólio pessoal.',
        imagem: '/images/imagem1.jpg',
        ordem: 'direita'
    }
];

const MeusProjetos = () => {
    const projetosRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aparecer');
                } else {
                    entry.target.classList.remove('aparecer');
                }
            });
        }, { threshold: 0.1 });

        projetosRef.current.forEach(el => observer.observe(el));

        return () => {
            projetosRef.current.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="meus-projetos">
            <div className="text-projetos">
                <p>Meus Projetos</p>
            </div>
            {projetos.map((projeto, index) => (
                <div
                    key={index}
                    className={`projeto ${projeto.ordem}`}
                    ref={el => projetosRef.current[index] = el}
                >
                    <div className="texto-projeto">
                        <h3>
                            {projeto.titulo}
                            <span>
                                <button className="botao-projeto botao-prod">Prod</button>
                                <button className="botao-projeto botao-local">Local</button>
                            </span>
                        </h3>
                        <p>{projeto.descricao}</p>
                    </div>
                    <div className="imagem-projeto">
                        <img src={projeto.imagem} alt={projeto.titulo} className='imageSite'/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MeusProjetos;
