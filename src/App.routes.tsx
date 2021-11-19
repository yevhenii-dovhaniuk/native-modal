import React, { FunctionComponent, useEffect } from 'react';
import { RouteObject, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import App from './App';
import PageOne from './PageOne/PageOne';
import Spinner from './Spinner/Spinner';

const PageTwo = React.lazy(() => new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
    .then(() => import('./PageTwo/PageTwo'))
);

interface RouteObjectWithDisplayName extends RouteObject {
  displayName?: string;
  children?: RouteObjectWithDisplayName[];
}

export const routesConfig: RouteObjectWithDisplayName[] = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'page-one',
        element: <PageOne/>,
        displayName: 'Page One'
      },
      {
        path: 'page-two',
        element: <React.Suspense fallback={<Spinner size="big"/>}><PageTwo/></React.Suspense>,
        displayName: 'Page Two'
      }
    ]
  }
];

const AppRoutes: FunctionComponent = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const children: RouteObject[] = routesConfig[0].children || [];

    if (location.pathname === '/') {
      navigate('/' + children[0].path || '');
    }
  });

  const routes = useRoutes(routesConfig);


  return (
    <>
      {routes}
    </>
  );
};

export default AppRoutes;
