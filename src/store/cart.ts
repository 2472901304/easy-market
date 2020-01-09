import React from 'react'
import {ItemType} from '../utils/type'
import {observable, action, computed} from 'mobx'

export default class CartStore{
    @observable
    list: ItemType[] = []

    @computed
    get totalNum(){
        return this.list.reduce((total: number, item: ItemType) => {
            if (item.checked) {
                return total += item.num;
            } else {
                return total;
            }
        }, 0)
    }

    @computed
    get totalPrice(){
        return  this.list.reduce((total: number, item: ItemType) => {
            if (item.checked) {
              return total += item.num * item.price;
            } else {
              return total;
            }
        }, 0)
    }


    @action
    setList(list: ItemType[]){
        this.list = list;
    }

    @action
    changeCheck(id:number, checked:boolean){
        let newList = [...this.list];
        let index = newList.findIndex(value=>value.id===id);
        newList[index].checked = checked;
        this.list = newList;
    }
    
    @action
    changeNum(id:number, type:string){
        let newList = [...this.list];
        let index = newList.findIndex(value=>value.id===id);
        type=='+'?newList[index].num++: newList[index].num--;
        if (newList[index].num <= 0){
          newList[index].num = 1;
        }
        this.list = newList;
    }
}