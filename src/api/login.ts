import request from '../utils/request';
export let login = (params:any)=>{
    return request.post('/auth/loginByMobile',{mobile:params.phone,password:params.password})
}