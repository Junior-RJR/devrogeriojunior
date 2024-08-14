import React from 'react';
import { Line } from 'react-chartjs-2';
import '../css/ChartComponent.css';

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
  datasets: [
    {
      label: 'Projetos Desenvolvidos',
      data: [2, 9, 3, 5, 6, 3, 8, 5],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const ChartComponent = () => {
  return (
    <div className="chart-container">
      <h2>Projetos Desenvolvidos por Mês</h2>
      <Line data={data} />
    </div>
  );
}

export default ChartComponent;