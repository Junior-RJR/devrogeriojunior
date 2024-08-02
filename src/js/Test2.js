import React from 'react';
import '../css/TestComponent.css';

const Test2Component = () => {

  const contacts = 9; 
  const difference = 35;

  const differenceSign = difference >= 0 ? '+' : '-';

  return (
    <div className="test2-container">
    <h2>Empresas Pequenas</h2>
    <div className="contacts">{contacts}</div>
    <div className="difference">
      <span className={difference >= 0 ? 'positive' : 'negative'}>
        {differenceSign}{Math.abs(difference)}%
      </span> em relação ao mês anterior
    </div>
  </div>
  );
}

export default Test2Component;