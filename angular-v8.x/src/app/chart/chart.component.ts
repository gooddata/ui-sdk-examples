import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ColumnChart, Model } from '@gooddata/react-components';

interface ChartProps {
  measures: string;
  projectId: string;
  // format?: string;
  // filters?: any[];
  // onLoadingChanged?: (any);
  // onError?: (any);
}

@Component({
  selector: 'app-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class ChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @Input() measures: string;
  @Input() projectId: string;
  // @Input() filters: any[];
  // @Input() format: string;
  // @Input() onLoadingChanged?: (any);
  // @Input() onError?: (any);

  private rootDomID: string;

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): ChartProps {
    const {
      projectId,
      measures,
      // format,
      // filters,
      // onLoadingChanged,
      // onError
    } = this;
    return {
      projectId,
      measures,
      // format,
      // filters,
      // onLoadingChanged,
      // onError
    };
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    const props = this.getProps();
    const measures = [Model.measure(props.measures).localIdentifier("m_0")];

    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ColumnChart, { ...this.getProps(), measures }), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
