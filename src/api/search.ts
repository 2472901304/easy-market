import request from '../utils/request';

export let search = ()=>{
    return request.get('/search/index')
}

export let goodList = (page='1',size='1000',brandId?:string,categoryId?:string,sort?:string,order?:string)=>{
    return request.get('/goods/list',{brandId,categoryId,sort,order,page,size})
}