import React,{ useState, useEffect }  from 'react';
import { Link } from 'react-router-dom'

const Usercard = (props) => {
    const {avatar, name, country, city, gender} = props
    // 預設顯示男生
    const[ icondisplay, setIcondisplay] = useState(true)

    // 判斷性別
    useEffect(() => {
        if(gender=='male'){

        }if(gender=='female'){

            setIcondisplay(false)
        }
    }, [gender]);
    return (
    <>
    <div class="user">
        <div class="avatar">
        {/* 頭貼 */}
            <img src={avatar} alt=""/>
            <div class="gendericon">
                {/* 性別icon */}
                <i class="fas fa-male"
                style={{display:icondisplay ? 'block' : 'none'}}></i>

                <i class="fas fa-female"
                style={{display:icondisplay ? 'none' : 'block'}}></i>
                
            </div>
            {/* <i class="fas fa-male"></i> */}
            {/* 姓名 */}
            <div class="username">{name}</div>
        </div>
        {/* 國家、州別 */}
        <div class="live">{country}</div>
        <div class="live">{city}</div>
    </div>
    </>
    );
};

export default Usercard;
