import React from 'react';
import { NavLink } from 'react-router-dom'


export default class footer extends React.Component< any>{
    static defaultProps = {
        // defalutCls: 'keep-btn',
        // loading: false,
        // type: 'default',
        // size: 'xm'
    }
    
    render() {
        return <>
            <footer>
                <NavLink to='/main/home'>首页</NavLink>
                <NavLink to='/main/special'>专题</NavLink>
                <NavLink to='/main/classify'>分类</NavLink>
                <NavLink to='/main/cart'>购物车</NavLink>
                <NavLink to='/main/my'>我的</NavLink>
           </footer>
        </>
    }
}