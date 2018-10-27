// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import { Kpi as KpiOrig, Execute as ExecuteOrig, AfmComponents } from '@gooddata/react-components';
import { afmConnect, afmWrapper as AfmComponentWrapper } from '@gooddata/gdc-afm-connect';


export const Kpi = afmConnect(KpiOrig);

export const BarChart = AfmComponentWrapper(AfmComponents.BarChart);

export const ColumnChart = AfmComponentWrapper(AfmComponents.ColumnChart);

export const LineChart = AfmComponentWrapper(AfmComponents.LineChart);

export const PieChart = AfmComponentWrapper(AfmComponents.PieChart);

export const AreaChart = AfmComponentWrapper(AfmComponents.AreaChart)

export const Table = AfmComponentWrapper(AfmComponents.Table);

export const Execute = AfmComponentWrapper(ExecuteOrig);
