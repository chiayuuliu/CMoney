import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Usercard = (props) => {
    const {avatar, name, country, city, gender} = props
    // 預設顯示男生
    const[ icondisplay, setIcondisplay] = useState(true)

    // 判斷性別
    useEffect(() => {
        if(gender=='male'){
            setIcondisplay(true)
        }if(gender=='female'){
            setIcondisplay(false)
        }
    }, [gender]);
    return (
    <>
    
        <div class="avatar">
        {/* 頭貼 */}
            <img src={avatar} alt=""/>
            {/* 女 */}
            <div class="femaleicon" 
            style={{display:icondisplay ? 'none' : 'block'}}>
                <i class="fas fa-female"></i>                
            </div>
            {/* 男 */}
            <div class="maleicon" 
            style={{display:icondisplay ? 'block' : 'none'}}>
                <i class="fas fa-male"></i>
            </div>
            {/* 姓名 */}
            <div class="username">{name}</div>
        </div>
        {/* 國家、州別 */}
        <div class="live">{country}</div>
        <div class="live">{city}</div>
    </>
    );
};

export default Usercard;
