import React from 'react';
import './my.css'
import '../main.css'
import Footer from '../../../components/footer'

export default class my extends React.Component< any> {
    render() {
        return (
            <div className="wrap">
                <header>
                    my 我的页面
                </header>
                <Footer></Footer>
            </div>
        );
    }
}