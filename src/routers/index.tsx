import Login from '@/views/login';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from '@/views/home/index';
import Layout from '@/layout';
const rootRouter: any = [
  { path: '/', element: <Navigate to={'/login'} /> },
  { path: '/login', element: <Login /> },
  { path: '/home', element: <Layout />, children: [{ path: 'index', element: <HomePage /> }] }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
