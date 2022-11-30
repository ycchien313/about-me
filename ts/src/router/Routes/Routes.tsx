import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { LayoutBase } from '@/layouts';
import { Home } from '@/pages';

// import { lazy, Suspense } from 'react';
// const AbcPage = lazy(() => import('pages/Home/Home'));

const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <LayoutBase />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Home />,
        path: 'skills',
      },
      {
        element: <Home />,
        path: 'works',
      },
      {
        element: <Home />,
        path: 'experiences',
      },
      {
        element: <Home />,
        path: 'certificates',
      },
      {
        element: <Home />,
        path: 'contact',
      },
    ]
  },
  {
    path: '*',
    element: <div>404</div>
  }
];

export default (): ReactElement | null => {
  const routes = useRoutes(ROUTES);
  return routes;
};
