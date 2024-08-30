import React from "react";
import useFetchData from "../hooks/UseAxios";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend, Title);

Chart.defaults.plugins.legend.position = "bottom";

const VehicleDoughnut = () => {
  const { vehicles } = useFetchData();

  const carCount = vehicles.filter(
    (vehicle) => vehicle.classification === "car"
  ).length;
  const vanCount = vehicles.filter(
    (vehicle) => vehicle.classification === "van"
  ).length;
  const busCount = vehicles.filter(
    (vehicle) => vehicle.classification === "bus"
  ).length;
  const bikeCount = vehicles.filter(
    (vehicle) => vehicle.classification === "bike"
  ).length;
  const truckCount = vehicles.filter(
    (vehicle) => vehicle.classification === "truck"
  ).length;

  const data = {
    labels: ["Cars", "Buses", "Bikes", "Trucks", "Vans"],
    datasets: [
      {
        data: [carCount, busCount, bikeCount, truckCount, vanCount],
        backgroundColor: [
          "#ffa600",
          "#b7d662",
          "#955196",
          "#ff6e54",
          "#444e86",
        ],
        borderWidth: 3,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        usePointStyle: true,
      },
      tooltip: {
        backgroundColor: "#555",
        usePointStyle: true,
      },
      //   title: {
      //     display: true,
      //     text: "Vehicle Classification Snapshot",
      //   },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div id="doughnut-chart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default VehicleDoughnut;
