/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-08-30T16:33:15.017Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Account L1
 * Attribute ID: attr.accountextended.accountl1
 */
export const AccountL1: IAttribute = newAttribute("label.accountextended.accountl1");
/**
 * Attribute Title: Account L2
 * Attribute ID: attr.accountextended.accountl2
 */
export const AccountL2: IAttribute = newAttribute("label.accountextended.accountl2");
/**
 * Attribute Title: Account L3
 * Attribute ID: attr.accountextended.accountl3
 */
export const AccountL3: IAttribute = newAttribute("label.accountextended.accountl3");
/**
 * Attribute Title: Account Name
 * Attribute ID: attr.accountextended.accountname
 */
export const AccountName: IAttribute = newAttribute("label.accountextended.accountname");
/**
 * Attribute Title: Account Type
 * Attribute ID: attr.accountextended.accounttype
 */
export const AccountType: IAttribute = newAttribute("label.accountextended.accounttype");
/**
 * Attribute Title: Allocation
 * Attribute ID: attr.transactions.allocation
 */
export const Allocation: IAttribute = newAttribute("label.transactions.allocation");
/**
 * Attribute Title: Class
 * Attribute ID: attr.transactions.class
 */
export const Class: IAttribute = newAttribute("label.transactions.class");
/**
 * Attribute Title: Department
 * Attribute ID: attr.transactions.department
 */
export const Department: IAttribute = newAttribute("label.transactions.department");
/**
 * Attribute Title: Document Number
 * Attribute ID: attr.transactions.documentnumber
 */
export const DocumentNumber: IAttribute = newAttribute("label.transactions.documentnumber");
/**
 * Attribute Title: Expense CoR
 * Attribute ID: attr.transactions.expensecor
 */
export const ExpenseCoR: IAttribute = newAttribute("label.transactions.expensecor");
/**
 * Attribute Title: Finance Department
 * Attribute ID: attr.transactions.financedepartment
 */
export const FinanceDepartment: IAttribute = newAttribute("label.transactions.financedepartment");
/**
 * Attribute Title: GL Code
 * Attribute ID: attr.accountextended.glcode
 */
export const GLCode: IAttribute = newAttribute("label.accountextended.glcode");
/**
 * Attribute Title: Intercompany
 * Attribute ID: attr.transactions.intercompany
 */
export const Intercompany: IAttribute = newAttribute("label.transactions.intercompany");
/**
 * Attribute Title: Location
 * Attribute ID: attr.transactions.location
 */
export const Location: IAttribute = newAttribute("label.transactions.location");
/**
 * Attribute Title: Memo
 * Attribute ID: attr.transactions.memo
 */
export const Memo: IAttribute = newAttribute("label.transactions.memo");
/**
 * Attribute Title: QBR
 * Attribute ID: attr.transactions.qbr
 */
export const QBR: IAttribute = newAttribute("label.transactions.qbr");
/**
 * Attribute Title: Subsidiary
 * Attribute ID: attr.transactions.subsidiary
 */
export const Subsidiary: IAttribute = newAttribute("label.transactions.subsidiary");
/**
 * Attribute Title: Type
 * Attribute ID: attr.transactions.type
 */
export const Type: IAttribute = newAttribute("label.transactions.type");
/**
 * Attribute Title: Vendor is Employee
 * Attribute ID: attr.transactions.vendorisemployee
 */
export const VendorIsEmployee: IAttribute = newAttribute("label.transactions.vendorisemployee");
/**
 * Attribute Title: Vendor Name
 * Attribute ID: attr.vendor.vendorname
 */
export const VendorName: IAttribute = newAttribute("label.vendor.vendorname");
/**
 * Metric Title: Amount [Sum]
 * Metric ID: abD4a7Vpy4xL
 * Metric Type: MAQL Metric
 */
export const AmountSum: IMeasure<IMeasureDefinition> = newMeasure(idRef("abD4a7Vpy4xL", "measure"));
/**
 * Metric Title: COS
 * Metric ID: abN8Sm2RfDrW
 * Metric Type: MAQL Metric
 */
export const COS: IMeasure<IMeasureDefinition> = newMeasure(idRef("abN8Sm2RfDrW", "measure"));
/**
 * Metric Title: Earnings before Tax
 * Metric ID: aaV84pL6jdKs
 * Metric Type: MAQL Metric
 */
