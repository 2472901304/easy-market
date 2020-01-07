import React from 'react';
import '../../style/main.css'
import '../../style/classify.css'
import Footer from '../../components/footer'
import { classify } from '../../api/classify'
export default class Classify extends React.Component<any> {

    state = {
        classifyList: []
    }

    componentDidMount() {
        this.getList();
        console.log(this.state.classifyList);

    }
    async getList() {
        let data = await classify();
        this.setState({
            classifyList: data
        })
    }
    render() {
        return (
            <div className="wrap">
                <div className="classify">
                    <div className="top">
                        <input type="text" placeholder='搜索商品,共239款好物' />
                    </div>
                    <div className="main">
                        <div className="left">
                            <p></p>
                        </div>
                        <div className="right">
                            <div className="img">
                                <img src="" alt="" />
                            </div>
                            <div className="title"></div>
                            <div className="box">
                                <dl>
                                    <dt>
                                        <img src="" alt="" />
                                    </dt>
                                    <dd></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}