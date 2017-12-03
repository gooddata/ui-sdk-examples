// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { AppPage } from './app.po';

describe('angular-v4.x App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
