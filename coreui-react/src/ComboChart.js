import React, { Component } from 'react';
import { ComboChart as GDComboChart, Model } from '@gooddata/react-components';
import { isEqual } from 'lodash';
import C from './catalog.js';
import gooddata from './gooddata';

class ComboChart extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const { primaryMeasures, secondaryMeasures, viewBy } = this.props;

    return (
      <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
        <GDComboChart
          {...gooddata}
          primaryMeasures={primaryMeasures.map(measureTitle =>
            Model.measure(C.measure(measureTitle)))}
          secondaryMeasures={secondaryMeasures.map(measureTitle =>
            Model.measure(C.measure(measureTitle)))}
          viewBy={viewBy}
          height={300}
        />
      </div>
    );
  }
}

export default ComboChart;
