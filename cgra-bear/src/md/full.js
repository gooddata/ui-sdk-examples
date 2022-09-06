/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-09-06T10:20:14.203Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Order ID
 * Attribute ID: attr.order.orderid
 */

export const OrderID = newAttribute("label.order.orderid");
/**
 * Attribute Title: Product Brand
 * Attribute ID: attr.product.productbrand
 */

export const ProductBrand = newAttribute("label.product.productbrand");
/**
 * Attribute Title: Product Category
 * Attribute ID: attr.product.productcategory
 */

export const ProductCategory = newAttribute("label.product.productcategory");
/**
 * Attribute Title: Product ID
 * Attribute ID: attr.product.productid
 */

export const ProductID = {
    /**
     * Display Form Title: Product Name
     * Display Form ID: label.product.productid.productname
     */
    ProductName: newAttribute("label.product.productid.productname"),
    /**
     * Display Form Title: Product ID
     * Display Form ID: label.product.productid
     */
    Default: newAttribute("label.product.productid"),
    /**
     * Display Form Title: Product Image Web
     * Display Form ID: label.product.productid.productimageweb
     */
    ProductImageWeb: newAttribute("label.product.productid.productimageweb"),
};
/**
 * Attribute Title: Product Image
 * Attribute ID: attr.product.productimage
 */

export const ProductImage = {
    /**
     * Display Form Title: Product Image Web
     * Display Form ID: label.product.productimage.productimageweb
     */
    Web: newAttribute("label.product.productimage.productimageweb"),
    /**
     * Display Form Title: Product Image
     * Display Form ID: label.product.productimage
     */
    Default: newAttribute("label.product.productimage"),
};
/**
 * Attribute Title: User City
 * Attribute ID: attr.user.usercity
 */

export const UserCity = {
    /**
     * Display Form Title: User City
     * Display Form ID: label.user.usercity
     */
    Default: newAttribute("label.user.usercity"),
    /**
     * Display Form Title: City Pushpin
     * Display Form ID: label.user.usercity.citypushpin
     */
    CityPushpin: newAttribute("label.user.usercity.citypushpin"),
};
/**
 * Attribute Title: User Country
 * Attribute ID: attr.user.usercountry
 */

export const UserCountry = newAttribute("label.user.usercountry");
/**
 * Attribute Title: User Email
 * Attribute ID: attr.user.useremail
 */

export const UserEmail = newAttribute("label.user.useremail");
/**
 * Attribute Title: User ID
 * Attribute ID: attr.user.userid
 */

export const UserID = {
    /**
     * Display Form Title: User Name
     * Display Form ID: label.user.userid.username
     */
    UserName: newAttribute("label.user.userid.username"),
    /**
     * Display Form Title: User ID
     * Display Form ID: label.user.userid
     */
    Default: newAttribute("label.user.userid"),
};
/**
 * Attribute Title: User State
 * Attribute ID: attr.user.userstate
 */

export const UserState = newAttribute("label.user.userstate");
/**
 * Metric Title: % Avg Price from Previous Month
 * Metric ID: aaUPyQwUgKFZ
 * Metric Type: MAQL Metric
 */

export const PercentAvgPriceFromPreviousMonth = newMeasure(idRef("aaUPyQwUgKFZ", "measure"));
/**
 * Metric Title: % Change in % of Total Sales
 * Metric ID: abOUb05gdIUh
 * Metric Type: MAQL Metric
 */

export const PercentChangeInPercentOfTotalSales = newMeasure(idRef("abOUb05gdIUh", "measure"));
/**
 * Metric Title: % of Total Sales
 * Metric ID: aaZUbXJqhyZm
 * Metric Type: MAQL Metric
 */

export const PercentOfTotalSales = newMeasure(idRef("aaZUbXJqhyZm", "measure"));
/**
 * Metric Title: % Sell Through
 * Metric ID: aa7PGzxgaxC0
 * Metric Type: MAQL Metric
 */

export const PercentSellThrough = newMeasure(idRef("aa7PGzxgaxC0", "measure"));
/**
 * Metric Title: % Sell Through Month Diff
 * Metric ID: aaQPKWDlg9dO
 * Metric Type: MAQL Metric
 */

export const PercentSellThroughMonthDiff = newMeasure(idRef("aaQPKWDlg9dO", "measure"));
/**
 * Metric Title: % Total Listings from Previous Month
 * Metric ID: abwPweOfcrIu
 * Metric Type: MAQL Metric
 */

export const PercentTotalListingsFromPreviousMonth = newMeasure(idRef("abwPweOfcrIu", "measure"));
/**
 * Metric Title: % Total Sales from Previous Month
 * Metric ID: aaoPOljQfRt1
 * Metric Type: MAQL Metric
 */

export const PercentTotalSalesFromPreviousMonth = newMeasure(idRef("aaoPOljQfRt1", "measure"));
/**
 * Metric Title: Average Page Views
 * Metric ID: aaSdqzqHdNL8
 * Metric Type: MAQL Metric
 */

export const AveragePageViews = newMeasure(idRef("aaSdqzqHdNL8", "measure"));
/**
 * Metric Title: Average Page Views (Colored)
 * Metric ID: ab9F5vJuqTdZ
 * Metric Type: MAQL Metric
 */

export const AveragePageViewsColored = newMeasure(idRef("ab9F5vJuqTdZ", "measure"));
/**
 * Metric Title: Average Page Views [computers]
 * Metric ID: aaddocAhfjN5
 * Metric Type: MAQL Metric
 */

export const AveragePageViewsComputers = newMeasure(idRef("aaddocAhfjN5", "measure"));
/**
 * Metric Title: Average Price of Products
 * Metric ID: aaNPryEKcKLb
 * Metric Type: MAQL Metric
 */

export const AveragePriceOfProducts = newMeasure(idRef("aaNPryEKcKLb", "measure"));
/**
 * Metric Title: Average Price of Products Previous Period
 * Metric ID: aaiPyXeOawRK
 * Metric Type: MAQL Metric
 */

export const AveragePriceOfProductsPreviousPeriod = newMeasure(idRef("aaiPyXeOawRK", "measure"));
/**
 * Metric Title: Average Sales
 * Metric ID: acCpoTR6dN1J
 * Metric Type: MAQL Metric
 */

export const AverageSales = newMeasure(idRef("acCpoTR6dN1J", "measure"));
/**
 * Metric Title: Average Total Sales
 * Metric ID: aavQbUM0dxrm
 * Metric Type: MAQL Metric
 */

export const AverageTotalSales = newMeasure(idRef("aavQbUM0dxrm", "measure"));
/**
 * Metric Title: Avg Monthly Number of Returns
 * Metric ID: aa2ptW2Qc47e
 * Metric Type: MAQL Metric
 */

export const AvgMonthlyNumberOfReturns = newMeasure(idRef("aa2ptW2Qc47e", "measure"));
/**
 * Metric Title: Avg Monthly Number of Sales
 * Metric ID: abGpmw9TgxRI
 * Metric Type: MAQL Metric
 */

export const AvgMonthlyNumberOfSales = newMeasure(idRef("abGpmw9TgxRI", "measure"));
/**
 * Metric Title: Avg Product Price
 * Metric ID: ab3T7Y3bbwTk
 * Metric Type: MAQL Metric
 */

export const AvgProductPrice = newMeasure(idRef("ab3T7Y3bbwTk", "measure"));
/**
 * Metric Title: AVG Spend By Customer
 * Metric ID: aaoQBQsaip3k
 * Metric Type: MAQL Metric
 */

export const AVGSpendByCustomer = newMeasure(idRef("aaoQBQsaip3k", "measure"));
/**
 * Metric Title: Bottom 5 Total Profit
 * Metric ID: acnP0soefj8Y
 * Metric Type: MAQL Metric
 */

export const Bottom5TotalProfit = newMeasure(idRef("acnP0soefj8Y", "measure"));
/**
 * Metric Title: Count of Returns
 * Metric ID: aa6MSIgDfUni
 * Metric Type: MAQL Metric
 */

export const CountOfReturns = newMeasure(idRef("aa6MSIgDfUni", "measure"));
/**
 * Metric Title: Count of Transactions
 * Metric ID: acYMJ2AhinNS
 * Metric Type: MAQL Metric
 */

export const CountOfTransactions = newMeasure(idRef("acYMJ2AhinNS", "measure"));
/**
 * Metric Title: Max Page Views
 * Metric ID: adcdjeiyii9R
 * Metric Type: MAQL Metric
 */

export const MaxPageViews = newMeasure(idRef("adcdjeiyii9R", "measure"));
/**
 * Metric Title: Median Page Views
 * Metric ID: acwdlnwEfO9V
 * Metric Type: MAQL Metric
 */

export const MedianPageViews = newMeasure(idRef("acwdlnwEfO9V", "measure"));
/**
 * Metric Title: Monthly Avg Profit Margin
 * Metric ID: abwomkbyhbkl
 * Metric Type: MAQL Metric
 */

export const MonthlyAvgProfitMargin = newMeasure(idRef("abwomkbyhbkl", "measure"));
/**
 * Metric Title: Number of Page Views [Sum]
 * Metric ID: adxtkVLmikgv
 * Metric Type: MAQL Metric
 */

export const NumberOfPageViewsSum = newMeasure(idRef("adxtkVLmikgv", "measure"));
/**
 * Metric Title: Number of Reviews [Sum]
 * Metric ID: ablK1TkPfaL2
 * Metric Type: MAQL Metric
 */

export const NumberOfReviewsSum = newMeasure(idRef("ablK1TkPfaL2", "measure"));
/**
 * Metric Title: Page Views
 * Metric ID: aaOK3ZBZfZWn
 * Metric Type: MAQL Metric
 */

export const PageViews = newMeasure(idRef("aaOK3ZBZfZWn", "measure"));
/**
 * Metric Title: Previous Count of Total Sales
 * Metric ID: adkdb5Grb0oS
 * Metric Type: MAQL Metric
 */

export const PreviousCountOfTotalSales = newMeasure(idRef("adkdb5Grb0oS", "measure"));
/**
 * Metric Title: Previous Total Sales
 * Metric ID: aaJdarAugXXz
 * Metric Type: MAQL Metric
 */

export const PreviousTotalSales = newMeasure(idRef("aaJdarAugXXz", "measure"));
/**
 * Metric Title: Product Cost [Sum]
 * Metric ID: abvKZ0MsdG1e
 * Metric Type: MAQL Metric
 */

export const ProductCostSum = newMeasure(idRef("abvKZ0MsdG1e", "measure"));
/**
 * Metric Title: Product List Price [Sum]
 * Metric ID: aaDK3HhOhGFm
 * Metric Type: MAQL Metric
 */

export const ProductListPriceSum = newMeasure(idRef("aaDK3HhOhGFm", "measure"));
/**
 * Metric Title: Profit Margin
 * Metric ID: aaLt2D6rcZ0a
 * Metric Type: MAQL Metric
 */

export const ProfitMargin = newMeasure(idRef("aaLt2D6rcZ0a", "measure"));
/**
 * Metric Title: Rating [Sum]
 * Metric ID: aaLK3IBUfJ07
 * Metric Type: MAQL Metric
 */

export const RatingSum = newMeasure(idRef("aaLK3IBUfJ07", "measure"));
/**
 * Metric Title: Top 5 Total Profit
 * Metric ID: abpP45KneRMq
 * Metric Type: MAQL Metric
 */

export const Top5TotalProfit = newMeasure(idRef("abpP45KneRMq", "measure"));
/**
 * Metric Title: Total Expenses
 * Metric ID: abhuo5I1iaWD
 * Metric Type: MAQL Metric
 */

export const TotalExpenses = newMeasure(idRef("abhuo5I1iaWD", "measure"));
/**
 * Metric Title: Total Listings
 * Metric ID: abfPAwptdA3s
 * Metric Type: MAQL Metric
 */

export const TotalListings = newMeasure(idRef("abfPAwptdA3s", "measure"));
/**
 * Metric Title: Total Listings Previous Month
 * Metric ID: aaTPBd05fp3Y
 * Metric Type: MAQL Metric
 */

export const TotalListingsPreviousMonth = newMeasure(idRef("aaTPBd05fp3Y", "measure"));
/**
 * Metric Title: Total Order Amount
 * Metric ID: aawMUtsmhYul
 * Metric Type: MAQL Metric
 */

export const TotalOrderAmount = newMeasure(idRef("aawMUtsmhYul", "measure"));
/**
 * Metric Title: Total Order Cost
 * Metric ID: aaqP7AtPfmRM
 * Metric Type: MAQL Metric
 */

export const TotalOrderCost = newMeasure(idRef("aaqP7AtPfmRM", "measure"));
/**
 * Metric Title: Total Order Savings
 * Metric ID: acCMNnv0amdA
 * Metric Type: MAQL Metric
 */

export const TotalOrderSavings = newMeasure(idRef("acCMNnv0amdA", "measure"));
/**
 * Metric Title: Total Profit
 * Metric ID: aaWP28vUgl64
 * Metric Type: MAQL Metric
 */

