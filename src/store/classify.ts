import React from 'react'
import { ItemType } from '../utils/type';
import { observable, action, computed } from 'mobx'
import { classify } from '../api/classify'
import { act } from 'react-dom/test-utils';
interface rightparams{
    [key:string]:any
}

export default class HomeStore {

    //获取所有数据------------------
    @observable
    list: ItemType[] = []

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
      console.log(res);
    }

    @action
    tab(index: number, id: number) {
        this.curIndex = index
        this.categoryId = id
    }
}