import React, { FunctionComponent } from 'react';
import './AppLoadingIndicator.scss';
import { selectIsAppLoading } from './AppLoadingIndicator.slice';
import { useAppSelector } from '../App.hooks';

interface OwnProps {
}

type Props = OwnProps;

export const AppLoadingIndicator: FunctionComponent<Props> = (props) => {
  const isAppLoading = useAppSelector(selectIsAppLoading);
  return (
    <div className="app-loading-indicator">
      {isAppLoading && <img src="assets/loading.svg" alt="Loading indicator"/>}
    </div>
  )
};
