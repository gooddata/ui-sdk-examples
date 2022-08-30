// (C) 2022 GoodData Corporation

import React from 'react';
import * as GC from '@grapecity/spread-sheets';
import { SpreadSheets } from '@grapecity/spread-sheets-react';
import { CustomDashboardInsightComponent } from '@gooddata/sdk-ui-dashboard';
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

import { useFinancialStatementData, IFinancialStatementData } from './useData';

GC.Spread.Sheets.LicenseKey = "petr.dolejsi@gooddata.com,E576634961368114#B06Tt9mQBxmR4IWOXR6aylVYXRzZKlEeDdmRVZmVPFEWwEHMMN6LI94KHFWMRhTYCN6LKhkUtRTbSNncwI4dZhlVFJzNBNVN84EbhpkdZF7ZodWYvllNy56Z5J4cyJneO3UR444R5J7QKpmWlhUTMJFOHpmbntyQEh6QSJXO9lEO0lER9oUVxRzQmJVS5IGOwdkTyMlU536VWdGaup4MB5EW5hHTUt4ZuxWcvRzazAnZRJVYlF7Qv8GcFhjdrZWMVxGd6tGNMJjVUBjdthWYqhFRjpHZIdGcEVDWSpWdnBVYthGZGFzTw3me6AXTrJVZ5FkWVl5VjJWTMJiOiMlIsISOERkMzQUO7IiOigkIsYDN8ATOyUzM0IicfJye35XX3JCTBF5UiojIDJCLiUTMuYHITpEIkFWZyB7UiojIOJyebpjIkJHUiwiIxIzM4ETMgEzM8AjMyAjMiojI4J7QiwiIwMTOwIjMwIjI0ICc8VkIsISbvNmLhRXYkR6bvdGQpNnalx6bk9ic4VGciojIh94QiwSZ5JHd0ICb6VkIsICNxEDO6MTM6kDNzYjN7UjI0ICZJJCL355W0IyZsZmIsU6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3cmWMFDR6U4Rro5a4EjcPd4UhRnUod6c4I5YulkNuNnUDtUbjR4ShVHWWtCUyVDb8REVB3kTFVDMw94RqFDRBh6a7IEZFFFRPF4SZFVOGB7ZF56LVJWY4YWQYhHSZl";

const spreadStyles: any = {
    style: {
        width: "900px",
    }
};

const defaultStyle = new GC.Spread.Sheets.Style();
defaultStyle.font = "10px sans-serif";
defaultStyle.vAlign = GC.Spread.Sheets.VerticalAlign.center;
defaultStyle.showEllipsis = true;

// styles
const boldFont = "bold 10px sans-serif";
const defaultBorder = new GC.Spread.Sheets.LineBorder("Black", GC.Spread.Sheets.LineStyle.thin);
const doubleBorder = new GC.Spread.Sheets.LineBorder("Black", GC.Spread.Sheets.LineStyle.double);

const sumStyle = new GC.Spread.Sheets.Style();
sumStyle.borderTop = defaultBorder;
sumStyle.borderBottom = defaultBorder;

const importantSumStyle = new GC.Spread.Sheets.Style();
importantSumStyle.borderTop = defaultBorder;
importantSumStyle.borderBottom = defaultBorder;
importantSumStyle.backColor = "#e0e0e0";

const superImportantSumStyle = new GC.Spread.Sheets.Style();
superImportantSumStyle.borderTop = defaultBorder;
superImportantSumStyle.borderBottom = doubleBorder;
superImportantSumStyle.backColor = "#e0e0e0";

const monthStyle = new GC.Spread.Sheets.Style();
monthStyle.backColor = "#b5b5b5";
monthStyle.foreColor = "white";
monthStyle.font = boldFont;
monthStyle.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
monthStyle.borderBottom = sumStyle.borderBottom = defaultBorder;

const buildConditionalStyle = (color: string) => {
    const style = new GC.Spread.Sheets.Style();
    style.backColor = color;
    return style;
};

const setValues = (sheet: GC.Spread.Sheets.Worksheet, rowIndex: number, values: (string|number)[][]) => {
    sheet.setArray(rowIndex, 0, values);
    setTotals(sheet, rowIndex, values);
    setSparklineColumn(sheet, rowIndex, values);
}

