import React from 'react';
import '../main.css'
import './cart.css'
import Footer from '../../../components/footer'

export default class cart extends React.Component< any> {
    render() {
        return (
            <div className="wrap">
                <header>
                    cart 购物车页面
                </header>
                <Footer></Footer>
            </div>
        );
    }
}