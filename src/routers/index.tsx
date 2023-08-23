import Login from '@/views/login';
import { useRoutes, Navigate } from 'react-router-dom';

const rootRouter: any = [
  { path: '/', element: <Navigate to={'/login'} /> },
  { path: '/login', element: <Login /> }
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
