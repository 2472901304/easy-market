import React from 'react';
import '../../style/my.css'
import '../../style/main.css'
import Footer from '../../components/footer'

export default class my extends React.Component< any> {
    render() {
        return (
            <div className="my">
                <div className="header">
                    <dl>
                        <dt>
                            <img src="" alt=""/>
                        </dt>
                        <dd>
                            <p></p>
                            <p></p>
                        </dd>
                    </dl>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}