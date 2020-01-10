import request from '../utils/request';

export let category = (id:number)=>{
    return request.get('/goods/category',{id})
}