import React from 'react';
import '../../style/home.css'
import '../../style/main.css'
import Footer from '../../components/footer'

export default class home extends React.Component< any>{
    static defaultProps = {
        // defalutCls: 'keep-btn',
        // loading: false,
        // type: 'default',
        // size: 'xm'
    }
    
    render() {
        return <div className="wrap">
            <header>
                home 页面
            </header>
            <Footer></Footer>
        </div>
    }
}