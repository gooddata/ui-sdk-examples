// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import { factory } from '@gooddata/gooddata-js';
import catalogJson from './catalog.json';

const config = {
  domain: ''
};

if (process.env.NODE_ENV === 'production') {
  const gdUrl = process.env.GD_URL;
  config.domain = gdUrl ? `https://${gdUrl}` : 'https://developer.na.gooddata.com';
}

export const sdk = factory(config);

window.gooddata = sdk;

export const projectId = catalogJson.projectId;
export const domain = config.domain;

export default {
  projectId,
  sdk,
  domain: config.domain,
};
