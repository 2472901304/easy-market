import {search,goodList} from '../api/search'
import {observable,action} from 'mobx'
import {ItemType} from '../utils/type'

export default class Search{

    @observable
    list:ItemType[] = []

    @observable
    flag:boolean = false

    @observable
    form:string = ''

    @observable
    searchList:ItemType[] = []

    @action
    async setList(){
        let res:any = await search() 
        this.list = res.hotKeywordList  
    }

    @action
    setFlag(item:string){
        this.flag = !this.flag
        this.form = item
    }

    @action
    async setGoodList(e:string){
        let res:any =await goodList()
        console.log(res.data);
        this.searchList = []
        res.data.map((item:any,index:number)=>{
            if(item.name.includes(e)){
                return this.searchList.push(item)
            }
        })
    }
}