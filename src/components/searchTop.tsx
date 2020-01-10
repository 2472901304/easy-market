import {useHistory} from 'react-router-dom';
import React from 'react';
import { useObserver } from 'mobx-react-lite'
import useStore from '../utils/useStore'

const SearchTop: React.FC = () => {
    let history = useHistory();
    let store = useStore();
    let {search} = store;
    let close=()=>{
        search.setFlag('')
    }
    let aa=(e:any)=>{
        search.form = e
    }
    return useObserver(() => <>
       <div className="top">
                <span className='back' onClick={() => history.go(-1)}>&lt;</span>
                <input type="text" value={search.form} onChange={()=>aa(search.form)} placeholder='520元礼包抢先领' />
                <span onClick={()=>close()}>取消</span>
            </div>
    </>)
}

export default SearchTop