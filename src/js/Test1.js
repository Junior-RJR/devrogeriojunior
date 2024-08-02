import React from 'react';
import '../css/TestComponent.css';

const Test1Component = () => {
  const contacts = 189; 
  const difference = 18;

  const differenceSign = difference >= 0 ? '+' : '-';

  return (
    <div className="test1-container">
      <h2>Contatos via Redes Sociais</h2>
      <div className="contacts">{contacts}</div>
      <div className="difference">
        <span className={difference >= 0 ? 'positive' : 'negative'}>
          {differenceSign}{Math.abs(difference)}%
        </span> em relação ao mês anterior
      </div>
    </div>
  );
}

export default Test1Component;