export const TotalProfit = newMeasure(idRef("aaWP28vUgl64", "measure"));
/**
 * Metric Title: Total Profit Previous Month
 * Metric ID: abR94YhLd4KR
 * Metric Type: MAQL Metric
 */

export const TotalProfitPreviousMonth = newMeasure(idRef("abR94YhLd4KR", "measure"));
/**
 * Metric Title: Total Profit Return
 * Metric ID: aa6GfC3ThMRs
 * Metric Type: MAQL Metric
 */

export const TotalProfitReturn = newMeasure(idRef("aa6GfC3ThMRs", "measure"));
/**
 * Metric Title: Total Profit Sale
 * Metric ID: aazGitv6aEPX
 * Metric Type: MAQL Metric
 */

export const TotalProfitSale = newMeasure(idRef("aazGitv6aEPX", "measure"));
/**
 * Metric Title: Total Return Amount
 * Metric ID: acgMPhyEgo3S
 * Metric Type: MAQL Metric
 */

export const TotalReturnAmount = newMeasure(idRef("acgMPhyEgo3S", "measure"));
/**
 * Metric Title: Total Sales
 * Metric ID: acLML1wlaBzT
 * Metric Type: MAQL Metric
 */

export const TotalSales = newMeasure(idRef("acLML1wlaBzT", "measure"));
/**
 * Metric Title: Total Sales Previous Month
 * Metric ID: aaHPNQHndWzw
 * Metric Type: MAQL Metric
 */

export const TotalSalesPreviousMonth = newMeasure(idRef("aaHPNQHndWzw", "measure"));
/**
 * Fact Title: Monthly Inventory Quantity
 * Fact ID: fact.monthlyinventory.monthlyquantity
 */

