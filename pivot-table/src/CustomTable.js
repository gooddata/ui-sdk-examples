import React, { Component } from "react";
import { Table, Column, Cell } from 'fixed-data-table-2';
import gooddata, { DataLayer } from '@gooddata/gooddata-js';
import { Execute } from '@gooddata/react-components';
import { get, range } from 'lodash';
import Dimensions from 'react-dimensions'

import 'fixed-data-table-2/dist/fixed-data-table.css';

const { toAfmResultSpec } = DataLayer;

class CustomTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.togglePivot = this.togglePivot.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.renderPivot = this.renderPivot.bind(this);
  }

  componentDidMount() {
    const { uri } = this.props;

    gooddata.md.getObjectDetails(uri).then(result => {
      this.setState({
        afmResultSpec: toAfmResultSpec(result.visualizationObject.content)
      });
    });
  }

  togglePivot(e) {
    this.setState({
      pivot: e.target.checked
    });
  }

  renderNormal({ result, isLoading }) {
    if (isLoading) {
      return <p>Loading data...</p>;
    }

    const { executionResult: { data, headerItems } } = result;
    const attributesCount = get(headerItems, 0).length;
    const metricsCount = get(headerItems, [1, 0]).length;
    const tableWidth = this.props.containerWidth;
    const rowHeight = 32;
    const columnCount = attributesCount + metricsCount;
    const rowCount = data.length;

    return (
      <Table
        rowHeight={rowHeight}
        rowsCount={rowCount}
        width={tableWidth}
        height={rowCount * rowHeight + 2}
      >
        {
          range(columnCount).map(index => {
            return (
              <Column
                key={index}
                columnKey={index}
                cell={({ rowIndex, columnKey }) => {
                  return (
                    <Cell>
                      {index < attributesCount && get(headerItems, [0, index, rowIndex, 'attributeHeaderItem', 'name'])}
                      {index >= attributesCount && get(data, [rowIndex, columnKey - attributesCount])}
                    </Cell>
                  );
                }}
                width={tableWidth / columnCount}
              />
            );
          })
        }
      </Table>
    );
  }

  renderPivot({ result, isLoading }) {
    if (isLoading) {
      return <p>Loading data...</p>;
    }

    const { executionResult: { data, headerItems } } = result;
    const attributesCount = get(headerItems, 0).length;
    const metricsCount = get(headerItems, [1, 0]).length;
    const tableWidth = this.props.containerWidth;
    const rowHeight = 32;
    const columnCount = data.length;
    const rowCount = attributesCount + metricsCount;

    return (
      <Table
        rowHeight={rowHeight}
        rowsCount={rowCount}
        width={tableWidth}
        height={rowCount * rowHeight + 2}
      >
        {
          range(columnCount).map((item, index) => {
            return (
              <Column
                key={index}
                cell={({ rowIndex }) => (
                  <Cell>
                    {rowIndex < attributesCount && get(headerItems, [0, rowIndex, index, 'attributeHeaderItem', 'name'])}
                    {rowIndex >= attributesCount && get(data, [index, rowIndex - attributesCount])}
                  </Cell>
                )}
                width={tableWidth / columnCount}
              />
            );
          })
        }
      </Table>
    );
  }

  render() {
    const { projectId } = this.props;
    const { afmResultSpec, pivot } = this.state;

    if (!afmResultSpec) {
      return <span>Getting AFM...</span>;
    }

    const renderTable = pivot ? this.renderPivot : this.renderNormal;

    return (
      <div>
        <label><input type="checkbox" onChange={this.togglePivot} /> pivot</label>
        <Execute
          projectId={projectId}
          afm={afmResultSpec.afm}
          children={renderTable}
        />
      </div>
    );
  }
};

export default Dimensions()(CustomTable);
