import {goodList} from '../api/search'
import { ItemType } from '../utils/type';
import { observable, action } from 'mobx'
import { category } from '../api/categorys'

export default class CategoryStore {
    @observable
    categoryList: ItemType[] = []

    @observable
    curIndex: number = 0

    @observable
    goodList:ItemType[] = []

    @observable
    contName: string = ''

    @observable
    contFrontName: string = ''

    @action
    async setCategoryList(id: number) {
        let res: any = await category(id)
        console.log(res);
        this.categoryList = res.brotherCategory
        this.contName = res.brotherCategory[this.curIndex].name;
        this.contFrontName = res.brotherCategory[this.curIndex].front_name;
    }

    @action
    async qiqu(categoryId:string){
        let res:any = await goodList(categoryId)
        console.log(res);
        
    }
    @action
    setCont(index: number) {
        this.curIndex = index
        this.contName = this.categoryList[this.curIndex].name;
        this.contFrontName = this.categoryList[this.curIndex].front_name;
    }
}