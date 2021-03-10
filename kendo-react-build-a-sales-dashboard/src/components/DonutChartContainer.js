import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import { Execute } from "@gooddata/sdk-ui";
import { newAttribute, newMeasure } from "@gooddata/sdk-model";
import { PieChart } from "@gooddata/sdk-ui-charts";

// import { donutChartData as newDonutChartData } from '../data/appData';

/* This function's outputted string determines the label contents */
const labelTemplate = (e) => (e.category + '\n'  + (e.percentage*100) +'%');

export const DonutChartContainer = () => (
  <Execute
    seriesBy={[newMeasure('aeOt50ngicOD')]}
    slicesBy={[newAttribute('label.restaurantlocation.locationcity')]}
  >
    {
      ({ error, isLoading, result }) => {
        if (isLoading) {
          return <span>Loading…</span>;
        }

        if (error) {
          return <span>Something went wrong :-(</span>;
        }

        if (result) {
          // const newDonutChartData = result.data().slices().toArray().map(slice => ({
          //   foodType: slice.sliceTitles()[0],
          //   percentSold: slice.rawData()[0]
          // }));

          // The following limits the data coming from the GoodData platform
          // so that the pie chart looks better and not too crowded.
          //
          const newDonutChartData = result.data().slices().toArray().slice(1, 5).map(slice => ({
            foodType: slice.sliceTitles()[0],
            percentSold: parseInt(parseFloat(slice.rawData()[0]) / 10000)
          }));

          return (
            <Chart style={{ height: 300 }}>
              <ChartSeries>
                <ChartSeriesItem type="donut" data={newDonutChartData} categoryField="foodType" field="percentSold" padding={0}>
                  <ChartSeriesLabels color="#fff" background="none" content={labelTemplate} />
                </ChartSeriesItem>
              </ChartSeries>
              <ChartLegend visible={false} />
            </Chart>
          );

          // return (
          //   <PieChart
          //     measures={[newMeasure('aeOt50ngicOD')]}
          //     viewBy={newAttribute('label.restaurantlocation.locationcity')}
          //   />
          // );
        }

        return <span>Init…</span>;
      }
    }
  </Execute>
);
