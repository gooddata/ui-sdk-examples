/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-10-20T22:33:37.219Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign Channel Category
 * Attribute ID: attr.campaignchannelsfact.campaignchannelcategory
 */

export const CampaignChannelCategory = newAttribute("label.campaignchannelsfact.campaignchannelcategory");
/**
 * Attribute Title: Campaign Channel ID
 * Attribute ID: attr.campaignchannelsfact.campaignchannelid
 */

export const CampaignChannelID = newAttribute("label.campaignchannelsfact.campaignchannelid");
/**
 * Attribute Title: Campaign Channel Type
 * Attribute ID: attr.campaignchannelsfact.campaignchanneltype
 */

export const CampaignChannelType = newAttribute("label.campaignchannelsfact.campaignchanneltype");
/**
 * Attribute Title: Campaign ID
 * Attribute ID: attr.campaigns.campaignid
 */

export const CampaignID = newAttribute("label.campaigns.campaignid");
/**
 * Attribute Title: Campaign Name
 * Attribute ID: attr.campaigns.campaignname
 */

export const CampaignName = newAttribute("label.campaigns.campaignname");
/**
 * Attribute Title: Customer ID
 * Attribute ID: attr.customers.customerid
 */

export const CustomerID = newAttribute("label.customers.customerid");
/**
 * Attribute Title: Customer Name
 * Attribute ID: attr.customers.customername
 */

export const CustomerName = newAttribute("label.customers.customername");
/**
 * Attribute Title: Order ID
 * Attribute ID: attr.orderlinesfact.orderid
 */

export const OrderID = newAttribute("label.orderlinesfact.orderid");
/**
 * Attribute Title: Order Line ID
 * Attribute ID: attr.orderlinesfact.orderlineid
 */

export const OrderLineID = newAttribute("label.orderlinesfact.orderlineid");
/**
 * Attribute Title: Order Status
 * Attribute ID: attr.orderlinesfact.orderstatus
 */

export const OrderStatus = newAttribute("label.orderlinesfact.orderstatus");
/**
 * Attribute Title: Product Category
 * Attribute ID: attr.product.productcategory
 */

export const ProductCategory = newAttribute("label.product.productcategory");
/**
 * Attribute Title: Product ID
 * Attribute ID: attr.product.productid
 */

export const ProductID = newAttribute("label.product.productid");
/**
 * Attribute Title: Product Name
 * Attribute ID: attr.product.productname
 */

export const ProductName = newAttribute("label.product.productname");
/**
 * Metric Title: # of Active Customers
 * Metric ID: aa9MNtq2e1x5
 * Metric Type: MAQL Metric
 */

