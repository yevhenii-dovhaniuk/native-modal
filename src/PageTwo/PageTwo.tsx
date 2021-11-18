import React, { FunctionComponent } from 'react';
import './PageTwo.scss';

interface OwnProps {}

type Props = OwnProps;

const PageTwo: FunctionComponent<Props> = (props) => {
  return (
    <div className="page-two">
      This is page two
    </div>
  );
};

export default PageTwo;