const setSummaryRow = (sheet: GC.Spread.Sheets.Worksheet, rowIndex: number, values: (string|number)[], style: GC.Spread.Sheets.Style) => {
    sheet.setArray(rowIndex, 0, [values], false);
    sheet.getRange(rowIndex, 0, 1, values.length + 2).setStyle(style);
    sheet.getCell(rowIndex, 0).font(boldFont);
    setTotals(sheet, rowIndex, [values]);
    setSparklineColumn(sheet, rowIndex, [values]);
}

const addSparkline = (sheet: GC.Spread.Sheets.Worksheet, row: number, column: number, range: GC.Spread.Sheets.Range) => {
    const setting = new GC.Spread.Sheets.Sparklines.SparklineSetting();
    setting.options.showMarkers = true;
    setting.options.lineWeight = 1;
    setting.options.seriesColor = "blue";
    sheet.setSparkline(row, column, range,
        GC.Spread.Sheets.Sparklines.DataOrientation.horizontal,
        GC.Spread.Sheets.Sparklines.SparklineType.line,
        setting,
    );
};

const setSparklineColumn = (sheet: GC.Spread.Sheets.Worksheet, rowIndex: number, values: (string|number)[][]) => {
    for (let i = rowIndex; i < rowIndex + values.length; i++) {
        addSparkline(sheet, i, values[0].length + 1, new GC.Spread.Sheets.Range(i, 1, 1, values[0].length - 1));
    }
}

const setTotals = (sheet: GC.Spread.Sheets.Worksheet, rowIndex: number, values: (string|number)[][]) => {
    for (let i = 0; i < values.length; i++) {
        const sum = values[i].reduce<number>((acc, value, index) => index === 0 ? acc : acc + (value as number), 0);
        sheet.setValue(rowIndex + i, values[i].length, sum);
    }
}