export const EarningsBeforeTax: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaV84pL6jdKs", "measure"));
/**
 * Metric Title: EBITDA
 * Metric ID: aad89IeUsdQa
 * Metric Type: MAQL Metric
 */
export const EBITDA: IMeasure<IMeasureDefinition> = newMeasure(idRef("aad89IeUsdQa", "measure"));
/**
 * Metric Title: Gross Margin
 * Metric ID: ab28PPCOyCgs
 * Metric Type: MAQL Metric
 */
export const GrossMargin: IMeasure<IMeasureDefinition> = newMeasure(idRef("ab28PPCOyCgs", "measure"));
/**
 * Metric Title: Net Income
 * Metric ID: abD8UI7phw3l
 * Metric Type: MAQL Metric
 */
export const NetIncome: IMeasure<IMeasureDefinition> = newMeasure(idRef("abD8UI7phw3l", "measure"));
/**
 * Metric Title: Net Profit Margin
 * Metric ID: aeaaopl3o3Rm
 * Metric Type: MAQL Metric
 */
export const NetProfitMargin: IMeasure<IMeasureDefinition> = newMeasure(idRef("aeaaopl3o3Rm", "measure"));
/**
 * Metric Title: Operating Expenses
 * Metric ID: abd824Nym8CP
 * Metric Type: MAQL Metric
 */
export const OperatingExpenses: IMeasure<IMeasureDefinition> = newMeasure(idRef("abd824Nym8CP", "measure"));
/**
 * Metric Title: Operating Expenses (negative)
 * Metric ID: aaW9MYNmTRha
 * Metric Type: MAQL Metric
 */
export const OperatingExpensesNegative: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaW9MYNmTRha", "measure"));
/**
 * Metric Title: Other Expense
 * Metric ID: aab9buYCWy4s
 * Metric Type: MAQL Metric
 */
export const OtherExpense: IMeasure<IMeasureDefinition> = newMeasure(idRef("aab9buYCWy4s", "measure"));
/**
 * Metric Title: Other Income
 * Metric ID: aa886vopekJ7
 * Metric Type: MAQL Metric
 */
export const OtherIncome: IMeasure<IMeasureDefinition> = newMeasure(idRef("aa886vopekJ7", "measure"));
/**
 * Metric Title: Revenue
 * Metric ID: abI8WdbUq3oU
 * Metric Type: MAQL Metric
 */
export const Revenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("abI8WdbUq3oU", "measure"));
/**
 * Metric Title: Tax
 * Metric ID: acV90WTcQqku
 * Metric Type: MAQL Metric
 */
export const Tax: IMeasure<IMeasureDefinition> = newMeasure(idRef("acV90WTcQqku", "measure"));
/**
 * Metric Title: Taxes
 * Metric ID: abhaKLkSigbe
 * Metric Type: MAQL Metric
 */
export const Taxes: IMeasure<IMeasureDefinition> = newMeasure(idRef("abhaKLkSigbe", "measure"));
/**
 * Fact Title: Amount
 * Fact ID: fact.transactions.amount
 */
