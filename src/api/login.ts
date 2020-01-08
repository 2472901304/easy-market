import request from '../util/request'

export let loginAdd = (params: any) => {
    return request.post('/topic/list',{page: params.payload, size: params.size})
}