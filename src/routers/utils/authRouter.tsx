import { useLocation, Navigate } from 'react-router-dom';
import { AxiosCanceler } from '@/api/helper/axiosCancel';
import { rootRouter } from '@/routers/index';
import { searchRoute } from '@/utils/utils';
import Cookies from 'js-cookie';

const axiosCanceler = new AxiosCanceler();
const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const route = searchRoute(pathname, rootRouter);
  console.log('route', route);
  // * 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending();
  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return props.children;

  const token = Cookies.get('token');
  if (!token) return <Navigate to="/login" replace />;

  return props.children;
};

export default AuthRouter;
