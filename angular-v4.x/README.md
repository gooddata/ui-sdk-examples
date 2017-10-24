# AngularV4.X

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Prerequisites

Unlike other demos that use a local proxy, this project assumes you have a white labelled GoodData domain with CORS set up according to [this tutorial](https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/How+to+Access+the+GoodData+API+Directly).

Before you start, you have to edit the following files to replace values specific to our demo projects with your GoodData URL, your project ID and the identifier of an existing measure in your project:
- src/main.ts (GoodData URL needs to be changed in the `config.setCustomDomain` call)
- src/app/app.component.html (project ID and measure identifier have to changed in the `projectId` and `measure` parameters of the `app-kpi` component)

Make sure you are logged into your GoodData domain and you have access to the project specified in your `app-kpi` component.

## Development server

Run `yarn start` for a dev server. Navigate to `http://local.dev:8443/`. The app will automatically reload if you change any of the source files.

Note: `yarn start` calls `ng serve` with extra parameters that set https, hostname and port number. See `package.json` for details.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
