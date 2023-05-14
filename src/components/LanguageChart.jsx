import React from "react";
import Chart from "react-apexcharts";

const data = [
  { title: "English", value: 70, color: "#E38627" },
  { title: "Hindi", value: 80, color: "#C13C37" },
  { title: "Gujarati", value: 90, color: "#6A2135" },
];

const options = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  colors: data.map((item) => item.color),
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: data.map((item) => item.title),
  },
  yaxis: {
    title: {
      text: "Languages",
    },
  },
};

const LanguageChart = () => {
  return (
    <div>
      <Chart
        options={options}
        series={[{ data: data.map((item) => item.value) }]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default LanguageChart;
