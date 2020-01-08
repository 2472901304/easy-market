// 引入泛型
import {loginType} from '../type/login'
// 引入mobx
import {observable, action, computed} from 'mobx'
import {loginAdd} from '../../api/login'

// 定义数据
export default class CreateStore{
    @observable
    list: loginType[] = [];

    @action
    async loginAdd(obj: object){
        const res:any = await loginAdd(obj);
        console.log('res....',res)
        this.list = res.data
    }
}