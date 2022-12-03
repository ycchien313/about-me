import { lazy, ReactElement, useEffect} from 'react';
import { RouteObject, useNavigate, useRoutes } from 'react-router-dom';
import { LayoutBase } from '@/layouts';

const Home = lazy(() => import('@/pages/Home/Home'));
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
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return routes;
};