export const NrOfActiveCustomers = newMeasure(idRef("aa9MNtq2e1x5", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: aacMR6YucLeb
 * Metric Type: MAQL Metric
 */

export const NrOfOrders = newMeasure(idRef("aacMR6YucLeb", "measure"));
/**
 * Metric Title: # of Top Customers
 * Metric ID: aaGMQUdubKcl
 * Metric Type: MAQL Metric
 */

export const NrOfTopCustomers = newMeasure(idRef("aaGMQUdubKcl", "measure"));
/**
 * Metric Title: # of Valid Orders
 * Metric ID: afAMwEfGhMvx
 * Metric Type: MAQL Metric
 */

export const NrOfValidOrders = newMeasure(idRef("afAMwEfGhMvx", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: ab2MPkpVg0MY
 * Metric Type: MAQL Metric
 */

export const PercentRevenue = newMeasure(idRef("ab2MPkpVg0MY", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Customers
 * Metric ID: adCMJ2bTg9d1
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Customers = newMeasure(idRef("adCMJ2bTg9d1", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Products
 * Metric ID: abrMUy8vcqnD
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Products = newMeasure(idRef("abrMUy8vcqnD", "measure"));
/**
 * Metric Title: % Revenue from Top 10% Customers
 * Metric ID: abIMP68thL8c
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentCustomers = newMeasure(idRef("abIMP68thL8c", "measure"));
/**
 * Metric Title: % Revenue from Top 10% Products
 * Metric ID: abZMQj1GdZMI
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentProducts = newMeasure(idRef("abZMQj1GdZMI", "measure"));
/**
 * Metric Title: % Revenue in Category
 * Metric ID: acmMPYtehL7j
 * Metric Type: MAQL Metric
 */

export const PercentRevenueInCategory = newMeasure(idRef("acmMPYtehL7j", "measure"));
/**
 * Metric Title: % Revenue per Product
 * Metric ID: acqMP2kHd2PQ
 * Metric Type: MAQL Metric
 */

export const PercentRevenuePerProduct = newMeasure(idRef("acqMP2kHd2PQ", "measure"));
/**
 * Metric Title: Campaign Spend
 * Metric ID: agjMvMtggvPK
 * Metric Type: MAQL Metric
 */

export const CampaignSpend = newMeasure(idRef("agjMvMtggvPK", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: aeaMDRNjdEoe
 * Metric Type: MAQL Metric
 */

export const OrderAmount = newMeasure(idRef("aeaMDRNjdEoe", "measure"));
/**
 * Metric Title: Previous Quarter Revenue
 * Metric ID: abQNmFpGeTXS
 * Metric Type: MAQL Metric
 */

export const PreviousQuarterRevenue = newMeasure(idRef("abQNmFpGeTXS", "measure"));
/**
 * Metric Title: Revenue
 * Metric ID: ac2MJ0V8axMG
 * Metric Type: MAQL Metric
 */

export const Revenue = newMeasure(idRef("ac2MJ0V8axMG", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: aa2MPKfNdpoh
 * Metric Type: MAQL Metric
 */

export const RevenueClothing = newMeasure(idRef("aa2MPKfNdpoh", "measure"));
/**
 * Metric Title: Revenue (Electronic)
 * Metric ID: abMMNsebeT9V
 * Metric Type: MAQL Metric
 */

export const RevenueElectronic = newMeasure(idRef("abMMNsebeT9V", "measure"));
/**
 * Metric Title: Revenue (Home)
 * Metric ID: acUMKCj4g9VJ
 * Metric Type: MAQL Metric
 */

export const RevenueHome = newMeasure(idRef("acUMKCj4g9VJ", "measure"));
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: aaSMQj1GdZMI
 * Metric Type: MAQL Metric
 */

export const RevenueOutdoor = newMeasure(idRef("aaSMQj1GdZMI", "measure"));
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: aa7MQvuNaT52
 * Metric Type: MAQL Metric
 */

export const RevenueTop10 = newMeasure(idRef("aa7MQvuNaT52", "measure"));
/**
 * Metric Title: Revenue / Top 10%
 * Metric ID: abIMPJQodplj
 * Metric Type: MAQL Metric
 */

export const RevenueTop10Percent = newMeasure(idRef("abIMPJQodplj", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: aa7MPKfNdpoh
 * Metric Type: MAQL Metric
 */

export const RevenuePerCustomer = newMeasure(idRef("aa7MPKfNdpoh", "measure"));
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: ablMOwmEe9ZO
 * Metric Type: MAQL Metric
 */

export const RevenuePerDollarSpent = newMeasure(idRef("ablMOwmEe9ZO", "measure"));
/**
 * Metric Title: Target Quarter Revenue
 * Metric ID: abvNkSnTcGRT
 * Metric Type: MAQL Metric
 */

export const TargetQuarterRevenue = newMeasure(idRef("abvNkSnTcGRT", "measure"));
/**
 * Metric Title: Total Revenue
 * Metric ID: ae8MDhcEaNp6
 * Metric Type: MAQL Metric
 */

export const TotalRevenue = newMeasure(idRef("ae8MDhcEaNp6", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: abQMPSBkdo4R
 * Metric Type: MAQL Metric
 */

export const TotalRevenueNoFilters = newMeasure(idRef("abQMPSBkdo4R", "measure"));
/**
 * Metric Title: Total Revenue This Quarter
 * Metric ID: abrNkljtirC0
 * Metric Type: MAQL Metric
 */

export const TotalRevenueThisQuarter = newMeasure(idRef("abrNkljtirC0", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: fact.campaignchannelsfact.budget
 */

export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaignchannelsfact.budget
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.campaignchannelsfact.budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: fact.orderlinesfact.price
 */

export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: fact.orderlinesfact.price
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.orderlinesfact.price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: fact.orderlinesfact.quantity
 */

export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.orderlinesfact.quantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.orderlinesfact.quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: fact.campaignchannelsfact.spend
 */

export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaignchannelsfact.spend
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.campaignchannelsfact.spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Year (Order Date)
 * Attribute ID: orderdate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateYear = newAttribute("orderdate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Order Date)
 * Attribute ID: orderdate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarter = newAttribute("orderdate.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Order Date)
 * Attribute ID: orderdate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: orderdate.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("orderdate.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: orderdate.aaw81lMifn6q
     */
    WeekStarting: newAttribute("orderdate.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: orderdate.aau81lMifn6q
     */
    FromTo: newAttribute("orderdate.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Order Date)
     * Display Form ID: orderdate.aay81lMifn6q
     */
    WeekNrYear_1: newAttribute("orderdate.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
     * Display Form ID: orderdate.aaC81lMifn6q
     */
    WkQtrYear: newAttribute("orderdate.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Order Date)
     * Display Form ID: orderdate.aas81lMifn6q
     */
    WkQtrYear_1: newAttribute("orderdate.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Order Date)
 * Attribute ID: orderdate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSat = newAttribute("orderdate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Order Date)
 * Attribute ID: orderdate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatOfQtr = newAttribute("orderdate.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Order Date)
 * Attribute ID: orderdate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: orderdate.aa281lMifn6q
     */
    WeekNrYear: newAttribute("orderdate.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: orderdate.aaY81lMifn6q
     */
    WeekStarting: newAttribute("orderdate.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: orderdate.aaW81lMifn6q
     */
    FromTo: newAttribute("orderdate.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Order Date)
 * Attribute ID: orderdate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSun = newAttribute("orderdate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Order Date)
 * Attribute ID: orderdate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunOfQtr = newAttribute("orderdate.abg81lMifn6q");
/**
 * Attribute Title: Month (Order Date)
 * Attribute ID: orderdate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Order Date)
     * Display Form ID: orderdate.abm81lMifn6q
     */
    Short: newAttribute("orderdate.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Order Date)
     * Display Form ID: orderdate.abs81lMifn6q
     */
    Long: newAttribute("orderdate.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Order Date)
     * Display Form ID: orderdate.abq81lMifn6q
     */
    Number: newAttribute("orderdate.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Order Date)
     * Display Form ID: orderdate.abo81lMifn6q
     */
    MQ: newAttribute("orderdate.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Order Date)
 * Attribute ID: orderdate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthOfQuarter = newAttribute("orderdate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Order Date)
 * Attribute ID: orderdate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfYear = newAttribute("orderdate.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Order Date)
 * Attribute ID: orderdate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Order Date)
     * Display Form ID: orderdate.abK81lMifn6q
     */
    Short: newAttribute("orderdate.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Order Date)
     * Display Form ID: orderdate.abO81lMifn6q
     */
    Long: newAttribute("orderdate.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Order Date)
     * Display Form ID: orderdate.abM81lMifn6q
     */
    Number: newAttribute("orderdate.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Order Date)
 * Attribute ID: orderdate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Order Date)
     * Display Form ID: orderdate.abU81lMifn6q
     */
    Short: newAttribute("orderdate.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Order Date)
     * Display Form ID: orderdate.abY81lMifn6q
     */
    Long: newAttribute("orderdate.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Order Date)
     * Display Form ID: orderdate.abW81lMifn6q
     */
    Number: newAttribute("orderdate.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Order Date)
 * Attribute ID: orderdate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfQuarter = newAttribute("orderdate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Order Date)
 * Attribute ID: orderdate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfMonth = newAttribute("orderdate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Order Date)
 * Attribute ID: orderdate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarterYear = newAttribute("orderdate.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Order Date)
 * Attribute ID: orderdate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Order Date)
     * Display Form ID: orderdate.act81lMifn6q
     */
    Short: newAttribute("orderdate.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Order Date)
     * Display Form ID: orderdate.acx81lMifn6q
     */
    Long: newAttribute("orderdate.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Order Date)
     * Display Form ID: orderdate.acv81lMifn6q
     */
    Number: newAttribute("orderdate.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Order Date)
 * Attribute ID: orderdate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Order Date)
     * Display Form ID: orderdate.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("orderdate.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Order Date)
     * Display Form ID: orderdate.date.yyyymmdd
     */
    YyyyMmDd: newAttribute("orderdate.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
     * Display Form ID: orderdate.date.mdyy
     */
    MDYy: newAttribute("orderdate.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
     * Display Form ID: orderdate.date.long
     */
    Long: newAttribute("orderdate.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Order Date)
     * Display Form ID: orderdate.date.ddmmyyyy
     */
    DdMmYyyy: newAttribute("orderdate.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Order Date)
     * Display Form ID: orderdate.date.eddmmyyyy
     */
    DdMmYyyy_1: newAttribute("orderdate.date.eddmmyyyy"),
};
/** Available Date Data Sets */

export const DateDatasets = {
    /**
     * Date Data Set Title: Date (Order Date)
     * Date Data Set ID: orderdate.dataset.dt
     */
    OrderDate: {
        ref: idRef("orderdate.dataset.dt", "dataSet"),
        identifier: "orderdate.dataset.dt",
        /**
         * Date Attribute: Year (Order Date)
         * Date Attribute ID: orderdate.year
         */
        Year: {
            ref: idRef("orderdate.year", "attribute"),
            identifier: "orderdate.year",
            /**
             * Display Form Title: Year (Order Date)
             * Display Form ID: orderdate.aag81lMifn6q
             */
            Default: newAttribute("orderdate.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Order Date)
         * Date Attribute ID: orderdate.quarter.in.year
         */
        Quarter: {
            ref: idRef("orderdate.quarter.in.year", "attribute"),
            identifier: "orderdate.quarter.in.year",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: orderdate.aam81lMifn6q
             */
            Default: newAttribute("orderdate.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Order Date)
         * Date Attribute ID: orderdate.week
         */
        WeekSunSatYear: {
            ref: idRef("orderdate.week", "attribute"),
            identifier: "orderdate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Order Date)
             * Display Form ID: orderdate.aaA81lMifn6q
             */
            WeekNrYear: newAttribute("orderdate.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: orderdate.aaw81lMifn6q
             */
            WeekStarting: newAttribute("orderdate.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: orderdate.aau81lMifn6q
             */
            FromTo: newAttribute("orderdate.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Order Date)
             * Display Form ID: orderdate.aay81lMifn6q
             */
            WeekNrYear_1: newAttribute("orderdate.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
             * Display Form ID: orderdate.aaC81lMifn6q
             */
            WkQtrYear: newAttribute("orderdate.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Order Date)
             * Display Form ID: orderdate.aas81lMifn6q
             */
            WkQtrYear_1: newAttribute("orderdate.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Order Date)
         * Date Attribute ID: orderdate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("orderdate.week.in.year", "attribute"),
            identifier: "orderdate.week.in.year",
            /**
             * Display Form Title: Number US (Order Date)
             * Display Form ID: orderdate.aaI81lMifn6q
             */
            NumberUS: newAttribute("orderdate.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Order Date)
         * Date Attribute ID: orderdate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("orderdate.week.in.quarter", "attribute"),
            identifier: "orderdate.week.in.quarter",
            /**
             * Display Form Title: Number US (Order Date)
             * Display Form ID: orderdate.aaO81lMifn6q
             */
            NumberUS: newAttribute("orderdate.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Order Date)
         * Date Attribute ID: orderdate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("orderdate.euweek", "attribute"),
            identifier: "orderdate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Order Date)
             * Display Form ID: orderdate.aa281lMifn6q
             */
            WeekNrYear: newAttribute("orderdate.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: orderdate.aaY81lMifn6q
             */
            WeekStarting: newAttribute("orderdate.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: orderdate.aaW81lMifn6q
             */
            FromTo: newAttribute("orderdate.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Order Date)
         * Date Attribute ID: orderdate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("orderdate.euweek.in.year", "attribute"),
            identifier: "orderdate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Order Date)
             * Display Form ID: orderdate.aba81lMifn6q
             */
            NumberEU: newAttribute("orderdate.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Order Date)
         * Date Attribute ID: orderdate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("orderdate.euweek.in.quarter", "attribute"),
            identifier: "orderdate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Order Date)
             * Display Form ID: orderdate.abg81lMifn6q
             */
            NumberEU: newAttribute("orderdate.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Order Date)
         * Date Attribute ID: orderdate.month.in.year
         */
        Month: {
            ref: idRef("orderdate.month.in.year", "attribute"),
            identifier: "orderdate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Order Date)
             * Display Form ID: orderdate.abm81lMifn6q
             */
            Short: newAttribute("orderdate.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Order Date)
             * Display Form ID: orderdate.abs81lMifn6q
             */
            Long: newAttribute("orderdate.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Order Date)
             * Display Form ID: orderdate.abq81lMifn6q
             */
            Number: newAttribute("orderdate.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Order Date)
             * Display Form ID: orderdate.abo81lMifn6q
             */
            MQ: newAttribute("orderdate.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Order Date)
         * Date Attribute ID: orderdate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("orderdate.month.in.quarter", "attribute"),
            identifier: "orderdate.month.in.quarter",
            /**
             * Display Form Title: Number (Order Date)
             * Display Form ID: orderdate.aby81lMifn6q
             */
            Number: newAttribute("orderdate.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Order Date)
         * Date Attribute ID: orderdate.day.in.year
         */
        DayOfYear: {
            ref: idRef("orderdate.day.in.year", "attribute"),
            identifier: "orderdate.day.in.year",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: orderdate.abE81lMifn6q
             */
            Default: newAttribute("orderdate.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Order Date)
         * Date Attribute ID: orderdate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("orderdate.day.in.week", "attribute"),
            identifier: "orderdate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Order Date)
             * Display Form ID: orderdate.abK81lMifn6q
             */
            Short: newAttribute("orderdate.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Order Date)
             * Display Form ID: orderdate.abO81lMifn6q
             */
            Long: newAttribute("orderdate.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Order Date)
             * Display Form ID: orderdate.abM81lMifn6q
             */
            Number: newAttribute("orderdate.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Order Date)
         * Date Attribute ID: orderdate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("orderdate.day.in.euweek", "attribute"),
            identifier: "orderdate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Order Date)
             * Display Form ID: orderdate.abU81lMifn6q
             */
            Short: newAttribute("orderdate.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Order Date)
             * Display Form ID: orderdate.abY81lMifn6q
             */
            Long: newAttribute("orderdate.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Order Date)
             * Display Form ID: orderdate.abW81lMifn6q
             */
            Number: newAttribute("orderdate.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Order Date)
         * Date Attribute ID: orderdate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("orderdate.day.in.quarter", "attribute"),
            identifier: "orderdate.day.in.quarter",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: orderdate.ab481lMifn6q
             */
            Default: newAttribute("orderdate.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Order Date)
         * Date Attribute ID: orderdate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("orderdate.day.in.month", "attribute"),
            identifier: "orderdate.day.in.month",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: orderdate.aca81lMifn6q
             */
            Default: newAttribute("orderdate.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Order Date)
         * Date Attribute ID: orderdate.quarter
         */
        QuarterYear: {
            ref: idRef("orderdate.quarter", "attribute"),
            identifier: "orderdate.quarter",
            /**
             * Display Form Title: US Short (Order Date)
             * Display Form ID: orderdate.aci81lMifn6q
             */
            USShort: newAttribute("orderdate.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Order Date)
         * Date Attribute ID: orderdate.month
         */
        MonthYear: {
            ref: idRef("orderdate.month", "attribute"),
            identifier: "orderdate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Order Date)
             * Display Form ID: orderdate.act81lMifn6q
             */
            Short: newAttribute("orderdate.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Order Date)
             * Display Form ID: orderdate.acx81lMifn6q
             */
            Long: newAttribute("orderdate.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Order Date)
             * Display Form ID: orderdate.acv81lMifn6q
             */
            Number: newAttribute("orderdate.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Order Date)
         * Date Attribute ID: orderdate.date
         */
        Date: {
            ref: idRef("orderdate.date", "attribute"),
            identifier: "orderdate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Order Date)
             * Display Form ID: orderdate.date.mmddyyyy
             */
            MmDdYyyy: newAttribute("orderdate.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Order Date)
             * Display Form ID: orderdate.date.yyyymmdd
             */
            YyyyMmDd: newAttribute("orderdate.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
             * Display Form ID: orderdate.date.mdyy
             */
            MDYy: newAttribute("orderdate.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
             * Display Form ID: orderdate.date.long
             */
            Long: newAttribute("orderdate.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Order Date)
             * Display Form ID: orderdate.date.ddmmyyyy
             */
            DdMmYyyy: newAttribute("orderdate.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Order Date)
             * Display Form ID: orderdate.date.eddmmyyyy
             */
            DdMmYyyy_1: newAttribute("orderdate.date.eddmmyyyy"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Total Spend to Budget Chart
     * Insight ID: afUMP0Kwd2LY
     */
    TotalSpendToBudgetChart: "afUMP0Kwd2LY",
    /**
     * Insight Title: Product Breakdown
     * Insight ID: acKNkljtirC0
     */
    ProductBreakdown: "acKNkljtirC0",
    /**
     * Insight Title: Campaign Spend
     * Insight ID: afgMYCmegNQv
     */
    CampaignSpend_1: "afgMYCmegNQv",
    /**
     * Insight Title: Campaign Budget
     * Insight ID: ae1MYeFYgO4F
     */
    CampaignBudget: "ae1MYeFYgO4F",
    /**
     * Insight Title: Total Quarter Revenue to Target
     * Insight ID: abBNlADEcgjN
     */
    TotalQuarterRevenueToTarget: "abBNlADEcgjN",
    /**
     * Insight Title: Revenue Trend
     * Insight ID: acxNkoRQirXz
     */
    RevenueTrend: "acxNkoRQirXz",
    /**
     * Insight Title: Customers Trend
     * Insight ID: ab7NlkfVdZUq
     */
    CustomersTrend: "ab7NlkfVdZUq",
    /**
     * Insight Title: Product Categories Pie Chart
     * Insight ID: aaTNlKnLc52i
     */
    ProductCategoriesPieChart: "aaTNlKnLc52i",
    /**
     * Insight Title: Revenue by Category Trend
     * Insight ID: actNjQa2hybh
     */
    RevenueByCategoryTrend: "actNjQa2hybh",
    /**
     * Insight Title: Product Revenue Comparison (over previous period)
     * Insight ID: actNllHAcirl
     */
    ProductRevenueComparisonOverPreviousPeriod: "actNllHAcirl",
    /**
     * Insight Title: Top X Demo
     * Insight ID: aggNkSreaXX9
     */
    TopXDemo: "aggNkSreaXX9",
    /**
     * Insight Title: Customer Order History Detail
     * Insight ID: airMQvrPaT4E
     */
    CustomerOrderHistoryDetail: "airMQvrPaT4E",
    /**
     * Insight Title: Order Detail
     * Insight ID: aeZMUyLScmP5
     */
    OrderDetail: "aeZMUyLScmP5",
    /**
     * Insight Title: Campaign Revenue Detail Breakdown
     * Insight ID: adoMYfmXgNhM
     */
    CampaignRevenueDetailBreakdown: "adoMYfmXgNhM",
    /**
     * Insight Title: Returning Customers
     * Insight ID: ag9MQVQ8bMmR
     */
    ReturningCustomers: "ag9MQVQ8bMmR",
    /**
     * Insight Title: % Revenue per Product by Customer and Category
     * Insight ID: aaRMYeXXgPak
     */
    PercentRevenuePerProductByCustomerAndCategory: "aaRMYeXXgPak",
    /**
     * Insight Title: Revenue and Quantity by Product and Category
     * Insight ID: ac7MPtyOgQPe
     */
    RevenueAndQuantityByProductAndCategory: "ac7MPtyOgQPe",
    /**
     * Insight Title: Revenue by Product
     * Insight ID: aefNkhk9bKFf
     */
    RevenueByProduct: "aefNkhk9bKFf",
    /**
     * Insight Title: Top 10 Products
     * Insight ID: adLNknaBiuCV
     */
    Top10Products: "adLNknaBiuCV",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: adDNlTJEeQxw
     */
    Top10Customers: "adDNlTJEeQxw",
    /**
     * Insight Title: Product Saleability
     * Insight ID: adANlZ56c5Yo
     */
    ProductSaleability: "adANlZ56c5Yo",
    /**
     * Insight Title: Revenue per $ vs Spend by Campaign
     * Insight ID: acONlguacGbG
     */
    RevenuePer$VsSpendByCampaign: "acONlguacGbG",
    /**
     * Insight Title: Revenue per $ vs Budget by Campaign
     * Insight ID: aaTNcwJAd2BG
     */
    RevenuePer$VsBudgetByCampaign: "aaTNcwJAd2BG",
    /**
     * Insight Title: Orders by Products
     * Insight ID: aaCkw6z6p3oa
     */
    OrdersByProducts: "aaCkw6z6p3oa",
    /**
     * Insight Title: Revenue by Products
     * Insight ID: aab0EYeHYvVN
     */
    RevenueByProducts: "aab0EYeHYvVN",
};
export const Dashboards = {
    /**
     * Dashboard Title: 1. Overview
     * Dashboard ID: afmNlKnLc52i
     */
    _1Overview: "afmNlKnLc52i",
};
