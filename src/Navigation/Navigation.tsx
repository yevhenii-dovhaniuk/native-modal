import React, { FunctionComponent } from 'react';
import { routesConfig } from '../App.routes';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

interface OwnProps {}

type Props = OwnProps;

const Navigation: FunctionComponent<Props> = (props) => {
  return (
    <nav>
      {
        (routesConfig[0].children || []).map(config => (
          <NavLink key={config.path} to={config.path || ''}>
            {config.displayName}
          </NavLink>)
        )
      }
    </nav>
  );
};

export default Navigation;
