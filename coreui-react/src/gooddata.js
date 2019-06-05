// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.
import { factory } from '@gooddata/gooddata-js';

const config = {
  domain: ''
};

if (process.env.NODE_ENV === 'production') {
  config.domain = 'https://developer.na.gooddata.com';
}

export const sdk = factory(config);

window.gooddata = sdk;

export const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
export const domain = config.domain;

export default {
  projectId,
  sdk,
  domain: config.domain
};
