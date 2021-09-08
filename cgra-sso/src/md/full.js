/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-08-16T22:36:06.760Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign Category
 * Attribute ID: attr.campaign_channels.category
 */

export const CampaignCategory = newAttribute("label.campaign_channels.category");
/**
 * Attribute Title: Campaign Channel ID
 * Attribute ID: attr.campaign_channels.campaign_channel_id
 */

export const CampaignChannelID = newAttribute("label.campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Campaign ID
 * Attribute ID: attr.campaigns.campaign_id
 */

export const CampaignID = newAttribute("label.campaigns.campaign_id");
/**
 * Attribute Title: Campaign Name
 * Attribute ID: attr.campaigns.campaign_name
 */

export const CampaignName = newAttribute("label.campaigns.campaign_name");
/**
 * Attribute Title: Campaign Type
 * Attribute ID: attr.campaign_channels.type
 */

export const CampaignType = newAttribute("label.campaign_channels.type");
/**
 * Attribute Title: Customer City
 * Attribute ID: attr.customers.customercity
 */

export const CustomerCity = {
    /**
     * Display Form Title: Customer City
     * Display Form ID: label.customers.customercity
     */
    Default: newAttribute("label.customers.customercity"),
    /**
     * Display Form Title: Customer City Coordinates
     * Display Form ID: label.customers.customercity.customercitycoordinates
     */
    Coordinates: newAttribute("label.customers.customercity.customercitycoordinates"),
};
/**
 * Attribute Title: Customer ID
 * Attribute ID: attr.csv_order_lines.customer_id
 */

export const CustomerID = newAttribute("label.csv_order_lines.customer_id");
/**
 * Attribute Title: Customer Name
 * Attribute ID: attr.csv_order_lines.customer_name
 */

export const CustomerName = newAttribute("label.csv_order_lines.customer_name");
/**
 * Attribute Title: Customer Region
 * Attribute ID: attr.customers.customerregion
 */

export const CustomerRegion = newAttribute("label.customers.customerregion");
/**
 * Attribute Title: Customer State
 * Attribute ID: attr.csv_order_lines.state
 */

export const CustomerState = newAttribute("label.csv_order_lines.state");
/**
 * Attribute Title: Order ID
 * Attribute ID: attr.csv_order_lines.order_id
 */

export const OrderID = newAttribute("label.csv_order_lines.order_id");
/**
 * Attribute Title: Order Line ID
 * Attribute ID: attr.csv_order_lines.order_line_id
 */

export const OrderLineID = newAttribute("label.csv_order_lines.order_line_id");
/**
 * Attribute Title: Order Status
 * Attribute ID: attr.csv_order_lines.order_status
 */

export const OrderStatus = newAttribute("label.csv_order_lines.order_status");
/**
 * Attribute Title: Product
 * Attribute ID: attr.csv_order_lines.product_name
 */

export const Product = {
    /**
     * Display Form Title: Product
     * Display Form ID: label.csv_order_lines.product_name
     */
    Default: newAttribute("label.csv_order_lines.product_name"),
    /**
     * Display Form Title: Product Hyperlink
     * Display Form ID: label.products.product_name.producthyperlink
     */
    Hyperlink: newAttribute("label.products.product_name.producthyperlink"),
};
/**
 * Attribute Title: Product Category
 * Attribute ID: attr.csv_order_lines.category
 */

export const ProductCategory = newAttribute("label.csv_order_lines.category");
/**
 * Attribute Title: Product ID
 * Attribute ID: attr.csv_order_lines.product_id
 */

export const ProductID = newAttribute("label.csv_order_lines.product_id");
/**
 * Metric Title: # of Active Customers
 * Metric ID: abwjvygedcPi
 * Metric Type: MAQL Metric
 */

export const NrOfActiveCustomers = newMeasure(idRef("abwjvygedcPi", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: abJgSd1seIjM
 * Metric Type: MAQL Metric
 */

export const NrOfOrders = newMeasure(idRef("abJgSd1seIjM", "measure"));
/**
 * Metric Title: # of Top Customers
 * Metric ID: acgjsXfgao3v
 * Metric Type: MAQL Metric
 */

export const NrOfTopCustomers = newMeasure(idRef("acgjsXfgao3v", "measure"));
/**
 * Metric Title: # of Valid Orders
 * Metric ID: abjgThcwhbxs
 * Metric Type: MAQL Metric
 */

export const NrOfValidOrders = newMeasure(idRef("abjgThcwhbxs", "measure"));
/**
 * Metric Title: % Revenue
 * Metric ID: acSjvKiha5pe
 * Metric Type: MAQL Metric
 */

export const PercentRevenue = newMeasure(idRef("acSjvKiha5pe", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Customers
 * Metric ID: ab0jPyBdgzqH
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Customers = newMeasure(idRef("ab0jPyBdgzqH", "measure"));
/**
 * Metric Title: % Revenue from Top 10 Products
 * Metric ID: acIjNnOUcbLJ
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10Products = newMeasure(idRef("acIjNnOUcbLJ", "measure"));
/**
 * Metric Title: % Revenue from Top 10% Customers
 * Metric ID: adkjNCxybKzk
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentCustomers = newMeasure(idRef("adkjNCxybKzk", "measure"));
/**
 * Metric Title: % Revenue from Top 10% Products
 * Metric ID: aahjVDDGeOcC
 * Metric Type: MAQL Metric
 */

export const PercentRevenueFromTop10PercentProducts = newMeasure(idRef("aahjVDDGeOcC", "measure"));
/**
 * Metric Title: % Revenue in Category
 * Metric ID: aaLjInK7d1HW
 * Metric Type: MAQL Metric
 */

export const PercentRevenueInCategory = newMeasure(idRef("aaLjInK7d1HW", "measure"));
/**
 * Metric Title: % Revenue per Product
 * Metric ID: aa7jz0TWdM1j
 * Metric Type: MAQL Metric
 */

export const PercentRevenuePerProduct = newMeasure(idRef("aa7jz0TWdM1j", "measure"));
/**
 * Metric Title: Campaign Spend
 * Metric ID: aaFlIZPDgumO
 * Metric Type: MAQL Metric
 */

export const CampaignSpend = newMeasure(idRef("aaFlIZPDgumO", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: ab4gQSe3iBrr
 * Metric Type: MAQL Metric
 */

export const OrderAmount = newMeasure(idRef("ab4gQSe3iBrr", "measure"));
/**
 * Metric Title: Revenue
 * Metric ID: aaZgQ8Oqib25
 * Metric Type: MAQL Metric
 */

export const Revenue = newMeasure(idRef("aaZgQ8Oqib25", "measure"));
/**
 * Metric Title: Revenue (Clothing)
 * Metric ID: afcNseOVbs5T
 * Metric Type: MAQL Metric
 */

export const RevenueClothing = newMeasure(idRef("afcNseOVbs5T", "measure"));
/**
 * Metric Title: Revenue (Electronic)
 * Metric ID: aeENuVEEiDt1
 * Metric Type: MAQL Metric
 */

export const RevenueElectronic = newMeasure(idRef("aeENuVEEiDt1", "measure"));
/**
 * Metric Title: Revenue (Home)
 * Metric ID: afvNfa3ae3ll
 * Metric Type: MAQL Metric
 */

export const RevenueHome = newMeasure(idRef("afvNfa3ae3ll", "measure"));
/**
 * Metric Title: Revenue (Midwest)
 * Metric ID: aafleEPYgYPr
 * Metric Type: MAQL Metric
 */

export const RevenueMidwest = newMeasure(idRef("aafleEPYgYPr", "measure"));
/**
 * Metric Title: Revenue (Northeast)
 * Metric ID: acwkS3VZg9Ru
 * Metric Type: MAQL Metric
 */

export const RevenueNortheast = newMeasure(idRef("acwkS3VZg9Ru", "measure"));
/**
 * Metric Title: Revenue (Outdoor)
 * Metric ID: afFNgEAjcTuU
 * Metric Type: MAQL Metric
 */

export const RevenueOutdoor = newMeasure(idRef("afFNgEAjcTuU", "measure"));
/**
 * Metric Title: Revenue (South)
 * Metric ID: acIkPctydD25
 * Metric Type: MAQL Metric
 */

export const RevenueSouth = newMeasure(idRef("acIkPctydD25", "measure"));
/**
 * Metric Title: Revenue (West)
 * Metric ID: aaTlb39sefZK
 * Metric Type: MAQL Metric
 */

export const RevenueWest = newMeasure(idRef("aaTlb39sefZK", "measure"));
/**
 * Metric Title: Revenue / Top 10
 * Metric ID: abejI8QfeQfs
 * Metric Type: MAQL Metric
 */

export const RevenueTop10 = newMeasure(idRef("abejI8QfeQfs", "measure"));
/**
 * Metric Title: Revenue / Top 10%
 * Metric ID: ab1jONzgezQt
 * Metric Type: MAQL Metric
 */

export const RevenueTop10Percent = newMeasure(idRef("ab1jONzgezQt", "measure"));
/**
 * Metric Title: Revenue per Customer
 * Metric ID: aaEjvRpdbi2z
 * Metric Type: MAQL Metric
 */

export const RevenuePerCustomer = newMeasure(idRef("aaEjvRpdbi2z", "measure"));
/**
 * Metric Title: Revenue per Dollar Spent
 * Metric ID: aaKlIuWsfsES
 * Metric Type: MAQL Metric
 */

export const RevenuePerDollarSpent = newMeasure(idRef("aaKlIuWsfsES", "measure"));
/**
 * Metric Title: Target Quarter Revenue
 * Metric ID: adqRcst5d10N
 * Metric Type: MAQL Metric
 */

export const TargetQuarterRevenue = newMeasure(idRef("adqRcst5d10N", "measure"));
/**
 * Metric Title: Total Quarter Revenue Previous Year
 * Metric ID: ac4RcLfDaVGC
 * Metric Type: MAQL Metric
 */

export const TotalQuarterRevenuePreviousYear = newMeasure(idRef("ac4RcLfDaVGC", "measure"));
/**
 * Metric Title: Total Revenue
 * Metric ID: abljxJ9HatLT
 * Metric Type: MAQL Metric
 */

export const TotalRevenue = newMeasure(idRef("abljxJ9HatLT", "measure"));
/**
 * Metric Title: Total Revenue (No Filters)
 * Metric ID: aa9jyo8Rc8gy
 * Metric Type: MAQL Metric
 */

export const TotalRevenueNoFilters = newMeasure(idRef("aa9jyo8Rc8gy", "measure"));
/**
 * Metric Title: Total Revenue This Quarter
 * Metric ID: aceRa2RVaVEJ
 * Metric Type: MAQL Metric
 */

export const TotalRevenueThisQuarter = newMeasure(idRef("aceRa2RVaVEJ", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: fact.campaign_channels.budget
 */

export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: fact.campaign_channels.budget
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.campaign_channels.budget", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: fact.csv_order_lines.price
 */

export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: fact.csv_order_lines.price
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.csv_order_lines.price", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: fact.csv_order_lines.quantity
 */

export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: fact.csv_order_lines.quantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.csv_order_lines.quantity", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: fact.campaign_channels.spend
 */

export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: fact.campaign_channels.spend
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.campaign_channels.spend", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: Year (Order Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateYear = newAttribute("date.year.default");
/**
 * Attribute Title: Quarter (Order Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarter = newAttribute("date.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Order Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: date.week.wk_year
     */
    WeekNrYear: newAttribute("date.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: date.week.starting
     */
    WeekStarting: newAttribute("date.week.starting"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: date.week.from_to
     */
    FromTo: newAttribute("date.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Order Date)
     * Display Form ID: date.week.wk_year_cont
     */
    WeekNrYear_1: newAttribute("date.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
     * Display Form ID: date.week.wk_qtr_year_cont
     */
    WkQtrYear: newAttribute("date.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Order Date)
     * Display Form ID: date.week.wk_qtr_year
     */
    WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Order Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSat = newAttribute("date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Order Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatOfQtr = newAttribute("date.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Order Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: date.euweek.wk_year
     */
    WeekNrYear: newAttribute("date.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: date.euweek.starting
     */
    WeekStarting: newAttribute("date.euweek.starting"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: date.euweek.from_to
     */
    FromTo: newAttribute("date.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Order Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSun = newAttribute("date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Order Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunOfQtr = newAttribute("date.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Order Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Order Date)
     * Display Form ID: date.month.in.year.short
     */
    Short: newAttribute("date.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Order Date)
     * Display Form ID: date.month.in.year.long
     */
    Long: newAttribute("date.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Order Date)
     * Display Form ID: date.month.in.year.number
     */
    Number: newAttribute("date.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Order Date)
     * Display Form ID: date.month.in.year.m_q
     */
    MQ: newAttribute("date.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Order Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthOfQuarter = newAttribute("date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Order Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfYear = newAttribute("date.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Order Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Order Date)
     * Display Form ID: date.day.in.week.short
     */
    Short: newAttribute("date.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Order Date)
     * Display Form ID: date.day.in.week.long
     */
    Long: newAttribute("date.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Order Date)
     * Display Form ID: date.day.in.week.number
     */
    Number: newAttribute("date.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Order Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Order Date)
     * Display Form ID: date.day.in.euweek.short
     */
    Short: newAttribute("date.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Order Date)
     * Display Form ID: date.day.in.euweek.long
     */
    Long: newAttribute("date.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Order Date)
     * Display Form ID: date.day.in.euweek.number
     */
    Number: newAttribute("date.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Order Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfQuarter = newAttribute("date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Order Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfMonth = newAttribute("date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Order Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarterYear = newAttribute("date.quarter.short_us");
/**
 * Attribute Title: Month/Year (Order Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Order Date)
     * Display Form ID: date.month.short
     */
    Short: newAttribute("date.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Order Date)
     * Display Form ID: date.month.long
     */
    Long: newAttribute("date.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Order Date)
     * Display Form ID: date.month.number
     */
    Number: newAttribute("date.month.number"),
};
/**
 * Attribute Title: Date (Order Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Order Date)
     * Display Form ID: date.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Order Date)
     * Display Form ID: date.date.day.yyyy_mm_dd
     */
    YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
     * Display Form ID: date.date.day.us.m_d_yy
     */
    MDYy: newAttribute("date.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
     * Display Form ID: date.date.day.us.long
     */
    Long: newAttribute("date.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Order Date)
     * Display Form ID: date.date.day.uk.dd_mm_yyyy
     */
    DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Order Date)
     * Display Form ID: date.date.day.eu.dd_mm_yyyy
     */
    DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Order Date)
 * Attribute ID: date.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateUSWeekYear = newAttribute("date.year.for.week.number");
/**
 * Attribute Title: US Week Quarter (Order Date)
 * Attribute ID: date.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateUSWeekQuarter = newAttribute("date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Year (Order Date)
 * Attribute ID: date.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateEUWeekYear = newAttribute("date.year.for.euweek.number");
/**
 * Attribute Title: EU Week Quarter (Order Date)
 * Attribute ID: date.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateEUWeekQuarter = newAttribute("date.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Campaign Date)
 * Attribute ID: campaigndate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateYear = newAttribute("campaigndate.year.default");
/**
 * Attribute Title: Quarter (Campaign Date)
 * Attribute ID: campaigndate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateQuarter = newAttribute("campaigndate.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Campaign Date)
 * Attribute ID: campaigndate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Campaign Date)
     * Display Form ID: campaigndate.week.wk_year
     */
    WeekNrYear: newAttribute("campaigndate.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Campaign Date)
     * Display Form ID: campaigndate.week.starting
     */
    WeekStarting: newAttribute("campaigndate.week.starting"),
    /**
     * Display Form Title: From - To (Campaign Date)
     * Display Form ID: campaigndate.week.from_to
     */
    FromTo: newAttribute("campaigndate.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Campaign Date)
     * Display Form ID: campaigndate.week.wk_year_cont
     */
    WeekNrYear_1: newAttribute("campaigndate.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Campaign Date)
     * Display Form ID: campaigndate.week.wk_qtr_year_cont
     */
    WkQtrYear: newAttribute("campaigndate.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Campaign Date)
     * Display Form ID: campaigndate.week.wk_qtr_year
     */
    WkQtrYear_1: newAttribute("campaigndate.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Campaign Date)
 * Attribute ID: campaigndate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekSunSat = newAttribute("campaigndate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Campaign Date)
 * Attribute ID: campaigndate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekSunSatOfQtr = newAttribute("campaigndate.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Campaign Date)
 * Attribute ID: campaigndate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Campaign Date)
     * Display Form ID: campaigndate.euweek.wk_year
     */
    WeekNrYear: newAttribute("campaigndate.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Campaign Date)
     * Display Form ID: campaigndate.euweek.starting
     */
    WeekStarting: newAttribute("campaigndate.euweek.starting"),
    /**
     * Display Form Title: From - To (Campaign Date)
     * Display Form ID: campaigndate.euweek.from_to
     */
    FromTo: newAttribute("campaigndate.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Campaign Date)
 * Attribute ID: campaigndate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekMonSun = newAttribute("campaigndate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Campaign Date)
 * Attribute ID: campaigndate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateWeekMonSunOfQtr = newAttribute("campaigndate.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Campaign Date)
 * Attribute ID: campaigndate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Campaign Date)
     * Display Form ID: campaigndate.month.in.year.short
     */
    Short: newAttribute("campaigndate.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Campaign Date)
     * Display Form ID: campaigndate.month.in.year.long
     */
    Long: newAttribute("campaigndate.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Campaign Date)
     * Display Form ID: campaigndate.month.in.year.number
     */
    Number: newAttribute("campaigndate.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Campaign Date)
     * Display Form ID: campaigndate.month.in.year.m_q
     */
    MQ: newAttribute("campaigndate.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Campaign Date)
 * Attribute ID: campaigndate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateMonthOfQuarter = newAttribute("campaigndate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Campaign Date)
 * Attribute ID: campaigndate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDayOfYear = newAttribute("campaigndate.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Campaign Date)
 * Attribute ID: campaigndate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Campaign Date)
     * Display Form ID: campaigndate.day.in.week.short
     */
    Short: newAttribute("campaigndate.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Campaign Date)
     * Display Form ID: campaigndate.day.in.week.long
     */
    Long: newAttribute("campaigndate.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Campaign Date)
     * Display Form ID: campaigndate.day.in.week.number
     */
    Number: newAttribute("campaigndate.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Campaign Date)
 * Attribute ID: campaigndate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Campaign Date)
     * Display Form ID: campaigndate.day.in.euweek.short
     */
    Short: newAttribute("campaigndate.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Campaign Date)
     * Display Form ID: campaigndate.day.in.euweek.long
     */
    Long: newAttribute("campaigndate.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Campaign Date)
     * Display Form ID: campaigndate.day.in.euweek.number
     */
    Number: newAttribute("campaigndate.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Campaign Date)
 * Attribute ID: campaigndate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDayOfQuarter = newAttribute("campaigndate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Campaign Date)
 * Attribute ID: campaigndate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDayOfMonth = newAttribute("campaigndate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Campaign Date)
 * Attribute ID: campaigndate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateQuarterYear = newAttribute("campaigndate.quarter.short_us");
/**
 * Attribute Title: Month/Year (Campaign Date)
 * Attribute ID: campaigndate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Campaign Date)
     * Display Form ID: campaigndate.month.short
     */
    Short: newAttribute("campaigndate.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Campaign Date)
     * Display Form ID: campaigndate.month.long
     */
    Long: newAttribute("campaigndate.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Campaign Date)
     * Display Form ID: campaigndate.month.number
     */
    Number: newAttribute("campaigndate.month.number"),
};
/**
 * Attribute Title: Date (Campaign Date)
 * Attribute ID: campaigndate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Campaign Date)
     * Display Form ID: campaigndate.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("campaigndate.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Campaign Date)
     * Display Form ID: campaigndate.date.day.yyyy_mm_dd
     */
    YyyyMmDd: newAttribute("campaigndate.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Campaign Date)
     * Display Form ID: campaigndate.date.day.us.m_d_yy
     */
    MDYy: newAttribute("campaigndate.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Campaign Date)
     * Display Form ID: campaigndate.date.day.us.long
     */
    Long: newAttribute("campaigndate.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Campaign Date)
     * Display Form ID: campaigndate.date.day.uk.dd_mm_yyyy
     */
    DdMmYyyy: newAttribute("campaigndate.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Campaign Date)
     * Display Form ID: campaigndate.date.day.eu.dd_mm_yyyy
     */
    DdMmYyyy_1: newAttribute("campaigndate.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Campaign Date)
 * Attribute ID: campaigndate.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateUSWeekYear = newAttribute("campaigndate.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Campaign Date)
 * Attribute ID: campaigndate.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateEUWeekYear = newAttribute("campaigndate.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Campaign Date)
 * Attribute ID: campaigndate.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateUSWeekQuarter = newAttribute("campaigndate.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Campaign Date)
 * Attribute ID: campaigndate.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CampaignDateEUWeekQuarter = newAttribute("campaigndate.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Ship Date)
 * Attribute ID: shipdate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateYear = newAttribute("shipdate.year.default");
/**
 * Attribute Title: Quarter (Ship Date)
 * Attribute ID: shipdate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateQuarter = newAttribute("shipdate.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Ship Date)
 * Attribute ID: shipdate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Ship Date)
     * Display Form ID: shipdate.week.wk_year
     */
    WeekNrYear: newAttribute("shipdate.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Ship Date)
     * Display Form ID: shipdate.week.starting
     */
    WeekStarting: newAttribute("shipdate.week.starting"),
    /**
     * Display Form Title: From - To (Ship Date)
     * Display Form ID: shipdate.week.from_to
     */
    FromTo: newAttribute("shipdate.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Ship Date)
     * Display Form ID: shipdate.week.wk_year_cont
     */
    WeekNrYear_1: newAttribute("shipdate.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Ship Date)
     * Display Form ID: shipdate.week.wk_qtr_year_cont
     */
    WkQtrYear: newAttribute("shipdate.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Ship Date)
     * Display Form ID: shipdate.week.wk_qtr_year
     */
    WkQtrYear_1: newAttribute("shipdate.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Ship Date)
 * Attribute ID: shipdate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekSunSat = newAttribute("shipdate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Ship Date)
 * Attribute ID: shipdate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekSunSatOfQtr = newAttribute("shipdate.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Ship Date)
 * Attribute ID: shipdate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Ship Date)
     * Display Form ID: shipdate.euweek.wk_year
     */
    WeekNrYear: newAttribute("shipdate.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Ship Date)
     * Display Form ID: shipdate.euweek.starting
     */
    WeekStarting: newAttribute("shipdate.euweek.starting"),
    /**
     * Display Form Title: From - To (Ship Date)
     * Display Form ID: shipdate.euweek.from_to
     */
    FromTo: newAttribute("shipdate.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Ship Date)
 * Attribute ID: shipdate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekMonSun = newAttribute("shipdate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Ship Date)
 * Attribute ID: shipdate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateWeekMonSunOfQtr = newAttribute("shipdate.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Ship Date)
 * Attribute ID: shipdate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Ship Date)
     * Display Form ID: shipdate.month.in.year.short
     */
    Short: newAttribute("shipdate.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Ship Date)
     * Display Form ID: shipdate.month.in.year.long
     */
    Long: newAttribute("shipdate.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Ship Date)
     * Display Form ID: shipdate.month.in.year.number
     */
    Number: newAttribute("shipdate.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Ship Date)
     * Display Form ID: shipdate.month.in.year.m_q
     */
    MQ: newAttribute("shipdate.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Ship Date)
 * Attribute ID: shipdate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateMonthOfQuarter = newAttribute("shipdate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Ship Date)
 * Attribute ID: shipdate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDayOfYear = newAttribute("shipdate.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Ship Date)
 * Attribute ID: shipdate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Ship Date)
     * Display Form ID: shipdate.day.in.week.short
     */
    Short: newAttribute("shipdate.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Ship Date)
     * Display Form ID: shipdate.day.in.week.long
     */
    Long: newAttribute("shipdate.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Ship Date)
     * Display Form ID: shipdate.day.in.week.number
     */
    Number: newAttribute("shipdate.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Ship Date)
 * Attribute ID: shipdate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Ship Date)
     * Display Form ID: shipdate.day.in.euweek.short
     */
    Short: newAttribute("shipdate.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Ship Date)
     * Display Form ID: shipdate.day.in.euweek.long
     */
    Long: newAttribute("shipdate.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Ship Date)
     * Display Form ID: shipdate.day.in.euweek.number
     */
    Number: newAttribute("shipdate.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Ship Date)
 * Attribute ID: shipdate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDayOfQuarter = newAttribute("shipdate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Ship Date)
 * Attribute ID: shipdate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDayOfMonth = newAttribute("shipdate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Ship Date)
 * Attribute ID: shipdate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateQuarterYear = newAttribute("shipdate.quarter.short_us");
/**
 * Attribute Title: Month/Year (Ship Date)
 * Attribute ID: shipdate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Ship Date)
     * Display Form ID: shipdate.month.short
     */
    Short: newAttribute("shipdate.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Ship Date)
     * Display Form ID: shipdate.month.long
     */
    Long: newAttribute("shipdate.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Ship Date)
     * Display Form ID: shipdate.month.number
     */
    Number: newAttribute("shipdate.month.number"),
};
/**
 * Attribute Title: Date (Ship Date)
 * Attribute ID: shipdate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Ship Date)
     * Display Form ID: shipdate.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("shipdate.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Ship Date)
     * Display Form ID: shipdate.date.day.yyyy_mm_dd
     */
    YyyyMmDd: newAttribute("shipdate.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Ship Date)
     * Display Form ID: shipdate.date.day.us.m_d_yy
     */
    MDYy: newAttribute("shipdate.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Ship Date)
     * Display Form ID: shipdate.date.day.us.long
     */
    Long: newAttribute("shipdate.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Ship Date)
     * Display Form ID: shipdate.date.day.uk.dd_mm_yyyy
     */
    DdMmYyyy: newAttribute("shipdate.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Ship Date)
     * Display Form ID: shipdate.date.day.eu.dd_mm_yyyy
     */
    DdMmYyyy_1: newAttribute("shipdate.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Ship Date)
 * Attribute ID: shipdate.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateUSWeekYear = newAttribute("shipdate.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Ship Date)
 * Attribute ID: shipdate.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateEUWeekYear = newAttribute("shipdate.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Ship Date)
 * Attribute ID: shipdate.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateUSWeekQuarter = newAttribute("shipdate.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Ship Date)
 * Attribute ID: shipdate.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ShipDateEUWeekQuarter = newAttribute("shipdate.quarter.for.euweek.number");
/** Available Date Data Sets */

export const DateDatasets = {
    /**
     * Date Data Set Title: Date (Order Date)
     * Date Data Set ID: date.dataset.dt
     */
    OrderDate: {
        ref: idRef("date.dataset.dt", "dataSet"),
        identifier: "date.dataset.dt",
        /**
         * Date Attribute: Year (Order Date)
         * Date Attribute ID: date.year
         */
        Year: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Year (Order Date)
             * Display Form ID: date.year.default
             */
            Default: newAttribute("date.year.default"),
        },
        /**
         * Date Attribute: Quarter (Order Date)
         * Date Attribute ID: date.quarter.in.year
         */
        Quarter: {
            ref: idRef("date.quarter.in.year", "attribute"),
            identifier: "date.quarter.in.year",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: date.quarter.in.year.default
             */
            Default: newAttribute("date.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Order Date)
         * Date Attribute ID: date.week
         */
        WeekSunSatYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Order Date)
             * Display Form ID: date.week.wk_year
             */
            WeekNrYear: newAttribute("date.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: date.week.starting
             */
            WeekStarting: newAttribute("date.week.starting"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: date.week.from_to
             */
            FromTo: newAttribute("date.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Order Date)
             * Display Form ID: date.week.wk_year_cont
             */
            WeekNrYear_1: newAttribute("date.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
             * Display Form ID: date.week.wk_qtr_year_cont
             */
            WkQtrYear: newAttribute("date.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Order Date)
             * Display Form ID: date.week.wk_qtr_year
             */
            WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Order Date)
         * Date Attribute ID: date.week.in.year
         */
        WeekSunSat: {
            ref: idRef("date.week.in.year", "attribute"),
            identifier: "date.week.in.year",
            /**
             * Display Form Title: Number US (Order Date)
             * Display Form ID: date.week.in.year.number_us
             */
            NumberUS: newAttribute("date.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Order Date)
         * Date Attribute ID: date.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("date.week.in.quarter", "attribute"),
            identifier: "date.week.in.quarter",
            /**
             * Display Form Title: Number US (Order Date)
             * Display Form ID: date.week.in.quarter.number_us
             */
            NumberUS: newAttribute("date.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Order Date)
         * Date Attribute ID: date.euweek
         */
        WeekMonSunYear: {
            ref: idRef("date.euweek", "attribute"),
            identifier: "date.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Order Date)
             * Display Form ID: date.euweek.wk_year
             */
            WeekNrYear: newAttribute("date.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: date.euweek.starting
             */
            WeekStarting: newAttribute("date.euweek.starting"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: date.euweek.from_to
             */
            FromTo: newAttribute("date.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Order Date)
         * Date Attribute ID: date.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("date.euweek.in.year", "attribute"),
            identifier: "date.euweek.in.year",
            /**
             * Display Form Title: Number EU (Order Date)
             * Display Form ID: date.euweek.in.year.number_eu
             */
            NumberEU: newAttribute("date.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Order Date)
         * Date Attribute ID: date.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("date.euweek.in.quarter", "attribute"),
            identifier: "date.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Order Date)
             * Display Form ID: date.euweek.in.quarter.number_eu
             */
            NumberEU: newAttribute("date.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Order Date)
         * Date Attribute ID: date.month.in.year
         */
        Month: {
            ref: idRef("date.month.in.year", "attribute"),
            identifier: "date.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Order Date)
             * Display Form ID: date.month.in.year.short
             */
            Short: newAttribute("date.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Order Date)
             * Display Form ID: date.month.in.year.long
             */
            Long: newAttribute("date.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Order Date)
             * Display Form ID: date.month.in.year.number
             */
            Number: newAttribute("date.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Order Date)
             * Display Form ID: date.month.in.year.m_q
             */
            MQ: newAttribute("date.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Order Date)
         * Date Attribute ID: date.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("date.month.in.quarter", "attribute"),
            identifier: "date.month.in.quarter",
            /**
             * Display Form Title: Number (Order Date)
             * Display Form ID: date.month.in.quarter.number
             */
            Number: newAttribute("date.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Order Date)
         * Date Attribute ID: date.day.in.year
         */
        DayOfYear: {
            ref: idRef("date.day.in.year", "attribute"),
            identifier: "date.day.in.year",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: date.day.in.year.default
             */
            Default: newAttribute("date.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Order Date)
         * Date Attribute ID: date.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("date.day.in.week", "attribute"),
            identifier: "date.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Order Date)
             * Display Form ID: date.day.in.week.short
             */
            Short: newAttribute("date.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Order Date)
             * Display Form ID: date.day.in.week.long
             */
            Long: newAttribute("date.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Order Date)
             * Display Form ID: date.day.in.week.number
             */
            Number: newAttribute("date.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Order Date)
         * Date Attribute ID: date.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("date.day.in.euweek", "attribute"),
            identifier: "date.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Order Date)
             * Display Form ID: date.day.in.euweek.short
             */
            Short: newAttribute("date.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Order Date)
             * Display Form ID: date.day.in.euweek.long
             */
            Long: newAttribute("date.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Order Date)
             * Display Form ID: date.day.in.euweek.number
             */
            Number: newAttribute("date.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Order Date)
         * Date Attribute ID: date.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("date.day.in.quarter", "attribute"),
            identifier: "date.day.in.quarter",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: date.day.in.quarter.default
             */
            Default: newAttribute("date.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Order Date)
         * Date Attribute ID: date.day.in.month
         */
        DayOfMonth: {
            ref: idRef("date.day.in.month", "attribute"),
            identifier: "date.day.in.month",
            /**
             * Display Form Title: default (Order Date)
             * Display Form ID: date.day.in.month.default
             */
            Default: newAttribute("date.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Order Date)
         * Date Attribute ID: date.quarter
         */
        QuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: US Short (Order Date)
             * Display Form ID: date.quarter.short_us
             */
            USShort: newAttribute("date.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Order Date)
         * Date Attribute ID: date.month
         */
        MonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Short (Jan 2010) (Order Date)
             * Display Form ID: date.month.short
             */
            Short: newAttribute("date.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Order Date)
             * Display Form ID: date.month.long
             */
            Long: newAttribute("date.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Order Date)
             * Display Form ID: date.month.number
             */
            Number: newAttribute("date.month.number"),
        },
        /**
         * Date Attribute: Date (Order Date)
         * Date Attribute ID: date.date
         */
        Date: {
            ref: idRef("date.date", "attribute"),
            identifier: "date.date",
            /**
             * Display Form Title: mm/dd/yyyy (Order Date)
             * Display Form ID: date.date.day.us.mm_dd_yyyy
             */
            MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Order Date)
             * Display Form ID: date.date.day.yyyy_mm_dd
             */
            YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
             * Display Form ID: date.date.day.us.m_d_yy
             */
            MDYy: newAttribute("date.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
             * Display Form ID: date.date.day.us.long
             */
            Long: newAttribute("date.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Order Date)
             * Display Form ID: date.date.day.uk.dd_mm_yyyy
             */
            DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Order Date)
             * Display Form ID: date.date.day.eu.dd_mm_yyyy
             */
            DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Order Date)
         * Date Attribute ID: date.year.for.week
         */
        USWeekYear: {
            ref: idRef("date.year.for.week", "attribute"),
            identifier: "date.year.for.week",
            /**
             * Display Form Title: Week Year (Order Date)
             * Display Form ID: date.year.for.week.number
             */
            WeekYear: newAttribute("date.year.for.week.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Order Date)
         * Date Attribute ID: date.quarter.for.week
         */
        USWeekQuarter: {
            ref: idRef("date.quarter.for.week", "attribute"),
            identifier: "date.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Order Date)
             * Display Form ID: date.quarter.for.week.number
             */
            WeekQuarter: newAttribute("date.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Order Date)
         * Date Attribute ID: date.year.for.euweek
         */
        EUWeekYear: {
            ref: idRef("date.year.for.euweek", "attribute"),
            identifier: "date.year.for.euweek",
            /**
             * Display Form Title: Week Year (Order Date)
             * Display Form ID: date.year.for.euweek.number
             */
            WeekYear: newAttribute("date.year.for.euweek.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Order Date)
         * Date Attribute ID: date.quarter.for.euweek
         */
        EUWeekQuarter: {
            ref: idRef("date.quarter.for.euweek", "attribute"),
            identifier: "date.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Order Date)
             * Display Form ID: date.quarter.for.euweek.number
             */
            WeekQuarter: newAttribute("date.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Campaign Date)
     * Date Data Set ID: campaigndate.dataset.dt
     */
    CampaignDate: {
        ref: idRef("campaigndate.dataset.dt", "dataSet"),
        identifier: "campaigndate.dataset.dt",
        /**
         * Date Attribute: Year (Campaign Date)
         * Date Attribute ID: campaigndate.year
         */
        Year: {
            ref: idRef("campaigndate.year", "attribute"),
            identifier: "campaigndate.year",
            /**
             * Display Form Title: Year (Campaign Date)
             * Display Form ID: campaigndate.year.default
             */
            Default: newAttribute("campaigndate.year.default"),
        },
        /**
         * Date Attribute: Quarter (Campaign Date)
         * Date Attribute ID: campaigndate.quarter.in.year
         */
        Quarter: {
            ref: idRef("campaigndate.quarter.in.year", "attribute"),
            identifier: "campaigndate.quarter.in.year",
            /**
             * Display Form Title: default (Campaign Date)
             * Display Form ID: campaigndate.quarter.in.year.default
             */
            Default: newAttribute("campaigndate.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Campaign Date)
         * Date Attribute ID: campaigndate.week
         */
        WeekSunSatYear: {
            ref: idRef("campaigndate.week", "attribute"),
            identifier: "campaigndate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Campaign Date)
             * Display Form ID: campaigndate.week.wk_year
             */
            WeekNrYear: newAttribute("campaigndate.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Campaign Date)
             * Display Form ID: campaigndate.week.starting
             */
            WeekStarting: newAttribute("campaigndate.week.starting"),
            /**
             * Display Form Title: From - To (Campaign Date)
             * Display Form ID: campaigndate.week.from_to
             */
            FromTo: newAttribute("campaigndate.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Campaign Date)
             * Display Form ID: campaigndate.week.wk_year_cont
             */
            WeekNrYear_1: newAttribute("campaigndate.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Campaign Date)
             * Display Form ID: campaigndate.week.wk_qtr_year_cont
             */
            WkQtrYear: newAttribute("campaigndate.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Campaign Date)
             * Display Form ID: campaigndate.week.wk_qtr_year
             */
            WkQtrYear_1: newAttribute("campaigndate.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Campaign Date)
         * Date Attribute ID: campaigndate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("campaigndate.week.in.year", "attribute"),
            identifier: "campaigndate.week.in.year",
            /**
             * Display Form Title: Number US (Campaign Date)
             * Display Form ID: campaigndate.week.in.year.number_us
             */
            NumberUS: newAttribute("campaigndate.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Campaign Date)
         * Date Attribute ID: campaigndate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("campaigndate.week.in.quarter", "attribute"),
            identifier: "campaigndate.week.in.quarter",
            /**
             * Display Form Title: Number US (Campaign Date)
             * Display Form ID: campaigndate.week.in.quarter.number_us
             */
            NumberUS: newAttribute("campaigndate.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Campaign Date)
         * Date Attribute ID: campaigndate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("campaigndate.euweek", "attribute"),
            identifier: "campaigndate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Campaign Date)
             * Display Form ID: campaigndate.euweek.wk_year
             */
            WeekNrYear: newAttribute("campaigndate.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Campaign Date)
             * Display Form ID: campaigndate.euweek.starting
             */
            WeekStarting: newAttribute("campaigndate.euweek.starting"),
            /**
             * Display Form Title: From - To (Campaign Date)
             * Display Form ID: campaigndate.euweek.from_to
             */
            FromTo: newAttribute("campaigndate.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Campaign Date)
         * Date Attribute ID: campaigndate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("campaigndate.euweek.in.year", "attribute"),
            identifier: "campaigndate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Campaign Date)
             * Display Form ID: campaigndate.euweek.in.year.number_eu
             */
            NumberEU: newAttribute("campaigndate.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Campaign Date)
         * Date Attribute ID: campaigndate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("campaigndate.euweek.in.quarter", "attribute"),
            identifier: "campaigndate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Campaign Date)
             * Display Form ID: campaigndate.euweek.in.quarter.number_eu
             */
            NumberEU: newAttribute("campaigndate.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Campaign Date)
         * Date Attribute ID: campaigndate.month.in.year
         */
        Month: {
            ref: idRef("campaigndate.month.in.year", "attribute"),
            identifier: "campaigndate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Campaign Date)
             * Display Form ID: campaigndate.month.in.year.short
             */
            Short: newAttribute("campaigndate.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Campaign Date)
             * Display Form ID: campaigndate.month.in.year.long
             */
            Long: newAttribute("campaigndate.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Campaign Date)
             * Display Form ID: campaigndate.month.in.year.number
             */
            Number: newAttribute("campaigndate.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Campaign Date)
             * Display Form ID: campaigndate.month.in.year.m_q
             */
            MQ: newAttribute("campaigndate.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Campaign Date)
         * Date Attribute ID: campaigndate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("campaigndate.month.in.quarter", "attribute"),
            identifier: "campaigndate.month.in.quarter",
            /**
             * Display Form Title: Number (Campaign Date)
             * Display Form ID: campaigndate.month.in.quarter.number
             */
            Number: newAttribute("campaigndate.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Campaign Date)
         * Date Attribute ID: campaigndate.day.in.year
         */
        DayOfYear: {
            ref: idRef("campaigndate.day.in.year", "attribute"),
            identifier: "campaigndate.day.in.year",
            /**
             * Display Form Title: default (Campaign Date)
             * Display Form ID: campaigndate.day.in.year.default
             */
            Default: newAttribute("campaigndate.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Campaign Date)
         * Date Attribute ID: campaigndate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("campaigndate.day.in.week", "attribute"),
            identifier: "campaigndate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Campaign Date)
             * Display Form ID: campaigndate.day.in.week.short
             */
            Short: newAttribute("campaigndate.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Campaign Date)
             * Display Form ID: campaigndate.day.in.week.long
             */
            Long: newAttribute("campaigndate.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Campaign Date)
             * Display Form ID: campaigndate.day.in.week.number
             */
            Number: newAttribute("campaigndate.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Campaign Date)
         * Date Attribute ID: campaigndate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("campaigndate.day.in.euweek", "attribute"),
            identifier: "campaigndate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Campaign Date)
             * Display Form ID: campaigndate.day.in.euweek.short
             */
            Short: newAttribute("campaigndate.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Campaign Date)
             * Display Form ID: campaigndate.day.in.euweek.long
             */
            Long: newAttribute("campaigndate.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Campaign Date)
             * Display Form ID: campaigndate.day.in.euweek.number
             */
            Number: newAttribute("campaigndate.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Campaign Date)
         * Date Attribute ID: campaigndate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("campaigndate.day.in.quarter", "attribute"),
            identifier: "campaigndate.day.in.quarter",
            /**
             * Display Form Title: default (Campaign Date)
             * Display Form ID: campaigndate.day.in.quarter.default
             */
            Default: newAttribute("campaigndate.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Campaign Date)
         * Date Attribute ID: campaigndate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("campaigndate.day.in.month", "attribute"),
            identifier: "campaigndate.day.in.month",
            /**
             * Display Form Title: default (Campaign Date)
             * Display Form ID: campaigndate.day.in.month.default
             */
            Default: newAttribute("campaigndate.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Campaign Date)
         * Date Attribute ID: campaigndate.quarter
         */
        QuarterYear: {
            ref: idRef("campaigndate.quarter", "attribute"),
            identifier: "campaigndate.quarter",
            /**
             * Display Form Title: US Short (Campaign Date)
             * Display Form ID: campaigndate.quarter.short_us
             */
            USShort: newAttribute("campaigndate.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Campaign Date)
         * Date Attribute ID: campaigndate.month
         */
        MonthYear: {
            ref: idRef("campaigndate.month", "attribute"),
            identifier: "campaigndate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Campaign Date)
             * Display Form ID: campaigndate.month.short
             */
            Short: newAttribute("campaigndate.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Campaign Date)
             * Display Form ID: campaigndate.month.long
             */
            Long: newAttribute("campaigndate.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Campaign Date)
             * Display Form ID: campaigndate.month.number
             */
            Number: newAttribute("campaigndate.month.number"),
        },
        /**
         * Date Attribute: Date (Campaign Date)
         * Date Attribute ID: campaigndate.date
         */
        Date: {
            ref: idRef("campaigndate.date", "attribute"),
            identifier: "campaigndate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Campaign Date)
             * Display Form ID: campaigndate.date.day.us.mm_dd_yyyy
             */
            MmDdYyyy: newAttribute("campaigndate.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Campaign Date)
             * Display Form ID: campaigndate.date.day.yyyy_mm_dd
             */
            YyyyMmDd: newAttribute("campaigndate.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Campaign Date)
             * Display Form ID: campaigndate.date.day.us.m_d_yy
             */
            MDYy: newAttribute("campaigndate.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Campaign Date)
             * Display Form ID: campaigndate.date.day.us.long
             */
            Long: newAttribute("campaigndate.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Campaign Date)
             * Display Form ID: campaigndate.date.day.uk.dd_mm_yyyy
             */
            DdMmYyyy: newAttribute("campaigndate.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Campaign Date)
             * Display Form ID: campaigndate.date.day.eu.dd_mm_yyyy
             */
            DdMmYyyy_1: newAttribute("campaigndate.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Campaign Date)
         * Date Attribute ID: campaigndate.year.for.week
         */
        USWeekYear: {
            ref: idRef("campaigndate.year.for.week", "attribute"),
            identifier: "campaigndate.year.for.week",
            /**
             * Display Form Title: Week Year (Campaign Date)
             * Display Form ID: campaigndate.year.for.week.number
             */
            WeekYear: newAttribute("campaigndate.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Campaign Date)
         * Date Attribute ID: campaigndate.year.for.euweek
         */
        EUWeekYear: {
            ref: idRef("campaigndate.year.for.euweek", "attribute"),
            identifier: "campaigndate.year.for.euweek",
            /**
             * Display Form Title: Week Year (Campaign Date)
             * Display Form ID: campaigndate.year.for.euweek.number
             */
            WeekYear: newAttribute("campaigndate.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Campaign Date)
         * Date Attribute ID: campaigndate.quarter.for.week
         */
        USWeekQuarter: {
            ref: idRef("campaigndate.quarter.for.week", "attribute"),
            identifier: "campaigndate.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Campaign Date)
             * Display Form ID: campaigndate.quarter.for.week.number
             */
            WeekQuarter: newAttribute("campaigndate.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Campaign Date)
         * Date Attribute ID: campaigndate.quarter.for.euweek
         */
        EUWeekQuarter: {
            ref: idRef("campaigndate.quarter.for.euweek", "attribute"),
            identifier: "campaigndate.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Campaign Date)
             * Display Form ID: campaigndate.quarter.for.euweek.number
             */
            WeekQuarter: newAttribute("campaigndate.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Ship Date)
     * Date Data Set ID: shipdate.dataset.dt
     */
    ShipDate: {
        ref: idRef("shipdate.dataset.dt", "dataSet"),
        identifier: "shipdate.dataset.dt",
        /**
         * Date Attribute: Year (Ship Date)
         * Date Attribute ID: shipdate.year
         */
        Year: {
            ref: idRef("shipdate.year", "attribute"),
            identifier: "shipdate.year",
            /**
             * Display Form Title: Year (Ship Date)
             * Display Form ID: shipdate.year.default
             */
            Default: newAttribute("shipdate.year.default"),
        },
        /**
         * Date Attribute: Quarter (Ship Date)
         * Date Attribute ID: shipdate.quarter.in.year
         */
        Quarter: {
            ref: idRef("shipdate.quarter.in.year", "attribute"),
            identifier: "shipdate.quarter.in.year",
            /**
             * Display Form Title: default (Ship Date)
             * Display Form ID: shipdate.quarter.in.year.default
             */
            Default: newAttribute("shipdate.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Ship Date)
         * Date Attribute ID: shipdate.week
         */
        WeekSunSatYear: {
            ref: idRef("shipdate.week", "attribute"),
            identifier: "shipdate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Ship Date)
             * Display Form ID: shipdate.week.wk_year
             */
            WeekNrYear: newAttribute("shipdate.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Ship Date)
             * Display Form ID: shipdate.week.starting
             */
            WeekStarting: newAttribute("shipdate.week.starting"),
            /**
             * Display Form Title: From - To (Ship Date)
             * Display Form ID: shipdate.week.from_to
             */
            FromTo: newAttribute("shipdate.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Ship Date)
             * Display Form ID: shipdate.week.wk_year_cont
             */
            WeekNrYear_1: newAttribute("shipdate.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Ship Date)
             * Display Form ID: shipdate.week.wk_qtr_year_cont
             */
            WkQtrYear: newAttribute("shipdate.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Ship Date)
             * Display Form ID: shipdate.week.wk_qtr_year
             */
            WkQtrYear_1: newAttribute("shipdate.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Ship Date)
         * Date Attribute ID: shipdate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("shipdate.week.in.year", "attribute"),
            identifier: "shipdate.week.in.year",
            /**
             * Display Form Title: Number US (Ship Date)
             * Display Form ID: shipdate.week.in.year.number_us
             */
            NumberUS: newAttribute("shipdate.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Ship Date)
         * Date Attribute ID: shipdate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("shipdate.week.in.quarter", "attribute"),
            identifier: "shipdate.week.in.quarter",
            /**
             * Display Form Title: Number US (Ship Date)
             * Display Form ID: shipdate.week.in.quarter.number_us
             */
            NumberUS: newAttribute("shipdate.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Ship Date)
         * Date Attribute ID: shipdate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("shipdate.euweek", "attribute"),
            identifier: "shipdate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Ship Date)
             * Display Form ID: shipdate.euweek.wk_year
             */
            WeekNrYear: newAttribute("shipdate.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Ship Date)
             * Display Form ID: shipdate.euweek.starting
             */
            WeekStarting: newAttribute("shipdate.euweek.starting"),
            /**
             * Display Form Title: From - To (Ship Date)
             * Display Form ID: shipdate.euweek.from_to
             */
            FromTo: newAttribute("shipdate.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Ship Date)
         * Date Attribute ID: shipdate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("shipdate.euweek.in.year", "attribute"),
            identifier: "shipdate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Ship Date)
             * Display Form ID: shipdate.euweek.in.year.number_eu
             */
            NumberEU: newAttribute("shipdate.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Ship Date)
         * Date Attribute ID: shipdate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("shipdate.euweek.in.quarter", "attribute"),
            identifier: "shipdate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Ship Date)
             * Display Form ID: shipdate.euweek.in.quarter.number_eu
             */
            NumberEU: newAttribute("shipdate.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Ship Date)
         * Date Attribute ID: shipdate.month.in.year
         */
        Month: {
            ref: idRef("shipdate.month.in.year", "attribute"),
            identifier: "shipdate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Ship Date)
             * Display Form ID: shipdate.month.in.year.short
             */
            Short: newAttribute("shipdate.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Ship Date)
             * Display Form ID: shipdate.month.in.year.long
             */
            Long: newAttribute("shipdate.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Ship Date)
             * Display Form ID: shipdate.month.in.year.number
             */
            Number: newAttribute("shipdate.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Ship Date)
             * Display Form ID: shipdate.month.in.year.m_q
             */
            MQ: newAttribute("shipdate.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Ship Date)
         * Date Attribute ID: shipdate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("shipdate.month.in.quarter", "attribute"),
            identifier: "shipdate.month.in.quarter",
            /**
             * Display Form Title: Number (Ship Date)
             * Display Form ID: shipdate.month.in.quarter.number
             */
            Number: newAttribute("shipdate.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Ship Date)
         * Date Attribute ID: shipdate.day.in.year
         */
        DayOfYear: {
            ref: idRef("shipdate.day.in.year", "attribute"),
            identifier: "shipdate.day.in.year",
            /**
             * Display Form Title: default (Ship Date)
             * Display Form ID: shipdate.day.in.year.default
             */
            Default: newAttribute("shipdate.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Ship Date)
         * Date Attribute ID: shipdate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("shipdate.day.in.week", "attribute"),
            identifier: "shipdate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Ship Date)
             * Display Form ID: shipdate.day.in.week.short
             */
            Short: newAttribute("shipdate.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Ship Date)
             * Display Form ID: shipdate.day.in.week.long
             */
            Long: newAttribute("shipdate.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Ship Date)
             * Display Form ID: shipdate.day.in.week.number
             */
            Number: newAttribute("shipdate.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Ship Date)
         * Date Attribute ID: shipdate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("shipdate.day.in.euweek", "attribute"),
            identifier: "shipdate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Ship Date)
             * Display Form ID: shipdate.day.in.euweek.short
             */
            Short: newAttribute("shipdate.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Ship Date)
             * Display Form ID: shipdate.day.in.euweek.long
             */
            Long: newAttribute("shipdate.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Ship Date)
             * Display Form ID: shipdate.day.in.euweek.number
             */
            Number: newAttribute("shipdate.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Ship Date)
         * Date Attribute ID: shipdate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("shipdate.day.in.quarter", "attribute"),
            identifier: "shipdate.day.in.quarter",
            /**
             * Display Form Title: default (Ship Date)
             * Display Form ID: shipdate.day.in.quarter.default
             */
            Default: newAttribute("shipdate.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Ship Date)
         * Date Attribute ID: shipdate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("shipdate.day.in.month", "attribute"),
            identifier: "shipdate.day.in.month",
            /**
             * Display Form Title: default (Ship Date)
             * Display Form ID: shipdate.day.in.month.default
             */
            Default: newAttribute("shipdate.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Ship Date)
         * Date Attribute ID: shipdate.quarter
         */
        QuarterYear: {
            ref: idRef("shipdate.quarter", "attribute"),
            identifier: "shipdate.quarter",
            /**
             * Display Form Title: US Short (Ship Date)
             * Display Form ID: shipdate.quarter.short_us
             */
            USShort: newAttribute("shipdate.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Ship Date)
         * Date Attribute ID: shipdate.month
         */
        MonthYear: {
            ref: idRef("shipdate.month", "attribute"),
            identifier: "shipdate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Ship Date)
             * Display Form ID: shipdate.month.short
             */
            Short: newAttribute("shipdate.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Ship Date)
             * Display Form ID: shipdate.month.long
             */
            Long: newAttribute("shipdate.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Ship Date)
             * Display Form ID: shipdate.month.number
             */
            Number: newAttribute("shipdate.month.number"),
        },
        /**
         * Date Attribute: Date (Ship Date)
         * Date Attribute ID: shipdate.date
         */
        Date: {
            ref: idRef("shipdate.date", "attribute"),
            identifier: "shipdate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Ship Date)
             * Display Form ID: shipdate.date.day.us.mm_dd_yyyy
             */
            MmDdYyyy: newAttribute("shipdate.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Ship Date)
             * Display Form ID: shipdate.date.day.yyyy_mm_dd
             */
            YyyyMmDd: newAttribute("shipdate.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Ship Date)
             * Display Form ID: shipdate.date.day.us.m_d_yy
             */
            MDYy: newAttribute("shipdate.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Ship Date)
             * Display Form ID: shipdate.date.day.us.long
             */
            Long: newAttribute("shipdate.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Ship Date)
             * Display Form ID: shipdate.date.day.uk.dd_mm_yyyy
             */
            DdMmYyyy: newAttribute("shipdate.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Ship Date)
             * Display Form ID: shipdate.date.day.eu.dd_mm_yyyy
             */
            DdMmYyyy_1: newAttribute("shipdate.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Ship Date)
         * Date Attribute ID: shipdate.year.for.week
         */
        USWeekYear: {
            ref: idRef("shipdate.year.for.week", "attribute"),
            identifier: "shipdate.year.for.week",
            /**
             * Display Form Title: Week Year (Ship Date)
             * Display Form ID: shipdate.year.for.week.number
             */
            WeekYear: newAttribute("shipdate.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Ship Date)
         * Date Attribute ID: shipdate.year.for.euweek
         */
        EUWeekYear: {
            ref: idRef("shipdate.year.for.euweek", "attribute"),
            identifier: "shipdate.year.for.euweek",
            /**
             * Display Form Title: Week Year (Ship Date)
             * Display Form ID: shipdate.year.for.euweek.number
             */
            WeekYear: newAttribute("shipdate.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Ship Date)
         * Date Attribute ID: shipdate.quarter.for.week
         */
        USWeekQuarter: {
            ref: idRef("shipdate.quarter.for.week", "attribute"),
            identifier: "shipdate.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Ship Date)
             * Display Form ID: shipdate.quarter.for.week.number
             */
            WeekQuarter: newAttribute("shipdate.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Ship Date)
         * Date Attribute ID: shipdate.quarter.for.euweek
         */
        EUWeekQuarter: {
            ref: idRef("shipdate.quarter.for.euweek", "attribute"),
            identifier: "shipdate.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Ship Date)
             * Display Form ID: shipdate.quarter.for.euweek.number
             */
            WeekQuarter: newAttribute("shipdate.quarter.for.euweek.number"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: % Revenue per Product by Customer and Category
     * Insight ID: aaLjHIqDdLyg
     */
    PercentRevenuePerProductByCustomerAndCategory: "aaLjHIqDdLyg",
    /**
     * Insight Title: Top X Demo
     * Insight ID: aaejVzt7co9Z
     */
    TopXDemo: "aaejVzt7co9Z",
    /**
     * Insight Title: Revenue by Product
     * Insight ID: aaOjWocLe5aZ
     */
    RevenueByProduct: "aaOjWocLe5aZ",
    /**
     * Insight Title: Revenue per $ vs Spend by Campaign
     * Insight ID: aaHlJW8Piiyw
     */
    RevenuePer$VsSpendByCampaign: "aaHlJW8Piiyw",
    /**
     * Insight Title: Top 10 Products
     * Insight ID: aafs9dQFb85X
     */
    Top10Products: "aafs9dQFb85X",
    /**
     * Insight Title: Revenue Trend
     * Insight ID: aactay7Pgrwu
     */
    RevenueTrend: "aactay7Pgrwu",
    /**
     * Insight Title: Customers Trend
     * Insight ID: aautd5gAd4OE
     */
    CustomersTrend: "aautd5gAd4OE",
    /**
     * Insight Title: Product Categories Pie Chart
     * Insight ID: aahthxJriFZ8
     */
    ProductCategoriesPieChart: "aahthxJriFZ8",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: aaQtejsQd5X6
     */
    Top10Customers: "aaQtejsQd5X6",
    /**
     * Insight Title: Revenue and Quantity by Product and Category
     * Insight ID: aexGsWaGfAa2
     */
    RevenueAndQuantityByProductAndCategory: "aexGsWaGfAa2",
    /**
     * Insight Title: Top 10 Customers
     * Insight ID: agifB6TsgdrR
     */
    Top10Customers_1: "agifB6TsgdrR",
    /**
     * Insight Title: Product Saleability
     * Insight ID: ab8nXxb6fbUE
     */
    ProductSaleability: "ab8nXxb6fbUE",
    /**
     * Insight Title: Revenue by Category Trend
     * Insight ID: adXnWX29aQNR
     */
    RevenueByCategoryTrend: "adXnWX29aQNR",
    /**
     * Insight Title: Product Revenue Comparison (over previous period)
     * Insight ID: adwnWKSlaPYU
     */
    ProductRevenueComparisonOverPreviousPeriod: "adwnWKSlaPYU",
    /**
     * Insight Title: Campaign Spend
     * Insight ID: adGnXZr9fbYZ
     */
    CampaignSpend_1: "adGnXZr9fbYZ",
    /**
     * Insight Title: Product Breakdown
     * Insight ID: abJNsa4nbrNC
     */
    ProductBreakdown: "abJNsa4nbrNC",
    /**
     * Insight Title: Percentage of Customers by Region
     * Insight ID: aesTLykVhI02
     */
    PercentageOfCustomersByRegion: "aesTLykVhI02",
    /**
     * Insight Title: Total Spend to Budget Chart
     * Insight ID: aa7zzgyYc9BV
     */
    TotalSpendToBudgetChart: "aa7zzgyYc9BV",
    /**
     * Insight Title: Revenue and Customer Distribution in the US
     * Insight ID: aa1RGB48dqil
     */
    RevenueAndCustomerDistributionInTheUS: "aa1RGB48dqil",
    /**
     * Insight Title: Total Quarter Revenue to Target
     * Insight ID: ab8RbNlUd2KM
     */
    TotalQuarterRevenueToTarget: "ab8RbNlUd2KM",
    /**
     * Insight Title: Customer Order History Detail
     * Insight ID: acrkSpkdhp6W
     */
    CustomerOrderHistoryDetail: "acrkSpkdhp6W",
    /**
     * Insight Title: Order Detail
     * Insight ID: acklnHmzcsZ0
     */
    OrderDetail: "acklnHmzcsZ0",
    /**
     * Insight Title: Returning Customers
     * Insight ID: aaqlzfIqbjCZ
     */
    ReturningCustomers: "aaqlzfIqbjCZ",
    /**
     * Insight Title: Customer Distribution
     * Insight ID: ab9kR2ZBhaqM
     */
    CustomerDistribution: "ab9kR2ZBhaqM",
    /**
     * Insight Title: Campaign Budget
     * Insight ID: aaTlbQHfde8b
     */
    CampaignBudget: "aaTlbQHfde8b",
    /**
     * Insight Title: Campaign Revenue Detail Breakdown
     * Insight ID: aalloglHc6Cv
     */
    CampaignRevenueDetailBreakdown: "aalloglHc6Cv",
    /**
     * Insight Title: Revenue per $ vs Budget by Campaign
     * Insight ID: aayliajWdJIv
     */
    RevenuePer$VsBudgetByCampaign: "aayliajWdJIv",
    /**
     * Insight Title: Product Breakdown
     * Insight ID: aaxwvA9xaYYu
     */
    ProductBreakdown_1: "aaxwvA9xaYYu",
    /**
     * Insight Title: asdf
     * Insight ID: abkmZgBTd451
     */
    Asdf: "abkmZgBTd451",
};
export const Dashboards = {
    /**
     * Dashboard Title: 1.  Overview
     * Dashboard ID: aaAxaLgZdXxf
     */
    _1Overview: "aaAxaLgZdXxf",
    /**
     * Dashboard Title: 2. Product Details
     * Dashboard ID: adJns8Jacu8W
     */
    _2ProductDetails: "adJns8Jacu8W",
    /**
     * Dashboard Title: 3. Customer Details
     * Dashboard ID: acD797eDcNze
     */
    _3CustomerDetails: "acD797eDcNze",
    /**
     * Dashboard Title: 4. Campaign Details
     * Dashboard ID: adi8ao7sdiNb
     */
    _4CampaignDetails: "adi8ao7sdiNb",
};
