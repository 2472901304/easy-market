import request from '../utils/request';

export let classify = ()=>{
    return request.get('/catalog/index')
}

export let goodsCount = (id:string)=>{
    return request.get('/goods/count',{id})
}