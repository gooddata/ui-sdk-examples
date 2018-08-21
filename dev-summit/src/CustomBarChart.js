// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactHighcharts from 'react-highcharts';

const CustomBarChart = ({error, isLoading, result}) => {
  if (isLoading) {
    return <span>Loading…</span>;
  }

  if (error) {
    return <span>Something went wrong :-(</span>;
  }

  const config = {
    chart: {
      type: 'column',
    },
    title: {
      text: '🎉🍾🙌 My First Custom Chart 🙌🍾🎉'
    },
    series: result.executionResult.data.map((row, i) =>
      ({ data: [parseFloat(row[0])] }))
  };

  if (result) {
    return (
      <ReactHighcharts config={config} />
    );
  }
};

export default CustomBarChart;
