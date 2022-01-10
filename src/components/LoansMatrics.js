import React from "react";
import Chart from "react-apexcharts";
import Data from "../db.json";
import "./LoansMatrics.css";

function LoansMatrics() {
  return (
    <div className="main-matrics">
      <Chart
        type="bar"
        height={400}
        width="100%"
        series={Data.graph2.series}
        options={{
          chart: {
            toolbar: false,
            fontFamily: "Montserrat, sans-serif",
          },
          colors: ["#ff896b", "#2896e9", "#c272ff"],
          xaxis: {
            categories: [
              "Party A",
              "Party B",
              "Party C",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
            ],
          },
          yaxis: { opposite: true },
          plotOptions: {
            bar: {
              columnWidth: "20%",
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: true,
            customLegendItems: ["> 20%", "> 10%", ">5%"],
            position: "top",
            horizontalAlign: "right",
            height: 100,
            markers: {
              width: 6,
              height: 6,
            },
          },
        }}
      />
    </div>
  );
}

export default LoansMatrics;
