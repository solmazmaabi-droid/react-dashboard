import React from react;
import { Line } from react-chartjs-2;
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from chart.js;

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

export default function Chart({ chartData }) {
  return (
    div className=chart-container
      Line data={chartData} 
    div
  );
}
