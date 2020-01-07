import React, { Component,useEffect } from 'react';
import '../style/login.css';
import { login } from '../api/login';
import {useObserver} from 'mobx-react-lite';
class Login extends Component {
    state = {
        phone: '',
        password: '',
    }

    commit = () => {
        let res = login({phone:this.state.phone,password:this.state.password})
       console.log(res);
    //    let token = localStorage.setItem('token',JSON.stringify(res.data.sessionKey))
    }
    phone(e:any){
        this.setState({
            phone : e.target.value
        })
    }
    password(e:any){
        this.setState({
            password:e.target.value
        })
    }
   
    render() {
        return useObserver(()=><>
            <div className='login'>
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                <input value={this.state.phone} onChange={this.phone.bind(this)} type="text" placeholder="请输入用户名" />
                <input value={this.state.password} onChange={this.password.bind(this)} type="password" placeholder='请输入密码' />
                <div className="commit" onClick={this.commit}>登 录</div>
            </div>
        </>);
    }
}

export default Login;