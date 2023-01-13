/* eslint-disable */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-01-13T01:07:33.972Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Customer city
 * Attribute ID: CUSTOMER_CITY
 */

export const CustomerCity = {
  /**
   * Display Form Title: City pushpin
   * Display Form ID: CITY_PUSHPIN
   */
  CityPushpin: newAttribute("CITY_PUSHPIN")
  /**
   * Display Form Title: Customer city
   * Display Form ID: CUSTOMER_CITY
   */
  ,
  Default: newAttribute("CUSTOMER_CITY")
};
/**
 * Attribute Title: Customer country
 * Attribute ID: CUSTOMER_COUNTRY
 */

export const CustomerCountry = newAttribute("CUSTOMER_COUNTRY");
/**
 * Attribute Title: Customer email
 * Attribute ID: CUSTOMER_EMAIL
 */

export const CustomerEmail = newAttribute("CUSTOMER_EMAIL");
/**
 * Attribute Title: Customer id
 * Attribute ID: CUSTOMER_ID
 */

export const CustomerId = {
  /**
   * Display Form Title: Customer name
   * Display Form ID: CUSTOMER_NAME
   */
  CustomerName: newAttribute("CUSTOMER_NAME")
  /**
   * Display Form Title: Customer id
   * Display Form ID: CUSTOMER_ID
   */
  ,
  Default: newAttribute("CUSTOMER_ID")
};
/**
 * Attribute Title: Customer state
 * Attribute ID: CUSTOMER_STATE
 */

export const CustomerState = newAttribute("CUSTOMER_STATE");
/**
 * Attribute Title: Monthly inventory id
 * Attribute ID: MONTHLY_INVENTORY_ID
 */

export const MonthlyInventoryId = newAttribute("MONTHLY_INVENTORY_ID");
/**
 * Attribute Title: Order id
 * Attribute ID: ORDER_ID
 */

export const OrderId = newAttribute("ORDER_ID");
/**
 * Attribute Title: Order status
 * Attribute ID: ORDER_STATUS
 */

export const OrderStatus = newAttribute("ORDER_STATUS");
/**
 * Attribute Title: Customer age
 * Attribute ID: CUSTOMER_AGE
 */

export const CustomerAge = newAttribute("CUSTOMER_AGE");
/**
 * Attribute Title: Order line id
 * Attribute ID: ORDER_LINE_ID
 */

export const OrderLineId = newAttribute("ORDER_LINE_ID");
/**
 * Attribute Title: Product brand
 * Attribute ID: PRODUCT_BRAND
 */

export const ProductBrand = newAttribute("PRODUCT_BRAND");
/**
 * Attribute Title: Product category
 * Attribute ID: PRODUCT_CATEGORY
 */

export const ProductCategory = newAttribute("PRODUCT_CATEGORY");
/**
 * Attribute Title: Product id
 * Attribute ID: PRODUCT_ID
 */

export const ProductId = {
  /**
   * Display Form Title: Product id image web
   * Display Form ID: PRODUCT_ID_IMAGE_WEB
   */
  ImageWeb: newAttribute("PRODUCT_ID_IMAGE_WEB")
  /**
   * Display Form Title: Product id
   * Display Form ID: PRODUCT_ID
   */
  ,
  Default: newAttribute("PRODUCT_ID")
  /**
   * Display Form Title: Product name
   * Display Form ID: PRODUCT_NAME
   */
  ,
  ProductName: newAttribute("PRODUCT_NAME")
};
/**
 * Attribute Title: Product image
 * Attribute ID: PRODUCT_IMAGE
 */

export const ProductImage = {
  /**
   * Display Form Title: Product image
   * Display Form ID: PRODUCT_IMAGE
   */
  Default: newAttribute("PRODUCT_IMAGE")
  /**
   * Display Form Title: Product image web
   * Display Form ID: PRODUCT_IMAGE_WEB
   */
  ,
  Web: newAttribute("PRODUCT_IMAGE_WEB")
};
/**
 * Attribute Title: Product rating
 * Attribute ID: PRODUCT_RATING
 */

export const ProductRating = newAttribute("PRODUCT_RATING");
/**
 * Attribute Title: Returns id
 * Attribute ID: RETURNS_ID
 */

export const ReturnsId = newAttribute("RETURNS_ID");
/**
 * Metric Title: Active Customers
 * Metric ID: active_customers
 * Metric Type: MAQL Metric
 */

export const ActiveCustomers = newMeasure(idRef("active_customers", "measure"));
/**
 * Metric Title: ARPU
 * Metric ID: arpu
 * Metric Type: MAQL Metric
 */

export const ARPU = newMeasure(idRef("arpu", "measure"));
/**
 * Metric Title: Average Price of Products
 * Metric ID: average_price_of_products
 * Metric Type: MAQL Metric
 */

export const AveragePriceOfProducts = newMeasure(idRef("average_price_of_products", "measure"));
/**
 * Metric Title: Average Product Cost
 * Metric ID: average_product_cost
 * Metric Type: MAQL Metric
 */

export const AverageProductCost = newMeasure(idRef("average_product_cost", "measure"));
/**
 * Metric Title: Average Product List Price
 * Metric ID: average_product_list_price
 * Metric Type: MAQL Metric
 */

export const AverageProductListPrice = newMeasure(idRef("average_product_list_price", "measure"));
/**
 * Metric Title: COGS
 * Metric ID: cogs
 * Metric Type: MAQL Metric
 */

export const COGS = newMeasure(idRef("cogs", "measure"));
/**
 * Metric Title: COGS [Orders]
 * Metric ID: cogs_orders
 * Metric Type: MAQL Metric
 */

export const COGSOrders = newMeasure(idRef("cogs_orders", "measure"));
/**
 * Metric Title: COGS [Returns]
 * Metric ID: cogs_returns
 * Metric Type: MAQL Metric
 */

export const COGSReturns = newMeasure(idRef("cogs_returns", "measure"));
/**
 * Metric Title: Customers w/ Processed Orders
 * Metric ID: customers_w_processed_orders
 * Metric Type: MAQL Metric
 */

export const CustomersWProcessedOrders = newMeasure(idRef("customers_w_processed_orders", "measure"));
/**
 * Metric Title: Gross Profit
 * Metric ID: gross_profit
 * Metric Type: MAQL Metric
 */

export const GrossProfit = newMeasure(idRef("gross_profit", "measure"));
/**
 * Metric Title: Gross Profit Margin
 * Metric ID: gross_profit_margin
 * Metric Type: MAQL Metric
 */

export const GrossProfitMargin = newMeasure(idRef("gross_profit_margin", "measure"));
/**
 * Metric Title: Net Orders
 * Metric ID: net_orders
 * Metric Type: MAQL Metric
 */

export const NetOrders = newMeasure(idRef("net_orders", "measure"));
/**
 * Metric Title: Net Sales
 * Metric ID: net_sales
 * Metric Type: MAQL Metric
 */

export const NetSales = newMeasure(idRef("net_sales", "measure"));
/**
 * Metric Title: Net Sales Goal
 * Metric ID: net_sales_goal
 * Metric Type: MAQL Metric
 */

export const NetSalesGoal = newMeasure(idRef("net_sales_goal", "measure"));
/**
 * Metric Title: New Customers
 * Metric ID: new_customers
 * Metric Type: MAQL Metric
 */

export const NewCustomers = newMeasure(idRef("new_customers", "measure"));
/**
 * Metric Title: New Customers Monthly
 * Metric ID: new_customers_monthly
 * Metric Type: MAQL Metric
 */

export const NewCustomersMonthly = newMeasure(idRef("new_customers_monthly", "measure"));
/**
 * Metric Title: % of Net Sales
 * Metric ID: of_net_sales
 * Metric Type: MAQL Metric
 */

