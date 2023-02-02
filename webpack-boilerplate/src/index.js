import {
    idRef,
    newMeasure,
    newAttribute,
    newTwoDimensional,
    MeasureGroupIdentifier
} from "@gooddata/sdk-model";
import tigerFactory, { TigerTokenAuthProvider } from "@gooddata/sdk-backend-tiger";

// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = '/assets/example.png'

const app = document.querySelector('#root')
app.append(logo, heading, imageBackground, imagePublic)

const backend = tigerFactory({
    hostname: "https://jirizajic.demo.cloud.gooddata.com/"
}).withAuthentication(
    new TigerTokenAuthProvider('getApiToken') // https://use.gd/getApiToken
);

const metric = newMeasure(idRef("average_price_of_products", "measure"));
const viewBy = newAttribute("PRODUCT_BRAND");
const stackBy = newAttribute("PRODUCT_CATEGORY");
const filters = [];

const execution = backend
    .workspace('ecommerce-parent')
    .execution()
    .forItems([metric, viewBy, stackBy], filters)
    .withDimensions(
        ...newTwoDimensional(
            [viewBy],
            [MeasureGroupIdentifier, stackBy]
        )
    );

execution.execute().then(result =>
    result.readAll().then(result => console.log(result)));
