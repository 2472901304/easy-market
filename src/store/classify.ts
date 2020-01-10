
import { ItemType } from '../utils/type';
import { observable, action } from 'mobx'
import { classify,goodsCount } from '../api/classify'

export default class HomeStore {

    //获取所有数据------------------
    @observable
    list: ItemType[] = []

    @observable
    count:number= 0
    //获取右侧内容------------------
    @observable
    rightList:any =[]
    @observable
    rightBoxList:any =[]

    @observable
    curIndex: number = 0

    @observable
    categoryId: number = 1005000

    @action
    async setList() {
      let res:any=await classify();
      this.list = res.categoryList  //设置所有数据
      this.rightList=res.categoryList[this.curIndex] //设置右侧数据
      this.rightBoxList = res.categoryList[this.curIndex].subCategoryList
      let count:any =await goodsCount(res.categoryList[0].subCategoryList[0].id)
      this.count = count.goodsCount
    }

    @action
    tab(index: number, id: number) {
        this.curIndex = index
        this.categoryId = id
    }

    
}