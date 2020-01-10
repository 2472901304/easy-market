
import { ItemType } from '../utils/type';
import { observable, action } from 'mobx'
import { category } from '../api/categorys'

export default class CategoryStore{
    @observable
    categoryList:ItemType[]=[]

    @observable
    curIndex:number = 0

    @action
    async setCategoryList(id:number){
        let res:any = await category(id)
        console.log(res);
        this.categoryList = res.brotherCategory
    }
}