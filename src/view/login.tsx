import React, {useEffect} from 'react';
import useStore from '../util/useStore'
import '../style/login.css';
import { useObserver } from 'mobx-react-lite'

const moble = '123';
const password = '';



let Login: React.FC = () => {
    
        let store = useStore();
        let {Login} = store;
        useEffect(() => {
            Login.loginAdd({moble,password})
        },[Login])

        return useObserver (() => (
            <div className='login'>
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                <input type="text" placeholder="请输入用户名"/>
                <input type="password" placeholder='请输入密码'/>
                <div className="commit">登 录</div>
            </div>
        ));
    
}

export default Login;