export const Amount = {
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Amount
   * Fact ID: fact.transactions.amount
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("fact.transactions.amount", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Amount Foreign Currency
 * Fact ID: fact.transactions.amountforeigncurrency
 */
export const AmountForeignCurrency = {
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Amount Foreign Currency
   * Fact ID: fact.transactions.amountforeigncurrency
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("fact.transactions.amountforeigncurrency", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Year (Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.year.default");
/**
 * Attribute Title: Quarter (Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarter: IAttribute = newAttribute("date.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.week.wk_year
   */
  WeekNrYear: newAttribute("date.week.wk_year")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.week.starting
   */,
  WeekStarting: newAttribute("date.week.starting")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.week.from_to
   */,
  FromTo: newAttribute("date.week.from_to")
  /**
   * Display Form Title: Week #/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_year_cont
   */,
  WeekNrYear_1: newAttribute("date.week.wk_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
   * Display Form ID: date.week.wk_qtr_year_cont
   */,
  WkQtrYear: newAttribute("date.week.wk_qtr_year_cont")
  /**
   * Display Form Title: Wk/Qtr/Year (Date)
   * Display Form ID: date.week.wk_qtr_year
   */,
  WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSat: IAttribute = newAttribute("date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatOfQtr: IAttribute = newAttribute("date.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunYear = {
  /**
   * Display Form Title: Week #/Year (W1/2010) (Date)
   * Display Form ID: date.euweek.wk_year
   */
  WeekNrYear: newAttribute("date.euweek.wk_year")
  /**
   * Display Form Title: Week Starting (Date)
   * Display Form ID: date.euweek.starting
   */,
  WeekStarting: newAttribute("date.euweek.starting")
  /**
   * Display Form Title: From - To (Date)
   * Display Form ID: date.euweek.from_to
   */,
  FromTo: newAttribute("date.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSun: IAttribute = newAttribute("date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunOfQtr: IAttribute = newAttribute("date.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonth = {
  /**
   * Display Form Title: Short (Jan) (Date)
   * Display Form ID: date.month.in.year.short
   */
  Short: newAttribute("date.month.in.year.short")
  /**
   * Display Form Title: Long (January) (Date)
   * Display Form ID: date.month.in.year.long
   */,
  Long: newAttribute("date.month.in.year.long")
  /**
   * Display Form Title: Number (M1) (Date)
   * Display Form ID: date.month.in.year.number
   */,
  Number: newAttribute("date.month.in.year.number")
  /**
   * Display Form Title: M/Q (M1/Q1) (Date)
   * Display Form ID: date.month.in.year.m_q
   */,
  MQ: newAttribute("date.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfQuarter: IAttribute = newAttribute("date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekSunSat = {
  /**
   * Display Form Title: Short (Sun) (Date)
   * Display Form ID: date.day.in.week.short
   */
  Short: newAttribute("date.day.in.week.short")
  /**
   * Display Form Title: Long (Sunday) (Date)
   * Display Form ID: date.day.in.week.long
   */,
  Long: newAttribute("date.day.in.week.long")
  /**
   * Display Form Title: Number (1=Sunday) (Date)
   * Display Form ID: date.day.in.week.number
   */,
  Number: newAttribute("date.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekMonSun = {
  /**
   * Display Form Title: Short (Mon) (Date)
   * Display Form ID: date.day.in.euweek.short
   */
  Short: newAttribute("date.day.in.euweek.short")
  /**
   * Display Form Title: Long (Monday) (Date)
   * Display Form ID: date.day.in.euweek.long
   */,
  Long: newAttribute("date.day.in.euweek.long")
  /**
   * Display Form Title: Number (1=Monday) (Date)
   * Display Form ID: date.day.in.euweek.number
   */,
  Number: newAttribute("date.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfQuarter: IAttribute = newAttribute("date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear = {
  /**
   * Display Form Title: Short (Jan 2010) (Date)
   * Display Form ID: date.month.short
   */
  Short: newAttribute("date.month.short")
  /**
   * Display Form Title: Long (January 2010) (Date)
   * Display Form ID: date.month.long
   */,
  Long: newAttribute("date.month.long")
  /**
   * Display Form Title: Number (1/2010) (Date)
   * Display Form ID: date.month.number
   */,
  Number: newAttribute("date.month.number"),
};
/**
 * Attribute Title: Date (Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate = {
  /**
   * Display Form Title: mm/dd/yyyy (Date)
   * Display Form ID: date.date.day.us.mm_dd_yyyy
   */
  MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy")
  /**
   * Display Form Title: yyyy-mm-dd (Date)
   * Display Form ID: date.date.day.yyyy_mm_dd
   */,
  YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd")
  /**
   * Display Form Title: m/d/yy (no leading zeroes) (Date)
   * Display Form ID: date.date.day.us.m_d_yy
   */,
  MDYy: newAttribute("date.date.day.us.m_d_yy")
  /**
   * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
   * Display Form ID: date.date.day.us.long
   */,
  Long: newAttribute("date.date.day.us.long")
  /**
   * Display Form Title: dd/mm/yyyy (Date)
   * Display Form ID: date.date.day.uk.dd_mm_yyyy
   */,
  DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy")
  /**
   * Display Form Title: dd-mm-yyyy (Date)
   * Display Form ID: date.date.day.eu.dd_mm_yyyy
   */,
  DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date)
 * Attribute ID: date.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateUSWeekYear: IAttribute = newAttribute("date.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date)
 * Attribute ID: date.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateEUWeekYear: IAttribute = newAttribute("date.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date)
 * Attribute ID: date.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateUSWeekQuarter: IAttribute = newAttribute("date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date)
 * Attribute ID: date.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateEUWeekQuarter: IAttribute = newAttribute("date.quarter.for.euweek.number");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date (Date)
   * Date Data Set ID: date.dataset.dt
   */
  Date: {
    ref: idRef("date.dataset.dt", "dataSet"),
    identifier: "date.dataset.dt"
    /**
     * Date Attribute: Year (Date)
     * Date Attribute ID: date.year
     */,
    Year: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Year (Date)
       * Display Form ID: date.year.default
       */,
      Default: newAttribute("date.year.default"),
    }
    /**
     * Date Attribute: Quarter (Date)
     * Date Attribute ID: date.quarter.in.year
     */,
    Quarter: {
      ref: idRef("date.quarter.in.year", "attribute"),
      identifier: "date.quarter.in.year"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.quarter.in.year.default
       */,
      Default: newAttribute("date.quarter.in.year.default"),
    }
    /**
     * Date Attribute: Week (Sun-Sat)/Year (Date)
     * Date Attribute ID: date.week
     */,
    WeekSunSatYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Week #/Year (W1/2010) (Date)
       * Display Form ID: date.week.wk_year
       */,
      WeekNrYear: newAttribute("date.week.wk_year")
      /**
       * Display Form Title: Week Starting (Date)
       * Display Form ID: date.week.starting
       */,
      WeekStarting: newAttribute("date.week.starting")
      /**
       * Display Form Title: From - To (Date)
       * Display Form ID: date.week.from_to
       */,
      FromTo: newAttribute("date.week.from_to")
      /**
       * Display Form Title: Week #/Year (Cont.) (Date)
       * Display Form ID: date.week.wk_year_cont
       */,
      WeekNrYear_1: newAttribute("date.week.wk_year_cont")
      /**
       * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
       * Display Form ID: date.week.wk_qtr_year_cont
       */,
      WkQtrYear: newAttribute("date.week.wk_qtr_year_cont")
      /**
       * Display Form Title: Wk/Qtr/Year (Date)
       * Display Form ID: date.week.wk_qtr_year
       */,
      WkQtrYear_1: newAttribute("date.week.wk_qtr_year"),
    }
    /**
     * Date Attribute: Week (Sun-Sat) (Date)
     * Date Attribute ID: date.week.in.year
     */,
    WeekSunSat: {
      ref: idRef("date.week.in.year", "attribute"),
      identifier: "date.week.in.year"
      /**
       * Display Form Title: Number US (Date)
       * Display Form ID: date.week.in.year.number_us
       */,
      NumberUS: newAttribute("date.week.in.year.number_us"),
    }
    /**
     * Date Attribute: Week (Sun-Sat) of Qtr (Date)
     * Date Attribute ID: date.week.in.quarter
     */,
    WeekSunSatOfQtr: {
      ref: idRef("date.week.in.quarter", "attribute"),
      identifier: "date.week.in.quarter"
      /**
       * Display Form Title: Number US (Date)
       * Display Form ID: date.week.in.quarter.number_us
       */,
      NumberUS: newAttribute("date.week.in.quarter.number_us"),
    }
    /**
     * Date Attribute: Week (Mon-Sun)/Year (Date)
     * Date Attribute ID: date.euweek
     */,
    WeekMonSunYear: {
      ref: idRef("date.euweek", "attribute"),
      identifier: "date.euweek"
      /**
       * Display Form Title: Week #/Year (W1/2010) (Date)
       * Display Form ID: date.euweek.wk_year
       */,
      WeekNrYear: newAttribute("date.euweek.wk_year")
      /**
       * Display Form Title: Week Starting (Date)
       * Display Form ID: date.euweek.starting
       */,
      WeekStarting: newAttribute("date.euweek.starting")
      /**
       * Display Form Title: From - To (Date)
       * Display Form ID: date.euweek.from_to
       */,
      FromTo: newAttribute("date.euweek.from_to"),
    }
    /**
     * Date Attribute: Week (Mon-Sun) (Date)
     * Date Attribute ID: date.euweek.in.year
     */,
    WeekMonSun: {
      ref: idRef("date.euweek.in.year", "attribute"),
      identifier: "date.euweek.in.year"
      /**
       * Display Form Title: Number EU (Date)
       * Display Form ID: date.euweek.in.year.number_eu
       */,
      NumberEU: newAttribute("date.euweek.in.year.number_eu"),
    }
    /**
     * Date Attribute: Week (Mon-Sun) of Qtr (Date)
     * Date Attribute ID: date.euweek.in.quarter
     */,
    WeekMonSunOfQtr: {
      ref: idRef("date.euweek.in.quarter", "attribute"),
      identifier: "date.euweek.in.quarter"
      /**
       * Display Form Title: Number EU (Date)
       * Display Form ID: date.euweek.in.quarter.number_eu
       */,
      NumberEU: newAttribute("date.euweek.in.quarter.number_eu"),
    }
    /**
     * Date Attribute: Month (Date)
     * Date Attribute ID: date.month.in.year
     */,
    Month: {
      ref: idRef("date.month.in.year", "attribute"),
      identifier: "date.month.in.year"
      /**
       * Display Form Title: Short (Jan) (Date)
       * Display Form ID: date.month.in.year.short
       */,
      Short: newAttribute("date.month.in.year.short")
      /**
       * Display Form Title: Long (January) (Date)
       * Display Form ID: date.month.in.year.long
       */,
      Long: newAttribute("date.month.in.year.long")
      /**
       * Display Form Title: Number (M1) (Date)
       * Display Form ID: date.month.in.year.number
       */,
      Number: newAttribute("date.month.in.year.number")
      /**
       * Display Form Title: M/Q (M1/Q1) (Date)
       * Display Form ID: date.month.in.year.m_q
       */,
      MQ: newAttribute("date.month.in.year.m_q"),
    }
    /**
     * Date Attribute: Month of Quarter (Date)
     * Date Attribute ID: date.month.in.quarter
     */,
    MonthOfQuarter: {
      ref: idRef("date.month.in.quarter", "attribute"),
      identifier: "date.month.in.quarter"
      /**
       * Display Form Title: Number (Date)
       * Display Form ID: date.month.in.quarter.number
       */,
      Number: newAttribute("date.month.in.quarter.number"),
    }
    /**
     * Date Attribute: Day of Year (Date)
     * Date Attribute ID: date.day.in.year
     */,
    DayOfYear: {
      ref: idRef("date.day.in.year", "attribute"),
      identifier: "date.day.in.year"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.year.default
       */,
      Default: newAttribute("date.day.in.year.default"),
    }
    /**
     * Date Attribute: Day of Week (Sun-Sat) (Date)
     * Date Attribute ID: date.day.in.week
     */,
    DayOfWeekSunSat: {
      ref: idRef("date.day.in.week", "attribute"),
      identifier: "date.day.in.week"
      /**
       * Display Form Title: Short (Sun) (Date)
       * Display Form ID: date.day.in.week.short
       */,
      Short: newAttribute("date.day.in.week.short")
      /**
       * Display Form Title: Long (Sunday) (Date)
       * Display Form ID: date.day.in.week.long
       */,
      Long: newAttribute("date.day.in.week.long")
      /**
       * Display Form Title: Number (1=Sunday) (Date)
       * Display Form ID: date.day.in.week.number
       */,
      Number: newAttribute("date.day.in.week.number"),
    }
    /**
     * Date Attribute: Day of Week (Mon-Sun) (Date)
     * Date Attribute ID: date.day.in.euweek
     */,
    DayOfWeekMonSun: {
      ref: idRef("date.day.in.euweek", "attribute"),
      identifier: "date.day.in.euweek"
      /**
       * Display Form Title: Short (Mon) (Date)
       * Display Form ID: date.day.in.euweek.short
       */,
      Short: newAttribute("date.day.in.euweek.short")
      /**
       * Display Form Title: Long (Monday) (Date)
       * Display Form ID: date.day.in.euweek.long
       */,
      Long: newAttribute("date.day.in.euweek.long")
      /**
       * Display Form Title: Number (1=Monday) (Date)
       * Display Form ID: date.day.in.euweek.number
       */,
      Number: newAttribute("date.day.in.euweek.number"),
    }
    /**
     * Date Attribute: Day of Quarter (Date)
     * Date Attribute ID: date.day.in.quarter
     */,
    DayOfQuarter: {
      ref: idRef("date.day.in.quarter", "attribute"),
      identifier: "date.day.in.quarter"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.quarter.default
       */,
      Default: newAttribute("date.day.in.quarter.default"),
    }
    /**
     * Date Attribute: Day of Month (Date)
     * Date Attribute ID: date.day.in.month
     */,
    DayOfMonth: {
      ref: idRef("date.day.in.month", "attribute"),
      identifier: "date.day.in.month"
      /**
       * Display Form Title: default (Date)
       * Display Form ID: date.day.in.month.default
       */,
      Default: newAttribute("date.day.in.month.default"),
    }
    /**
     * Date Attribute: Quarter/Year (Date)
     * Date Attribute ID: date.quarter
     */,
    QuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: US Short (Date)
       * Display Form ID: date.quarter.short_us
       */,
      USShort: newAttribute("date.quarter.short_us"),
    }
    /**
     * Date Attribute: Month/Year (Date)
     * Date Attribute ID: date.month
     */,
    MonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Short (Jan 2010) (Date)
       * Display Form ID: date.month.short
       */,
      Short: newAttribute("date.month.short")
      /**
       * Display Form Title: Long (January 2010) (Date)
       * Display Form ID: date.month.long
       */,
      Long: newAttribute("date.month.long")
      /**
       * Display Form Title: Number (1/2010) (Date)
       * Display Form ID: date.month.number
       */,
      Number: newAttribute("date.month.number"),
    }
    /**
     * Date Attribute: Date (Date)
     * Date Attribute ID: date.date
     */,
    Date: {
      ref: idRef("date.date", "attribute"),
      identifier: "date.date"
      /**
       * Display Form Title: mm/dd/yyyy (Date)
       * Display Form ID: date.date.day.us.mm_dd_yyyy
       */,
      MmDdYyyy: newAttribute("date.date.day.us.mm_dd_yyyy")
      /**
       * Display Form Title: yyyy-mm-dd (Date)
       * Display Form ID: date.date.day.yyyy_mm_dd
       */,
      YyyyMmDd: newAttribute("date.date.day.yyyy_mm_dd")
      /**
       * Display Form Title: m/d/yy (no leading zeroes) (Date)
       * Display Form ID: date.date.day.us.m_d_yy
       */,
      MDYy: newAttribute("date.date.day.us.m_d_yy")
      /**
       * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
       * Display Form ID: date.date.day.us.long
       */,
      Long: newAttribute("date.date.day.us.long")
      /**
       * Display Form Title: dd/mm/yyyy (Date)
       * Display Form ID: date.date.day.uk.dd_mm_yyyy
       */,
      DdMmYyyy: newAttribute("date.date.day.uk.dd_mm_yyyy")
      /**
       * Display Form Title: dd-mm-yyyy (Date)
       * Display Form ID: date.date.day.eu.dd_mm_yyyy
       */,
      DdMmYyyy_1: newAttribute("date.date.day.eu.dd_mm_yyyy"),
    }
    /**
     * Date Attribute: US Week Year (Date)
     * Date Attribute ID: date.year.for.week
     */,
    USWeekYear: {
      ref: idRef("date.year.for.week", "attribute"),
      identifier: "date.year.for.week"
      /**
       * Display Form Title: Week Year (Date)
       * Display Form ID: date.year.for.week.number
       */,
      WeekYear: newAttribute("date.year.for.week.number"),
    }
    /**
     * Date Attribute: EU Week Year (Date)
     * Date Attribute ID: date.year.for.euweek
     */,
    EUWeekYear: {
      ref: idRef("date.year.for.euweek", "attribute"),
      identifier: "date.year.for.euweek"
      /**
       * Display Form Title: Week Year (Date)
       * Display Form ID: date.year.for.euweek.number
       */,
      WeekYear: newAttribute("date.year.for.euweek.number"),
    }
    /**
     * Date Attribute: US Week Quarter (Date)
     * Date Attribute ID: date.quarter.for.week
     */,
    USWeekQuarter: {
      ref: idRef("date.quarter.for.week", "attribute"),
      identifier: "date.quarter.for.week"
      /**
       * Display Form Title: Week Quarter (Date)
       * Display Form ID: date.quarter.for.week.number
       */,
      WeekQuarter: newAttribute("date.quarter.for.week.number"),
    }
    /**
     * Date Attribute: EU Week Quarter (Date)
     * Date Attribute ID: date.quarter.for.euweek
     */,
    EUWeekQuarter: {
      ref: idRef("date.quarter.for.euweek", "attribute"),
      identifier: "date.quarter.for.euweek"
      /**
       * Display Form Title: Week Quarter (Date)
       * Display Form ID: date.quarter.for.euweek.number
       */,
      WeekQuarter: newAttribute("date.quarter.for.euweek.number"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: David Test
   * Insight ID: acrOHWNbaeuV
   */
  DavidTest: "acrOHWNbaeuV"
  /**
   * Insight Title: Income Statement
   * Insight ID: agX3UVZXIGKd
   */,
  IncomeStatement: "agX3UVZXIGKd"
  /**
   * Insight Title: Quarterly Trend
   * Insight ID: ahn32SH4AL1p
   */,
  QuarterlyTrend: "ahn32SH4AL1p"
  /**
   * Insight Title: Revenue
   * Insight ID: aex5RKNLNcVy
   */,
  Revenue_1: "aex5RKNLNcVy"
  /**
   * Insight Title: Cost of Service Statement
   * Insight ID: aag56XEKbOGK
   */,
  CostOfServiceStatement: "aag56XEKbOGK"
  /**
   * Insight Title: Expense Statement
   * Insight ID: abU5ZUjZ0nmT
   */,
  ExpenseStatement: "abU5ZUjZ0nmT"
  /**
   * Insight Title: spreadjs test
   * Insight ID: aaW8usuN6hla
   */,
  SpreadjsTest: "aaW8usuN6hla"
  /**
   * Insight Title: Revenue / COS / Expenses  by Months
   * Insight ID: ack8w3SVrQwS
   */,
  RevenueCOSExpensesByMonths: "ack8w3SVrQwS"
  /**
   * Insight Title: L1 Income Statement
   * Insight ID: aa08Dqmvh63T
   */,
  L1IncomeStatement: "aa08Dqmvh63T"
  /**
   * Insight Title: Cost of Sales
   * Insight ID: aaw86iH4d386
   */,
  CostOfSales: "aaw86iH4d386"
  /**
   * Insight Title: Operating Expenses
   * Insight ID: abv83yCDxa6C
   */,
  OperatingExpenses_1: "abv83yCDxa6C"
  /**
   * Insight Title: Operating Expenses - Detail
   * Insight ID: abN9mKbOx62d
   */,
  OperatingExpensesDetail: "abN9mKbOx62d"
  /**
   * Insight Title: High Level Income Statement
   * Insight ID: afC9EkSpINAp
   */,
  HighLevelIncomeStatement: "afC9EkSpINAp"
  /**
   * Insight Title: Revenue Detail
   * Insight ID: add99fhAiDRh
   */,
  RevenueDetail: "add99fhAiDRh"
  /**
   * Insight Title: #spreadjs# dashboard placeholder
   * Insight ID: acJadDaqtPWC
   */,
  NrspreadjsNrDashboardPlaceholder: "acJadDaqtPWC"
  /**
   * Insight Title: Revenue & Net Income  by Months
   * Insight ID: aeZanT5PZFQ6
   */,
  RevenueAndNetIncomeByMonths: "aeZanT5PZFQ6"
  /**
   * Insight Title: High Level by Months
   * Insight ID: ahhatvxdwRYg
   */,
  HighLevelByMonths: "ahhatvxdwRYg",
};
export const Dashboards = {
  /**
   * Dashboard Title: Financial statements
   * Dashboard ID: ade3VUaz5U6s
   */
  FinancialStatements: "ade3VUaz5U6s",
};
