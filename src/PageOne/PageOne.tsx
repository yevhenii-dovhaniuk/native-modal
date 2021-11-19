import React, { FunctionComponent } from 'react';
import './PageOne.scss';
import RandomDish from './RandomDish/RandomDish';

interface OwnProps {
}

type Props = OwnProps;

const PageOne: FunctionComponent<Props> = (props) => {
  return (
    <div className="page-one">
      This is page one

      <RandomDish/>
    </div>
  );
};

export default PageOne;
