import axios from "axios";
import QS from 'qs';
import lodash from "lodash";

// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8888';
} else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'http://127.0.0.1:8888';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://127.0.0.1:8888';
}


axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    let responseData = response.data;
    return Promise.resolve(responseData);
  } else {
    return Promise.reject(response);
  }
}, error => {

});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      if (res.code === 0) {
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(err => {
      reject(err.data);
    })
  });
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}
