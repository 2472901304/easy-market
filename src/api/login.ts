import request from '../util/request';
export let login = (params:any)=>{
    return request.post('/auth/loginByMobile',{mobile:params.phone,password:params.password})
}