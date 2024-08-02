import React from 'react';
import HeaderDash from './HeaderDash';
import '../css/Dashboard.css';
import ChartComponent from './ChartComponent';
import PieChartComponent from './PieChartComponent';
import Test1Component from './Test1';
import Test2Component from './Test2';
import Test3Component from './Test3';
import Test4Component from './Test4';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <HeaderDash />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="grid-container">
          <div className="grid-item">
            <div className="grid-content">
                <Test1Component />                
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-content">
                <Test2Component />
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-content">
                <Test3Component />
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-content">
                <Test4Component />
            </div>
          </div>
        </div>
        <div className="grid-container large-grid">
          <div className="grid-item large-grid-item">
            <div className="grid-content">
                <ChartComponent />
            </div>
          </div>
          <div className="grid-item small-grid-item">
            <div className="grid-content">
                <PieChartComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
