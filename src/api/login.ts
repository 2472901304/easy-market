import request from '../util/request';
export function login(data:Object){
    return request({
        url:"/auth/loginByMobile",
        method:"post",
        data
    })
}