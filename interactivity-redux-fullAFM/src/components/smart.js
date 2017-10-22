import {
  Kpi as KpiOrig,
  BarChart as BarChartOrig,
  ColumnChart as ColumnChartOrig,
  LineChart as LineChartOrig,
  PieChart as PieChartOrig,
  Table as TableOrig,
  Execute as ExecuteOrig
} from './afmConnected'

import { StatusWrapper } from './statusConnected'

export const Kpi = StatusWrapper(KpiOrig)
export const BarChart = BarChartOrig
export const ColumnChart = ColumnChartOrig
export const LineChart = LineChartOrig
export const PieChart = PieChartOrig
export const Table = TableOrig
export const Execute = ExecuteOrig