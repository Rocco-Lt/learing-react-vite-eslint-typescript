import { request } from '@/utils/request';
export async function loginApi(loginData: any) {
  return request({
    url: '/login',
    method: 'post',
    data: loginData, // post参数
    headers: {
      isToken: false
    }
  });
}
