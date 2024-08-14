import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Websites', 'Aplicativos', 'Sistemas'],
        datasets: [{
          label: 'Projetos por Tipo',
          data: [18, 5, 3], 
          backgroundColor: [
            '#dfc750',
            '#C53F3F',
            '#1E56AB'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChartComponent;
