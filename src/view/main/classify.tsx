import React, { useEffect } from 'react';
import '../../style/main.css'
import '../../style/classify.css'
import Footer from '../../components/footer'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const App: React.FC = () => {
    let store = useStore();
    let { classify } = store

    useEffect(() => {
        classify.setList()
    }, [])

    //tab切换--------------------------------
    let click = (index: number, id: number) => {
        classify.tab(index, id)
        classify.setList()
    }
    
    //搜索-------------------------------------
    let search = ()=>{
      
    }
    return useObserver(() => <>
        <div className="wrap">
            <div className="classify">
                <div className="top">
                    <input onClick={()=>search()} type="text" placeholder='搜索商品,共239款好物' />
                </div>
                <div className="main">
                    <div className="left">
                        {
                            classify.list.map((item, index) => {
                                return <p className={classify.curIndex === index ? 'activeP tab' : 'tab'} onClick={() => click(index, item.id)} key={index}>{item.name}</p>
                            })
                        }
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src={classify.rightList.img_url} alt="" />
                        </div>
                        <div className="title">-{classify.rightList.name}分类-</div>
                        <div className="box">
                            {
                                  classify.rightBoxList?
                                classify.rightBoxList.map((item: any, index: number) => {
                                    return <dl key={index}>
                                        <dt>
                                            <img src={item.banner_url} alt="" />
                                        </dt>
                                        <dd>{item.name}</dd>
                                    </dl>
                                }):
                            <div>没有数据</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    </>)
}

export default App