export const SpreadJsInsight: React.FC<{ data: IFinancialStatementData }> = ({
    data: {
        months,
        revenue,
        costOfSales,
        operatingExpenses,
        summary
    }
}) => {
    const initSpread = (spread: GC.Spread.Sheets.Workbook) => {
        // suspend repaint of the sheet for performance reasons
        spread.suspendPaint();
        spread.suspendEvent();

        // default spread visibility
        spread.options.showHorizontalScrollbar = true;
        spread.options.showVerticalScrollbar = true;

        const sheet = spread.getActiveSheet();

        if (!sheet) {
            return; // no sheet exists when app is deployed on server and SpreadJS license is not valid
        }

        // default sheet settings
        sheet.name("Income statement");
        sheet.setDefaultStyle(defaultStyle);
        sheet.clearSelection();

        sheet.options.gridline.showHorizontalGridline = false;
        sheet.options.gridline.showVerticalGridline = false;

        // column width
        sheet.setColumnWidth(0, 200);

        for (let i = 1; i < months.length + 2; i++) {
            sheet.setColumnWidth(i, 85);
        }

        sheet.setColumnWidth(months.length + 2, 120);

        // row indexes
        const monthsRowIndex = 0;
        const revenueLabelRowIndex = 1;
        const revenueRowIndex = 2;
        const grossSalesRowIndex = revenueRowIndex + revenue.length;
        const costOfSalesRowIndex = grossSalesRowIndex + 2;
        const costOfSalesSumRowIndex = costOfSalesRowIndex + costOfSales.length;
        const grossMarginRowIndex = costOfSalesSumRowIndex + 2;
        const operatingExpensesRowIndex = grossMarginRowIndex + 2;
        const operatingExpensesSumRowIndex = operatingExpensesRowIndex + operatingExpenses.length;
        const ebitdaRowIndex = operatingExpensesSumRowIndex + 2;
        const otherExpensesRowIndex = ebitdaRowIndex + 2;
        const otherIncomeRowIndex = otherExpensesRowIndex + 1
        const earningsBeforeTaxRowIndex = otherIncomeRowIndex + 1;
        const taxesRowIndex = earningsBeforeTaxRowIndex + 2;
        const netIncomeRowIndex = taxesRowIndex + 2;

        // months
        const headers = [...months, "Total", "Trend"];
        sheet.getRange(monthsRowIndex, 1, 1, headers.length).setStyle(monthStyle);
        sheet.getCell(monthsRowIndex, 0).borderBottom(defaultBorder);
        sheet.setArray(monthsRowIndex, 1, [headers], false);

        // revenue label
        sheet.setValue(revenueLabelRowIndex, 0, "Revenue");
        sheet.getCell(revenueLabelRowIndex, 0).font(boldFont);

        // revenue
        setValues(sheet, revenueRowIndex, revenue);
        setSummaryRow(sheet, grossSalesRowIndex, summary.revenue, sumStyle);

        // cost of sales
        setValues(sheet, costOfSalesRowIndex, costOfSales);
        setSummaryRow(sheet, costOfSalesSumRowIndex, summary.costOfSales, sumStyle);

        // gross margin
        setSummaryRow(sheet, grossMarginRowIndex, summary.grossMargin, importantSumStyle);

        // operating expenses
        setValues(sheet, operatingExpensesRowIndex, operatingExpenses);
        setSummaryRow(sheet, operatingExpensesSumRowIndex, summary.operatingExpenses, importantSumStyle);

        // ebitda
        setSummaryRow(sheet, ebitdaRowIndex, summary.ebitda, importantSumStyle);

        // expenses/income
        setValues(sheet, otherExpensesRowIndex, [summary.otherExpense]);
        setValues(sheet, otherIncomeRowIndex, [summary.otherIncome]);
        setSummaryRow(sheet, earningsBeforeTaxRowIndex, summary.earningsBeforeTax, sumStyle);

        // taxes
        setValues(sheet, taxesRowIndex, [summary.taxes]);

        // net income
        setSummaryRow(sheet, netIncomeRowIndex, summary.netIncome, superImportantSumStyle);

        // last column borders
        const lastColumn = sheet.getRange(monthsRowIndex, months.length + 1, netIncomeRowIndex + 1, 1);
        lastColumn.borderLeft(defaultBorder);
        lastColumn.borderRight(defaultBorder);

        // conditional formatting
        const positiveConditionalStyle1 = buildConditionalStyle("#f6fdf6");
        const positiveConditionalStyle2 = buildConditionalStyle("#e4fae4");
        const positiveConditionalStyle3 = buildConditionalStyle("#c9f4c8");
        const positiveConditionalStyle4 = buildConditionalStyle("#a5eda4");

        const revenueRanges = [new GC.Spread.Sheets.Range(revenueRowIndex, 1, revenue.length, months.length)];
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 100_000, 0, positiveConditionalStyle1, revenueRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 200_000, 0, positiveConditionalStyle2, revenueRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 400_000, 0, positiveConditionalStyle3, revenueRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 1_000_000, 0, positiveConditionalStyle4, revenueRanges);

        const negativeConditionalStyle1 = buildConditionalStyle("#ffeeeb");
        const negativeConditionalStyle2 = buildConditionalStyle("#ffcdc2");
        const negativeConditionalStyle3 = buildConditionalStyle("#ffab99");
        const negativeConditionalStyle4 = buildConditionalStyle("#ff8970");

        const expensesRanges = [new GC.Spread.Sheets.Range(costOfSalesRowIndex, 1, costOfSales.length, months.length)];
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 100_000, 0, negativeConditionalStyle1, expensesRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 150_000, 0, negativeConditionalStyle2, expensesRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 400_000, 0, negativeConditionalStyle3, expensesRanges);
        sheet.conditionalFormats.addCellValueRule(GC.Spread.Sheets.ConditionalFormatting.ComparisonOperators.greaterThan, 500_000, 0, negativeConditionalStyle4, expensesRanges);

        // number format (set as last to not be overridden by style set)
        sheet.getRange(revenueRowIndex, 1, 1000, months.length + 1).formatter("$#,##0");

        // "commit" changes to the sheet
        spread.resumeEvent();
        spread.resumePaint();
    };

    return (
        <div style={{ height: 600, width: 1100 }}>
            <SpreadSheets workbookInitialized={initSpread} hostStyle={spreadStyles} />
        </div>
    );
};

export const spreadJsComponentFactory = (): CustomDashboardInsightComponent => {
    return ({ ErrorComponent, LoadingComponent, widget }) => {
        const { loaded, error, data } = useFinancialStatementData(widget);

        if (!loaded) {
            return <LoadingComponent />;
        }

        if (error || !data) {
            return <ErrorComponent message={error?.message ?? "Unknown error"} />;
        }

        return <SpreadJsInsight data={data} />;
    };
};
