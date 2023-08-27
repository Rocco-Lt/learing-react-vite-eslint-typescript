import http from '@/api/index';
import { LoginForm } from '@/api/interface/login';

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: LoginForm) => {
  return http.post(`/loginIn`, params);
  //return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  //return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
  //return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};
