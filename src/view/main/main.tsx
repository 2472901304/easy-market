import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import '../../style/main.css'


export default class main extends React.Component< any>{
    static defaultProps = {
        // defalutCls: 'keep-btn',
        // loading: false,
        // type: 'default',
        // size: 'xm'
    }
    
    render() {
        return <>
            
           <Redirect to="/main/home"></Redirect>
        </>
    }
}