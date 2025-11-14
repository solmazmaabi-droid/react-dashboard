import { useEffect, useState } from "react";
import { getDashboardData } from "../dataService";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Chart from "../components/Chart";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDashboardData().then((res) => setData(res));
  }, []);

  if (!data) return <Loader />;

  const chartData = {
    labels: data.chart.labels,
    datasets: [
      {
        label: "Traffic",
        data: data.chart.values
      }
    ]
  };

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="card-row">
        <Card title="Users" value={data.stats.users} />
        <Card title="Sales" value={`$${data.stats.sales}`} />
        <Card title="Visits" value={data.stats.visits} />
      </div>

      <div className="chart-section">
        <h3>Weekly Traffic</h3>
        <Chart chartData={chartData} />
      </div>
    </div>
  );
}
