import { useCustomWidgetExecutionDataView, ICustomWidget } from '@gooddata/sdk-ui-dashboard';
import * as Md from '../md/full';
import { ExtendedDashboardWidget } from '@gooddata/sdk-ui-dashboard/esm/model';
import { GoodDataSdkError, DataViewFacade } from '@gooddata/sdk-ui';
import { DataPoint } from '@gooddata/sdk-ui/esm/base/results/dataAccess';

export interface IFinancialStatementSummary {
    revenue: (string | number)[];
    costOfSales: (string | number)[];
    grossMargin: (string | number)[];
    operatingExpenses: (string | number)[];
    ebitda: (string | number)[];
    otherIncome: (string | number)[];
    otherExpense: (string | number)[];
    earningsBeforeTax: (string | number)[];
    taxes: (string | number)[];
    netIncome: (string | number)[];
}

export interface IFinancialStatementData {
    months: string[];
    revenue: (string | number)[][];
    costOfSales: (string | number)[][];
    operatingExpenses: (string | number)[][];
    summary: IFinancialStatementSummary;
}

export interface IFinancialStatement {
    loaded: boolean;
    error?: GoodDataSdkError;
    data?: IFinancialStatementData;
}

const extractMonthHeaders = (result: DataViewFacade | undefined) => result
    ? result
        .meta()
        .attributeHeadersForDim(1)[0]
        .map((descriptor) => descriptor.attributeHeaderItem.name)
    : [];

const asNumbers = (dataPoints: DataPoint[]) => dataPoints.map((dp) => dp.rawValue ? parseFloat(dp.rawValue.toString()) : 0);

const extractedValues = (result: DataViewFacade | undefined) => {
    if (!result) {
        return [];
    }
    const slices = result.data().slices().toArray();
    return slices.map((slice) => {
        const sliceTitles = slice.sliceTitles();
        const dataPoints = asNumbers(slice.dataPoints());
        return [...sliceTitles, ...dataPoints];
    });
};

const extractSummary = (result: DataViewFacade | undefined): IFinancialStatementSummary => {
    if (!result) {
        return {
            revenue: [],
            costOfSales: [],
            grossMargin: [],
            operatingExpenses: [],
            ebitda: [],
            otherIncome: [],
            otherExpense: [],
            earningsBeforeTax: [],
            taxes: [],
            netIncome: [],
        }
    }
    const series = result.data().series().toArray();
    return {
        revenue: ["Gross Sales", ...asNumbers(series[0].dataPoints())],
        costOfSales: ["Cost of Sales", ...asNumbers(series[1].dataPoints())],
        grossMargin: ["Gross Margin", ...asNumbers(series[2].dataPoints())],
        operatingExpenses: ["Operating Expenses", ...asNumbers(series[3].dataPoints())],
        ebitda: ["EBITDA", ...asNumbers(series[4].dataPoints())],
        otherIncome: ["Other Income", ...asNumbers(series[5].dataPoints())],
        otherExpense: ["Other Expenses", ...asNumbers(series[6].dataPoints())],
        earningsBeforeTax: ["Earnings Before Tax", ...asNumbers(series[7].dataPoints())],
        taxes: ["Taxes", ...asNumbers(series[8].dataPoints())],
        netIncome: ["Net Income", ...asNumbers(series[9].dataPoints())],
    }
}

const isTaskLoading = (task: ReturnType<typeof useCustomWidgetExecutionDataView>) => {
    return task.status === "pending" || task.status === "loading";
};

const isTaskError = (task: ReturnType<typeof useCustomWidgetExecutionDataView>) => {
    return task.status === "error";
};

export const useFinancialStatementData = (widget?: ExtendedDashboardWidget): IFinancialStatement => {
    const revenueTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [Md.DateDatasets.Date.MonthYear.Long, Md.Revenue],
            slicesBy: [Md.AccountL1],
            sortBy: [{
                attributeSortItem: {
                    attributeIdentifier: Md.AccountL1.attribute.localIdentifier,
                    direction: "asc",
                }
            }]
        },
    });

    const costOfSalesTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [Md.DateDatasets.Date.MonthYear.Long, Md.COS],
            slicesBy: [Md.AccountL1],
            sortBy: [{
                attributeSortItem: {
                    attributeIdentifier: Md.AccountL1.attribute.localIdentifier,
                    direction: "asc",
                }
            }]
        },
    });

    const operatingExpensesTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [Md.DateDatasets.Date.MonthYear.Long, Md.OperatingExpenses],
            slicesBy: [Md.AccountL1],
            sortBy: [{
                attributeSortItem: {
                    attributeIdentifier: Md.AccountL1.attribute.localIdentifier,
                    direction: "asc",
                }
            }]
        },
    });

    const summaryTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [Md.Revenue, Md.COS, Md.GrossMargin, Md.OperatingExpenses, Md.EBITDA, Md.OtherIncome, Md.OtherExpense, Md.EarningsBeforeTax, Md.Taxes, Md.NetIncome],
            slicesBy: [Md.DateDatasets.Date.MonthYear.Long],
            sortBy: [{
                attributeSortItem: {
                    attributeIdentifier: Md.DateDatasets.Date.MonthYear.Long.attribute.localIdentifier,
                    direction: "asc",
                }
            }]
        },
    });

    if (isTaskLoading(revenueTask) || isTaskLoading(costOfSalesTask) || isTaskLoading(operatingExpensesTask) || isTaskLoading(summaryTask)) {
        return {
            loaded: false,
        };
    }

    if (isTaskError(revenueTask) || isTaskError(costOfSalesTask) || isTaskError(operatingExpensesTask) || isTaskError(summaryTask)) {
        return {
            loaded: true,
            error: revenueTask.error ?? costOfSalesTask.error,
        };
    }

    const months = extractMonthHeaders(revenueTask.result);
    const revenue = extractedValues(revenueTask.result);
    const costOfSales = extractedValues(costOfSalesTask.result);
    const operatingExpenses = extractedValues(operatingExpensesTask.result);
    const summary = extractSummary(summaryTask.result);

    return {
        loaded: true,
        data: {
            months,
            revenue,
            costOfSales,
            operatingExpenses,
            summary,
        }
    };
};
