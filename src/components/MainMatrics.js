import React from "react";
import Chart from "react-apexcharts";
import Data from "../db.json";
import "./MainMatrics.css";

function MainMatrics() {
  return (
    <div className="main-matrics">
      <Chart
        type="bar"
        height={300}
        width="100%"
        series={Data.graph1.series}
        options={{
          chart: {
            toolbar: false,
            fontFamily: "Montserrat, sans-serif",
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            position: "top",
            categories: [
              "Shareholder A",
              "Shareholder B",
              "Shareholder C",
              "Shareholder D",
            ],
            labels: {
              formatter: function (val) {
                return `${val}%`;
              },
            },
          },
          yaxis: {},
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: "20%",
              borderRadius: 5,
              dataLabels: {
                position: "top",
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "horizontal",
              shadeIntensity: 1,
              gradientToColors: ["#2896e9", "#7467f0"],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [5, 30, 100],
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ["#31394d"],
            },
            offsetX: 40,
          },
          grid: {
            show: true,
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default MainMatrics;
