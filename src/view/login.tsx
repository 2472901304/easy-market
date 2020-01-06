import React, { Component } from 'react';
import '../style/login.css';
class login extends Component {
    state={
        from:{
            phone:"",
            password:""
        }
    }
    render() {
        return (
            <div className='login'>
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                <input type="text" placeholder="请输入用户名"/>
                <input type="password" placeholder='请输入密码'/>
                <div className="commit">登 录</div>
            </div>
        );
    }
}

export default login;