import React from 'react';
import '../../style/main.css'
import '../../style/special.css'
import Footer from '../../components/footer'

export default class special extends React.Component<any> {


    render() {
        return (
            <div className="wrap">
                <header>
                    专题页面
                </header>
                <Footer></Footer>
            </div>
        );
    }
}