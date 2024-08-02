import React, { useState } from 'react';
import '../css/Experiencias.css';

const atribuicoesStefanini = [
  "Atuação em projeto de migração de Micro Front End;",
  "Reconstruções de branchs;",
  "Atuação como Desenvolvedor no projeto de migração do Orgão Poupatempo, que faz atendimento em todo o estado de São Paulo;",
  "Criação, Estilização e Manutenção de componentes em React;",
  "Versionamento no GIT;",
  "Utilização de lib's diversas, tais como: Redux, Saga, Ant-D, Axios, React-router, entre outras;",
  "Desenvolvimento de tela conforme requisitos e manutenção evolutiva de novas features."
];

const atribuicoesCertsys = [
  "Atuação como Desenvolvedor no projeto de migração do Orgão Poupatempo, que faz atendimento em todo o estado de São Paulo;",
  "Criação, Estilização e Manutenção de componentes em React;",
  "Versionamento no GIT;",
  "Utilização de lib's diversas, tais como: Redux, Saga, Ant-D, Axios, React-router, entre outras;",
  "Desenvolvimento de tela conforme requisitos e manutenção evolutiva de novas features."
];

const atribuicoesCredits = [
  "Migração de PST's ao Exchange;",
  "Estruturar todo o ambiente de TI;",
  "Suportar as operações de Infraestrutura;",
  "Realizar as configurações de Notebooks, Impressoras e Scanners;",
  "Prestar suporte ao usuário;",
  "Realizar Monitoramento de Sistemas;",
  "Executar a Gestão de Inventário;",
  "Realizar planejamento estratégico para melhorias no setor de TI."
];

const atribuicoesTecnomafer = [
  "Monitoramento de Dashboard de aplicações a Clientes;",
  "Instalação e configuração de Asterisk e Issabel;",
  "Suporte a Clientes via Telefone e E-mail;",
  "Implementação de Sistema de Chamados;",
  "Estilização CSS3 de Sistema de Chamados;",
  "Desenvolvimento de Dashboard;",
  "Atuação como Scrum Master e Desenvolvedor Front-End."
];

const atribuicoesWittel = [
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
];

const atribuicoesBelaTintas = [
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
];

const renderList = (atribuicoes) => {
  return (
      <ul>
          {atribuicoes.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
      </ul>
  );
};

const Experiencias = ({ history }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [empresaSelecionada, setEmpresaSelecionada] = useState('');
    const [atribuicoes, setAtribuicoes] = useState([]);
  
    const handleEmpresaClick = (empresa, atribuicoes) => {
      setEmpresaSelecionada(empresa);
      setAtribuicoes(atribuicoes);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
      <section id="experiencias" className="experiencias">
        <div className="container">
          <h2 className="tituloExp">Experiências</h2>
          <div className="empresas">
            {[{
              nome: 'Stefanini Brasil',
              cargo: 'Desenvolvedor React',
              atribuicoes: atribuicoesStefanini
            }, {
              nome: 'Certsys Tecnologia da Informação',
              cargo: 'Desenvolvedor React Jr',
              atribuicoes: atribuicoesCertsys
            }, {
              nome: 'Credits Brasil',
              cargo: 'Analista de TI Jr',
              atribuicoes: atribuicoesCredits
            }, {
              nome: 'Tecnomafer Telecom',
              cargo: 'Técnico de TI',
              atribuicoes: atribuicoesTecnomafer
            }, {
              nome: 'Wittel',
              cargo: 'Trainee',
              atribuicoes: atribuicoesWittel
            }, {
              nome: 'Bela Tintas',
              cargo: 'Estagiário de TI',
              atribuicoes: atribuicoesBelaTintas
            }].map((empresa, index) => (
              <div 
                key={index} 
                className="empresa" 
                onClick={() => handleEmpresaClick(empresa.nome, empresa.atribuicoes)}
              >
                <span className="empresa-cargo">{empresa.cargo}</span>
                <br />
                <span className="empresa-nome">{empresa.nome}</span>
                <br />
                <span className="clique-aqui">(Clique aqui)</span>
              </div>
            ))}
          </div>
          {modalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>×</span>
                <h3>{empresaSelecionada}</h3>
                <ul>
                  {atribuicoes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  export default Experiencias;