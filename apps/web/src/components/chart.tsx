"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 3000, 5000, 20000, 15000],
      borderColor: "#ef4444",
      backgroundColor: "rgba(239,68,68,0.3)",
      tension: 0.4,
    },
  ],
};

export default function Chart() {
  return <Line data={data} />;
}