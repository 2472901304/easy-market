import request from '../util/request';

export let classify = ()=>{
    return request.get('/catalog/index')
}