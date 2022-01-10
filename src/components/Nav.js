import React from 'react';
import { Link, withRouter , useHistory} from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Nav(props) {
    let history = useHistory()

    const { login,setLogin } = props

    const handlingLogout = (e) => {
        props.history.push('/')
      }

    const handlingLogin = (e) => {
        props.history.push('/login')
    }
    console.log('login',login);
    return (
    <>
    {/* <nav style={{display: login ? 'block' : 'none' }}> */}
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
            style={{display: login ? 'block' : 'none' }}
            >登出</button>

            {/* <button className="loginbtn" 
            onClick={()=>{
                setLogin(true)
                handlingLogin()
            }}
            style={{display: login ? 'none' : 'block' }}
            >登入</button> */}
    </div>


    <div className='nav'
        style={{display: login ? 'none' : 'flex' }}
        >
        <div className="logo">
            <Link to="/"><img src="http://localhost:3000/logo.png" alt/></Link>
        </div>

        <button className="loginbtn" 
        onClick={()=>{
            // setLogin(true)
            handlingLogin()
        }}
        style={{display: login ? 'none' : 'block' }}
        >登入</button>
    </div>
    </>
    );
};

export default withRouter(Nav);
