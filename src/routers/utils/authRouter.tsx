import { useLocation, Navigate } from 'react-router-dom';
import { AxiosCanceler } from '@/api/helper/axiosCancel';

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
};

export default AuthRouter;
