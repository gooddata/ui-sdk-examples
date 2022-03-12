/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-02-18T01:34:50.610Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */

export const CampaignChannelId = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */

export const Category = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */

export const Type = newAttribute("type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */

export const CampaignId = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */

export const CampaignName = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */

export const CustomerId = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */

export const CustomerName = newAttribute("customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: customers.region
 */

export const Region = newAttribute("customers.region");
/**
 * Attribute Title: State
 * Attribute ID: customers.state
 */

export const State = {
    /**
     * Display Form Title: State
     * Display Form ID: customers.state
     */
    Default: newAttribute("customers.state"),
    /**
     * Display Form Title: Location
     * Display Form ID: geo__state__location
     */
    Location: newAttribute("geo__state__location"),
};
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */

export const OrderId = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */

export const OrderLineId = newAttribute("order_line_id");
/**
 * Attribute Title: Region
 * Attribute ID: order_lines.region
 */

export const Region_1 = newAttribute("order_lines.region");
/**
 * Attribute Title: State
 * Attribute ID: order_lines.state
 */

export const State_1 = newAttribute("order_lines.state");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */

export const OrderStatus = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */

export const ProductId = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */

export const ProductName = newAttribute("product_name");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */

export const Category_1 = newAttribute("products.category");
/**
 * Metric Title: Revenue
 * Metric ID: revenue
 * Metric Type: MAQL Metric
 */

export const Revenue = newMeasure(idRef("revenue", "measure"));
/**
 * Metric Title: Sales
 * Metric ID: sales
 * Metric Type: MAQL Metric
 */

export const Sales = newMeasure(idRef("sales", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: budget
 */

export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: budget
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */

export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: spend
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */

export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: price
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */

export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: quantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarterOfYear = newAttribute("date.quarterOfYear");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthOfYear = newAttribute("date.monthOfYear");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekOfYear = newAttribute("date.weekOfYear");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfYear = newAttribute("date.dayOfYear");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfMonth = newAttribute("date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfWeek = newAttribute("date.dayOfWeek");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateHourOfDay = newAttribute("date.hourOfDay");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMinuteOfHour = newAttribute("date.minuteOfHour");
/**
 * Attribute Title: Date - Year
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateYear = newAttribute("date.year");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarterYear = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthYear = newAttribute("date.month");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekYear = newAttribute("date.week");
/**
 * Attribute Title: Date - Date
 * Attribute ID: date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDate = newAttribute("date.day");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateHour = newAttribute("date.hour");
/**
 * Attribute Title: Date - Minute
 * Attribute ID: date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMinute = newAttribute("date.minute");
/** Available Date Data Sets */

export const DateDatasets = {
    /**
     * Date Data Set Title: Date
     * Date Data Set ID: date
     */
    Date: {
        ref: idRef("date", "dataSet"),
        identifier: "date",
        /**
         * Date Attribute: Date - Quarter of Year
         * Date Attribute ID: date.quarterOfYear
         */
        DateQuarterOfYear: {
            ref: idRef("date.quarterOfYear", "attribute"),
            identifier: "date.quarterOfYear",
            /**
             * Display Form Title: Date - Quarter of Year
             * Display Form ID: date.quarterOfYear
             */
            Default: newAttribute("date.quarterOfYear"),
        },
        /**
         * Date Attribute: Date - Month of Year
         * Date Attribute ID: date.monthOfYear
         */
        DateMonthOfYear: {
            ref: idRef("date.monthOfYear", "attribute"),
            identifier: "date.monthOfYear",
            /**
             * Display Form Title: Date - Month of Year
             * Display Form ID: date.monthOfYear
             */
            Default: newAttribute("date.monthOfYear"),
        },
        /**
         * Date Attribute: Date - Week of Year
         * Date Attribute ID: date.weekOfYear
         */
        DateWeekOfYear: {
            ref: idRef("date.weekOfYear", "attribute"),
            identifier: "date.weekOfYear",
            /**
             * Display Form Title: Date - Week of Year
             * Display Form ID: date.weekOfYear
             */
            Default: newAttribute("date.weekOfYear"),
        },
        /**
         * Date Attribute: Date - Day of Year
         * Date Attribute ID: date.dayOfYear
         */
        DateDayOfYear: {
            ref: idRef("date.dayOfYear", "attribute"),
            identifier: "date.dayOfYear",
            /**
             * Display Form Title: Date - Day of Year
             * Display Form ID: date.dayOfYear
             */
            Default: newAttribute("date.dayOfYear"),
        },
        /**
         * Date Attribute: Date - Day of Month
         * Date Attribute ID: date.dayOfMonth
         */
        DateDayOfMonth: {
            ref: idRef("date.dayOfMonth", "attribute"),
            identifier: "date.dayOfMonth",
            /**
             * Display Form Title: Date - Day of Month
             * Display Form ID: date.dayOfMonth
             */
            Default: newAttribute("date.dayOfMonth"),
        },
        /**
         * Date Attribute: Date - Day of Week
         * Date Attribute ID: date.dayOfWeek
         */
        DateDayOfWeek: {
            ref: idRef("date.dayOfWeek", "attribute"),
            identifier: "date.dayOfWeek",
            /**
             * Display Form Title: Date - Day of Week
             * Display Form ID: date.dayOfWeek
             */
            Default: newAttribute("date.dayOfWeek"),
        },
        /**
         * Date Attribute: Date - Hour of Day
         * Date Attribute ID: date.hourOfDay
         */
        DateHourOfDay: {
            ref: idRef("date.hourOfDay", "attribute"),
            identifier: "date.hourOfDay",
            /**
             * Display Form Title: Date - Hour of Day
             * Display Form ID: date.hourOfDay
             */
            Default: newAttribute("date.hourOfDay"),
        },
        /**
         * Date Attribute: Date - Minute of Hour
         * Date Attribute ID: date.minuteOfHour
         */
        DateMinuteOfHour: {
            ref: idRef("date.minuteOfHour", "attribute"),
            identifier: "date.minuteOfHour",
            /**
             * Display Form Title: Date - Minute of Hour
             * Display Form ID: date.minuteOfHour
             */
            Default: newAttribute("date.minuteOfHour"),
        },
        /**
         * Date Attribute: Date - Year
         * Date Attribute ID: date.year
         */
        DateYear: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Date - Year
             * Display Form ID: date.year
             */
            Default: newAttribute("date.year"),
        },
        /**
         * Date Attribute: Date - Quarter/Year
         * Date Attribute ID: date.quarter
         */
        DateQuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: Date - Quarter/Year
             * Display Form ID: date.quarter
             */
            Default: newAttribute("date.quarter"),
        },
        /**
         * Date Attribute: Date - Month/Year
         * Date Attribute ID: date.month
         */
        DateMonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Date - Month/Year
             * Display Form ID: date.month
             */
            Default: newAttribute("date.month"),
        },
        /**
         * Date Attribute: Date - Week/Year
         * Date Attribute ID: date.week
         */
        DateWeekYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Date - Week/Year
             * Display Form ID: date.week
             */
            Default: newAttribute("date.week"),
        },
        /**
         * Date Attribute: Date - Date
         * Date Attribute ID: date.day
         */
        DateDate: {
            ref: idRef("date.day", "attribute"),
            identifier: "date.day",
            /**
             * Display Form Title: Date - Date
             * Display Form ID: date.day
             */
            Default: newAttribute("date.day"),
        },
        /**
         * Date Attribute: Date - Hour
         * Date Attribute ID: date.hour
         */
        DateHour: {
            ref: idRef("date.hour", "attribute"),
            identifier: "date.hour",
            /**
             * Display Form Title: Date - Hour
             * Display Form ID: date.hour
             */
            Default: newAttribute("date.hour"),
        },
        /**
         * Date Attribute: Date - Minute
         * Date Attribute ID: date.minute
         */
        DateMinute: {
            ref: idRef("date.minute", "attribute"),
            identifier: "date.minute",
            /**
             * Display Form Title: Date - Minute
             * Display Form ID: date.minute
             */
            Default: newAttribute("date.minute"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Sales by Month
     * Insight ID: 02a3f99c-1381-4c1c-bc74-e61573dde444
     */
    SalesByMonth: "02a3f99c-1381-4c1c-bc74-e61573dde444",
    /**
     * Insight Title: Unit Sold
     * Insight ID: 0660f94e-2106-41ea-b2a0-e10f70738f96
     */
    UnitSold: "0660f94e-2106-41ea-b2a0-e10f70738f96",
    /**
     * Insight Title: Product Sales Table
     * Insight ID: 33c19022-2b04-4d4f-9ba2-e20bf238e228
     */
    ProductSalesTable: "33c19022-2b04-4d4f-9ba2-e20bf238e228",
    /**
     * Insight Title: Revenue vs Campaign Spend
     * Insight ID: b151e491-dd23-4f24-b8a0-e6ad10e445c8
     */
    RevenueVsCampaignSpend: "b151e491-dd23-4f24-b8a0-e6ad10e445c8",
    /**
     * Insight Title: Sales by Year by Product
     * Insight ID: c2e6a37a-fba7-43a0-abd1-4306f5b55fb8
     */
    SalesByYearByProduct: "c2e6a37a-fba7-43a0-abd1-4306f5b55fb8",
    /**
     * Insight Title: Daily Sales
     * Insight ID: c45dc49b-2aa7-4fa4-92ee-b6e5ed00cf4c
     */
    DailySales: "c45dc49b-2aa7-4fa4-92ee-b6e5ed00cf4c",
    /**
     * Insight Title: Sales by Product
     * Insight ID: e0222782-6595-4cf3-b3fb-c83f7ae4e446
     */
    SalesByProduct: "e0222782-6595-4cf3-b3fb-c83f7ae4e446",
    /**
     * Insight Title: Sales KPI
     * Insight ID: e043ce5e-304f-4988-a9e1-1e7c8d5834b9
     */
    SalesKPI: "e043ce5e-304f-4988-a9e1-1e7c8d5834b9",
    /**
     * Insight Title: Campaign Spend KPI
     * Insight ID: ee844f2e-22a0-45ba-be93-68b9ae89cfc5
     */
    CampaignSpendKPI: "ee844f2e-22a0-45ba-be93-68b9ae89cfc5",
    /**
     * Insight Title: Testing Headline
     * Insight ID: testing_headline
     */
    TestingHeadline: "testing_headline",
};
export const Dashboards = {
    /**
     * Dashboard Title: 1. Overview
     * Dashboard ID: 4255cb9c-240a-434b-bdba-ea937a8c9c78
     */
    _1Overview: "4255cb9c-240a-434b-bdba-ea937a8c9c78",
};
