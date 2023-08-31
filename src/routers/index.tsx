import Login from '@/views/login';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from '@/views/home/index';
import Layout from '@/layout';
import NotAuth from '@/components/ErrorMessage/403';

// eslint-disable-next-line react-refresh/only-export-components
export const rootRouter: any = [
  { path: '/', element: <Navigate to={'/login'} /> },
  { path: '/login', element: <Login /> },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  },
  {
    path: '/404',
    element: <NotAuth></NotAuth>
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
