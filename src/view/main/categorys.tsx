import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../style/categorys.css'
const Categorys: React.FC = () => {
    let store = useStore();
    let { category } = store
    let history = useHistory();
    let tab = (index: number) => {
        category.setCont(index)
    }
    useEffect(()=>{
        let id = localStorage.getItem('id')
       category.setCategoryList(Number(id))
       category.qiqu('1008002')
    },[])
    
    return useObserver(() => <>
        <div className="categorys">
            <div className="top">
                <div className="left" onClick={()=>history.go(-1)}>&lt;</div>
                <div className="right">奇趣分类</div>
            </div>
            <div className="nav">
                {
                    category.categoryList.map((item: any, index: number) => {
                        return <span className={category.curIndex === index ? 'activeC' : ''} onClick={() => tab(index)} key={index}>{item.name}</span>
                    })
                }
            </div>
            <div className="content">
                <div className="cont">
                    <p>{category.contName}</p>
                    <p>{category.contFrontName}</p>
                </div>
                <div className="main"></div>
            </div>

        </div>
    </>)
}

export default Categorys