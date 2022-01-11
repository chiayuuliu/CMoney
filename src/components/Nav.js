import React from 'react';
import { Link, withRouter , useHistory} from 'react-router-dom'

function Nav(props) {
    let history = useHistory()

    const { login,setLogin } = props

    const handlingLogout = (e) => {
        props.history.push('/')
      }

    const handlingLogin = (e) => {
        props.history.push('/login')
    }
    const path = window.location.pathname
    // console.log('未登入&& login 頁',(path.includes('login'))&& !login)
    // console.log('login', login)



    return (
    <>
    <div className='nav'
        style={{display: login ? 'flex' : 'none' }}
        >
        <div className="logo">
            <Link to="/"><img src="http://localhost:3000/logo.png" alt/></Link>
        </div>
        <div className="navlink">
            <Link to="/">首頁</Link>
            <Link to="/admin">會員列表</Link>
            <Link to="/customer">自選清單</Link>
        </div>
        <button className="loginbtn" 
            onClick={()=>{
                handlingLogout()
                setLogin(false)
            }}
            // style={{display: login ? 'block' : 'none' }}
            >登出</button>
    </div>

    {/* 未登入狀態時的nav，但在登入頁必須消失 */}
    <div className='nav'
        style={{display: (path.includes('login'))|| login ? 'none' : 'flex' }}
        >
        <div className="logo">
            <Link to="/"><img src="http://localhost:3000/logo.png" alt/></Link>
        </div>

        <button className="loginbtn" 
        onClick={()=>{
            // setLogin(true)
            handlingLogin()
        }}
        // style={{display: login ? 'none' : 'block' }}
        >登入</button>
    </div>
    </>
    );
};

export default withRouter(Nav);
