import axios from 'axios';
//创建axios实例
const instance = axios.create({
        baseURL: 'http://169.254.66.66:8888'
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
    })

const getNewHeaders = () => {
    return {'x-nideshop-token':window.localStorage.getItem('token')}
}


export default class HttpUtil {
    static get (url: string, params = {}) {
        return new Promise((resolve,reject) => {
            instance.get(url,{params, headers: getNewHeaders()},).then(({data}) => {
                if(data.errno === 0) {
                    resolve(data.data)
                }else{
                    resolve(data)
                }
            }).catch((err) => {
                reject({err: JSON.stringify(err)})
            })
        })
    }
    static post (url: string, params = {}) {
        return new Promise((resolve, reject) => {
          instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
            resolve(data)
          }).catch((err) => {
            reject({ err: JSON.stringify(err) })
          })
        })
      }
}