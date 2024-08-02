import React from 'react';
import '../css/TestComponent.css';

const Test4Component = () => {

  const contacts = 2; 
  const difference = 3; 

  const differenceSign = difference >= 0 ? '+' : '-';

  return (
    <div className="test4-container">
    <h2>Empresas Médias</h2>
    <div className="contacts">{contacts}</div>
    <div className="difference">
      <span className={difference >= 0 ? 'positive' : 'negative'}>
        {differenceSign}{Math.abs(difference)}%
      </span> em relação ao mês anterior
    </div>
  </div>
  );
}

export default Test4Component;