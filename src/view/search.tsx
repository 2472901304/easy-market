import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite'
import useStore from '../utils/useStore'
import '../style/search.css'
import SearchTop from '../components/searchTop';
import '../style/detail.css'

const nav = ['综合', '价格', '全部分类']

const App: React.FC = () => {
    let store = useStore();
    let { search, classify } = store;
    useEffect(() => {
        search.setList()
    }, [])
    let detail = (item: string) => {
        search.setFlag(item)
        classify.setList()
        search.setGoodList(item)
    }
    return useObserver(() => <>
        <div className="search">
            <SearchTop></SearchTop>
            <div className="main">
                <div className="history">
                    <p>
                        <span>历史记录</span>
                        <span>删除</span>
                    </p>
                    <span className="box">母亲节</span>
                </div>
                <div className="hotSearch">
                    <p>热门搜索</p>
                    {
                        search.list.map((item: any, index: number) => {
                            return <span onClick={() => detail(item.keyword)} key={index} className="box">{item.keyword}</span>
                        })
                    }
                </div>
                <div className={search.flag ? 'detail' : 'detail2'}>
                    <SearchTop></SearchTop>
                    <div className="nav">
                        {
                            nav.map((item: any, index: number) => {
                                return <span key={index}>{item}</span>
                            })
                        }
                    </div>
                    <div className="cont">
                        {
                            search.searchList.length>0?
                            search.searchList.map((item: any, index: number) => {
                                return <dl key={index}>
                                    <dt>
                                        <img src={item.list_pic_url} alt="" />
                                    </dt>
                                    <dd>
                                        <p>{item.name}</p>
                                        <p className='money'>￥{item.retail_price}</p>
                                    </dd>
                                </dl>
                            }):
                            <div className='title'>没有数据</div>
                        }
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default App