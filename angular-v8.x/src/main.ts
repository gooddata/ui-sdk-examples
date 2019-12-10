import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Highcharts from 'highcharts';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { factory } from '@gooddata/gooddata-js';

if (environment.production) {
  enableProdMode();
}

window['gooddata'] = factory({ domain: '' });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
