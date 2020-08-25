// Copyright (C) 2007-2020, GoodData(R) Corporation. All rights reserved.
import React from "react";
import ReactHighcharts from "react-highcharts";
import * as Ldm from "../ldm/full";

const CustomBarChart = ({ error, isLoading, result }) => {
  if (isLoading) {
    return <span>Loading…</span>;
  }

  if (error) {
    return <span>Something went wrong :-(</span>;
  }

  if (result) {
    const config = {
      chart: {
        type: "column"
      },
      title: {
        text: "🎉🍾🙌 My First Custom Chart 🙌🍾🎉"
      },
      series: result
        .data()
        .series()
        .firstForMeasure(Ldm.NrChecks)
        .dataPoints()
        .map((row, i) => ({ data: [parseFloat(row.rawValue)] }))
    };

    return <ReactHighcharts config={config} />;
  }

  return "🧟‍♂️ UGLY INIT";
};

export default CustomBarChart;
