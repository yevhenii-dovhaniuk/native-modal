import React, { FunctionComponent } from 'react';
import './PageOne.scss';

interface OwnProps {}

type Props = OwnProps;

const PageOne: FunctionComponent<Props> = (props) => {
  return (
    <div className="page-one">
      This is page one
    </div>
  );
};

export default PageOne;
