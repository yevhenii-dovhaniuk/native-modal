import React, { FunctionComponent } from 'react';
import './Spinner.scss';

interface OwnProps {
  size?: 'default' | 'big' | 'small';
}

type Props = OwnProps;

const Spinner: FunctionComponent<Props> = (props= {size: 'default'}, {}) => {
  return (
    <img className={'spinner spinner--' + props.size} src="assets/loading.svg" alt="Loading indicator"/>
  );
};

export default Spinner;
