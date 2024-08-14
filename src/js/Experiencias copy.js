import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Experiencias.css';

Modal.setAppElement('#root');

const empresasData = [
  {
    nome: 'Bela Tintas',
    cargo: 'Estagiário de TI',
    nivel: 'estagiario',
    atribuicoes: [
      "Planejamento de melhorias e realização de reuniões semanais sobre Performance;",
      "Configurações e alterações em Servidor PROXY;",
      "Manutenções preventivas e corretivas em Hardwares e Softwares;",
      "Passagem de Cabeamento de Rede;",
      "Suporte Técnico e suporte ao cliente e infraestrutura;",
      "Configuração e manutenção no Windows Live Mail;",
      "Controle dos resultados apresentados nos Clientes;",
      "Participações de reuniões diárias sobre desempenho proposto e esperado;",
      "Controle dos resultados apresentados nos Clientes e reuniões Semanais sobre Performance;",
      "Conhecimentos em ferramentas de modelagem de processos, UML, Visio, PowerPoint e SharePoint."
    ]
  },
  {
    nome: 'Wittel',
    cargo: 'Trainee',
    nivel: 'trainee',
    atribuicoes: [
      "ServiceDesk em plataforma JIRA Cloud de chamados;",
      "Configurações de usuários e grupos de e-mail no Servidor Exchange e Office365;",
      "Criação de usuário e alteração de ramais no Cisco CallManager;",
      "Sincronização do Diretório LDAP no Cisco CallManager;",
      " Criação, exclusão, alteração e ajustes de usuários e grupos de usuário no AD;",
      "Conhecimento em Suite CRM e ServiceNow;",
      "Backups diários de Servidores VEEAM e do Servidor Zabbix;",
      "Backups diários do Servidor WSUS;",
      "Configurações no Servidor de Controle de Acesso Intelbras e Servidor PROXY;",
      "Manutenções preventivas e corretivas em Hardwares e Softwares diversos;",
      "Migração de PST’s locais para o Office 365;",
      "Suporte Técnico, Infraestrutura, Suporte ao Cliente via telefone e e-Mail;",
      "Migração do Servidor Exchange para plataforma Office 365 da Microsoft."
    ]
  },
  {
    nome: 'Tecnomafer Telecom',
    cargo: 'Técnico de TI',
    nivel: 'tecnico',
    atribuicoes: [
      "Monitoramento de Dashboard de aplicações a Clientes;",
      "Instalação e configuração de Asterisk e Issabel;",
      "Suporte a Clientes via Telefone e E-mail;",
      "Implementação de Sistema de Chamados;",
      "Estilização CSS3 de Sistema de Chamados;",
      "Desenvolvimento de Dashboard;",
      "Atuação como Scrum Master e Desenvolvedor Front-End."
    ]
  },
  
  
  {
    nome: 'Credits Brasil',
    cargo: 'Analista de TI',
    nivel: 'analista',
    atribuicoes: [
      "Migração de PST's ao Exchange;",
      "Estruturar todo o ambiente de TI;",
      "Suportar as operações de Infraestrutura;",
      "Realizar as configurações de Notebooks, Impressoras e Scanners;",
      "Prestar suporte ao usuário;",
      "Realizar Monitoramento de Sistemas;",
      "Executar a Gestão de Inventário;",
      "Realizar planejamento estratégico para melhorias no setor de TI."
    ]
  },
  
  
  {
    nome: 'Certsys',
    cargo: 'Desenvolvedor React',
    nivel: 'desenvolvedor-react',
    atribuicoes: [
      "Atuação como Desenvolvedor no projeto de migração do Orgão Poupatempo, que faz atendimento em todo o estado de São Paulo;",
      "Criação, Estilização e Manutenção de componentes em React;",
      "Versionamento no GIT;",
      "Utilização de lib's diversas, tais como: Redux, Saga, Ant-D, Axios, React-router, entre outras;",
      "Desenvolvimento de tela conforme requisitos e manutenção evolutiva de novas features."
    ]
  },
  {
    nome: 'Stefanini Brasil',
    cargo: 'Desenvolvedor',
    nivel: 'desenvolvedor',
    atribuicoes: [
      "Atuação no CensoSP como desenvolvedor Python;",
      "Atuação em projeto de migração de Micro Front End;",
      "Reconstruções de branchs;",
      "Atuação como Desenvolvedor no projeto de migração do Orgão Poupatempo, que faz atendimento em todo o estado de São Paulo;",
      "Criação, Estilização e Manutenção de componentes em React;",
      "Versionamento no GIT;",
      "Utilização de lib's diversas, tais como: Redux, Saga, Ant-D, Axios, React-router, entre outras;",
      "Desenvolvimento de tela conforme requisitos e manutenção evolutiva de novas features."
    ]
  },

  
]

const Experiencias = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
  
  const handleEmpresaClick = (empresa) => {
    setEmpresaSelecionada(empresa);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="experienciasId" className="experiencias">
      <div className="container">
        <h2 className="tituloExp">Experiências</h2>
        <div className="empresas">
          {empresasData.map((empresa, index) => (
            <div 
              key={index} 
              className={`empresa ${empresa.nivel}`} 
              style={{ "--delay": index }}
              onClick={() => handleEmpresaClick(empresa)}
            >
              <span className="empresa-cargo">{empresa.cargo}</span>
            </div>
          ))}
        </div>
        
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Empresa Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <span className="close-modal" onClick={closeModal}>&times;</span>
          {empresaSelecionada && (
            <>
              <h3>{empresaSelecionada.cargo}</h3>
              <div className="nome-empresa">{empresaSelecionada.nome}</div>
              <ul className="atribuicoes-list">
                {empresaSelecionada.atribuicoes.map((atribuicao, index) => (
                  <li key={index} className="atribuicao-item">{atribuicao}</li>
                ))}
              </ul>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
}

export default Experiencias;