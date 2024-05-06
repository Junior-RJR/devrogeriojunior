import React, { useState } from 'react';
import '../css/Projetos.css';

const Projetos = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const projetos = [
    {
      imagem: '/images/pvt-consultoria.png',
      descricao: 'PVT Consultoria',
    },
    {
      imagem: '/images/bellacor-tintas.png',
      descricao: 'Bellacor Tintas',
    },
    {
      imagem: '/images/bt-refinish.png',
      descricao: 'BT Refinish',
    },
    // {
    //     imagem: '/images/sandrecardio.png',
    //     descricao: 'SandreCardio',
    //   },
    {
      imagem: '/images/informais.png',
      descricao: 'Infor+ A Tecnologia ao seu alcance',
    },
    {
      imagem: '/images/fernandoCar.png',
      descricao: 'FernandoCar',
    },
    // {
    //   imagem: '/images/mimica.png',
    //   descricao: 'RJR Games - Mimica',
    // },
    // {
    //   imagem: '/images/pereira.png',
    //   descricao: 'RJR Games - Pereira',
    // },
  ];

  const proximaImagem = () => {
    setIndiceAtual((indiceAtual + 1) % projetos.length);
  };

  const imagemAnterior = () => {
    const novoIndice = indiceAtual === 0 ? projetos.length - 1 : indiceAtual - 1;
    setIndiceAtual(novoIndice);
  };

  const irParaImagem = (indice) => {
    setIndiceAtual(indice);
  };

  return (
    <div className="projetos">
      <div className="textProjetos">
        <p>Projetos</p>
      </div>
      <div className="descricao">{projetos[indiceAtual].descricao}</div>
      <div className="carrossel">
        <div className="controles">
          <button onClick={imagemAnterior}>&#10094;</button>
          <button onClick={proximaImagem}>&#10095;</button>
        </div>
        <img
          className="imagem-carrossel"
          src={projetos[indiceAtual].imagem}
          alt={`Imagem ${indiceAtual + 1}`}
        />
      </div>
      <div className="pontos-navegacao">
        {projetos.map((projeto, index) => (
          <button
            key={index}
            className={indiceAtual === index ? 'ativo' : ''}
            onClick={() => irParaImagem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
