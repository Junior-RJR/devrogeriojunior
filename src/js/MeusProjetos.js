import React, { useEffect, useRef } from 'react';
import '../css/MeusProjetos.css';
// import mimicaImage from '../assets/projects/mimica.png';
import kjrdev from '../assets/projects/kjrdev.png';
import edmararagao from '../assets/projects/edmararagao.png';
import maza from '../assets/projects/maza.png';
import adsa from '../assets/projects/adsa-maracana.png';
import cifraDrum from '../assets/projects/cifradrum.png';
import devRJR from '../assets/projects/devrjr.png';
import pvt from '../assets/projects/pvt.png';
import fernandoCar from '../assets/projects/fernandoCar.png';
import maracanaFc from '../assets/projects/maracana-fc.png';
import informais from '../assets/projects/informais.png';
import dashboard from '../assets/projects/dashboard.png';
import carbestore from '../assets/projects/carbestore.png'
import kjrvagas from '../assets/projects/kjrvagas.png'
import kjrencomendas from '../assets/projects/kjrencomendas.png'
import ecommerce from '../assets/projects/ecommerce.png'
import ligamasterfifa from '../assets/projects/ligamasterfifa.png'
import pakistore from '../assets/projects/pakistore.png'


const projetos = [
    {
        titulo: 'KJR Desenvolvimento',
        descricao: 'Site empresarial de desenvolvimento de software e aplicações',
        imagem: kjrdev,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://kjrdev.com.br'
    },
    {
        titulo: 'Paki Store',
        descricao: 'E-commerce desenvolvido pela plataforma NuvemShop',
        imagem: pakistore,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://pakistore.com.br'
    },
    {
        titulo: 'Site Pessoal',
        descricao: 'Site de apresentação pessoal',
        imagem: devRJR,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br'
    },
    {
        titulo: 'I Love Pastel',
        descricao: 'Aplicação web de gerenciamento de comandas e estoque',
        imagem: maza,
        ordem: 'esquerda',
        tipo: 'prod',
        link: 'https://pastelaria-maza.vercel.app/'
    },
    {
        titulo: 'Edmar Aragão',
        descricao: 'Site para apresentação de candidato a Vereador',
        imagem: edmararagao,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    {
        titulo: 'E-commerce',
        descricao: 'Site de E-commerce geral',
        imagem: ecommerce,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    {
        titulo: 'Infor-Mais',
        descricao: 'Site de empresa de tecnologia',
        imagem: informais,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    
    {
        titulo: 'Liga Master Fifa',
        descricao: 'Site para organizar diversos campeonatos de Video Game',
        imagem: ligamasterfifa,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://fifamasterleague.vercel.app'
    },
    {
        titulo: 'Dashboard RJR',
        descricao: 'Dashboard para controle pessoal de trabalhos realizados',
        imagem: dashboard,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/dashboard'
    },
    {
        titulo: 'PVT Consultoria',
        descricao: 'Site para informação de contato para consultoria',
        imagem: pvt,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://www.pvtconsultoria.com.br'
    },
    {
        titulo: 'Carbe Store',
        descricao: 'Site para vendas de produtos com Mercado Digital',
        imagem: carbestore,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    {
        titulo: 'ADSA - Vagas',
        descricao: 'Plataforma para divulgação de vagas dentro do Ministério de Santo André da Igreja Assembléia de Deus',
        imagem: kjrvagas,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://kjrdev.com.br/adsa-vagas'
    },
    {
        titulo: 'FernandoCar',
        descricao: 'Sistema de ponto eletronico para funcionários',
        imagem: fernandoCar,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://ponto-eletronico-front-mocha.vercel.app'
    },
    {
        titulo: 'KJR Encomendas',
        descricao: 'Sistema de Gestão de encomendas recebidas e entregues de condomínios de apartamentos',
        imagem: kjrencomendas,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    {
        titulo: 'CifraDrum',
        descricao: 'Aplicativo criado para orientar bateristas na hora de tocar',
        imagem: cifraDrum,
        ordem: 'direita',
        tipo: 'prod',
        link: 'https://cifra-drum.vercel.app'
    },
    {
        titulo: 'ADSA Cond. Maracanã',
        descricao: 'Site de apresentação de igreja',
        imagem: adsa,
        ordem: 'esquerda',
        tipo: 'local',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    {
        titulo: 'Maracanã FC',
        descricao: 'Site de Time de Futebol para divulgação e marcação de confrontos',
        imagem: maracanaFc,
        ordem: 'direita',
        tipo: 'local',
        link: 'https://devrogeriojunior.com.br/site-indisponivel'
    },
    // {
    //     titulo: 'Jogo de Mímica',
    //     descricao: 'Jogos para brincar com toda a família em momentos de descontração',
    //     imagem: mimicaImage,
    //     ordem: 'esquerda',
    //     tipo: 'local',
    //     link: 'https://jogo-de-mimica.vercel.app'
    // },
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
        <div id='meusProjetosId' className="meus-projetos">
            <div className="text-projetos">
                <p className="title">Meus Projetos</p>
            </div>
            {projetos.map((projeto, index) => (
                <div
                    key={index}
                    className={`projeto ${projeto.ordem}`}
                    ref={el => projetosRef.current[index] = el}
                >
                    <div className="texto-projeto">
                        <span className={`botao-projeto ${projeto.tipo}`}>
                            {projeto.tipo === 'prod' ? 'Prod' : 'Local'}
                        </span>
                        {projeto.tipo === 'prod' && (
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="botao-ver"
                            >
                                VER
                            </a>
                        )}
                        <h3>{projeto.titulo}</h3>
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