import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Headline } from '@gooddata/sdk-ui-charts';
import { newMeasure, idRef } from '@gooddata/sdk-model';
import tigerFactory, { TigerTokenAuthProvider } from '@gooddata/sdk-backend-tiger';

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const CustomReactComponent: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(42);

  const backend = tigerFactory({
    hostname: 'https://jirizajic.demo.cloud.gooddata.com/',
  }).withAuthentication(new TigerTokenAuthProvider('mysupersecrettoken'));

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
        <div>Props counter: {propsCounter}
          <button type="button" onClick={handleClick}>click to increase</button>
        </div>
        <div>State counter: {stateCounter}</div>
        <Headline
            backend={backend}
            workspace="ecommerce-parent"
            primaryMeasure={newMeasure(idRef('average_price_of_products', 'measure'))}
        />
    </div>
  );
};
