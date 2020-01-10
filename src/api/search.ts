import request from '../utils/request';

export let search = ()=>{
    return request.get('/search/index')
}

export let goodList = (brandId?:string,categoryId?:string,sort?:string,order?:string,page?:string,size?:string)=>{
    return request.get('/goods/list',{brandId,categoryId,sort,order,page,size})
}