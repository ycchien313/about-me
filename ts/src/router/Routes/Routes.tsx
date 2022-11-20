import { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { LayoutBase } from '@/layouts';
import { Home } from '@/pages';

// import { lazy, Suspense } from "react";
// const AbcPage = lazy(() => import("pages/xxx.tsx"));

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
