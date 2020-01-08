import React, {useEffect} from 'react';
import useStore from '../../../util/useStore'
import '../main.css'
import './special.css'
import Footer from '../../../components/footer'
import { useObserver } from 'mobx-react-lite'


const page = 4;
const size = 5;



let Special: React.FC = () => {
    
    let store = useStore();
    
    let { Special } = store;
    useEffect(() => {
        Special.getSpecialData({page,size})
    },[Special])

   
        return useObserver(() => ( 
            <div className="wrap">
                <header>
                    {
                        Special.list.map((item, index) => {
                            return <div className="specialele" key={index}>
                                <img src={item.scene_pic_url} alt="" />
                                <div className="title">{item.title}</div>
                                <div className="sub">{item.subtitle}</div>
                                <p>{item.price_info}元起</p>
                            </div>
                        })
                    }
                </header>
                <Footer></Footer>
            </div>
        ));
    
}

export default Special;