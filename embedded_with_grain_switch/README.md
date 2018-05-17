# Granularity Switch Demo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It demonstrates a simple React app with a line chart and three buttones that allow the user to switch between daily, weekly and monthly view:

![Screencast as an animated gif](https://raw.githubusercontent.com/gooddata/ui-sdk-examples/embedded_with_grain_switch/embedded_with_grain_switch/grain_switcher.gif)

## Getting Started

`yarn`
`HTTPS=true yarn start`

After starting the app, you may need to first log in to
https://localhost:3000/account.html. You can use the same credentials
you are using at https://secure.gooddata.com/.

## Usage

The app uses the GoodSales demo (projectId li4i6ynufj61q7lhlvlsqi9am4qbecyw) hosted at https://secure.gooddata.com/. The default configuration is hardcoded in the index.js file. The app can be customized using the following URL parameters:
* `projectId` - project identifier (default li4i6ynufj61q7lhlvlsqi9am4qbecyw)
* `measure` - identifier of the measure used in the line chart (default acKjadJIgZUN - "# of Activities" from the GoodSales demo)
* `dateDimension` - the dateDimension prefix (default 'activity')
* `defaultGrain` - one of `month`, `week` and `date` (default `date`)
* `daysBack` - relative filter applied when switched to daily grain (default 14 meaning last 14 days)
* `weeksBack` - relative filter applied when switched to weekly grain
  (default 12 - last 12 weeks)
* `monthsBack` - relative filter applied when switched to monthly grain
  (default 12 - last 12 months)

Example: The following URL uses the default values: https://localhost:3000?projectId=li4i6ynufj61q7lhlvlsqi9am4qbecyw&measure=acKjadJIgZUN&dateDimension=activity&defaultGrain=date&daysBack=14&weeksBack=12&monthsBack=12

## License

Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.

For more information, please see
[LICENSE](https://github.com/gooddata/ui-sdk-examples/blob/master/LICENSE)