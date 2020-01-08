import request from '../util/request'

export let getSpecialData = (params: any) => {
    return request.get('/topic/list',{page: params.payload, size: params.size})
}