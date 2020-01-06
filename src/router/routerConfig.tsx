import React from 'react'
import RouterView from './RouterView'
import Login from '../view/login'
import Main from '../view/main/main'
import Home from '../view/main/home'
import Special from '../view/main/special'
import Classify from '../view/main/classify'
import Cart from '../view/main/cart'
import My from '../view/main/my'


export default {
    routes: [{
        path: '/login',
        component: Login
    },{
        path: '/main',
        component: (props: any) => (
            <>
                <RouterView routes={props.routes}></RouterView>
                <Main>
                
                </Main>
            </>
        ),
        children: [{
            path: '/main/home',
            component: () => <Home></Home>
        },{
            path: '/main/special',
            component: () => <Special></Special>
        },{
            path: '/main/classify',
            component: () => <Classify></Classify>
        },{
            path: '/main/cart',
            component: () => <Cart></Cart>
        },{
            path: '/main/my',
            component: () => <My></My>
        }]
    },{
        from: '*',
        to: '/login'
    }]
}