export const PercentOfNetSales = newMeasure(idRef("of_net_sales", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: of_orders
 * Metric Type: MAQL Metric
 */

export const NrOfOrders = newMeasure(idRef("of_orders", "measure"));
/**
 * Metric Title: Order Amount
 * Metric ID: order_amount
 * Metric Type: MAQL Metric
 */

export const OrderAmount = newMeasure(idRef("order_amount", "measure"));
/**
 * Metric Title: Orders all time
 * Metric ID: orders_all_time
 * Metric Type: MAQL Metric
 */

export const OrdersAllTime = newMeasure(idRef("orders_all_time", "measure"));
/**
 * Metric Title: Product Rating
 * Metric ID: product_rating
 * Metric Type: MAQL Metric
 */

export const ProductRating_1 = newMeasure(idRef("product_rating", "measure"));
/**
 * Metric Title: Return Customers
 * Metric ID: return_customers
 * Metric Type: MAQL Metric
 */

export const ReturnCustomers = newMeasure(idRef("return_customers", "measure"));
/**
 * Metric Title: Return Customers Monthly
 * Metric ID: return_customers_monthly
 * Metric Type: MAQL Metric
 */

export const ReturnCustomersMonthly = newMeasure(idRef("return_customers_monthly", "measure"));
/**
 * Metric Title: Returns
 * Metric ID: returns
 * Metric Type: MAQL Metric
 */

export const Returns = newMeasure(idRef("returns", "measure"));
/**
 * Metric Title: % Sell Through
 * Metric ID: sell_through
 * Metric Type: MAQL Metric
 */

export const PercentSellThrough = newMeasure(idRef("sell_through", "measure"));
/**
 * Metric Title: Total Customers
 * Metric ID: total_customers
 * Metric Type: MAQL Metric
 */

export const TotalCustomers = newMeasure(idRef("total_customers", "measure"));
/**
 * Metric Title: Total Discounts
 * Metric ID: total_discounts
 * Metric Type: MAQL Metric
 */

export const TotalDiscounts = newMeasure(idRef("total_discounts", "measure"));
/**
 * Metric Title: Total Listings
 * Metric ID: total_listings
 * Metric Type: MAQL Metric
 */

export const TotalListings = newMeasure(idRef("total_listings", "measure"));
/**
 * Metric Title: Total Returns
 * Metric ID: total_returns
 * Metric Type: MAQL Metric
 */

export const TotalReturns = newMeasure(idRef("total_returns", "measure"));
/**
 * Metric Title: Total Sales
 * Metric ID: total_sales
 * Metric Type: MAQL Metric
 */

export const TotalSales = newMeasure(idRef("total_sales", "measure"));
/**
 * Fact Title: Monthly quantity bom
 * Fact ID: MONTHLY_QUANTITY_BOM
 */

export const MonthlyQuantityBom = {
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity bom
   * Fact ID: MONTHLY_QUANTITY_BOM
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("MONTHLY_QUANTITY_BOM", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Monthly quantity eom
 * Fact ID: MONTHLY_QUANTITY_EOM
 */

export const MonthlyQuantityEom = {
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Monthly quantity eom
   * Fact ID: MONTHLY_QUANTITY_EOM
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("MONTHLY_QUANTITY_EOM", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order unit cost
 * Fact ID: ORDER_UNIT_COST
 */

export const OrderUnitCost = {
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order unit cost
   * Fact ID: ORDER_UNIT_COST
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("ORDER_UNIT_COST", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order unit discount
 * Fact ID: ORDER_UNIT_DISCOUNT
 */

export const OrderUnitDiscount = {
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order unit discount
   * Fact ID: ORDER_UNIT_DISCOUNT
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("ORDER_UNIT_DISCOUNT", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order unit price
 * Fact ID: ORDER_UNIT_PRICE
 */

export const OrderUnitPrice = {
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order unit price
   * Fact ID: ORDER_UNIT_PRICE
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("ORDER_UNIT_PRICE", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Order unit quantity
 * Fact ID: ORDER_UNIT_QUANTITY
 */

export const OrderUnitQuantity = {
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Order unit quantity
   * Fact ID: ORDER_UNIT_QUANTITY
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("ORDER_UNIT_QUANTITY", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Rating
 * Fact ID: RATING
 */

export const Rating = {
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("RATING", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("RATING", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("RATING", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("RATING", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("RATING", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Rating
   * Fact ID: RATING
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("RATING", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Return unit cost
 * Fact ID: RETURN_UNIT_COST
 */

export const ReturnUnitCost = {
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Return unit cost
   * Fact ID: RETURN_UNIT_COST
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("RETURN_UNIT_COST", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Return unit paid amount
 * Fact ID: RETURN_UNIT_PAID_AMOUNT
 */

export const ReturnUnitPaidAmount = {
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Return unit paid amount
   * Fact ID: RETURN_UNIT_PAID_AMOUNT
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("RETURN_UNIT_PAID_AMOUNT", "fact"), m => m.aggregation("runsum"))
};
/**
 * Fact Title: Return unit quantity
 * Fact ID: RETURN_UNIT_QUANTITY
 */

export const ReturnUnitQuantity = {
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("sum"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: avg
   */
  ,
  Avg: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("avg"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: min
   */
  ,
  Min: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("min"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: max
   */
  ,
  Max: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("max"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: median
   */
  ,
  Median: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("median"))
  /**
   * Fact Title: Return unit quantity
   * Fact ID: RETURN_UNIT_QUANTITY
   * Fact Aggregation: runsum
   */
  ,
  Runsum: newMeasure(idRef("RETURN_UNIT_QUANTITY", "fact"), m => m.aggregation("runsum"))
};
/**
 * Attribute Title: DATE - Quarter of Year
 * Attribute ID: DATE.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEQuarterOfYear = newAttribute("DATE.quarterOfYear");
/**
 * Attribute Title: DATE - Month of Year
 * Attribute ID: DATE.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEMonthOfYear = newAttribute("DATE.monthOfYear");
/**
 * Attribute Title: DATE - Week of Year
 * Attribute ID: DATE.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEWeekOfYear = newAttribute("DATE.weekOfYear");
/**
 * Attribute Title: DATE - Day of Year
 * Attribute ID: DATE.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEDayOfYear = newAttribute("DATE.dayOfYear");
/**
 * Attribute Title: DATE - Day of Month
 * Attribute ID: DATE.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEDayOfMonth = newAttribute("DATE.dayOfMonth");
/**
 * Attribute Title: DATE - Day of Week
 * Attribute ID: DATE.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEDayOfWeek = newAttribute("DATE.dayOfWeek");
/**
 * Attribute Title: DATE - Hour of Day
 * Attribute ID: DATE.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEHourOfDay = newAttribute("DATE.hourOfDay");
/**
 * Attribute Title: DATE - Minute of Hour
 * Attribute ID: DATE.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEMinuteOfHour = newAttribute("DATE.minuteOfHour");
/**
 * Attribute Title: DATE - Year
 * Attribute ID: DATE.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEYear = newAttribute("DATE.year");
/**
 * Attribute Title: DATE - Quarter/Year
 * Attribute ID: DATE.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEQuarterYear = newAttribute("DATE.quarter");
/**
 * Attribute Title: DATE - Month/Year
 * Attribute ID: DATE.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEMonthYear = newAttribute("DATE.month");
/**
 * Attribute Title: DATE - Week/Year
 * Attribute ID: DATE.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEWeekYear = newAttribute("DATE.week");
/**
 * Attribute Title: DATE - Date
 * Attribute ID: DATE.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEDate = newAttribute("DATE.day");
/**
 * Attribute Title: DATE - Hour
 * Attribute ID: DATE.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEHour = newAttribute("DATE.hour");
/**
 * Attribute Title: DATE - Minute
 * Attribute ID: DATE.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const DATEMinute = newAttribute("DATE.minute");
/**
 * Attribute Title: Customer created date - Quarter of Year
 * Attribute ID: CUSTOMER_CREATED_DATE.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateQuarterOfYear = newAttribute("CUSTOMER_CREATED_DATE.quarterOfYear");
/**
 * Attribute Title: Customer created date - Month of Year
 * Attribute ID: CUSTOMER_CREATED_DATE.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateMonthOfYear = newAttribute("CUSTOMER_CREATED_DATE.monthOfYear");
/**
 * Attribute Title: Customer created date - Week of Year
 * Attribute ID: CUSTOMER_CREATED_DATE.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateWeekOfYear = newAttribute("CUSTOMER_CREATED_DATE.weekOfYear");
/**
 * Attribute Title: Customer created date - Day of Year
 * Attribute ID: CUSTOMER_CREATED_DATE.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateDayOfYear = newAttribute("CUSTOMER_CREATED_DATE.dayOfYear");
/**
 * Attribute Title: Customer created date - Day of Month
 * Attribute ID: CUSTOMER_CREATED_DATE.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateDayOfMonth = newAttribute("CUSTOMER_CREATED_DATE.dayOfMonth");
/**
 * Attribute Title: Customer created date - Day of Week
 * Attribute ID: CUSTOMER_CREATED_DATE.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateDayOfWeek = newAttribute("CUSTOMER_CREATED_DATE.dayOfWeek");
/**
 * Attribute Title: Customer created date - Hour of Day
 * Attribute ID: CUSTOMER_CREATED_DATE.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateHourOfDay = newAttribute("CUSTOMER_CREATED_DATE.hourOfDay");
/**
 * Attribute Title: Customer created date - Minute of Hour
 * Attribute ID: CUSTOMER_CREATED_DATE.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateMinuteOfHour = newAttribute("CUSTOMER_CREATED_DATE.minuteOfHour");
/**
 * Attribute Title: Customer created date - Year
 * Attribute ID: CUSTOMER_CREATED_DATE.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateYear = newAttribute("CUSTOMER_CREATED_DATE.year");
/**
 * Attribute Title: Customer created date - Quarter/Year
 * Attribute ID: CUSTOMER_CREATED_DATE.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateQuarterYear = newAttribute("CUSTOMER_CREATED_DATE.quarter");
/**
 * Attribute Title: Customer created date - Month/Year
 * Attribute ID: CUSTOMER_CREATED_DATE.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateMonthYear = newAttribute("CUSTOMER_CREATED_DATE.month");
/**
 * Attribute Title: Customer created date - Week/Year
 * Attribute ID: CUSTOMER_CREATED_DATE.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateWeekYear = newAttribute("CUSTOMER_CREATED_DATE.week");
/**
 * Attribute Title: Customer created date - Date
 * Attribute ID: CUSTOMER_CREATED_DATE.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateDate = newAttribute("CUSTOMER_CREATED_DATE.day");
/**
 * Attribute Title: Customer created date - Hour
 * Attribute ID: CUSTOMER_CREATED_DATE.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateHour = newAttribute("CUSTOMER_CREATED_DATE.hour");
/**
 * Attribute Title: Customer created date - Minute
 * Attribute ID: CUSTOMER_CREATED_DATE.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const CustomerCreatedDateMinute = newAttribute("CUSTOMER_CREATED_DATE.minute");
/**
 * Attribute Title: Return date - Quarter of Year
 * Attribute ID: RETURN_DATE.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateQuarterOfYear = newAttribute("RETURN_DATE.quarterOfYear");
/**
 * Attribute Title: Return date - Month of Year
 * Attribute ID: RETURN_DATE.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMonthOfYear = newAttribute("RETURN_DATE.monthOfYear");
/**
 * Attribute Title: Return date - Week of Year
 * Attribute ID: RETURN_DATE.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekOfYear = newAttribute("RETURN_DATE.weekOfYear");
/**
 * Attribute Title: Return date - Day of Year
 * Attribute ID: RETURN_DATE.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfYear = newAttribute("RETURN_DATE.dayOfYear");
/**
 * Attribute Title: Return date - Day of Month
 * Attribute ID: RETURN_DATE.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfMonth = newAttribute("RETURN_DATE.dayOfMonth");
/**
 * Attribute Title: Return date - Day of Week
 * Attribute ID: RETURN_DATE.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDayOfWeek = newAttribute("RETURN_DATE.dayOfWeek");
/**
 * Attribute Title: Return date - Hour of Day
 * Attribute ID: RETURN_DATE.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateHourOfDay = newAttribute("RETURN_DATE.hourOfDay");
/**
 * Attribute Title: Return date - Minute of Hour
 * Attribute ID: RETURN_DATE.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMinuteOfHour = newAttribute("RETURN_DATE.minuteOfHour");
/**
 * Attribute Title: Return date - Year
 * Attribute ID: RETURN_DATE.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateYear = newAttribute("RETURN_DATE.year");
/**
 * Attribute Title: Return date - Quarter/Year
 * Attribute ID: RETURN_DATE.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateQuarterYear = newAttribute("RETURN_DATE.quarter");
/**
 * Attribute Title: Return date - Month/Year
 * Attribute ID: RETURN_DATE.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMonthYear = newAttribute("RETURN_DATE.month");
/**
 * Attribute Title: Return date - Week/Year
 * Attribute ID: RETURN_DATE.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateWeekYear = newAttribute("RETURN_DATE.week");
/**
 * Attribute Title: Return date - Date
 * Attribute ID: RETURN_DATE.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateDate = newAttribute("RETURN_DATE.day");
/**
 * Attribute Title: Return date - Hour
 * Attribute ID: RETURN_DATE.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateHour = newAttribute("RETURN_DATE.hour");
/**
 * Attribute Title: Return date - Minute
 * Attribute ID: RETURN_DATE.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const ReturnDateMinute = newAttribute("RETURN_DATE.minute");
/**
 * Attribute Title: Order date - Quarter of Year
 * Attribute ID: ORDER_DATE.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarterOfYear = newAttribute("ORDER_DATE.quarterOfYear");
/**
 * Attribute Title: Order date - Month of Year
 * Attribute ID: ORDER_DATE.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthOfYear = newAttribute("ORDER_DATE.monthOfYear");
/**
 * Attribute Title: Order date - Week of Year
 * Attribute ID: ORDER_DATE.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekOfYear = newAttribute("ORDER_DATE.weekOfYear");
/**
 * Attribute Title: Order date - Day of Year
 * Attribute ID: ORDER_DATE.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfYear = newAttribute("ORDER_DATE.dayOfYear");
/**
 * Attribute Title: Order date - Day of Month
 * Attribute ID: ORDER_DATE.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfMonth = newAttribute("ORDER_DATE.dayOfMonth");
/**
 * Attribute Title: Order date - Day of Week
 * Attribute ID: ORDER_DATE.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDayOfWeek = newAttribute("ORDER_DATE.dayOfWeek");
/**
 * Attribute Title: Order date - Hour of Day
 * Attribute ID: ORDER_DATE.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateHourOfDay = newAttribute("ORDER_DATE.hourOfDay");
/**
 * Attribute Title: Order date - Minute of Hour
 * Attribute ID: ORDER_DATE.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMinuteOfHour = newAttribute("ORDER_DATE.minuteOfHour");
/**
 * Attribute Title: Order date - Year
 * Attribute ID: ORDER_DATE.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateYear = newAttribute("ORDER_DATE.year");
/**
 * Attribute Title: Order date - Quarter/Year
 * Attribute ID: ORDER_DATE.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateQuarterYear = newAttribute("ORDER_DATE.quarter");
/**
 * Attribute Title: Order date - Month/Year
 * Attribute ID: ORDER_DATE.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMonthYear = newAttribute("ORDER_DATE.month");
/**
 * Attribute Title: Order date - Week/Year
 * Attribute ID: ORDER_DATE.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateWeekYear = newAttribute("ORDER_DATE.week");
/**
 * Attribute Title: Order date - Date
 * Attribute ID: ORDER_DATE.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateDate = newAttribute("ORDER_DATE.day");
/**
 * Attribute Title: Order date - Hour
 * Attribute ID: ORDER_DATE.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateHour = newAttribute("ORDER_DATE.hour");
/**
 * Attribute Title: Order date - Minute
 * Attribute ID: ORDER_DATE.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const OrderDateMinute = newAttribute("ORDER_DATE.minute");
/**
 * Attribute Title: Inventory month - Quarter of Year
 * Attribute ID: INVENTORY_MONTH.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthQuarterOfYear = newAttribute("INVENTORY_MONTH.quarterOfYear");
/**
 * Attribute Title: Inventory month - Month of Year
 * Attribute ID: INVENTORY_MONTH.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMonthOfYear = newAttribute("INVENTORY_MONTH.monthOfYear");
/**
 * Attribute Title: Inventory month - Week of Year
 * Attribute ID: INVENTORY_MONTH.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekOfYear = newAttribute("INVENTORY_MONTH.weekOfYear");
/**
 * Attribute Title: Inventory month - Day of Year
 * Attribute ID: INVENTORY_MONTH.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfYear = newAttribute("INVENTORY_MONTH.dayOfYear");
/**
 * Attribute Title: Inventory month - Day of Month
 * Attribute ID: INVENTORY_MONTH.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfMonth = newAttribute("INVENTORY_MONTH.dayOfMonth");
/**
 * Attribute Title: Inventory month - Day of Week
 * Attribute ID: INVENTORY_MONTH.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDayOfWeek = newAttribute("INVENTORY_MONTH.dayOfWeek");
/**
 * Attribute Title: Inventory month - Hour of Day
 * Attribute ID: INVENTORY_MONTH.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthHourOfDay = newAttribute("INVENTORY_MONTH.hourOfDay");
/**
 * Attribute Title: Inventory month - Minute of Hour
 * Attribute ID: INVENTORY_MONTH.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMinuteOfHour = newAttribute("INVENTORY_MONTH.minuteOfHour");
/**
 * Attribute Title: Inventory month - Year
 * Attribute ID: INVENTORY_MONTH.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthYear = newAttribute("INVENTORY_MONTH.year");
/**
 * Attribute Title: Inventory month - Quarter/Year
 * Attribute ID: INVENTORY_MONTH.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthQuarterYear = newAttribute("INVENTORY_MONTH.quarter");
/**
 * Attribute Title: Inventory month - Month/Year
 * Attribute ID: INVENTORY_MONTH.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMonthYear = newAttribute("INVENTORY_MONTH.month");
/**
 * Attribute Title: Inventory month - Week/Year
 * Attribute ID: INVENTORY_MONTH.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthWeekYear = newAttribute("INVENTORY_MONTH.week");
/**
 * Attribute Title: Inventory month - Date
 * Attribute ID: INVENTORY_MONTH.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthDate = newAttribute("INVENTORY_MONTH.day");
/**
 * Attribute Title: Inventory month - Hour
 * Attribute ID: INVENTORY_MONTH.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthHour = newAttribute("INVENTORY_MONTH.hour");
/**
 * Attribute Title: Inventory month - Minute
 * Attribute ID: INVENTORY_MONTH.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */

export const InventoryMonthMinute = newAttribute("INVENTORY_MONTH.minute");
/** Available Date Data Sets */

export const DateDatasets = {
  /**
   * Date Data Set Title: DATE
   * Date Data Set ID: DATE
   */
  DATE: {
    ref: idRef("DATE", "dataSet"),
    identifier: "DATE"
    /**
     * Date Attribute: DATE - Quarter of Year
     * Date Attribute ID: DATE.quarterOfYear
     */
    ,
    DATEQuarterOfYear: {
      ref: idRef("DATE.quarterOfYear", "attribute"),
      identifier: "DATE.quarterOfYear"
      /**
       * Display Form Title: DATE - Quarter of Year
       * Display Form ID: DATE.quarterOfYear
       */
      ,
      Default: newAttribute("DATE.quarterOfYear")
    }
    /**
     * Date Attribute: DATE - Month of Year
     * Date Attribute ID: DATE.monthOfYear
     */
    ,
    DATEMonthOfYear: {
      ref: idRef("DATE.monthOfYear", "attribute"),
      identifier: "DATE.monthOfYear"
      /**
       * Display Form Title: DATE - Month of Year
       * Display Form ID: DATE.monthOfYear
       */
      ,
      Default: newAttribute("DATE.monthOfYear")
    }
    /**
     * Date Attribute: DATE - Week of Year
     * Date Attribute ID: DATE.weekOfYear
     */
    ,
    DATEWeekOfYear: {
      ref: idRef("DATE.weekOfYear", "attribute"),
      identifier: "DATE.weekOfYear"
      /**
       * Display Form Title: DATE - Week of Year
       * Display Form ID: DATE.weekOfYear
       */
      ,
      Default: newAttribute("DATE.weekOfYear")
    }
    /**
     * Date Attribute: DATE - Day of Year
     * Date Attribute ID: DATE.dayOfYear
     */
    ,
    DATEDayOfYear: {
      ref: idRef("DATE.dayOfYear", "attribute"),
      identifier: "DATE.dayOfYear"
      /**
       * Display Form Title: DATE - Day of Year
       * Display Form ID: DATE.dayOfYear
       */
      ,
      Default: newAttribute("DATE.dayOfYear")
    }
    /**
     * Date Attribute: DATE - Day of Month
     * Date Attribute ID: DATE.dayOfMonth
     */
    ,
    DATEDayOfMonth: {
      ref: idRef("DATE.dayOfMonth", "attribute"),
      identifier: "DATE.dayOfMonth"
      /**
       * Display Form Title: DATE - Day of Month
       * Display Form ID: DATE.dayOfMonth
       */
      ,
      Default: newAttribute("DATE.dayOfMonth")
    }
    /**
     * Date Attribute: DATE - Day of Week
     * Date Attribute ID: DATE.dayOfWeek
     */
    ,
    DATEDayOfWeek: {
      ref: idRef("DATE.dayOfWeek", "attribute"),
      identifier: "DATE.dayOfWeek"
      /**
       * Display Form Title: DATE - Day of Week
       * Display Form ID: DATE.dayOfWeek
       */
      ,
      Default: newAttribute("DATE.dayOfWeek")
    }
    /**
     * Date Attribute: DATE - Hour of Day
     * Date Attribute ID: DATE.hourOfDay
     */
    ,
    DATEHourOfDay: {
      ref: idRef("DATE.hourOfDay", "attribute"),
      identifier: "DATE.hourOfDay"
      /**
       * Display Form Title: DATE - Hour of Day
       * Display Form ID: DATE.hourOfDay
       */
      ,
      Default: newAttribute("DATE.hourOfDay")
    }
    /**
     * Date Attribute: DATE - Minute of Hour
     * Date Attribute ID: DATE.minuteOfHour
     */
    ,
    DATEMinuteOfHour: {
      ref: idRef("DATE.minuteOfHour", "attribute"),
      identifier: "DATE.minuteOfHour"
      /**
       * Display Form Title: DATE - Minute of Hour
       * Display Form ID: DATE.minuteOfHour
       */
      ,
      Default: newAttribute("DATE.minuteOfHour")
    }
    /**
     * Date Attribute: DATE - Year
     * Date Attribute ID: DATE.year
     */
    ,
    DATEYear: {
      ref: idRef("DATE.year", "attribute"),
      identifier: "DATE.year"
      /**
       * Display Form Title: DATE - Year
       * Display Form ID: DATE.year
       */
      ,
      Default: newAttribute("DATE.year")
    }
    /**
     * Date Attribute: DATE - Quarter/Year
     * Date Attribute ID: DATE.quarter
     */
    ,
    DATEQuarterYear: {
      ref: idRef("DATE.quarter", "attribute"),
      identifier: "DATE.quarter"
      /**
       * Display Form Title: DATE - Quarter/Year
       * Display Form ID: DATE.quarter
       */
      ,
      Default: newAttribute("DATE.quarter")
    }
    /**
     * Date Attribute: DATE - Month/Year
     * Date Attribute ID: DATE.month
     */
    ,
    DATEMonthYear: {
      ref: idRef("DATE.month", "attribute"),
      identifier: "DATE.month"
      /**
       * Display Form Title: DATE - Month/Year
       * Display Form ID: DATE.month
       */
      ,
      Default: newAttribute("DATE.month")
    }
    /**
     * Date Attribute: DATE - Week/Year
     * Date Attribute ID: DATE.week
     */
    ,
    DATEWeekYear: {
      ref: idRef("DATE.week", "attribute"),
      identifier: "DATE.week"
      /**
       * Display Form Title: DATE - Week/Year
       * Display Form ID: DATE.week
       */
      ,
      Default: newAttribute("DATE.week")
    }
    /**
     * Date Attribute: DATE - Date
     * Date Attribute ID: DATE.day
     */
    ,
    DATEDate: {
      ref: idRef("DATE.day", "attribute"),
      identifier: "DATE.day"
      /**
       * Display Form Title: DATE - Date
       * Display Form ID: DATE.day
       */
      ,
      Default: newAttribute("DATE.day")
    }
    /**
     * Date Attribute: DATE - Hour
     * Date Attribute ID: DATE.hour
     */
    ,
    DATEHour: {
      ref: idRef("DATE.hour", "attribute"),
      identifier: "DATE.hour"
      /**
       * Display Form Title: DATE - Hour
       * Display Form ID: DATE.hour
       */
      ,
      Default: newAttribute("DATE.hour")
    }
    /**
     * Date Attribute: DATE - Minute
     * Date Attribute ID: DATE.minute
     */
    ,
    DATEMinute: {
      ref: idRef("DATE.minute", "attribute"),
      identifier: "DATE.minute"
      /**
       * Display Form Title: DATE - Minute
       * Display Form ID: DATE.minute
       */
      ,
      Default: newAttribute("DATE.minute")
    }
  }
  /**
   * Date Data Set Title: Customer created date
   * Date Data Set ID: CUSTOMER_CREATED_DATE
   */
  ,
  CustomerCreatedDate: {
    ref: idRef("CUSTOMER_CREATED_DATE", "dataSet"),
    identifier: "CUSTOMER_CREATED_DATE"
    /**
     * Date Attribute: Customer created date - Quarter of Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.quarterOfYear
     */
    ,
    CustomerCreatedDateQuarterOfYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.quarterOfYear", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.quarterOfYear"
      /**
       * Display Form Title: Customer created date - Quarter of Year
       * Display Form ID: CUSTOMER_CREATED_DATE.quarterOfYear
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.quarterOfYear")
    }
    /**
     * Date Attribute: Customer created date - Month of Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.monthOfYear
     */
    ,
    CustomerCreatedDateMonthOfYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.monthOfYear", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.monthOfYear"
      /**
       * Display Form Title: Customer created date - Month of Year
       * Display Form ID: CUSTOMER_CREATED_DATE.monthOfYear
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.monthOfYear")
    }
    /**
     * Date Attribute: Customer created date - Week of Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.weekOfYear
     */
    ,
    CustomerCreatedDateWeekOfYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.weekOfYear", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.weekOfYear"
      /**
       * Display Form Title: Customer created date - Week of Year
       * Display Form ID: CUSTOMER_CREATED_DATE.weekOfYear
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.weekOfYear")
    }
    /**
     * Date Attribute: Customer created date - Day of Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.dayOfYear
     */
    ,
    CustomerCreatedDateDayOfYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.dayOfYear", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.dayOfYear"
      /**
       * Display Form Title: Customer created date - Day of Year
       * Display Form ID: CUSTOMER_CREATED_DATE.dayOfYear
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.dayOfYear")
    }
    /**
     * Date Attribute: Customer created date - Day of Month
     * Date Attribute ID: CUSTOMER_CREATED_DATE.dayOfMonth
     */
    ,
    CustomerCreatedDateDayOfMonth: {
      ref: idRef("CUSTOMER_CREATED_DATE.dayOfMonth", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.dayOfMonth"
      /**
       * Display Form Title: Customer created date - Day of Month
       * Display Form ID: CUSTOMER_CREATED_DATE.dayOfMonth
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.dayOfMonth")
    }
    /**
     * Date Attribute: Customer created date - Day of Week
     * Date Attribute ID: CUSTOMER_CREATED_DATE.dayOfWeek
     */
    ,
    CustomerCreatedDateDayOfWeek: {
      ref: idRef("CUSTOMER_CREATED_DATE.dayOfWeek", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.dayOfWeek"
      /**
       * Display Form Title: Customer created date - Day of Week
       * Display Form ID: CUSTOMER_CREATED_DATE.dayOfWeek
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.dayOfWeek")
    }
    /**
     * Date Attribute: Customer created date - Hour of Day
     * Date Attribute ID: CUSTOMER_CREATED_DATE.hourOfDay
     */
    ,
    CustomerCreatedDateHourOfDay: {
      ref: idRef("CUSTOMER_CREATED_DATE.hourOfDay", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.hourOfDay"
      /**
       * Display Form Title: Customer created date - Hour of Day
       * Display Form ID: CUSTOMER_CREATED_DATE.hourOfDay
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.hourOfDay")
    }
    /**
     * Date Attribute: Customer created date - Minute of Hour
     * Date Attribute ID: CUSTOMER_CREATED_DATE.minuteOfHour
     */
    ,
    CustomerCreatedDateMinuteOfHour: {
      ref: idRef("CUSTOMER_CREATED_DATE.minuteOfHour", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.minuteOfHour"
      /**
       * Display Form Title: Customer created date - Minute of Hour
       * Display Form ID: CUSTOMER_CREATED_DATE.minuteOfHour
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.minuteOfHour")
    }
    /**
     * Date Attribute: Customer created date - Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.year
     */
    ,
    CustomerCreatedDateYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.year", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.year"
      /**
       * Display Form Title: Customer created date - Year
       * Display Form ID: CUSTOMER_CREATED_DATE.year
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.year")
    }
    /**
     * Date Attribute: Customer created date - Quarter/Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.quarter
     */
    ,
    CustomerCreatedDateQuarterYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.quarter", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.quarter"
      /**
       * Display Form Title: Customer created date - Quarter/Year
       * Display Form ID: CUSTOMER_CREATED_DATE.quarter
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.quarter")
    }
    /**
     * Date Attribute: Customer created date - Month/Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.month
     */
    ,
    CustomerCreatedDateMonthYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.month", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.month"
      /**
       * Display Form Title: Customer created date - Month/Year
       * Display Form ID: CUSTOMER_CREATED_DATE.month
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.month")
    }
    /**
     * Date Attribute: Customer created date - Week/Year
     * Date Attribute ID: CUSTOMER_CREATED_DATE.week
     */
    ,
    CustomerCreatedDateWeekYear: {
      ref: idRef("CUSTOMER_CREATED_DATE.week", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.week"
      /**
       * Display Form Title: Customer created date - Week/Year
       * Display Form ID: CUSTOMER_CREATED_DATE.week
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.week")
    }
    /**
     * Date Attribute: Customer created date - Date
     * Date Attribute ID: CUSTOMER_CREATED_DATE.day
     */
    ,
    CustomerCreatedDateDate: {
      ref: idRef("CUSTOMER_CREATED_DATE.day", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.day"
      /**
       * Display Form Title: Customer created date - Date
       * Display Form ID: CUSTOMER_CREATED_DATE.day
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.day")
    }
    /**
     * Date Attribute: Customer created date - Hour
     * Date Attribute ID: CUSTOMER_CREATED_DATE.hour
     */
    ,
    CustomerCreatedDateHour: {
      ref: idRef("CUSTOMER_CREATED_DATE.hour", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.hour"
      /**
       * Display Form Title: Customer created date - Hour
       * Display Form ID: CUSTOMER_CREATED_DATE.hour
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.hour")
    }
    /**
     * Date Attribute: Customer created date - Minute
     * Date Attribute ID: CUSTOMER_CREATED_DATE.minute
     */
    ,
    CustomerCreatedDateMinute: {
      ref: idRef("CUSTOMER_CREATED_DATE.minute", "attribute"),
      identifier: "CUSTOMER_CREATED_DATE.minute"
      /**
       * Display Form Title: Customer created date - Minute
       * Display Form ID: CUSTOMER_CREATED_DATE.minute
       */
      ,
      Default: newAttribute("CUSTOMER_CREATED_DATE.minute")
    }
  }
  /**
   * Date Data Set Title: Return date
   * Date Data Set ID: RETURN_DATE
   */
  ,
  ReturnDate: {
    ref: idRef("RETURN_DATE", "dataSet"),
    identifier: "RETURN_DATE"
    /**
     * Date Attribute: Return date - Quarter of Year
     * Date Attribute ID: RETURN_DATE.quarterOfYear
     */
    ,
    ReturnDateQuarterOfYear: {
      ref: idRef("RETURN_DATE.quarterOfYear", "attribute"),
      identifier: "RETURN_DATE.quarterOfYear"
      /**
       * Display Form Title: Return date - Quarter of Year
       * Display Form ID: RETURN_DATE.quarterOfYear
       */
      ,
      Default: newAttribute("RETURN_DATE.quarterOfYear")
    }
    /**
     * Date Attribute: Return date - Month of Year
     * Date Attribute ID: RETURN_DATE.monthOfYear
     */
    ,
    ReturnDateMonthOfYear: {
      ref: idRef("RETURN_DATE.monthOfYear", "attribute"),
      identifier: "RETURN_DATE.monthOfYear"
      /**
       * Display Form Title: Return date - Month of Year
       * Display Form ID: RETURN_DATE.monthOfYear
       */
      ,
      Default: newAttribute("RETURN_DATE.monthOfYear")
    }
    /**
     * Date Attribute: Return date - Week of Year
     * Date Attribute ID: RETURN_DATE.weekOfYear
     */
    ,
    ReturnDateWeekOfYear: {
      ref: idRef("RETURN_DATE.weekOfYear", "attribute"),
      identifier: "RETURN_DATE.weekOfYear"
      /**
       * Display Form Title: Return date - Week of Year
       * Display Form ID: RETURN_DATE.weekOfYear
       */
      ,
      Default: newAttribute("RETURN_DATE.weekOfYear")
    }
    /**
     * Date Attribute: Return date - Day of Year
     * Date Attribute ID: RETURN_DATE.dayOfYear
     */
    ,
    ReturnDateDayOfYear: {
      ref: idRef("RETURN_DATE.dayOfYear", "attribute"),
      identifier: "RETURN_DATE.dayOfYear"
      /**
       * Display Form Title: Return date - Day of Year
       * Display Form ID: RETURN_DATE.dayOfYear
       */
      ,
      Default: newAttribute("RETURN_DATE.dayOfYear")
    }
    /**
     * Date Attribute: Return date - Day of Month
     * Date Attribute ID: RETURN_DATE.dayOfMonth
     */
    ,
    ReturnDateDayOfMonth: {
      ref: idRef("RETURN_DATE.dayOfMonth", "attribute"),
      identifier: "RETURN_DATE.dayOfMonth"
      /**
       * Display Form Title: Return date - Day of Month
       * Display Form ID: RETURN_DATE.dayOfMonth
       */
      ,
      Default: newAttribute("RETURN_DATE.dayOfMonth")
    }
    /**
     * Date Attribute: Return date - Day of Week
     * Date Attribute ID: RETURN_DATE.dayOfWeek
     */
    ,
    ReturnDateDayOfWeek: {
      ref: idRef("RETURN_DATE.dayOfWeek", "attribute"),
      identifier: "RETURN_DATE.dayOfWeek"
      /**
       * Display Form Title: Return date - Day of Week
       * Display Form ID: RETURN_DATE.dayOfWeek
       */
      ,
      Default: newAttribute("RETURN_DATE.dayOfWeek")
    }
    /**
     * Date Attribute: Return date - Hour of Day
     * Date Attribute ID: RETURN_DATE.hourOfDay
     */
    ,
    ReturnDateHourOfDay: {
      ref: idRef("RETURN_DATE.hourOfDay", "attribute"),
      identifier: "RETURN_DATE.hourOfDay"
      /**
       * Display Form Title: Return date - Hour of Day
       * Display Form ID: RETURN_DATE.hourOfDay
       */
      ,
      Default: newAttribute("RETURN_DATE.hourOfDay")
    }
    /**
     * Date Attribute: Return date - Minute of Hour
     * Date Attribute ID: RETURN_DATE.minuteOfHour
     */
    ,
    ReturnDateMinuteOfHour: {
      ref: idRef("RETURN_DATE.minuteOfHour", "attribute"),
      identifier: "RETURN_DATE.minuteOfHour"
      /**
       * Display Form Title: Return date - Minute of Hour
       * Display Form ID: RETURN_DATE.minuteOfHour
       */
      ,
      Default: newAttribute("RETURN_DATE.minuteOfHour")
    }
    /**
     * Date Attribute: Return date - Year
     * Date Attribute ID: RETURN_DATE.year
     */
    ,
    ReturnDateYear: {
      ref: idRef("RETURN_DATE.year", "attribute"),
      identifier: "RETURN_DATE.year"
      /**
       * Display Form Title: Return date - Year
       * Display Form ID: RETURN_DATE.year
       */
      ,
      Default: newAttribute("RETURN_DATE.year")
    }
    /**
     * Date Attribute: Return date - Quarter/Year
     * Date Attribute ID: RETURN_DATE.quarter
     */
    ,
    ReturnDateQuarterYear: {
      ref: idRef("RETURN_DATE.quarter", "attribute"),
      identifier: "RETURN_DATE.quarter"
      /**
       * Display Form Title: Return date - Quarter/Year
       * Display Form ID: RETURN_DATE.quarter
       */
      ,
      Default: newAttribute("RETURN_DATE.quarter")
    }
    /**
     * Date Attribute: Return date - Month/Year
     * Date Attribute ID: RETURN_DATE.month
     */
    ,
    ReturnDateMonthYear: {
      ref: idRef("RETURN_DATE.month", "attribute"),
      identifier: "RETURN_DATE.month"
      /**
       * Display Form Title: Return date - Month/Year
       * Display Form ID: RETURN_DATE.month
       */
      ,
      Default: newAttribute("RETURN_DATE.month")
    }
    /**
     * Date Attribute: Return date - Week/Year
     * Date Attribute ID: RETURN_DATE.week
     */
    ,
    ReturnDateWeekYear: {
      ref: idRef("RETURN_DATE.week", "attribute"),
      identifier: "RETURN_DATE.week"
      /**
       * Display Form Title: Return date - Week/Year
       * Display Form ID: RETURN_DATE.week
       */
      ,
      Default: newAttribute("RETURN_DATE.week")
    }
    /**
     * Date Attribute: Return date - Date
     * Date Attribute ID: RETURN_DATE.day
     */
    ,
    ReturnDateDate: {
      ref: idRef("RETURN_DATE.day", "attribute"),
      identifier: "RETURN_DATE.day"
      /**
       * Display Form Title: Return date - Date
       * Display Form ID: RETURN_DATE.day
       */
      ,
      Default: newAttribute("RETURN_DATE.day")
    }
    /**
     * Date Attribute: Return date - Hour
     * Date Attribute ID: RETURN_DATE.hour
     */
    ,
    ReturnDateHour: {
      ref: idRef("RETURN_DATE.hour", "attribute"),
      identifier: "RETURN_DATE.hour"
      /**
       * Display Form Title: Return date - Hour
       * Display Form ID: RETURN_DATE.hour
       */
      ,
      Default: newAttribute("RETURN_DATE.hour")
    }
    /**
     * Date Attribute: Return date - Minute
     * Date Attribute ID: RETURN_DATE.minute
     */
    ,
    ReturnDateMinute: {
      ref: idRef("RETURN_DATE.minute", "attribute"),
      identifier: "RETURN_DATE.minute"
      /**
       * Display Form Title: Return date - Minute
       * Display Form ID: RETURN_DATE.minute
       */
      ,
      Default: newAttribute("RETURN_DATE.minute")
    }
  }
  /**
   * Date Data Set Title: Order date
   * Date Data Set ID: ORDER_DATE
   */
  ,
  OrderDate: {
    ref: idRef("ORDER_DATE", "dataSet"),
    identifier: "ORDER_DATE"
    /**
     * Date Attribute: Order date - Quarter of Year
     * Date Attribute ID: ORDER_DATE.quarterOfYear
     */
    ,
    OrderDateQuarterOfYear: {
      ref: idRef("ORDER_DATE.quarterOfYear", "attribute"),
      identifier: "ORDER_DATE.quarterOfYear"
      /**
       * Display Form Title: Order date - Quarter of Year
       * Display Form ID: ORDER_DATE.quarterOfYear
       */
      ,
      Default: newAttribute("ORDER_DATE.quarterOfYear")
    }
    /**
     * Date Attribute: Order date - Month of Year
     * Date Attribute ID: ORDER_DATE.monthOfYear
     */
    ,
    OrderDateMonthOfYear: {
      ref: idRef("ORDER_DATE.monthOfYear", "attribute"),
      identifier: "ORDER_DATE.monthOfYear"
      /**
       * Display Form Title: Order date - Month of Year
       * Display Form ID: ORDER_DATE.monthOfYear
       */
      ,
      Default: newAttribute("ORDER_DATE.monthOfYear")
    }
    /**
     * Date Attribute: Order date - Week of Year
     * Date Attribute ID: ORDER_DATE.weekOfYear
     */
    ,
    OrderDateWeekOfYear: {
      ref: idRef("ORDER_DATE.weekOfYear", "attribute"),
      identifier: "ORDER_DATE.weekOfYear"
      /**
       * Display Form Title: Order date - Week of Year
       * Display Form ID: ORDER_DATE.weekOfYear
       */
      ,
      Default: newAttribute("ORDER_DATE.weekOfYear")
    }
    /**
     * Date Attribute: Order date - Day of Year
     * Date Attribute ID: ORDER_DATE.dayOfYear
     */
    ,
    OrderDateDayOfYear: {
      ref: idRef("ORDER_DATE.dayOfYear", "attribute"),
      identifier: "ORDER_DATE.dayOfYear"
      /**
       * Display Form Title: Order date - Day of Year
       * Display Form ID: ORDER_DATE.dayOfYear
       */
      ,
      Default: newAttribute("ORDER_DATE.dayOfYear")
    }
    /**
     * Date Attribute: Order date - Day of Month
     * Date Attribute ID: ORDER_DATE.dayOfMonth
     */
    ,
    OrderDateDayOfMonth: {
      ref: idRef("ORDER_DATE.dayOfMonth", "attribute"),
      identifier: "ORDER_DATE.dayOfMonth"
      /**
       * Display Form Title: Order date - Day of Month
       * Display Form ID: ORDER_DATE.dayOfMonth
       */
      ,
      Default: newAttribute("ORDER_DATE.dayOfMonth")
    }
    /**
     * Date Attribute: Order date - Day of Week
     * Date Attribute ID: ORDER_DATE.dayOfWeek
     */
    ,
    OrderDateDayOfWeek: {
      ref: idRef("ORDER_DATE.dayOfWeek", "attribute"),
      identifier: "ORDER_DATE.dayOfWeek"
      /**
       * Display Form Title: Order date - Day of Week
       * Display Form ID: ORDER_DATE.dayOfWeek
       */
      ,
      Default: newAttribute("ORDER_DATE.dayOfWeek")
    }
    /**
     * Date Attribute: Order date - Hour of Day
     * Date Attribute ID: ORDER_DATE.hourOfDay
     */
    ,
    OrderDateHourOfDay: {
      ref: idRef("ORDER_DATE.hourOfDay", "attribute"),
      identifier: "ORDER_DATE.hourOfDay"
      /**
       * Display Form Title: Order date - Hour of Day
       * Display Form ID: ORDER_DATE.hourOfDay
       */
      ,
      Default: newAttribute("ORDER_DATE.hourOfDay")
    }
    /**
     * Date Attribute: Order date - Minute of Hour
     * Date Attribute ID: ORDER_DATE.minuteOfHour
     */
    ,
    OrderDateMinuteOfHour: {
      ref: idRef("ORDER_DATE.minuteOfHour", "attribute"),
      identifier: "ORDER_DATE.minuteOfHour"
      /**
       * Display Form Title: Order date - Minute of Hour
       * Display Form ID: ORDER_DATE.minuteOfHour
       */
      ,
      Default: newAttribute("ORDER_DATE.minuteOfHour")
    }
    /**
     * Date Attribute: Order date - Year
     * Date Attribute ID: ORDER_DATE.year
     */
    ,
    OrderDateYear: {
      ref: idRef("ORDER_DATE.year", "attribute"),
      identifier: "ORDER_DATE.year"
      /**
       * Display Form Title: Order date - Year
       * Display Form ID: ORDER_DATE.year
       */
      ,
      Default: newAttribute("ORDER_DATE.year")
    }
    /**
     * Date Attribute: Order date - Quarter/Year
     * Date Attribute ID: ORDER_DATE.quarter
     */
    ,
    OrderDateQuarterYear: {
      ref: idRef("ORDER_DATE.quarter", "attribute"),
      identifier: "ORDER_DATE.quarter"
      /**
       * Display Form Title: Order date - Quarter/Year
       * Display Form ID: ORDER_DATE.quarter
       */
      ,
      Default: newAttribute("ORDER_DATE.quarter")
    }
    /**
     * Date Attribute: Order date - Month/Year
     * Date Attribute ID: ORDER_DATE.month
     */
    ,
    OrderDateMonthYear: {
      ref: idRef("ORDER_DATE.month", "attribute"),
      identifier: "ORDER_DATE.month"
      /**
       * Display Form Title: Order date - Month/Year
       * Display Form ID: ORDER_DATE.month
       */
      ,
      Default: newAttribute("ORDER_DATE.month")
    }
    /**
     * Date Attribute: Order date - Week/Year
     * Date Attribute ID: ORDER_DATE.week
     */
    ,
    OrderDateWeekYear: {
      ref: idRef("ORDER_DATE.week", "attribute"),
      identifier: "ORDER_DATE.week"
      /**
       * Display Form Title: Order date - Week/Year
       * Display Form ID: ORDER_DATE.week
       */
      ,
      Default: newAttribute("ORDER_DATE.week")
    }
    /**
     * Date Attribute: Order date - Date
     * Date Attribute ID: ORDER_DATE.day
     */
    ,
    OrderDateDate: {
      ref: idRef("ORDER_DATE.day", "attribute"),
      identifier: "ORDER_DATE.day"
      /**
       * Display Form Title: Order date - Date
       * Display Form ID: ORDER_DATE.day
       */
      ,
      Default: newAttribute("ORDER_DATE.day")
    }
    /**
     * Date Attribute: Order date - Hour
     * Date Attribute ID: ORDER_DATE.hour
     */
    ,
    OrderDateHour: {
      ref: idRef("ORDER_DATE.hour", "attribute"),
      identifier: "ORDER_DATE.hour"
      /**
       * Display Form Title: Order date - Hour
       * Display Form ID: ORDER_DATE.hour
       */
      ,
      Default: newAttribute("ORDER_DATE.hour")
    }
    /**
     * Date Attribute: Order date - Minute
     * Date Attribute ID: ORDER_DATE.minute
     */
    ,
    OrderDateMinute: {
      ref: idRef("ORDER_DATE.minute", "attribute"),
      identifier: "ORDER_DATE.minute"
      /**
       * Display Form Title: Order date - Minute
       * Display Form ID: ORDER_DATE.minute
       */
      ,
      Default: newAttribute("ORDER_DATE.minute")
    }
  }
  /**
   * Date Data Set Title: Inventory month
   * Date Data Set ID: INVENTORY_MONTH
   */
  ,
  InventoryMonth: {
    ref: idRef("INVENTORY_MONTH", "dataSet"),
    identifier: "INVENTORY_MONTH"
    /**
     * Date Attribute: Inventory month - Quarter of Year
     * Date Attribute ID: INVENTORY_MONTH.quarterOfYear
     */
    ,
    InventoryMonthQuarterOfYear: {
      ref: idRef("INVENTORY_MONTH.quarterOfYear", "attribute"),
      identifier: "INVENTORY_MONTH.quarterOfYear"
      /**
       * Display Form Title: Inventory month - Quarter of Year
       * Display Form ID: INVENTORY_MONTH.quarterOfYear
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.quarterOfYear")
    }
    /**
     * Date Attribute: Inventory month - Month of Year
     * Date Attribute ID: INVENTORY_MONTH.monthOfYear
     */
    ,
    InventoryMonthMonthOfYear: {
      ref: idRef("INVENTORY_MONTH.monthOfYear", "attribute"),
      identifier: "INVENTORY_MONTH.monthOfYear"
      /**
       * Display Form Title: Inventory month - Month of Year
       * Display Form ID: INVENTORY_MONTH.monthOfYear
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.monthOfYear")
    }
    /**
     * Date Attribute: Inventory month - Week of Year
     * Date Attribute ID: INVENTORY_MONTH.weekOfYear
     */
    ,
    InventoryMonthWeekOfYear: {
      ref: idRef("INVENTORY_MONTH.weekOfYear", "attribute"),
      identifier: "INVENTORY_MONTH.weekOfYear"
      /**
       * Display Form Title: Inventory month - Week of Year
       * Display Form ID: INVENTORY_MONTH.weekOfYear
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.weekOfYear")
    }
    /**
     * Date Attribute: Inventory month - Day of Year
     * Date Attribute ID: INVENTORY_MONTH.dayOfYear
     */
    ,
    InventoryMonthDayOfYear: {
      ref: idRef("INVENTORY_MONTH.dayOfYear", "attribute"),
      identifier: "INVENTORY_MONTH.dayOfYear"
      /**
       * Display Form Title: Inventory month - Day of Year
       * Display Form ID: INVENTORY_MONTH.dayOfYear
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.dayOfYear")
    }
    /**
     * Date Attribute: Inventory month - Day of Month
     * Date Attribute ID: INVENTORY_MONTH.dayOfMonth
     */
    ,
    InventoryMonthDayOfMonth: {
      ref: idRef("INVENTORY_MONTH.dayOfMonth", "attribute"),
      identifier: "INVENTORY_MONTH.dayOfMonth"
      /**
       * Display Form Title: Inventory month - Day of Month
       * Display Form ID: INVENTORY_MONTH.dayOfMonth
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.dayOfMonth")
    }
    /**
     * Date Attribute: Inventory month - Day of Week
     * Date Attribute ID: INVENTORY_MONTH.dayOfWeek
     */
    ,
    InventoryMonthDayOfWeek: {
      ref: idRef("INVENTORY_MONTH.dayOfWeek", "attribute"),
      identifier: "INVENTORY_MONTH.dayOfWeek"
      /**
       * Display Form Title: Inventory month - Day of Week
       * Display Form ID: INVENTORY_MONTH.dayOfWeek
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.dayOfWeek")
    }
    /**
     * Date Attribute: Inventory month - Hour of Day
     * Date Attribute ID: INVENTORY_MONTH.hourOfDay
     */
    ,
    InventoryMonthHourOfDay: {
      ref: idRef("INVENTORY_MONTH.hourOfDay", "attribute"),
      identifier: "INVENTORY_MONTH.hourOfDay"
      /**
       * Display Form Title: Inventory month - Hour of Day
       * Display Form ID: INVENTORY_MONTH.hourOfDay
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.hourOfDay")
    }
    /**
     * Date Attribute: Inventory month - Minute of Hour
     * Date Attribute ID: INVENTORY_MONTH.minuteOfHour
     */
    ,
    InventoryMonthMinuteOfHour: {
      ref: idRef("INVENTORY_MONTH.minuteOfHour", "attribute"),
      identifier: "INVENTORY_MONTH.minuteOfHour"
      /**
       * Display Form Title: Inventory month - Minute of Hour
       * Display Form ID: INVENTORY_MONTH.minuteOfHour
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.minuteOfHour")
    }
    /**
     * Date Attribute: Inventory month - Year
     * Date Attribute ID: INVENTORY_MONTH.year
     */
    ,
    InventoryMonthYear: {
      ref: idRef("INVENTORY_MONTH.year", "attribute"),
      identifier: "INVENTORY_MONTH.year"
      /**
       * Display Form Title: Inventory month - Year
       * Display Form ID: INVENTORY_MONTH.year
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.year")
    }
    /**
     * Date Attribute: Inventory month - Quarter/Year
     * Date Attribute ID: INVENTORY_MONTH.quarter
     */
    ,
    InventoryMonthQuarterYear: {
      ref: idRef("INVENTORY_MONTH.quarter", "attribute"),
      identifier: "INVENTORY_MONTH.quarter"
      /**
       * Display Form Title: Inventory month - Quarter/Year
       * Display Form ID: INVENTORY_MONTH.quarter
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.quarter")
    }
    /**
     * Date Attribute: Inventory month - Month/Year
     * Date Attribute ID: INVENTORY_MONTH.month
     */
    ,
    InventoryMonthMonthYear: {
      ref: idRef("INVENTORY_MONTH.month", "attribute"),
      identifier: "INVENTORY_MONTH.month"
      /**
       * Display Form Title: Inventory month - Month/Year
       * Display Form ID: INVENTORY_MONTH.month
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.month")
    }
    /**
     * Date Attribute: Inventory month - Week/Year
     * Date Attribute ID: INVENTORY_MONTH.week
     */
    ,
    InventoryMonthWeekYear: {
      ref: idRef("INVENTORY_MONTH.week", "attribute"),
      identifier: "INVENTORY_MONTH.week"
      /**
       * Display Form Title: Inventory month - Week/Year
       * Display Form ID: INVENTORY_MONTH.week
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.week")
    }
    /**
     * Date Attribute: Inventory month - Date
     * Date Attribute ID: INVENTORY_MONTH.day
     */
    ,
    InventoryMonthDate: {
      ref: idRef("INVENTORY_MONTH.day", "attribute"),
      identifier: "INVENTORY_MONTH.day"
      /**
       * Display Form Title: Inventory month - Date
       * Display Form ID: INVENTORY_MONTH.day
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.day")
    }
    /**
     * Date Attribute: Inventory month - Hour
     * Date Attribute ID: INVENTORY_MONTH.hour
     */
    ,
    InventoryMonthHour: {
      ref: idRef("INVENTORY_MONTH.hour", "attribute"),
      identifier: "INVENTORY_MONTH.hour"
      /**
       * Display Form Title: Inventory month - Hour
       * Display Form ID: INVENTORY_MONTH.hour
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.hour")
    }
    /**
     * Date Attribute: Inventory month - Minute
     * Date Attribute ID: INVENTORY_MONTH.minute
     */
    ,
    InventoryMonthMinute: {
      ref: idRef("INVENTORY_MONTH.minute", "attribute"),
      identifier: "INVENTORY_MONTH.minute"
      /**
       * Display Form Title: Inventory month - Minute
       * Display Form ID: INVENTORY_MONTH.minute
       */
      ,
      Default: newAttribute("INVENTORY_MONTH.minute")
    }
  }
};
export const Insights = {
  /**
   * Insight Title: Gross Profit Margin
   * Insight ID: 03b89e08-ee06-4e1f-88d8-bbd805c691cc
   */
  GrossProfitMargin_1: "03b89e08-ee06-4e1f-88d8-bbd805c691cc"
  /**
   * Insight Title: Net Sales by Product Category Seasonality
   * Insight ID: 09a05f3f-d0cd-423a-8844-eba4ba7ca0c4
   */
  ,
  NetSalesByProductCategorySeasonality: "09a05f3f-d0cd-423a-8844-eba4ba7ca0c4"
  /**
   * Insight Title: Sales per Customer
   * Insight ID: 0c7ac154-1766-4d54-ba2b-b6f6913a59dd
   */
  ,
  SalesPerCustomer: "0c7ac154-1766-4d54-ba2b-b6f6913a59dd"
  /**
   * Insight Title: Order details
   * Insight ID: 1b9ce816-a4f9-4301-bdfd-d36c6a7a71b6
   */
  ,
  OrderDetails: "1b9ce816-a4f9-4301-bdfd-d36c6a7a71b6"
  /**
   * Insight Title: Total sales over time
   * Insight ID: 25bdccd8-ef39-40a5-a224-6031d0ab470c
   */
  ,
  TotalSalesOverTime: "25bdccd8-ef39-40a5-a224-6031d0ab470c"
  /**
   * Insight Title: Net Sales vs Orders
   * Insight ID: 2da13424-2a6b-4ed4-916c-9bbc002fdd1b
   */
  ,
  NetSalesVsOrders: "2da13424-2a6b-4ed4-916c-9bbc002fdd1b"
  /**
   * Insight Title: Customers by Country and State
   * Insight ID: 2f12ace7-e626-47f1-953d-5ae957ca108e
   */
  ,
  CustomersByCountryAndState: "2f12ace7-e626-47f1-953d-5ae957ca108e"
  /**
   * Insight Title: Orders Paid
   * Insight ID: 3ac5e106-b43e-4c87-9ef0-9315e02282bd
   */
  ,
  OrdersPaid: "3ac5e106-b43e-4c87-9ef0-9315e02282bd"
  /**
   * Insight Title: Revenue Trend
   * Insight ID: 3e16ebe3-7753-40c6-abc1-f549e7bf4d6c
   */
  ,
  RevenueTrend: "3e16ebe3-7753-40c6-abc1-f549e7bf4d6c"
  /**
   * Insight Title: Brands by Gross Profit and Avg Price of Product
   * Insight ID: 405034d6-ab9c-462a-a88e-3172598adc65
   */
  ,
  BrandsByGrossProfitAndAvgPriceOfProduct: "405034d6-ab9c-462a-a88e-3172598adc65"
  /**
   * Insight Title: Total sales breakdown
   * Insight ID: 41a8d4c3-1ab6-4bab-b531-5893912e9b93
   */
  ,
  TotalSalesBreakdown: "41a8d4c3-1ab6-4bab-b531-5893912e9b93"
  /**
   * Insight Title: Sales detail
   * Insight ID: 469e8936-ca67-4987-8c70-0e35be24be4d
   */
  ,
  SalesDetail: "469e8936-ca67-4987-8c70-0e35be24be4d"
  /**
   * Insight Title: New vs Returning Trend
   * Insight ID: 48000537-4586-4a1e-a9a5-8eda7f8151a8
   */
  ,
  NewVsReturningTrend: "48000537-4586-4a1e-a9a5-8eda7f8151a8"
  /**
   * Insight Title: Return Customers
   * Insight ID: 4cea4177-37c5-4196-8aab-c6bf60dc1f22
   */
  ,
  ReturnCustomers_1: "4cea4177-37c5-4196-8aab-c6bf60dc1f22"
  /**
   * Insight Title: Gross Profit Margin Detail
   * Insight ID: 5297352c-7fd3-4e7e-90ad-026e470f55bd
   */
  ,
  GrossProfitMarginDetail: "5297352c-7fd3-4e7e-90ad-026e470f55bd"
  /**
   * Insight Title: Customer Detail
   * Insight ID: 543cadbb-10b4-4153-b810-52586df7aa0e
   */
  ,
  CustomerDetail: "543cadbb-10b4-4153-b810-52586df7aa0e"
  /**
   * Insight Title: Customers by State
   * Insight ID: 544ee04b-7fcc-41a3-8323-852de0613815
   */
  ,
  CustomersByState: "544ee04b-7fcc-41a3-8323-852de0613815"
  /**
   * Insight Title: Top 10 Sellers
   * Insight ID: 603bbd58-ea50-4607-ad20-418bd95c06c8
   */
  ,
  Top10Sellers: "603bbd58-ea50-4607-ad20-418bd95c06c8"
  /**
   * Insight Title: Top 10 Spenders
   * Insight ID: 607e9724-37ed-44f6-9fb4-55676d58df6e
   */
  ,
  Top10Spenders: "607e9724-37ed-44f6-9fb4-55676d58df6e"
  /**
   * Insight Title: Net sales over time
   * Insight ID: 60dd3592-1322-4260-aaad-bd51cdcb1343
   */
  ,
  NetSalesOverTime: "60dd3592-1322-4260-aaad-bd51cdcb1343"
  /**
   * Insight Title: Net Sales Breakdown
   * Insight ID: 643699f3-f980-44f6-b618-4b3d3f3f560e
   */
  ,
  NetSalesBreakdown: "643699f3-f980-44f6-b618-4b3d3f3f560e"
  /**
   * Insight Title: Product detail
   * Insight ID: 65120fa4-2805-4f70-b576-01d138117cf4
   */
  ,
  ProductDetail: "65120fa4-2805-4f70-b576-01d138117cf4"
  /**
   * Insight Title: Sales Goal
   * Insight ID: 68ddf963-edce-4f88-a8d5-09bf3825b124
   */
  ,
  SalesGoal: "68ddf963-edce-4f88-a8d5-09bf3825b124"
  /**
   * Insight Title: Net Sales by Product Category
   * Insight ID: 6e336114-d0b6-4287-acc4-be6e39e13e30
   */
  ,
  NetSalesByProductCategory: "6e336114-d0b6-4287-acc4-be6e39e13e30"
  /**
   * Insight Title: Net Sales
   * Insight ID: 700d732d-67e1-4658-a6e0-c6b8edbb6d49
   */
  ,
  NetSales_1: "700d732d-67e1-4658-a6e0-c6b8edbb6d49"
  /**
   * Insight Title: Top 10 Money Makers
   * Insight ID: 7b49dbdb-f9ab-41dd-9cb4-cd13627d67c3
   */
  ,
  Top10MoneyMakers: "7b49dbdb-f9ab-41dd-9cb4-cd13627d67c3"
  /**
   * Insight Title: Active Customers Breakdown
   * Insight ID: 7de6202d-2e52-4bed-9e80-6c3ce8cedaaa
   */
  ,
  ActiveCustomersBreakdown: "7de6202d-2e52-4bed-9e80-6c3ce8cedaaa"
  /**
   * Insight Title: Total Sales
   * Insight ID: 86193049-01b6-438d-bd13-070b71459147
   */
  ,
  TotalSales_1: "86193049-01b6-438d-bd13-070b71459147"
  /**
   * Insight Title: Top 10 Buyers
   * Insight ID: 8e8f236e-1bb2-48b3-828e-48706c684629
   */
  ,
  Top10Buyers: "8e8f236e-1bb2-48b3-828e-48706c684629"
  /**
   * Insight Title: Gross Profit Trend
   * Insight ID: 9570eab0-b451-48be-9e24-3c106fe898a2
   */
  ,
  GrossProfitTrend: "9570eab0-b451-48be-9e24-3c106fe898a2"
  /**
   * Insight Title: Customers by State (on Overview)
   * Insight ID: 996ccc2e-8f9e-4525-be61-2f3152ff8ce9
   */
  ,
  CustomersByStateOnOverview: "996ccc2e-8f9e-4525-be61-2f3152ff8ce9"
  /**
   * Insight Title: Total customers
   * Insight ID: 9f2a657a-22e1-4791-8216-7a354bb8de5d
   */
  ,
  TotalCustomers_1: "9f2a657a-22e1-4791-8216-7a354bb8de5d"
  /**
   * Insight Title: Total Sales Trend
   * Insight ID: a178265c-53ba-4c15-8c1f-d7e168506c92
   */
  ,
  TotalSalesTrend: "a178265c-53ba-4c15-8c1f-d7e168506c92"
  /**
   * Insight Title: Orders over time
   * Insight ID: a2b50fff-c7eb-444c-95e6-67037d2544d6
   */
  ,
  OrdersOverTime: "a2b50fff-c7eb-444c-95e6-67037d2544d6"
  /**
   * Insight Title: New Customers
   * Insight ID: a347814a-a893-4354-915d-29699b92a6d7
   */
  ,
  NewCustomers_1: "a347814a-a893-4354-915d-29699b92a6d7"
  /**
   * Insight Title: Total Sales
   * Insight ID: adf2b786-32bd-4864-b251-7e2cfe9a006f
   */
  ,
  TotalSales_2: "adf2b786-32bd-4864-b251-7e2cfe9a006f"
  /**
   * Insight Title: Order breakdown
   * Insight ID: b4497110-8d8a-4ab3-9cd5-471b60d8e561
   */
  ,
  OrderBreakdown: "b4497110-8d8a-4ab3-9cd5-471b60d8e561"
  /**
   * Insight Title: Gross Profit
   * Insight ID: b666412b-3c13-4e80-9b3f-7787558aa3ce
   */
  ,
  GrossProfit_1: "b666412b-3c13-4e80-9b3f-7787558aa3ce"
  /**
   * Insight Title: Active Customers
   * Insight ID: dc8575f5-27e5-44be-a2dc-23d54b7777e7
   */
  ,
  ActiveCustomers_1: "dc8575f5-27e5-44be-a2dc-23d54b7777e7"
  /**
   * Insight Title: Net Sales by Product Category (v2)
   * Insight ID: e32644ad-1921-4b89-a7d2-79f31826e5cf
   */
  ,
  NetSalesByProductCategoryV2: "e32644ad-1921-4b89-a7d2-79f31826e5cf"
  /**
   * Insight Title: Activity by Hour
   * Insight ID: f1027458-1123-4f4d-af20-0e21b1d5e009
   */
  ,
  ActivityByHour: "f1027458-1123-4f4d-af20-0e21b1d5e009"
  /**
   * Insight Title: Test
   * Insight ID: ffd46c19-7009-43ef-9d5f-90eee91965a4
   */
  ,
  Test: "ffd46c19-7009-43ef-9d5f-90eee91965a4"
  /**
   * Insight Title: Avg Price of Products by Brand by Category
   * Insight ID: de36e7b8-5d8c-45bb-8d44-16d301973b68
   */
  ,
  AvgPriceOfProductsByBrandByCategory: "de36e7b8-5d8c-45bb-8d44-16d301973b68"
};
export const Dashboards = {
  /**
   * Dashboard Title: 1. Overview
   * Dashboard ID: 092929af-375a-4e9c-964f-2add8cdbd259
   */
  _1Overview: "092929af-375a-4e9c-964f-2add8cdbd259"
  /**
   * Dashboard Title: 3. Customers
   * Dashboard ID: 370ec88c-2235-4e65-bb7c-5318280069a1
   */
  ,
  _3Customers: "370ec88c-2235-4e65-bb7c-5318280069a1"
  /**
   * Dashboard Title: 2. Sales
   * Dashboard ID: bf439696-d6c6-4d41-a102-dd98e2f3da35
   */
  ,
  _2Sales: "bf439696-d6c6-4d41-a102-dd98e2f3da35"
  /**
   * Dashboard Title: 4. Products
   * Dashboard ID: c1d67cd4-94ad-40aa-91a5-cdf4143f778a
   */
  ,
  _4Products: "c1d67cd4-94ad-40aa-91a5-cdf4143f778a"
};