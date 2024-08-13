import axios from 'axios';
import { toast } from 'react-toastify';

function adminJwtInterceptor() {
  axios.interceptors.request.use((req) => {
    const hasToken = Boolean(window.localStorage.getItem('token'));

    if (hasToken) {
      req.headers = {
        ...req.headers,
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      };
    }
    return req;
  });

  axios.interceptors.response.use(
    (req) => {
      return req;
    },
    (error) => {
      const isTokenExp =
        error.response.status === 401 &&
        error.response.statusText === 'Unauthorized' &&
        error.response.data.message !== 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' &&
        Boolean(window.localStorage.getItem('token'));

      const isWrongPassword =
        error.response.status === 401 &&
        error.response.data.message === 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';

      if (isTokenExp) {
        window.localStorage.removeItem('token');
        if (window.location.pathname.startsWith('/admin')) {
          window.location.replace('/admin/login');
        } else {
          window.location.replace('/login');
        }
      } else if (isWrongPassword) {
        window.localStorage.removeItem('token');
        toast.error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }
      return Promise.reject(error);
    }
  );
}

export default adminJwtInterceptor;
