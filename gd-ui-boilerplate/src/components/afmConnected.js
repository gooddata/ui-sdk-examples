// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import {
  Visualization as VisualizationOrig,
  Kpi as KpiOrig,
  BarChart as BarChartOrig,
  ColumnChart as ColumnChartOrig,
  LineChart as LineChartOrig,
  PieChart as PieChartOrig,
  AreaChart as AreaChartOrig,
  Table as TableOrig,
  PivotTable as PivotTableOrig,
  Execute as ExecuteOrig,
  AfmComponents
} from '@gooddata/react-components';
import { afmConnect, afmWrapper } from '@gooddata/gdc-afm-connect';


export const Visualization = afmConnect(VisualizationOrig);

export const Kpi = afmConnect(KpiOrig);

export const BarChart = afmConnect(BarChartOrig);
export const ColumnChart = afmConnect(ColumnChartOrig);
export const LineChart = afmConnect(LineChartOrig);
export const PieChart = afmConnect(PieChartOrig);
export const AreaChart = afmConnect(AreaChartOrig)
export const Table = afmConnect(TableOrig);
export const PivotTable = afmConnect(PivotTableOrig);

export const Execute = afmWrapper(ExecuteOrig);

/* following AFM components are deprecated, kept only for backwards compability */
export const AfmBarChart = afmWrapper(AfmComponents.BarChart);
export const AfmColumnChart = afmWrapper(AfmComponents.ColumnChart);
export const AfmLineChart = afmWrapper(AfmComponents.LineChart);
export const AfmPieChart = afmWrapper(AfmComponents.PieChart);
export const AfmAreaChart = afmWrapper(AfmComponents.AreaChart)
export const AfmTable = afmWrapper(AfmComponents.Table);
