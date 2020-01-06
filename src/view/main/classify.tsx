import React from 'react';
import '../../style/main.css'
import '../../style/classify.css'
import Footer from '../../components/footer'

export default class classify extends React.Component< any> {
    render() {
        return (
            <div className="wrap">
                <header>
                    classify 专题页面
                </header>
                <Footer></Footer>
            </div>
        );
    }
}