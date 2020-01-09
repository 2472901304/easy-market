import request from '../utils/request';

export let classify = ()=>{
    return request.get('/catalog/index')
}