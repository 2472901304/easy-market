import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import '../../style/categorys.css'
const Categorys:React.FC = ()=>{
    let store = useStore();
    let { category } = store
    let history = useHistory();
    let tab = (index:number)=>{
        category.curIndex = index
    }
   
    return useObserver(()=><>
        <div className="categorys">
            <div className="top">
                <div className="left">&lt;</div>
                <div className="right">奇趣分类</div>
            </div>
            <div className="nav">
                {
                    category.categoryList.map((item:any,index:number)=>{
                    return <span className={category.curIndex===index?'activeC':''} onClick={()=>tab(index)} key={index}>{item.name}</span>
                    })
                }
            </div>
            <div className="cont"></div>
            <div className="main"></div>
        </div>
    </>)
}

export default Categorys