export const MonthlyInventoryQuantity = {
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Monthly Inventory Quantity
     * Fact ID: fact.monthlyinventory.monthlyquantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.monthlyinventory.monthlyquantity", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Number of Page Views
 * Fact ID: fact.product.numberofpageviews
 */

export const NumberOfPageViews = {
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Number of Page Views
     * Fact ID: fact.product.numberofpageviews
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.product.numberofpageviews", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Number of Reviews
 * Fact ID: fact.product.numberofreviews
 */

export const NumberOfReviews = {
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Number of Reviews
     * Fact ID: fact.product.numberofreviews
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.product.numberofreviews", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order Unit Price
 * Fact ID: fact.transactions.orderunitprice
 */

export const OrderUnitPrice = {
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Order Unit Price
     * Fact ID: fact.transactions.orderunitprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.transactions.orderunitprice", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Order Unit Quantity
 * Fact ID: fact.transactions.orderunitquantity
 */

export const OrderUnitQuantity = {
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Order Unit Quantity
     * Fact ID: fact.transactions.orderunitquantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.transactions.orderunitquantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Product Cost
 * Fact ID: fact.product.productcost
 */

export const ProductCost = {
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Product Cost
     * Fact ID: fact.product.productcost
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.product.productcost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Product List Price
 * Fact ID: fact.product.productlistprice
 */

export const ProductListPrice = {
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Product List Price
     * Fact ID: fact.product.productlistprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.product.productlistprice", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Rating
 * Fact ID: fact.product.rating
 */

export const Rating = {
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Rating
     * Fact ID: fact.product.rating
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.product.rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return Unit Price
 * Fact ID: fact.returns.returnunitprice
 */

export const ReturnUnitPrice = {
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Return Unit Price
     * Fact ID: fact.returns.returnunitprice
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.returns.returnunitprice", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Return Unit Quantity
 * Fact ID: fact.returns.returnunitquantity
 */

export const ReturnUnitQuantity = {
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Return Unit Quantity
     * Fact ID: fact.returns.returnunitquantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("fact.returns.returnunitquantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Year (Order Date)
 * Attribute ID: orderdate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateYear = newAttribute("orderdate.year.default");
/**
 * Attribute Title: Quarter (Order Date)
 * Attribute ID: orderdate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarter = newAttribute("orderdate.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Order Date)
 * Attribute ID: orderdate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: orderdate.week.wk_year
     */
    WeekNrYear: newAttribute("orderdate.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: orderdate.week.starting
     */
    WeekStarting: newAttribute("orderdate.week.starting"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: orderdate.week.from_to
     */
    FromTo: newAttribute("orderdate.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Order Date)
     * Display Form ID: orderdate.week.wk_year_cont
     */
    WeekNrYear_1: newAttribute("orderdate.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
     * Display Form ID: orderdate.week.wk_qtr_year_cont
     */
    WkQtrYear: newAttribute("orderdate.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Order Date)
     * Display Form ID: orderdate.week.wk_qtr_year
     */
    WkQtrYear_1: newAttribute("orderdate.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Order Date)
 * Attribute ID: orderdate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSat = newAttribute("orderdate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Order Date)
 * Attribute ID: orderdate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekSunSatOfQtr = newAttribute("orderdate.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Order Date)
 * Attribute ID: orderdate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Order Date)
     * Display Form ID: orderdate.euweek.wk_year
     */
    WeekNrYear: newAttribute("orderdate.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Order Date)
     * Display Form ID: orderdate.euweek.starting
     */
    WeekStarting: newAttribute("orderdate.euweek.starting"),
    /**
     * Display Form Title: From - To (Order Date)
     * Display Form ID: orderdate.euweek.from_to
     */
    FromTo: newAttribute("orderdate.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Order Date)
 * Attribute ID: orderdate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSun = newAttribute("orderdate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Order Date)
 * Attribute ID: orderdate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekMonSunOfQtr = newAttribute("orderdate.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Order Date)
 * Attribute ID: orderdate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Order Date)
     * Display Form ID: orderdate.month.in.year.short
     */
    Short: newAttribute("orderdate.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Order Date)
     * Display Form ID: orderdate.month.in.year.long
     */
    Long: newAttribute("orderdate.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Order Date)
     * Display Form ID: orderdate.month.in.year.number
     */
    Number: newAttribute("orderdate.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Order Date)
     * Display Form ID: orderdate.month.in.year.m_q
     */
    MQ: newAttribute("orderdate.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Order Date)
 * Attribute ID: orderdate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthOfQuarter = newAttribute("orderdate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Order Date)
 * Attribute ID: orderdate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfYear = newAttribute("orderdate.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Order Date)
 * Attribute ID: orderdate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Order Date)
     * Display Form ID: orderdate.day.in.week.short
     */
    Short: newAttribute("orderdate.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Order Date)
     * Display Form ID: orderdate.day.in.week.long
     */
    Long: newAttribute("orderdate.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Order Date)
     * Display Form ID: orderdate.day.in.week.number
     */
    Number: newAttribute("orderdate.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Order Date)
 * Attribute ID: orderdate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Order Date)
     * Display Form ID: orderdate.day.in.euweek.short
     */
    Short: newAttribute("orderdate.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Order Date)
     * Display Form ID: orderdate.day.in.euweek.long
     */
    Long: newAttribute("orderdate.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Order Date)
     * Display Form ID: orderdate.day.in.euweek.number
     */
    Number: newAttribute("orderdate.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Order Date)
 * Attribute ID: orderdate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfQuarter = newAttribute("orderdate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Order Date)
 * Attribute ID: orderdate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfMonth = newAttribute("orderdate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Order Date)
 * Attribute ID: orderdate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarterYear = newAttribute("orderdate.quarter.short_us");
/**
 * Attribute Title: Month/Year (Order Date)
 * Attribute ID: orderdate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Order Date)
     * Display Form ID: orderdate.month.short
     */
    Short: newAttribute("orderdate.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Order Date)
     * Display Form ID: orderdate.month.long
     */
    Long: newAttribute("orderdate.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Order Date)
     * Display Form ID: orderdate.month.number
     */
    Number: newAttribute("orderdate.month.number"),
};
/**
 * Attribute Title: Date (Order Date)
 * Attribute ID: orderdate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Order Date)
     * Display Form ID: orderdate.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("orderdate.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Order Date)
     * Display Form ID: orderdate.date.day.yyyy_mm_dd
     */
    YyyyMmDd: newAttribute("orderdate.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
     * Display Form ID: orderdate.date.day.us.m_d_yy
     */
    MDYy: newAttribute("orderdate.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
     * Display Form ID: orderdate.date.day.us.long
     */
    Long: newAttribute("orderdate.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Order Date)
     * Display Form ID: orderdate.date.day.uk.dd_mm_yyyy
     */
    DdMmYyyy: newAttribute("orderdate.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Order Date)
     * Display Form ID: orderdate.date.day.eu.dd_mm_yyyy
     */
    DdMmYyyy_1: newAttribute("orderdate.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: Year (Return Date)
 * Attribute ID: returndate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateYear = newAttribute("returndate.year.default");
/**
 * Attribute Title: Quarter (Return Date)
 * Attribute ID: returndate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateQuarter = newAttribute("returndate.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Return Date)
 * Attribute ID: returndate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Return Date)
     * Display Form ID: returndate.week.wk_year
     */
    WeekNrYear: newAttribute("returndate.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Return Date)
     * Display Form ID: returndate.week.starting
     */
    WeekStarting: newAttribute("returndate.week.starting"),
    /**
     * Display Form Title: From - To (Return Date)
     * Display Form ID: returndate.week.from_to
     */
    FromTo: newAttribute("returndate.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Return Date)
     * Display Form ID: returndate.week.wk_year_cont
     */
    WeekNrYear_1: newAttribute("returndate.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Return Date)
     * Display Form ID: returndate.week.wk_qtr_year_cont
     */
    WkQtrYear: newAttribute("returndate.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Return Date)
     * Display Form ID: returndate.week.wk_qtr_year
     */
    WkQtrYear_1: newAttribute("returndate.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Return Date)
 * Attribute ID: returndate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekSunSat = newAttribute("returndate.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Return Date)
 * Attribute ID: returndate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekSunSatOfQtr = newAttribute("returndate.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Return Date)
 * Attribute ID: returndate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Return Date)
     * Display Form ID: returndate.euweek.wk_year
     */
    WeekNrYear: newAttribute("returndate.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Return Date)
     * Display Form ID: returndate.euweek.starting
     */
    WeekStarting: newAttribute("returndate.euweek.starting"),
    /**
     * Display Form Title: From - To (Return Date)
     * Display Form ID: returndate.euweek.from_to
     */
    FromTo: newAttribute("returndate.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Return Date)
 * Attribute ID: returndate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekMonSun = newAttribute("returndate.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Return Date)
 * Attribute ID: returndate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekMonSunOfQtr = newAttribute("returndate.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Return Date)
 * Attribute ID: returndate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Return Date)
     * Display Form ID: returndate.month.in.year.short
     */
    Short: newAttribute("returndate.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Return Date)
     * Display Form ID: returndate.month.in.year.long
     */
    Long: newAttribute("returndate.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Return Date)
     * Display Form ID: returndate.month.in.year.number
     */
    Number: newAttribute("returndate.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Return Date)
     * Display Form ID: returndate.month.in.year.m_q
     */
    MQ: newAttribute("returndate.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Return Date)
 * Attribute ID: returndate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMonthOfQuarter = newAttribute("returndate.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Return Date)
 * Attribute ID: returndate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfYear = newAttribute("returndate.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Return Date)
 * Attribute ID: returndate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Return Date)
     * Display Form ID: returndate.day.in.week.short
     */
    Short: newAttribute("returndate.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Return Date)
     * Display Form ID: returndate.day.in.week.long
     */
    Long: newAttribute("returndate.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Return Date)
     * Display Form ID: returndate.day.in.week.number
     */
    Number: newAttribute("returndate.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Return Date)
 * Attribute ID: returndate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Return Date)
     * Display Form ID: returndate.day.in.euweek.short
     */
    Short: newAttribute("returndate.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Return Date)
     * Display Form ID: returndate.day.in.euweek.long
     */
    Long: newAttribute("returndate.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Return Date)
     * Display Form ID: returndate.day.in.euweek.number
     */
    Number: newAttribute("returndate.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Return Date)
 * Attribute ID: returndate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfQuarter = newAttribute("returndate.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Return Date)
 * Attribute ID: returndate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfMonth = newAttribute("returndate.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Return Date)
 * Attribute ID: returndate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateQuarterYear = newAttribute("returndate.quarter.short_us");
/**
 * Attribute Title: Month/Year (Return Date)
 * Attribute ID: returndate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Return Date)
     * Display Form ID: returndate.month.short
     */
    Short: newAttribute("returndate.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Return Date)
     * Display Form ID: returndate.month.long
     */
    Long: newAttribute("returndate.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Return Date)
     * Display Form ID: returndate.month.number
     */
    Number: newAttribute("returndate.month.number"),
};
/**
 * Attribute Title: Date (Return Date)
 * Attribute ID: returndate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Return Date)
     * Display Form ID: returndate.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("returndate.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Return Date)
     * Display Form ID: returndate.date.day.yyyy_mm_dd
     */
    YyyyMmDd: newAttribute("returndate.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Return Date)
     * Display Form ID: returndate.date.day.us.m_d_yy
     */
    MDYy: newAttribute("returndate.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Return Date)
     * Display Form ID: returndate.date.day.us.long
     */
    Long: newAttribute("returndate.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Return Date)
     * Display Form ID: returndate.date.day.uk.dd_mm_yyyy
     */
    DdMmYyyy: newAttribute("returndate.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Return Date)
     * Display Form ID: returndate.date.day.eu.dd_mm_yyyy
     */
    DdMmYyyy_1: newAttribute("returndate.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: Year (Product Added Date)
 * Attribute ID: productaddeddate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateYear = newAttribute("productaddeddate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Product Added Date)
 * Attribute ID: productaddeddate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateQuarter = newAttribute("productaddeddate.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Product Added Date)
 * Attribute ID: productaddeddate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
     * Display Form ID: productaddeddate.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("productaddeddate.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Product Added Date)
     * Display Form ID: productaddeddate.aaw81lMifn6q
     */
    WeekStarting: newAttribute("productaddeddate.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Product Added Date)
     * Display Form ID: productaddeddate.aau81lMifn6q
     */
    FromTo: newAttribute("productaddeddate.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Product Added Date)
     * Display Form ID: productaddeddate.aay81lMifn6q
     */
    WeekNrYear_1: newAttribute("productaddeddate.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Product Added Date)
     * Display Form ID: productaddeddate.aaC81lMifn6q
     */
    WkQtrYear: newAttribute("productaddeddate.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Product Added Date)
     * Display Form ID: productaddeddate.aas81lMifn6q
     */
    WkQtrYear_1: newAttribute("productaddeddate.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Product Added Date)
 * Attribute ID: productaddeddate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekSunSat = newAttribute("productaddeddate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Product Added Date)
 * Attribute ID: productaddeddate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekSunSatOfQtr = newAttribute("productaddeddate.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Product Added Date)
 * Attribute ID: productaddeddate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
     * Display Form ID: productaddeddate.aa281lMifn6q
     */
    WeekNrYear: newAttribute("productaddeddate.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Product Added Date)
     * Display Form ID: productaddeddate.aaY81lMifn6q
     */
    WeekStarting: newAttribute("productaddeddate.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Product Added Date)
     * Display Form ID: productaddeddate.aaW81lMifn6q
     */
    FromTo: newAttribute("productaddeddate.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Product Added Date)
 * Attribute ID: productaddeddate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekMonSun = newAttribute("productaddeddate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Product Added Date)
 * Attribute ID: productaddeddate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateWeekMonSunOfQtr = newAttribute("productaddeddate.abg81lMifn6q");
/**
 * Attribute Title: Month (Product Added Date)
 * Attribute ID: productaddeddate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Product Added Date)
     * Display Form ID: productaddeddate.abm81lMifn6q
     */
    Short: newAttribute("productaddeddate.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Product Added Date)
     * Display Form ID: productaddeddate.abs81lMifn6q
     */
    Long: newAttribute("productaddeddate.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Product Added Date)
     * Display Form ID: productaddeddate.abq81lMifn6q
     */
    Number: newAttribute("productaddeddate.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Product Added Date)
     * Display Form ID: productaddeddate.abo81lMifn6q
     */
    MQ: newAttribute("productaddeddate.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Product Added Date)
 * Attribute ID: productaddeddate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateMonthOfQuarter = newAttribute("productaddeddate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Product Added Date)
 * Attribute ID: productaddeddate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDayOfYear = newAttribute("productaddeddate.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Product Added Date)
 * Attribute ID: productaddeddate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Product Added Date)
     * Display Form ID: productaddeddate.abK81lMifn6q
     */
    Short: newAttribute("productaddeddate.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Product Added Date)
     * Display Form ID: productaddeddate.abO81lMifn6q
     */
    Long: newAttribute("productaddeddate.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Product Added Date)
     * Display Form ID: productaddeddate.abM81lMifn6q
     */
    Number: newAttribute("productaddeddate.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Product Added Date)
 * Attribute ID: productaddeddate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Product Added Date)
     * Display Form ID: productaddeddate.abU81lMifn6q
     */
    Short: newAttribute("productaddeddate.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Product Added Date)
     * Display Form ID: productaddeddate.abY81lMifn6q
     */
    Long: newAttribute("productaddeddate.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Product Added Date)
     * Display Form ID: productaddeddate.abW81lMifn6q
     */
    Number: newAttribute("productaddeddate.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Product Added Date)
 * Attribute ID: productaddeddate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDayOfQuarter = newAttribute("productaddeddate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Product Added Date)
 * Attribute ID: productaddeddate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDayOfMonth = newAttribute("productaddeddate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Product Added Date)
 * Attribute ID: productaddeddate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateQuarterYear = newAttribute("productaddeddate.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Product Added Date)
 * Attribute ID: productaddeddate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Product Added Date)
     * Display Form ID: productaddeddate.act81lMifn6q
     */
    Short: newAttribute("productaddeddate.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Product Added Date)
     * Display Form ID: productaddeddate.acx81lMifn6q
     */
    Long: newAttribute("productaddeddate.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Product Added Date)
     * Display Form ID: productaddeddate.acv81lMifn6q
     */
    Number: newAttribute("productaddeddate.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Product Added Date)
 * Attribute ID: productaddeddate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ProductAddedDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Product Added Date)
     * Display Form ID: productaddeddate.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("productaddeddate.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Product Added Date)
     * Display Form ID: productaddeddate.date.yyyymmdd
     */
    YyyyMmDd: newAttribute("productaddeddate.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Product Added Date)
     * Display Form ID: productaddeddate.date.mdyy
     */
    MDYy: newAttribute("productaddeddate.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Product Added Date)
     * Display Form ID: productaddeddate.date.long
     */
    Long: newAttribute("productaddeddate.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Product Added Date)
     * Display Form ID: productaddeddate.date.ddmmyyyy
     */
    DdMmYyyy: newAttribute("productaddeddate.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Product Added Date)
     * Display Form ID: productaddeddate.date.eddmmyyyy
     */
    DdMmYyyy_1: newAttribute("productaddeddate.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (User Created Date)
 * Attribute ID: usercreateddate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateYear = newAttribute("usercreateddate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (User Created Date)
 * Attribute ID: usercreateddate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateQuarter = newAttribute("usercreateddate.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (User Created Date)
 * Attribute ID: usercreateddate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (User Created Date)
     * Display Form ID: usercreateddate.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("usercreateddate.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (User Created Date)
     * Display Form ID: usercreateddate.aaw81lMifn6q
     */
    WeekStarting: newAttribute("usercreateddate.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (User Created Date)
     * Display Form ID: usercreateddate.aau81lMifn6q
     */
    FromTo: newAttribute("usercreateddate.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (User Created Date)
     * Display Form ID: usercreateddate.aay81lMifn6q
     */
    WeekNrYear_1: newAttribute("usercreateddate.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (User Created Date)
     * Display Form ID: usercreateddate.aaC81lMifn6q
     */
    WkQtrYear: newAttribute("usercreateddate.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (User Created Date)
     * Display Form ID: usercreateddate.aas81lMifn6q
     */
    WkQtrYear_1: newAttribute("usercreateddate.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (User Created Date)
 * Attribute ID: usercreateddate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekSunSat = newAttribute("usercreateddate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (User Created Date)
 * Attribute ID: usercreateddate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekSunSatOfQtr = newAttribute("usercreateddate.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (User Created Date)
 * Attribute ID: usercreateddate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (User Created Date)
     * Display Form ID: usercreateddate.aa281lMifn6q
     */
    WeekNrYear: newAttribute("usercreateddate.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (User Created Date)
     * Display Form ID: usercreateddate.aaY81lMifn6q
     */
    WeekStarting: newAttribute("usercreateddate.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (User Created Date)
     * Display Form ID: usercreateddate.aaW81lMifn6q
     */
    FromTo: newAttribute("usercreateddate.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (User Created Date)
 * Attribute ID: usercreateddate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekMonSun = newAttribute("usercreateddate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (User Created Date)
 * Attribute ID: usercreateddate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateWeekMonSunOfQtr = newAttribute("usercreateddate.abg81lMifn6q");
/**
 * Attribute Title: Month (User Created Date)
 * Attribute ID: usercreateddate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateMonth = {
    /**
     * Display Form Title: Short (Jan) (User Created Date)
     * Display Form ID: usercreateddate.abm81lMifn6q
     */
    Short: newAttribute("usercreateddate.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (User Created Date)
     * Display Form ID: usercreateddate.abs81lMifn6q
     */
    Long: newAttribute("usercreateddate.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (User Created Date)
     * Display Form ID: usercreateddate.abq81lMifn6q
     */
    Number: newAttribute("usercreateddate.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (User Created Date)
     * Display Form ID: usercreateddate.abo81lMifn6q
     */
    MQ: newAttribute("usercreateddate.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (User Created Date)
 * Attribute ID: usercreateddate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateMonthOfQuarter = newAttribute("usercreateddate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (User Created Date)
 * Attribute ID: usercreateddate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDayOfYear = newAttribute("usercreateddate.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (User Created Date)
 * Attribute ID: usercreateddate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (User Created Date)
     * Display Form ID: usercreateddate.abK81lMifn6q
     */
    Short: newAttribute("usercreateddate.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (User Created Date)
     * Display Form ID: usercreateddate.abO81lMifn6q
     */
    Long: newAttribute("usercreateddate.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (User Created Date)
     * Display Form ID: usercreateddate.abM81lMifn6q
     */
    Number: newAttribute("usercreateddate.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (User Created Date)
 * Attribute ID: usercreateddate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (User Created Date)
     * Display Form ID: usercreateddate.abU81lMifn6q
     */
    Short: newAttribute("usercreateddate.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (User Created Date)
     * Display Form ID: usercreateddate.abY81lMifn6q
     */
    Long: newAttribute("usercreateddate.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (User Created Date)
     * Display Form ID: usercreateddate.abW81lMifn6q
     */
    Number: newAttribute("usercreateddate.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (User Created Date)
 * Attribute ID: usercreateddate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDayOfQuarter = newAttribute("usercreateddate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (User Created Date)
 * Attribute ID: usercreateddate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDayOfMonth = newAttribute("usercreateddate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (User Created Date)
 * Attribute ID: usercreateddate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateQuarterYear = newAttribute("usercreateddate.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (User Created Date)
 * Attribute ID: usercreateddate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (User Created Date)
     * Display Form ID: usercreateddate.act81lMifn6q
     */
    Short: newAttribute("usercreateddate.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (User Created Date)
     * Display Form ID: usercreateddate.acx81lMifn6q
     */
    Long: newAttribute("usercreateddate.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (User Created Date)
     * Display Form ID: usercreateddate.acv81lMifn6q
     */
    Number: newAttribute("usercreateddate.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (User Created Date)
 * Attribute ID: usercreateddate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const UserCreatedDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (User Created Date)
     * Display Form ID: usercreateddate.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("usercreateddate.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (User Created Date)
     * Display Form ID: usercreateddate.date.yyyymmdd
     */
    YyyyMmDd: newAttribute("usercreateddate.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (User Created Date)
     * Display Form ID: usercreateddate.date.mdyy
     */
    MDYy: newAttribute("usercreateddate.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (User Created Date)
     * Display Form ID: usercreateddate.date.long
     */
    Long: newAttribute("usercreateddate.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (User Created Date)
     * Display Form ID: usercreateddate.date.ddmmyyyy
     */
    DdMmYyyy: newAttribute("usercreateddate.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (User Created Date)
     * Display Form ID: usercreateddate.date.eddmmyyyy
     */
    DdMmYyyy_1: newAttribute("usercreateddate.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Inventory Month)
 * Attribute ID: inventorymonth.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthYear = newAttribute("inventorymonth.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Inventory Month)
 * Attribute ID: inventorymonth.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthQuarter = newAttribute("inventorymonth.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Inventory Month)
 * Attribute ID: inventorymonth.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
     * Display Form ID: inventorymonth.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("inventorymonth.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Inventory Month)
     * Display Form ID: inventorymonth.aaw81lMifn6q
     */
    WeekStarting: newAttribute("inventorymonth.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Inventory Month)
     * Display Form ID: inventorymonth.aau81lMifn6q
     */
    FromTo: newAttribute("inventorymonth.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Inventory Month)
     * Display Form ID: inventorymonth.aay81lMifn6q
     */
    WeekNrYear_1: newAttribute("inventorymonth.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Inventory Month)
     * Display Form ID: inventorymonth.aaC81lMifn6q
     */
    WkQtrYear: newAttribute("inventorymonth.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Inventory Month)
     * Display Form ID: inventorymonth.aas81lMifn6q
     */
    WkQtrYear_1: newAttribute("inventorymonth.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Inventory Month)
 * Attribute ID: inventorymonth.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekSunSat = newAttribute("inventorymonth.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Inventory Month)
 * Attribute ID: inventorymonth.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekSunSatOfQtr = newAttribute("inventorymonth.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Inventory Month)
 * Attribute ID: inventorymonth.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
     * Display Form ID: inventorymonth.aa281lMifn6q
     */
    WeekNrYear: newAttribute("inventorymonth.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Inventory Month)
     * Display Form ID: inventorymonth.aaY81lMifn6q
     */
    WeekStarting: newAttribute("inventorymonth.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Inventory Month)
     * Display Form ID: inventorymonth.aaW81lMifn6q
     */
    FromTo: newAttribute("inventorymonth.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Inventory Month)
 * Attribute ID: inventorymonth.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekMonSun = newAttribute("inventorymonth.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Inventory Month)
 * Attribute ID: inventorymonth.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekMonSunOfQtr = newAttribute("inventorymonth.abg81lMifn6q");
/**
 * Attribute Title: Month (Inventory Month)
 * Attribute ID: inventorymonth.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMonth = {
    /**
     * Display Form Title: Short (Jan) (Inventory Month)
     * Display Form ID: inventorymonth.abm81lMifn6q
     */
    Short: newAttribute("inventorymonth.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Inventory Month)
     * Display Form ID: inventorymonth.abs81lMifn6q
     */
    Long: newAttribute("inventorymonth.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Inventory Month)
     * Display Form ID: inventorymonth.abq81lMifn6q
     */
    Number: newAttribute("inventorymonth.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Inventory Month)
     * Display Form ID: inventorymonth.abo81lMifn6q
     */
    MQ: newAttribute("inventorymonth.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Inventory Month)
 * Attribute ID: inventorymonth.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMonthOfQuarter = newAttribute("inventorymonth.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Inventory Month)
 * Attribute ID: inventorymonth.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfYear = newAttribute("inventorymonth.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Inventory Month)
 * Attribute ID: inventorymonth.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Inventory Month)
     * Display Form ID: inventorymonth.abK81lMifn6q
     */
    Short: newAttribute("inventorymonth.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Inventory Month)
     * Display Form ID: inventorymonth.abO81lMifn6q
     */
    Long: newAttribute("inventorymonth.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Inventory Month)
     * Display Form ID: inventorymonth.abM81lMifn6q
     */
    Number: newAttribute("inventorymonth.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Inventory Month)
 * Attribute ID: inventorymonth.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Inventory Month)
     * Display Form ID: inventorymonth.abU81lMifn6q
     */
    Short: newAttribute("inventorymonth.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Inventory Month)
     * Display Form ID: inventorymonth.abY81lMifn6q
     */
    Long: newAttribute("inventorymonth.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Inventory Month)
     * Display Form ID: inventorymonth.abW81lMifn6q
     */
    Number: newAttribute("inventorymonth.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Inventory Month)
 * Attribute ID: inventorymonth.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfQuarter = newAttribute("inventorymonth.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Inventory Month)
 * Attribute ID: inventorymonth.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfMonth = newAttribute("inventorymonth.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Inventory Month)
 * Attribute ID: inventorymonth.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthQuarterYear = newAttribute("inventorymonth.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Inventory Month)
 * Attribute ID: inventorymonth.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Inventory Month)
     * Display Form ID: inventorymonth.act81lMifn6q
     */
    Short: newAttribute("inventorymonth.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Inventory Month)
     * Display Form ID: inventorymonth.acx81lMifn6q
     */
    Long: newAttribute("inventorymonth.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Inventory Month)
     * Display Form ID: inventorymonth.acv81lMifn6q
     */
    Number: newAttribute("inventorymonth.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Inventory Month)
 * Attribute ID: inventorymonth.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Inventory Month)
     * Display Form ID: inventorymonth.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("inventorymonth.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Inventory Month)
     * Display Form ID: inventorymonth.date.yyyymmdd
     */
    YyyyMmDd: newAttribute("inventorymonth.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Inventory Month)
     * Display Form ID: inventorymonth.date.mdyy
     */
    MDYy: newAttribute("inventorymonth.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Inventory Month)
     * Display Form ID: inventorymonth.date.long
     */
    Long: newAttribute("inventorymonth.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Inventory Month)
     * Display Form ID: inventorymonth.date.ddmmyyyy
     */
    DdMmYyyy: newAttribute("inventorymonth.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Inventory Month)
     * Display Form ID: inventorymonth.date.eddmmyyyy
     */
    DdMmYyyy_1: newAttribute("inventorymonth.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateYear = newAttribute("date.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarter = newAttribute("date.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.aaw81lMifn6q
     */
    WeekStarting: newAttribute("date.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.aau81lMifn6q
     */
    FromTo: newAttribute("date.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date)
     * Display Form ID: date.aay81lMifn6q
     */
    WeekNrYear_1: newAttribute("date.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
     * Display Form ID: date.aaC81lMifn6q
     */
    WkQtrYear: newAttribute("date.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date)
     * Display Form ID: date.aas81lMifn6q
     */
    WkQtrYear_1: newAttribute("date.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSat = newAttribute("date.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekSunSatOfQtr = newAttribute("date.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.aaY81lMifn6q
     */
    WeekStarting: newAttribute("date.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.aaW81lMifn6q
     */
    FromTo: newAttribute("date.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSun = newAttribute("date.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateWeekMonSunOfQtr = newAttribute("date.abg81lMifn6q");
/**
 * Attribute Title: Month (Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonth = {
    /**
     * Display Form Title: Short (Jan) (Date)
     * Display Form ID: date.abm81lMifn6q
     */
    Short: newAttribute("date.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date)
     * Display Form ID: date.abs81lMifn6q
     */
    Long: newAttribute("date.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date)
     * Display Form ID: date.abq81lMifn6q
     */
    Number: newAttribute("date.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date)
     * Display Form ID: date.abo81lMifn6q
     */
    MQ: newAttribute("date.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthOfQuarter = newAttribute("date.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfYear = newAttribute("date.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date)
     * Display Form ID: date.abK81lMifn6q
     */
    Short: newAttribute("date.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date)
     * Display Form ID: date.abO81lMifn6q
     */
    Long: newAttribute("date.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date)
     * Display Form ID: date.abM81lMifn6q
     */
    Number: newAttribute("date.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date)
     * Display Form ID: date.abU81lMifn6q
     */
    Short: newAttribute("date.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date)
     * Display Form ID: date.abY81lMifn6q
     */
    Long: newAttribute("date.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date)
     * Display Form ID: date.abW81lMifn6q
     */
    Number: newAttribute("date.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfQuarter = newAttribute("date.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDayOfMonth = newAttribute("date.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateQuarterYear = newAttribute("date.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date)
     * Display Form ID: date.act81lMifn6q
     */
    Short: newAttribute("date.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date)
     * Display Form ID: date.acx81lMifn6q
     */
    Long: newAttribute("date.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date)
     * Display Form ID: date.acv81lMifn6q
     */
    Number: newAttribute("date.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date)
     * Display Form ID: date.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date)
     * Display Form ID: date.date.yyyymmdd
     */
    YyyyMmDd: newAttribute("date.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date)
     * Display Form ID: date.date.mdyy
     */
    MDYy: newAttribute("date.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
     * Display Form ID: date.date.long
     */
    Long: newAttribute("date.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date)
     * Display Form ID: date.date.ddmmyyyy
     */
    DdMmYyyy: newAttribute("date.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date)
     * Display Form ID: date.date.eddmmyyyy
     */
    DdMmYyyy_1: newAttribute("date.date.eddmmyyyy"),
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
             * Display Form ID: orderdate.year.default
             */
            Default: newAttribute("orderdate.year.default"),
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
             * Display Form ID: orderdate.quarter.in.year.default
             */
            Default: newAttribute("orderdate.quarter.in.year.default"),
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
             * Display Form ID: orderdate.week.wk_year
             */
            WeekNrYear: newAttribute("orderdate.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: orderdate.week.starting
             */
            WeekStarting: newAttribute("orderdate.week.starting"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: orderdate.week.from_to
             */
            FromTo: newAttribute("orderdate.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Order Date)
             * Display Form ID: orderdate.week.wk_year_cont
             */
            WeekNrYear_1: newAttribute("orderdate.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Order Date)
             * Display Form ID: orderdate.week.wk_qtr_year_cont
             */
            WkQtrYear: newAttribute("orderdate.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Order Date)
             * Display Form ID: orderdate.week.wk_qtr_year
             */
            WkQtrYear_1: newAttribute("orderdate.week.wk_qtr_year"),
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
             * Display Form ID: orderdate.week.in.year.number_us
             */
            NumberUS: newAttribute("orderdate.week.in.year.number_us"),
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
             * Display Form ID: orderdate.week.in.quarter.number_us
             */
            NumberUS: newAttribute("orderdate.week.in.quarter.number_us"),
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
             * Display Form ID: orderdate.euweek.wk_year
             */
            WeekNrYear: newAttribute("orderdate.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Order Date)
             * Display Form ID: orderdate.euweek.starting
             */
            WeekStarting: newAttribute("orderdate.euweek.starting"),
            /**
             * Display Form Title: From - To (Order Date)
             * Display Form ID: orderdate.euweek.from_to
             */
            FromTo: newAttribute("orderdate.euweek.from_to"),
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
             * Display Form ID: orderdate.euweek.in.year.number_eu
             */
            NumberEU: newAttribute("orderdate.euweek.in.year.number_eu"),
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
             * Display Form ID: orderdate.euweek.in.quarter.number_eu
             */
            NumberEU: newAttribute("orderdate.euweek.in.quarter.number_eu"),
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
             * Display Form ID: orderdate.month.in.year.short
             */
            Short: newAttribute("orderdate.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Order Date)
             * Display Form ID: orderdate.month.in.year.long
             */
            Long: newAttribute("orderdate.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Order Date)
             * Display Form ID: orderdate.month.in.year.number
             */
            Number: newAttribute("orderdate.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Order Date)
             * Display Form ID: orderdate.month.in.year.m_q
             */
            MQ: newAttribute("orderdate.month.in.year.m_q"),
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
             * Display Form ID: orderdate.month.in.quarter.number
             */
            Number: newAttribute("orderdate.month.in.quarter.number"),
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
             * Display Form ID: orderdate.day.in.year.default
             */
            Default: newAttribute("orderdate.day.in.year.default"),
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
             * Display Form ID: orderdate.day.in.week.short
             */
            Short: newAttribute("orderdate.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Order Date)
             * Display Form ID: orderdate.day.in.week.long
             */
            Long: newAttribute("orderdate.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Order Date)
             * Display Form ID: orderdate.day.in.week.number
             */
            Number: newAttribute("orderdate.day.in.week.number"),
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
             * Display Form ID: orderdate.day.in.euweek.short
             */
            Short: newAttribute("orderdate.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Order Date)
             * Display Form ID: orderdate.day.in.euweek.long
             */
            Long: newAttribute("orderdate.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Order Date)
             * Display Form ID: orderdate.day.in.euweek.number
             */
            Number: newAttribute("orderdate.day.in.euweek.number"),
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
             * Display Form ID: orderdate.day.in.quarter.default
             */
            Default: newAttribute("orderdate.day.in.quarter.default"),
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
             * Display Form ID: orderdate.day.in.month.default
             */
            Default: newAttribute("orderdate.day.in.month.default"),
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
             * Display Form ID: orderdate.quarter.short_us
             */
            USShort: newAttribute("orderdate.quarter.short_us"),
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
             * Display Form ID: orderdate.month.short
             */
            Short: newAttribute("orderdate.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Order Date)
             * Display Form ID: orderdate.month.long
             */
            Long: newAttribute("orderdate.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Order Date)
             * Display Form ID: orderdate.month.number
             */
            Number: newAttribute("orderdate.month.number"),
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
             * Display Form ID: orderdate.date.day.us.mm_dd_yyyy
             */
            MmDdYyyy: newAttribute("orderdate.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Order Date)
             * Display Form ID: orderdate.date.day.yyyy_mm_dd
             */
            YyyyMmDd: newAttribute("orderdate.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Order Date)
             * Display Form ID: orderdate.date.day.us.m_d_yy
             */
            MDYy: newAttribute("orderdate.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Order Date)
             * Display Form ID: orderdate.date.day.us.long
             */
            Long: newAttribute("orderdate.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Order Date)
             * Display Form ID: orderdate.date.day.uk.dd_mm_yyyy
             */
            DdMmYyyy: newAttribute("orderdate.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Order Date)
             * Display Form ID: orderdate.date.day.eu.dd_mm_yyyy
             */
            DdMmYyyy_1: newAttribute("orderdate.date.day.eu.dd_mm_yyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Return Date)
     * Date Data Set ID: returndate.dataset.dt
     */
    ReturnDate: {
        ref: idRef("returndate.dataset.dt", "dataSet"),
        identifier: "returndate.dataset.dt",
        /**
         * Date Attribute: Year (Return Date)
         * Date Attribute ID: returndate.year
         */
        Year: {
            ref: idRef("returndate.year", "attribute"),
            identifier: "returndate.year",
            /**
             * Display Form Title: Year (Return Date)
             * Display Form ID: returndate.year.default
             */
            Default: newAttribute("returndate.year.default"),
        },
        /**
         * Date Attribute: Quarter (Return Date)
         * Date Attribute ID: returndate.quarter.in.year
         */
        Quarter: {
            ref: idRef("returndate.quarter.in.year", "attribute"),
            identifier: "returndate.quarter.in.year",
            /**
             * Display Form Title: default (Return Date)
             * Display Form ID: returndate.quarter.in.year.default
             */
            Default: newAttribute("returndate.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Return Date)
         * Date Attribute ID: returndate.week
         */
        WeekSunSatYear: {
            ref: idRef("returndate.week", "attribute"),
            identifier: "returndate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Return Date)
             * Display Form ID: returndate.week.wk_year
             */
            WeekNrYear: newAttribute("returndate.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Return Date)
             * Display Form ID: returndate.week.starting
             */
            WeekStarting: newAttribute("returndate.week.starting"),
            /**
             * Display Form Title: From - To (Return Date)
             * Display Form ID: returndate.week.from_to
             */
            FromTo: newAttribute("returndate.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Return Date)
             * Display Form ID: returndate.week.wk_year_cont
             */
            WeekNrYear_1: newAttribute("returndate.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Return Date)
             * Display Form ID: returndate.week.wk_qtr_year_cont
             */
            WkQtrYear: newAttribute("returndate.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Return Date)
             * Display Form ID: returndate.week.wk_qtr_year
             */
            WkQtrYear_1: newAttribute("returndate.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Return Date)
         * Date Attribute ID: returndate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("returndate.week.in.year", "attribute"),
            identifier: "returndate.week.in.year",
            /**
             * Display Form Title: Number US (Return Date)
             * Display Form ID: returndate.week.in.year.number_us
             */
            NumberUS: newAttribute("returndate.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Return Date)
         * Date Attribute ID: returndate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("returndate.week.in.quarter", "attribute"),
            identifier: "returndate.week.in.quarter",
            /**
             * Display Form Title: Number US (Return Date)
             * Display Form ID: returndate.week.in.quarter.number_us
             */
            NumberUS: newAttribute("returndate.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Return Date)
         * Date Attribute ID: returndate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("returndate.euweek", "attribute"),
            identifier: "returndate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Return Date)
             * Display Form ID: returndate.euweek.wk_year
             */
            WeekNrYear: newAttribute("returndate.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Return Date)
             * Display Form ID: returndate.euweek.starting
             */
            WeekStarting: newAttribute("returndate.euweek.starting"),
            /**
             * Display Form Title: From - To (Return Date)
             * Display Form ID: returndate.euweek.from_to
             */
            FromTo: newAttribute("returndate.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Return Date)
         * Date Attribute ID: returndate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("returndate.euweek.in.year", "attribute"),
            identifier: "returndate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Return Date)
             * Display Form ID: returndate.euweek.in.year.number_eu
             */
            NumberEU: newAttribute("returndate.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Return Date)
         * Date Attribute ID: returndate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("returndate.euweek.in.quarter", "attribute"),
            identifier: "returndate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Return Date)
             * Display Form ID: returndate.euweek.in.quarter.number_eu
             */
            NumberEU: newAttribute("returndate.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Return Date)
         * Date Attribute ID: returndate.month.in.year
         */
        Month: {
            ref: idRef("returndate.month.in.year", "attribute"),
            identifier: "returndate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Return Date)
             * Display Form ID: returndate.month.in.year.short
             */
            Short: newAttribute("returndate.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Return Date)
             * Display Form ID: returndate.month.in.year.long
             */
            Long: newAttribute("returndate.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Return Date)
             * Display Form ID: returndate.month.in.year.number
             */
            Number: newAttribute("returndate.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Return Date)
             * Display Form ID: returndate.month.in.year.m_q
             */
            MQ: newAttribute("returndate.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Return Date)
         * Date Attribute ID: returndate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("returndate.month.in.quarter", "attribute"),
            identifier: "returndate.month.in.quarter",
            /**
             * Display Form Title: Number (Return Date)
             * Display Form ID: returndate.month.in.quarter.number
             */
            Number: newAttribute("returndate.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Return Date)
         * Date Attribute ID: returndate.day.in.year
         */
        DayOfYear: {
            ref: idRef("returndate.day.in.year", "attribute"),
            identifier: "returndate.day.in.year",
            /**
             * Display Form Title: default (Return Date)
             * Display Form ID: returndate.day.in.year.default
             */
            Default: newAttribute("returndate.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Return Date)
         * Date Attribute ID: returndate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("returndate.day.in.week", "attribute"),
            identifier: "returndate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Return Date)
             * Display Form ID: returndate.day.in.week.short
             */
            Short: newAttribute("returndate.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Return Date)
             * Display Form ID: returndate.day.in.week.long
             */
            Long: newAttribute("returndate.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Return Date)
             * Display Form ID: returndate.day.in.week.number
             */
            Number: newAttribute("returndate.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Return Date)
         * Date Attribute ID: returndate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("returndate.day.in.euweek", "attribute"),
            identifier: "returndate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Return Date)
             * Display Form ID: returndate.day.in.euweek.short
             */
            Short: newAttribute("returndate.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Return Date)
             * Display Form ID: returndate.day.in.euweek.long
             */
            Long: newAttribute("returndate.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Return Date)
             * Display Form ID: returndate.day.in.euweek.number
             */
            Number: newAttribute("returndate.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Return Date)
         * Date Attribute ID: returndate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("returndate.day.in.quarter", "attribute"),
            identifier: "returndate.day.in.quarter",
            /**
             * Display Form Title: default (Return Date)
             * Display Form ID: returndate.day.in.quarter.default
             */
            Default: newAttribute("returndate.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Return Date)
         * Date Attribute ID: returndate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("returndate.day.in.month", "attribute"),
            identifier: "returndate.day.in.month",
            /**
             * Display Form Title: default (Return Date)
             * Display Form ID: returndate.day.in.month.default
             */
            Default: newAttribute("returndate.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Return Date)
         * Date Attribute ID: returndate.quarter
         */
        QuarterYear: {
            ref: idRef("returndate.quarter", "attribute"),
            identifier: "returndate.quarter",
            /**
             * Display Form Title: US Short (Return Date)
             * Display Form ID: returndate.quarter.short_us
             */
            USShort: newAttribute("returndate.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Return Date)
         * Date Attribute ID: returndate.month
         */
        MonthYear: {
            ref: idRef("returndate.month", "attribute"),
            identifier: "returndate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Return Date)
             * Display Form ID: returndate.month.short
             */
            Short: newAttribute("returndate.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Return Date)
             * Display Form ID: returndate.month.long
             */
            Long: newAttribute("returndate.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Return Date)
             * Display Form ID: returndate.month.number
             */
            Number: newAttribute("returndate.month.number"),
        },
        /**
         * Date Attribute: Date (Return Date)
         * Date Attribute ID: returndate.date
         */
        Date: {
            ref: idRef("returndate.date", "attribute"),
            identifier: "returndate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Return Date)
             * Display Form ID: returndate.date.day.us.mm_dd_yyyy
             */
            MmDdYyyy: newAttribute("returndate.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Return Date)
             * Display Form ID: returndate.date.day.yyyy_mm_dd
             */
            YyyyMmDd: newAttribute("returndate.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Return Date)
             * Display Form ID: returndate.date.day.us.m_d_yy
             */
            MDYy: newAttribute("returndate.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Return Date)
             * Display Form ID: returndate.date.day.us.long
             */
            Long: newAttribute("returndate.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Return Date)
             * Display Form ID: returndate.date.day.uk.dd_mm_yyyy
             */
            DdMmYyyy: newAttribute("returndate.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Return Date)
             * Display Form ID: returndate.date.day.eu.dd_mm_yyyy
             */
            DdMmYyyy_1: newAttribute("returndate.date.day.eu.dd_mm_yyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Product Added Date)
     * Date Data Set ID: productaddeddate.dataset.dt
     */
    ProductAddedDate: {
        ref: idRef("productaddeddate.dataset.dt", "dataSet"),
        identifier: "productaddeddate.dataset.dt",
        /**
         * Date Attribute: Year (Product Added Date)
         * Date Attribute ID: productaddeddate.year
         */
        Year: {
            ref: idRef("productaddeddate.year", "attribute"),
            identifier: "productaddeddate.year",
            /**
             * Display Form Title: Year (Product Added Date)
             * Display Form ID: productaddeddate.aag81lMifn6q
             */
            Default: newAttribute("productaddeddate.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Product Added Date)
         * Date Attribute ID: productaddeddate.quarter.in.year
         */
        Quarter: {
            ref: idRef("productaddeddate.quarter.in.year", "attribute"),
            identifier: "productaddeddate.quarter.in.year",
            /**
             * Display Form Title: default (Product Added Date)
             * Display Form ID: productaddeddate.aam81lMifn6q
             */
            Default: newAttribute("productaddeddate.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Product Added Date)
         * Date Attribute ID: productaddeddate.week
         */
        WeekSunSatYear: {
            ref: idRef("productaddeddate.week", "attribute"),
            identifier: "productaddeddate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
             * Display Form ID: productaddeddate.aaA81lMifn6q
             */
            WeekNrYear: newAttribute("productaddeddate.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Product Added Date)
             * Display Form ID: productaddeddate.aaw81lMifn6q
             */
            WeekStarting: newAttribute("productaddeddate.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Product Added Date)
             * Display Form ID: productaddeddate.aau81lMifn6q
             */
            FromTo: newAttribute("productaddeddate.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Product Added Date)
             * Display Form ID: productaddeddate.aay81lMifn6q
             */
            WeekNrYear_1: newAttribute("productaddeddate.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Product Added Date)
             * Display Form ID: productaddeddate.aaC81lMifn6q
             */
            WkQtrYear: newAttribute("productaddeddate.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Product Added Date)
             * Display Form ID: productaddeddate.aas81lMifn6q
             */
            WkQtrYear_1: newAttribute("productaddeddate.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Product Added Date)
         * Date Attribute ID: productaddeddate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("productaddeddate.week.in.year", "attribute"),
            identifier: "productaddeddate.week.in.year",
            /**
             * Display Form Title: Number US (Product Added Date)
             * Display Form ID: productaddeddate.aaI81lMifn6q
             */
            NumberUS: newAttribute("productaddeddate.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Product Added Date)
         * Date Attribute ID: productaddeddate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("productaddeddate.week.in.quarter", "attribute"),
            identifier: "productaddeddate.week.in.quarter",
            /**
             * Display Form Title: Number US (Product Added Date)
             * Display Form ID: productaddeddate.aaO81lMifn6q
             */
            NumberUS: newAttribute("productaddeddate.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Product Added Date)
         * Date Attribute ID: productaddeddate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("productaddeddate.euweek", "attribute"),
            identifier: "productaddeddate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Product Added Date)
             * Display Form ID: productaddeddate.aa281lMifn6q
             */
            WeekNrYear: newAttribute("productaddeddate.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Product Added Date)
             * Display Form ID: productaddeddate.aaY81lMifn6q
             */
            WeekStarting: newAttribute("productaddeddate.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Product Added Date)
             * Display Form ID: productaddeddate.aaW81lMifn6q
             */
            FromTo: newAttribute("productaddeddate.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Product Added Date)
         * Date Attribute ID: productaddeddate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("productaddeddate.euweek.in.year", "attribute"),
            identifier: "productaddeddate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Product Added Date)
             * Display Form ID: productaddeddate.aba81lMifn6q
             */
            NumberEU: newAttribute("productaddeddate.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Product Added Date)
         * Date Attribute ID: productaddeddate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("productaddeddate.euweek.in.quarter", "attribute"),
            identifier: "productaddeddate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Product Added Date)
             * Display Form ID: productaddeddate.abg81lMifn6q
             */
            NumberEU: newAttribute("productaddeddate.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Product Added Date)
         * Date Attribute ID: productaddeddate.month.in.year
         */
        Month: {
            ref: idRef("productaddeddate.month.in.year", "attribute"),
            identifier: "productaddeddate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Product Added Date)
             * Display Form ID: productaddeddate.abm81lMifn6q
             */
            Short: newAttribute("productaddeddate.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Product Added Date)
             * Display Form ID: productaddeddate.abs81lMifn6q
             */
            Long: newAttribute("productaddeddate.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Product Added Date)
             * Display Form ID: productaddeddate.abq81lMifn6q
             */
            Number: newAttribute("productaddeddate.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Product Added Date)
             * Display Form ID: productaddeddate.abo81lMifn6q
             */
            MQ: newAttribute("productaddeddate.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Product Added Date)
         * Date Attribute ID: productaddeddate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("productaddeddate.month.in.quarter", "attribute"),
            identifier: "productaddeddate.month.in.quarter",
            /**
             * Display Form Title: Number (Product Added Date)
             * Display Form ID: productaddeddate.aby81lMifn6q
             */
            Number: newAttribute("productaddeddate.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Product Added Date)
         * Date Attribute ID: productaddeddate.day.in.year
         */
        DayOfYear: {
            ref: idRef("productaddeddate.day.in.year", "attribute"),
            identifier: "productaddeddate.day.in.year",
            /**
             * Display Form Title: default (Product Added Date)
             * Display Form ID: productaddeddate.abE81lMifn6q
             */
            Default: newAttribute("productaddeddate.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Product Added Date)
         * Date Attribute ID: productaddeddate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("productaddeddate.day.in.week", "attribute"),
            identifier: "productaddeddate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Product Added Date)
             * Display Form ID: productaddeddate.abK81lMifn6q
             */
            Short: newAttribute("productaddeddate.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Product Added Date)
             * Display Form ID: productaddeddate.abO81lMifn6q
             */
            Long: newAttribute("productaddeddate.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Product Added Date)
             * Display Form ID: productaddeddate.abM81lMifn6q
             */
            Number: newAttribute("productaddeddate.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Product Added Date)
         * Date Attribute ID: productaddeddate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("productaddeddate.day.in.euweek", "attribute"),
            identifier: "productaddeddate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Product Added Date)
             * Display Form ID: productaddeddate.abU81lMifn6q
             */
            Short: newAttribute("productaddeddate.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Product Added Date)
             * Display Form ID: productaddeddate.abY81lMifn6q
             */
            Long: newAttribute("productaddeddate.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Product Added Date)
             * Display Form ID: productaddeddate.abW81lMifn6q
             */
            Number: newAttribute("productaddeddate.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Product Added Date)
         * Date Attribute ID: productaddeddate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("productaddeddate.day.in.quarter", "attribute"),
            identifier: "productaddeddate.day.in.quarter",
            /**
             * Display Form Title: default (Product Added Date)
             * Display Form ID: productaddeddate.ab481lMifn6q
             */
            Default: newAttribute("productaddeddate.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Product Added Date)
         * Date Attribute ID: productaddeddate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("productaddeddate.day.in.month", "attribute"),
            identifier: "productaddeddate.day.in.month",
            /**
             * Display Form Title: default (Product Added Date)
             * Display Form ID: productaddeddate.aca81lMifn6q
             */
            Default: newAttribute("productaddeddate.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Product Added Date)
         * Date Attribute ID: productaddeddate.quarter
         */
        QuarterYear: {
            ref: idRef("productaddeddate.quarter", "attribute"),
            identifier: "productaddeddate.quarter",
            /**
             * Display Form Title: US Short (Product Added Date)
             * Display Form ID: productaddeddate.aci81lMifn6q
             */
            USShort: newAttribute("productaddeddate.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Product Added Date)
         * Date Attribute ID: productaddeddate.month
         */
        MonthYear: {
            ref: idRef("productaddeddate.month", "attribute"),
            identifier: "productaddeddate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Product Added Date)
             * Display Form ID: productaddeddate.act81lMifn6q
             */
            Short: newAttribute("productaddeddate.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Product Added Date)
             * Display Form ID: productaddeddate.acx81lMifn6q
             */
            Long: newAttribute("productaddeddate.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Product Added Date)
             * Display Form ID: productaddeddate.acv81lMifn6q
             */
            Number: newAttribute("productaddeddate.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Product Added Date)
         * Date Attribute ID: productaddeddate.date
         */
        Date: {
            ref: idRef("productaddeddate.date", "attribute"),
            identifier: "productaddeddate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Product Added Date)
             * Display Form ID: productaddeddate.date.mmddyyyy
             */
            MmDdYyyy: newAttribute("productaddeddate.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Product Added Date)
             * Display Form ID: productaddeddate.date.yyyymmdd
             */
            YyyyMmDd: newAttribute("productaddeddate.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Product Added Date)
             * Display Form ID: productaddeddate.date.mdyy
             */
            MDYy: newAttribute("productaddeddate.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Product Added Date)
             * Display Form ID: productaddeddate.date.long
             */
            Long: newAttribute("productaddeddate.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Product Added Date)
             * Display Form ID: productaddeddate.date.ddmmyyyy
             */
            DdMmYyyy: newAttribute("productaddeddate.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Product Added Date)
             * Display Form ID: productaddeddate.date.eddmmyyyy
             */
            DdMmYyyy_1: newAttribute("productaddeddate.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (User Created Date)
     * Date Data Set ID: usercreateddate.dataset.dt
     */
    UserCreatedDate: {
        ref: idRef("usercreateddate.dataset.dt", "dataSet"),
        identifier: "usercreateddate.dataset.dt",
        /**
         * Date Attribute: Year (User Created Date)
         * Date Attribute ID: usercreateddate.year
         */
        Year: {
            ref: idRef("usercreateddate.year", "attribute"),
            identifier: "usercreateddate.year",
            /**
             * Display Form Title: Year (User Created Date)
             * Display Form ID: usercreateddate.aag81lMifn6q
             */
            Default: newAttribute("usercreateddate.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (User Created Date)
         * Date Attribute ID: usercreateddate.quarter.in.year
         */
        Quarter: {
            ref: idRef("usercreateddate.quarter.in.year", "attribute"),
            identifier: "usercreateddate.quarter.in.year",
            /**
             * Display Form Title: default (User Created Date)
             * Display Form ID: usercreateddate.aam81lMifn6q
             */
            Default: newAttribute("usercreateddate.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (User Created Date)
         * Date Attribute ID: usercreateddate.week
         */
        WeekSunSatYear: {
            ref: idRef("usercreateddate.week", "attribute"),
            identifier: "usercreateddate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (User Created Date)
             * Display Form ID: usercreateddate.aaA81lMifn6q
             */
            WeekNrYear: newAttribute("usercreateddate.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (User Created Date)
             * Display Form ID: usercreateddate.aaw81lMifn6q
             */
            WeekStarting: newAttribute("usercreateddate.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (User Created Date)
             * Display Form ID: usercreateddate.aau81lMifn6q
             */
            FromTo: newAttribute("usercreateddate.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (User Created Date)
             * Display Form ID: usercreateddate.aay81lMifn6q
             */
            WeekNrYear_1: newAttribute("usercreateddate.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (User Created Date)
             * Display Form ID: usercreateddate.aaC81lMifn6q
             */
            WkQtrYear: newAttribute("usercreateddate.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (User Created Date)
             * Display Form ID: usercreateddate.aas81lMifn6q
             */
            WkQtrYear_1: newAttribute("usercreateddate.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (User Created Date)
         * Date Attribute ID: usercreateddate.week.in.year
         */
        WeekSunSat: {
            ref: idRef("usercreateddate.week.in.year", "attribute"),
            identifier: "usercreateddate.week.in.year",
            /**
             * Display Form Title: Number US (User Created Date)
             * Display Form ID: usercreateddate.aaI81lMifn6q
             */
            NumberUS: newAttribute("usercreateddate.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (User Created Date)
         * Date Attribute ID: usercreateddate.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("usercreateddate.week.in.quarter", "attribute"),
            identifier: "usercreateddate.week.in.quarter",
            /**
             * Display Form Title: Number US (User Created Date)
             * Display Form ID: usercreateddate.aaO81lMifn6q
             */
            NumberUS: newAttribute("usercreateddate.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (User Created Date)
         * Date Attribute ID: usercreateddate.euweek
         */
        WeekMonSunYear: {
            ref: idRef("usercreateddate.euweek", "attribute"),
            identifier: "usercreateddate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (User Created Date)
             * Display Form ID: usercreateddate.aa281lMifn6q
             */
            WeekNrYear: newAttribute("usercreateddate.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (User Created Date)
             * Display Form ID: usercreateddate.aaY81lMifn6q
             */
            WeekStarting: newAttribute("usercreateddate.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (User Created Date)
             * Display Form ID: usercreateddate.aaW81lMifn6q
             */
            FromTo: newAttribute("usercreateddate.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (User Created Date)
         * Date Attribute ID: usercreateddate.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("usercreateddate.euweek.in.year", "attribute"),
            identifier: "usercreateddate.euweek.in.year",
            /**
             * Display Form Title: Number EU (User Created Date)
             * Display Form ID: usercreateddate.aba81lMifn6q
             */
            NumberEU: newAttribute("usercreateddate.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (User Created Date)
         * Date Attribute ID: usercreateddate.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("usercreateddate.euweek.in.quarter", "attribute"),
            identifier: "usercreateddate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (User Created Date)
             * Display Form ID: usercreateddate.abg81lMifn6q
             */
            NumberEU: newAttribute("usercreateddate.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (User Created Date)
         * Date Attribute ID: usercreateddate.month.in.year
         */
        Month: {
            ref: idRef("usercreateddate.month.in.year", "attribute"),
            identifier: "usercreateddate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (User Created Date)
             * Display Form ID: usercreateddate.abm81lMifn6q
             */
            Short: newAttribute("usercreateddate.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (User Created Date)
             * Display Form ID: usercreateddate.abs81lMifn6q
             */
            Long: newAttribute("usercreateddate.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (User Created Date)
             * Display Form ID: usercreateddate.abq81lMifn6q
             */
            Number: newAttribute("usercreateddate.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (User Created Date)
             * Display Form ID: usercreateddate.abo81lMifn6q
             */
            MQ: newAttribute("usercreateddate.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (User Created Date)
         * Date Attribute ID: usercreateddate.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("usercreateddate.month.in.quarter", "attribute"),
            identifier: "usercreateddate.month.in.quarter",
            /**
             * Display Form Title: Number (User Created Date)
             * Display Form ID: usercreateddate.aby81lMifn6q
             */
            Number: newAttribute("usercreateddate.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (User Created Date)
         * Date Attribute ID: usercreateddate.day.in.year
         */
        DayOfYear: {
            ref: idRef("usercreateddate.day.in.year", "attribute"),
            identifier: "usercreateddate.day.in.year",
            /**
             * Display Form Title: default (User Created Date)
             * Display Form ID: usercreateddate.abE81lMifn6q
             */
            Default: newAttribute("usercreateddate.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (User Created Date)
         * Date Attribute ID: usercreateddate.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("usercreateddate.day.in.week", "attribute"),
            identifier: "usercreateddate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (User Created Date)
             * Display Form ID: usercreateddate.abK81lMifn6q
             */
            Short: newAttribute("usercreateddate.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (User Created Date)
             * Display Form ID: usercreateddate.abO81lMifn6q
             */
            Long: newAttribute("usercreateddate.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (User Created Date)
             * Display Form ID: usercreateddate.abM81lMifn6q
             */
            Number: newAttribute("usercreateddate.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (User Created Date)
         * Date Attribute ID: usercreateddate.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("usercreateddate.day.in.euweek", "attribute"),
            identifier: "usercreateddate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (User Created Date)
             * Display Form ID: usercreateddate.abU81lMifn6q
             */
            Short: newAttribute("usercreateddate.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (User Created Date)
             * Display Form ID: usercreateddate.abY81lMifn6q
             */
            Long: newAttribute("usercreateddate.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (User Created Date)
             * Display Form ID: usercreateddate.abW81lMifn6q
             */
            Number: newAttribute("usercreateddate.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (User Created Date)
         * Date Attribute ID: usercreateddate.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("usercreateddate.day.in.quarter", "attribute"),
            identifier: "usercreateddate.day.in.quarter",
            /**
             * Display Form Title: default (User Created Date)
             * Display Form ID: usercreateddate.ab481lMifn6q
             */
            Default: newAttribute("usercreateddate.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (User Created Date)
         * Date Attribute ID: usercreateddate.day.in.month
         */
        DayOfMonth: {
            ref: idRef("usercreateddate.day.in.month", "attribute"),
            identifier: "usercreateddate.day.in.month",
            /**
             * Display Form Title: default (User Created Date)
             * Display Form ID: usercreateddate.aca81lMifn6q
             */
            Default: newAttribute("usercreateddate.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (User Created Date)
         * Date Attribute ID: usercreateddate.quarter
         */
        QuarterYear: {
            ref: idRef("usercreateddate.quarter", "attribute"),
            identifier: "usercreateddate.quarter",
            /**
             * Display Form Title: US Short (User Created Date)
             * Display Form ID: usercreateddate.aci81lMifn6q
             */
            USShort: newAttribute("usercreateddate.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (User Created Date)
         * Date Attribute ID: usercreateddate.month
         */
        MonthYear: {
            ref: idRef("usercreateddate.month", "attribute"),
            identifier: "usercreateddate.month",
            /**
             * Display Form Title: Short (Jan 2010) (User Created Date)
             * Display Form ID: usercreateddate.act81lMifn6q
             */
            Short: newAttribute("usercreateddate.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (User Created Date)
             * Display Form ID: usercreateddate.acx81lMifn6q
             */
            Long: newAttribute("usercreateddate.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (User Created Date)
             * Display Form ID: usercreateddate.acv81lMifn6q
             */
            Number: newAttribute("usercreateddate.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (User Created Date)
         * Date Attribute ID: usercreateddate.date
         */
        Date: {
            ref: idRef("usercreateddate.date", "attribute"),
            identifier: "usercreateddate.date",
            /**
             * Display Form Title: mm/dd/yyyy (User Created Date)
             * Display Form ID: usercreateddate.date.mmddyyyy
             */
            MmDdYyyy: newAttribute("usercreateddate.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (User Created Date)
             * Display Form ID: usercreateddate.date.yyyymmdd
             */
            YyyyMmDd: newAttribute("usercreateddate.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (User Created Date)
             * Display Form ID: usercreateddate.date.mdyy
             */
            MDYy: newAttribute("usercreateddate.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (User Created Date)
             * Display Form ID: usercreateddate.date.long
             */
            Long: newAttribute("usercreateddate.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (User Created Date)
             * Display Form ID: usercreateddate.date.ddmmyyyy
             */
            DdMmYyyy: newAttribute("usercreateddate.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (User Created Date)
             * Display Form ID: usercreateddate.date.eddmmyyyy
             */
            DdMmYyyy_1: newAttribute("usercreateddate.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Inventory Month)
     * Date Data Set ID: inventorymonth.dataset.dt
     */
    InventoryMonth: {
        ref: idRef("inventorymonth.dataset.dt", "dataSet"),
        identifier: "inventorymonth.dataset.dt",
        /**
         * Date Attribute: Year (Inventory Month)
         * Date Attribute ID: inventorymonth.year
         */
        Year: {
            ref: idRef("inventorymonth.year", "attribute"),
            identifier: "inventorymonth.year",
            /**
             * Display Form Title: Year (Inventory Month)
             * Display Form ID: inventorymonth.aag81lMifn6q
             */
            Default: newAttribute("inventorymonth.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Inventory Month)
         * Date Attribute ID: inventorymonth.quarter.in.year
         */
        Quarter: {
            ref: idRef("inventorymonth.quarter.in.year", "attribute"),
            identifier: "inventorymonth.quarter.in.year",
            /**
             * Display Form Title: default (Inventory Month)
             * Display Form ID: inventorymonth.aam81lMifn6q
             */
            Default: newAttribute("inventorymonth.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Inventory Month)
         * Date Attribute ID: inventorymonth.week
         */
        WeekSunSatYear: {
            ref: idRef("inventorymonth.week", "attribute"),
            identifier: "inventorymonth.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
             * Display Form ID: inventorymonth.aaA81lMifn6q
             */
            WeekNrYear: newAttribute("inventorymonth.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Inventory Month)
             * Display Form ID: inventorymonth.aaw81lMifn6q
             */
            WeekStarting: newAttribute("inventorymonth.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Inventory Month)
             * Display Form ID: inventorymonth.aau81lMifn6q
             */
            FromTo: newAttribute("inventorymonth.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Inventory Month)
             * Display Form ID: inventorymonth.aay81lMifn6q
             */
            WeekNrYear_1: newAttribute("inventorymonth.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Inventory Month)
             * Display Form ID: inventorymonth.aaC81lMifn6q
             */
            WkQtrYear: newAttribute("inventorymonth.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Inventory Month)
             * Display Form ID: inventorymonth.aas81lMifn6q
             */
            WkQtrYear_1: newAttribute("inventorymonth.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Inventory Month)
         * Date Attribute ID: inventorymonth.week.in.year
         */
        WeekSunSat: {
            ref: idRef("inventorymonth.week.in.year", "attribute"),
            identifier: "inventorymonth.week.in.year",
            /**
             * Display Form Title: Number US (Inventory Month)
             * Display Form ID: inventorymonth.aaI81lMifn6q
             */
            NumberUS: newAttribute("inventorymonth.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Inventory Month)
         * Date Attribute ID: inventorymonth.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("inventorymonth.week.in.quarter", "attribute"),
            identifier: "inventorymonth.week.in.quarter",
            /**
             * Display Form Title: Number US (Inventory Month)
             * Display Form ID: inventorymonth.aaO81lMifn6q
             */
            NumberUS: newAttribute("inventorymonth.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Inventory Month)
         * Date Attribute ID: inventorymonth.euweek
         */
        WeekMonSunYear: {
            ref: idRef("inventorymonth.euweek", "attribute"),
            identifier: "inventorymonth.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Inventory Month)
             * Display Form ID: inventorymonth.aa281lMifn6q
             */
            WeekNrYear: newAttribute("inventorymonth.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Inventory Month)
             * Display Form ID: inventorymonth.aaY81lMifn6q
             */
            WeekStarting: newAttribute("inventorymonth.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Inventory Month)
             * Display Form ID: inventorymonth.aaW81lMifn6q
             */
            FromTo: newAttribute("inventorymonth.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Inventory Month)
         * Date Attribute ID: inventorymonth.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("inventorymonth.euweek.in.year", "attribute"),
            identifier: "inventorymonth.euweek.in.year",
            /**
             * Display Form Title: Number EU (Inventory Month)
             * Display Form ID: inventorymonth.aba81lMifn6q
             */
            NumberEU: newAttribute("inventorymonth.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Inventory Month)
         * Date Attribute ID: inventorymonth.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("inventorymonth.euweek.in.quarter", "attribute"),
            identifier: "inventorymonth.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Inventory Month)
             * Display Form ID: inventorymonth.abg81lMifn6q
             */
            NumberEU: newAttribute("inventorymonth.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Inventory Month)
         * Date Attribute ID: inventorymonth.month.in.year
         */
        Month: {
            ref: idRef("inventorymonth.month.in.year", "attribute"),
            identifier: "inventorymonth.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Inventory Month)
             * Display Form ID: inventorymonth.abm81lMifn6q
             */
            Short: newAttribute("inventorymonth.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Inventory Month)
             * Display Form ID: inventorymonth.abs81lMifn6q
             */
            Long: newAttribute("inventorymonth.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Inventory Month)
             * Display Form ID: inventorymonth.abq81lMifn6q
             */
            Number: newAttribute("inventorymonth.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Inventory Month)
             * Display Form ID: inventorymonth.abo81lMifn6q
             */
            MQ: newAttribute("inventorymonth.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Inventory Month)
         * Date Attribute ID: inventorymonth.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("inventorymonth.month.in.quarter", "attribute"),
            identifier: "inventorymonth.month.in.quarter",
            /**
             * Display Form Title: Number (Inventory Month)
             * Display Form ID: inventorymonth.aby81lMifn6q
             */
            Number: newAttribute("inventorymonth.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Inventory Month)
         * Date Attribute ID: inventorymonth.day.in.year
         */
        DayOfYear: {
            ref: idRef("inventorymonth.day.in.year", "attribute"),
            identifier: "inventorymonth.day.in.year",
            /**
             * Display Form Title: default (Inventory Month)
             * Display Form ID: inventorymonth.abE81lMifn6q
             */
            Default: newAttribute("inventorymonth.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Inventory Month)
         * Date Attribute ID: inventorymonth.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("inventorymonth.day.in.week", "attribute"),
            identifier: "inventorymonth.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Inventory Month)
             * Display Form ID: inventorymonth.abK81lMifn6q
             */
            Short: newAttribute("inventorymonth.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Inventory Month)
             * Display Form ID: inventorymonth.abO81lMifn6q
             */
            Long: newAttribute("inventorymonth.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Inventory Month)
             * Display Form ID: inventorymonth.abM81lMifn6q
             */
            Number: newAttribute("inventorymonth.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Inventory Month)
         * Date Attribute ID: inventorymonth.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("inventorymonth.day.in.euweek", "attribute"),
            identifier: "inventorymonth.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Inventory Month)
             * Display Form ID: inventorymonth.abU81lMifn6q
             */
            Short: newAttribute("inventorymonth.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Inventory Month)
             * Display Form ID: inventorymonth.abY81lMifn6q
             */
            Long: newAttribute("inventorymonth.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Inventory Month)
             * Display Form ID: inventorymonth.abW81lMifn6q
             */
            Number: newAttribute("inventorymonth.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Inventory Month)
         * Date Attribute ID: inventorymonth.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("inventorymonth.day.in.quarter", "attribute"),
            identifier: "inventorymonth.day.in.quarter",
            /**
             * Display Form Title: default (Inventory Month)
             * Display Form ID: inventorymonth.ab481lMifn6q
             */
            Default: newAttribute("inventorymonth.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Inventory Month)
         * Date Attribute ID: inventorymonth.day.in.month
         */
        DayOfMonth: {
            ref: idRef("inventorymonth.day.in.month", "attribute"),
            identifier: "inventorymonth.day.in.month",
            /**
             * Display Form Title: default (Inventory Month)
             * Display Form ID: inventorymonth.aca81lMifn6q
             */
            Default: newAttribute("inventorymonth.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Inventory Month)
         * Date Attribute ID: inventorymonth.quarter
         */
        QuarterYear: {
            ref: idRef("inventorymonth.quarter", "attribute"),
            identifier: "inventorymonth.quarter",
            /**
             * Display Form Title: US Short (Inventory Month)
             * Display Form ID: inventorymonth.aci81lMifn6q
             */
            USShort: newAttribute("inventorymonth.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Inventory Month)
         * Date Attribute ID: inventorymonth.month
         */
        MonthYear: {
            ref: idRef("inventorymonth.month", "attribute"),
            identifier: "inventorymonth.month",
            /**
             * Display Form Title: Short (Jan 2010) (Inventory Month)
             * Display Form ID: inventorymonth.act81lMifn6q
             */
            Short: newAttribute("inventorymonth.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Inventory Month)
             * Display Form ID: inventorymonth.acx81lMifn6q
             */
            Long: newAttribute("inventorymonth.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Inventory Month)
             * Display Form ID: inventorymonth.acv81lMifn6q
             */
            Number: newAttribute("inventorymonth.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Inventory Month)
         * Date Attribute ID: inventorymonth.date
         */
        Date: {
            ref: idRef("inventorymonth.date", "attribute"),
            identifier: "inventorymonth.date",
            /**
             * Display Form Title: mm/dd/yyyy (Inventory Month)
             * Display Form ID: inventorymonth.date.mmddyyyy
             */
            MmDdYyyy: newAttribute("inventorymonth.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Inventory Month)
             * Display Form ID: inventorymonth.date.yyyymmdd
             */
            YyyyMmDd: newAttribute("inventorymonth.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Inventory Month)
             * Display Form ID: inventorymonth.date.mdyy
             */
            MDYy: newAttribute("inventorymonth.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Inventory Month)
             * Display Form ID: inventorymonth.date.long
             */
            Long: newAttribute("inventorymonth.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Inventory Month)
             * Display Form ID: inventorymonth.date.ddmmyyyy
             */
            DdMmYyyy: newAttribute("inventorymonth.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Inventory Month)
             * Display Form ID: inventorymonth.date.eddmmyyyy
             */
            DdMmYyyy_1: newAttribute("inventorymonth.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date)
     * Date Data Set ID: date.dataset.dt
     */
    Date: {
        ref: idRef("date.dataset.dt", "dataSet"),
        identifier: "date.dataset.dt",
        /**
         * Date Attribute: Year (Date)
         * Date Attribute ID: date.year
         */
        Year: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Year (Date)
             * Display Form ID: date.aag81lMifn6q
             */
            Default: newAttribute("date.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date)
         * Date Attribute ID: date.quarter.in.year
         */
        Quarter: {
            ref: idRef("date.quarter.in.year", "attribute"),
            identifier: "date.quarter.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.aam81lMifn6q
             */
            Default: newAttribute("date.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date)
         * Date Attribute ID: date.week
         */
        WeekSunSatYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.aaA81lMifn6q
             */
            WeekNrYear: newAttribute("date.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.aaw81lMifn6q
             */
            WeekStarting: newAttribute("date.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.aau81lMifn6q
             */
            FromTo: newAttribute("date.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date)
             * Display Form ID: date.aay81lMifn6q
             */
            WeekNrYear_1: newAttribute("date.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
             * Display Form ID: date.aaC81lMifn6q
             */
            WkQtrYear: newAttribute("date.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date)
             * Display Form ID: date.aas81lMifn6q
             */
            WkQtrYear_1: newAttribute("date.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date)
         * Date Attribute ID: date.week.in.year
         */
        WeekSunSat: {
            ref: idRef("date.week.in.year", "attribute"),
            identifier: "date.week.in.year",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.aaI81lMifn6q
             */
            NumberUS: newAttribute("date.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date)
         * Date Attribute ID: date.week.in.quarter
         */
        WeekSunSatOfQtr: {
            ref: idRef("date.week.in.quarter", "attribute"),
            identifier: "date.week.in.quarter",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.aaO81lMifn6q
             */
            NumberUS: newAttribute("date.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date)
         * Date Attribute ID: date.euweek
         */
        WeekMonSunYear: {
            ref: idRef("date.euweek", "attribute"),
            identifier: "date.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.aa281lMifn6q
             */
            WeekNrYear: newAttribute("date.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.aaY81lMifn6q
             */
            WeekStarting: newAttribute("date.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.aaW81lMifn6q
             */
            FromTo: newAttribute("date.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date)
         * Date Attribute ID: date.euweek.in.year
         */
        WeekMonSun: {
            ref: idRef("date.euweek.in.year", "attribute"),
            identifier: "date.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.aba81lMifn6q
             */
            NumberEU: newAttribute("date.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date)
         * Date Attribute ID: date.euweek.in.quarter
         */
        WeekMonSunOfQtr: {
            ref: idRef("date.euweek.in.quarter", "attribute"),
            identifier: "date.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.abg81lMifn6q
             */
            NumberEU: newAttribute("date.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date)
         * Date Attribute ID: date.month.in.year
         */
        Month: {
            ref: idRef("date.month.in.year", "attribute"),
            identifier: "date.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date)
             * Display Form ID: date.abm81lMifn6q
             */
            Short: newAttribute("date.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date)
             * Display Form ID: date.abs81lMifn6q
             */
            Long: newAttribute("date.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date)
             * Display Form ID: date.abq81lMifn6q
             */
            Number: newAttribute("date.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date)
             * Display Form ID: date.abo81lMifn6q
             */
            MQ: newAttribute("date.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date)
         * Date Attribute ID: date.month.in.quarter
         */
        MonthOfQuarter: {
            ref: idRef("date.month.in.quarter", "attribute"),
            identifier: "date.month.in.quarter",
            /**
             * Display Form Title: Number (Date)
             * Display Form ID: date.aby81lMifn6q
             */
            Number: newAttribute("date.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date)
         * Date Attribute ID: date.day.in.year
         */
        DayOfYear: {
            ref: idRef("date.day.in.year", "attribute"),
            identifier: "date.day.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.abE81lMifn6q
             */
            Default: newAttribute("date.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date)
         * Date Attribute ID: date.day.in.week
         */
        DayOfWeekSunSat: {
            ref: idRef("date.day.in.week", "attribute"),
            identifier: "date.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date)
             * Display Form ID: date.abK81lMifn6q
             */
            Short: newAttribute("date.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date)
             * Display Form ID: date.abO81lMifn6q
             */
            Long: newAttribute("date.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date)
             * Display Form ID: date.abM81lMifn6q
             */
            Number: newAttribute("date.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date)
         * Date Attribute ID: date.day.in.euweek
         */
        DayOfWeekMonSun: {
            ref: idRef("date.day.in.euweek", "attribute"),
            identifier: "date.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date)
             * Display Form ID: date.abU81lMifn6q
             */
            Short: newAttribute("date.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date)
             * Display Form ID: date.abY81lMifn6q
             */
            Long: newAttribute("date.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date)
             * Display Form ID: date.abW81lMifn6q
             */
            Number: newAttribute("date.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date)
         * Date Attribute ID: date.day.in.quarter
         */
        DayOfQuarter: {
            ref: idRef("date.day.in.quarter", "attribute"),
            identifier: "date.day.in.quarter",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.ab481lMifn6q
             */
            Default: newAttribute("date.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date)
         * Date Attribute ID: date.day.in.month
         */
        DayOfMonth: {
            ref: idRef("date.day.in.month", "attribute"),
            identifier: "date.day.in.month",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.aca81lMifn6q
             */
            Default: newAttribute("date.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date)
         * Date Attribute ID: date.quarter
         */
        QuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: US Short (Date)
             * Display Form ID: date.aci81lMifn6q
             */
            USShort: newAttribute("date.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date)
         * Date Attribute ID: date.month
         */
        MonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date)
             * Display Form ID: date.act81lMifn6q
             */
            Short: newAttribute("date.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date)
             * Display Form ID: date.acx81lMifn6q
             */
            Long: newAttribute("date.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date)
             * Display Form ID: date.acv81lMifn6q
             */
            Number: newAttribute("date.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date)
         * Date Attribute ID: date.date
         */
        Date: {
            ref: idRef("date.date", "attribute"),
            identifier: "date.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date)
             * Display Form ID: date.date.mmddyyyy
             */
            MmDdYyyy: newAttribute("date.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date)
             * Display Form ID: date.date.yyyymmdd
             */
            YyyyMmDd: newAttribute("date.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date)
             * Display Form ID: date.date.mdyy
             */
            MDYy: newAttribute("date.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
             * Display Form ID: date.date.long
             */
            Long: newAttribute("date.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date)
             * Display Form ID: date.date.ddmmyyyy
             */
            DdMmYyyy: newAttribute("date.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date)
             * Display Form ID: date.date.eddmmyyyy
             */
            DdMmYyyy_1: newAttribute("date.date.eddmmyyyy"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Customers Engagement
     * Insight ID: aapJC900f3kB
     */
    CustomersEngagement: "aapJC900f3kB",
    /**
     * Insight Title: Page views
     * Insight ID: abWIzDZbf0dl
     */
    PageViews_1: "abWIzDZbf0dl",
    /**
     * Insight Title: Product Reviews
     * Insight ID: abmIA7opdwdq
     */
    ProductReviews: "abmIA7opdwdq",
    /**
     * Insight Title: Returns
     * Insight ID: aaSOQF3AcU7l
     */
    Returns: "aaSOQF3AcU7l",
    /**
     * Insight Title: Sales distribution
     * Insight ID: ackOOBi2efLb
     */
    SalesDistribution: "ackOOBi2efLb",
    /**
     * Insight Title: Sales per city
     * Insight ID: abiWQgJgfML0
     */
    SalesPerCity: "abiWQgJgfML0",
    /**
     * Insight Title: Monthly Profit Margin
     * Insight ID: aaRoqDdZgLld
     */
    MonthlyProfitMargin: "aaRoqDdZgLld",
    /**
     * Insight Title: Monthly Transaction Count Comparison
     * Insight ID: adkdagSLfA8r
     */
    MonthlyTransactionCountComparison: "adkdagSLfA8r",
    /**
     * Insight Title: Monthly Sales Comparison
     * Insight ID: abBdbUoKcJof
     */
    MonthlySalesComparison: "abBdbUoKcJof",
    /**
     * Insight Title: Monthly User Activity
     * Insight ID: abWTV1AMakDT
     */
    MonthlyUserActivity: "abWTV1AMakDT",
    /**
     * Insight Title: Monthly Total Sales
     * Insight ID: aauQcyP3fgrj
     */
    MonthlyTotalSales: "aauQcyP3fgrj",
    /**
     * Insight Title: Inventory vs Orders
     * Insight ID: aaYOMzntcqo3
     */
    InventoryVsOrders: "aaYOMzntcqo3",
    /**
     * Insight Title: Profit Breakdown
     * Insight ID: acbphtXTfjr9
     */
    ProfitBreakdown: "acbphtXTfjr9",
    /**
     * Insight Title: Product Engagement Breakdown
     * Insight ID: abDo2eszcJgq
     */
    ProductEngagementBreakdown: "abDo2eszcJgq",
    /**
     * Insight Title: Inventory Breakdown
     * Insight ID: aavo2J6GaTc4
     */
    InventoryBreakdown: "aavo2J6GaTc4",
    /**
     * Insight Title: Products with < 4 Star Rating
     * Insight ID: aakS7n88hr73
     */
    ProductsWith4StarRating: "aakS7n88hr73",
    /**
     * Insight Title: Profit Reducing Products
     * Insight ID: acWSYoZUeh3K
     */
    ProfitReducingProducts: "acWSYoZUeh3K",
    /**
     * Insight Title: Potential Bottom 10
     * Insight ID: aaeOUBIpe1Os
     */
    PotentialBottom10: "aaeOUBIpe1Os",
    /**
     * Insight Title: Potential TOP 10
     * Insight ID: adwOJIMIfmpQ
     */
    PotentialTOP10: "adwOJIMIfmpQ",
    /**
     * Insight Title: Average Star Rating
     * Insight ID: ac3IwXHLitoG
     */
    AverageStarRating: "ac3IwXHLitoG",
    /**
     * Insight Title: Profit viewed by Brand stacked by Category
     * Insight ID: abg8hF92fKWg
     */
    ProfitViewedByBrandStackedByCategory: "abg8hF92fKWg",
    /**
     * Insight Title: Customers Engagement Detail
     * Insight ID: ac0IA4eab1Ll
     */
    CustomersEngagementDetail: "ac0IA4eab1Ll",
    /**
     * Insight Title: Another Insight
     * Insight ID: aaOt1ZFagART
     */
    AnotherInsight: "aaOt1ZFagART",
    /**
     * Insight Title: Page Views by Category
     * Insight ID: advQySJKg0xM
     */
    PageViewsByCategory: "advQySJKg0xM",
    /**
     * Insight Title: Percentage
     * Insight ID: abbxoUOj7BWi
     */
    Percentage: "abbxoUOj7BWi",
    /**
     * Insight Title: Personality
     * Insight ID: aa2xskoRnc5F
     */
    Personality: "aa2xskoRnc5F",
    /**
     * Insight Title: DM - Column - Multiple Measures, Trend By
     * Insight ID: ablEBbEfTjYr
     */
    DMColumnMultipleMeasuresTrendBy: "ablEBbEfTjYr",
    /**
     * Insight Title: DM - Column - Single Measure, Trend By
     * Insight ID: aabCJhGqoona
     */
    DMColumnSingleMeasureTrendBy: "aabCJhGqoona",
    /**
     * Insight Title: DM - Table - No Measures, Rows
     * Insight ID: aabCJn5p63AF
     */
    DMTableNoMeasuresRows: "aabCJn5p63AF",
    /**
     * Insight Title: DM - Table - Multiple Measures, Rows
     * Insight ID: aatCDkH6j6NN
     */
    DMTableMultipleMeasuresRows: "aatCDkH6j6NN",
    /**
     * Insight Title: DM - Line - Multiple Measures, Trend By
     * Insight ID: aaxCqLr63fq8
     */
    DMLineMultipleMeasuresTrendBy: "aaxCqLr63fq8",
    /**
     * Insight Title: DM - Pie - Single Measure
     * Insight ID: aaeCHH5s768F
     */
    DMPieSingleMeasure: "aaeCHH5s768F",
    /**
     * Insight Title: DM - Pie - Single Measure, View By
     * Insight ID: aabCJU4ConXI
     */
    DMPieSingleMeasureViewBy: "aabCJU4ConXI",
    /**
     * Insight Title: Saved as a copy
     * Insight ID: aaQO2o5y8LpM
     */
    SavedAsACopy: "aaQO2o5y8LpM",
    /**
     * Insight Title: % Total sales by Product Category
     * Insight ID: adySg6FbAi0g
     */
    PercentTotalSalesByProductCategory: "adySg6FbAi0g",
    /**
     * Insight Title: Test
     * Insight ID: acjSpMvoDvh7
     */
    Test: "acjSpMvoDvh7",
    /**
     * Insight Title: Sales for Alpine
     * Insight ID: aeQqFJObN0Op
     */
    SalesForAlpine: "aeQqFJObN0Op",
    /**
     * Insight Title: Table
     * Insight ID: ackZ5kbXyuE9
     */
    Table: "ackZ5kbXyuE9",
    /**
     * Insight Title: Donut Chart
     * Insight ID: aajmxrkPC3qs
     */
    DonutChart: "aajmxrkPC3qs",
    /**
     * Insight Title: 365 values
     * Insight ID: aaqBLnvcsH8X
     */
    _365Values: "aaqBLnvcsH8X",
    /**
     * Insight Title: Page Views by Category by Brand
     * Insight ID: accpTuREibqZ
     */
    PageViewsByCategoryByBrand: "accpTuREibqZ",
    /**
     * Insight Title: Table (Colored)
     * Insight ID: abuF8xDvs20l
     */
    TableColored: "abuF8xDvs20l",
    /**
     * Insight Title: Avg Price by Category
     * Insight ID: abdPNHOLcHLk
     */
    AvgPriceByCategory: "abdPNHOLcHLk",
    /**
     * Insight Title: Avg Price by Category — Colored
     * Insight ID: aaEPYMhnXmFf
     */
    AvgPriceByCategoryColored: "aaEPYMhnXmFf",
    /**
     * Insight Title: Quantity by Category
     * Insight ID: aaLgNq53S6VB
     */
    QuantityByCategory: "aaLgNq53S6VB",
};
export const Dashboards = {
    /**
     * Dashboard Title: 4. Profit Margin Analysis
     * Dashboard ID: aaeWWMcpcmhR
     */
    _4ProfitMarginAnalysis: "aaeWWMcpcmhR",
    /**
     * Dashboard Title: 2. Monthly Inventory
     * Dashboard ID: aboVKQSBggzu
     */
    _2MonthlyInventory: "aboVKQSBggzu",
    /**
     * Dashboard Title: 1. Overview
     * Dashboard ID: aadPCE04gggj
     */
    _1Overview: "aadPCE04gggj",
    /**
     * Dashboard Title: 3. Engagement Analysis
     * Dashboard ID: abEIw3ETb6Jd
     */
    _3EngagementAnalysis: "abEIw3ETb6Jd",
    /**
     * Dashboard Title: 5. Embedding
     * Dashboard ID: aagL8MteaYAo
     */
    _5Embedding: "aagL8MteaYAo",
    /**
     * Dashboard Title: Dynamic Measures
     * Dashboard ID: aaNEDetXTWPh
     */
    DynamicMeasures: "aaNEDetXTWPh",
    /**
     * Dashboard Title: Dynamic Measures - Testing
     * Dashboard ID: aagCCFA94QP5
     */
    DynamicMeasuresTesting: "aagCCFA94QP5",
    /**
     * Dashboard Title: Recharts Piechart
     * Dashboard ID: aa0mnpTS4siw
     */
    RechartsPiechart: "aa0mnpTS4siw",
    /**
     * Dashboard Title: My First Dashboard
     * Dashboard ID: abUgFDzQoKGW
     */
    MyFirstDashboard: "abUgFDzQoKGW",
};
