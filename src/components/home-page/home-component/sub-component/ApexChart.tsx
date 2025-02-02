"use client";
import React from "react";

import { ChartOptions } from "@/interFace/interFace";
import ApexChart from "react-apexcharts";
import useSellSummaries from "@/hooks/useSellSummaries";
import ChartPreloader from "@/preloaders/ChartPreloader";
const AreaCharts = () => {
  const { data, loading, error } = useSellSummaries() as any;
  const {
    sellsReport = [300, 450, 200, 700, 500],
    productQuantity = [30, 45, 20, 70, 50],
    formattedDates = ["1 Dec", "2 Dec", "3 Dec", "4 Dec", "5 Dec"],
  } = data;

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const options: ChartOptions = {
    series: [
      {
        name: "total sells",
        data: sellsReport,
      },
      {
        name: "product",
        data: productQuantity,
      },
    ],
    chart: {
      height: 445,
      width: "100%",
      type: "area",
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: "Cashflow",
      align: "left",
    },
    colors: ["#E95582", "#6F4EF6"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: formattedDates,
    },
    yaxis: {
      min: 50,
      max: 1000,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };
  return (
    <>
      {loading ? (
        <>
          <ChartPreloader />
        </>
      ) : (
        <>
          <ApexChart
            options={options}
            series={options.series}
            type="area"
            height={450}
          />
        </>
      )}
    </>
  );
};

export default AreaCharts;
