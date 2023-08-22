import { useRoutes } from 'react-router-dom';
import UseStateDemo from '@/views/hooks/useState';

const rootRouter: any = [{ path: '/', element: <UseStateDemo /> }];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
