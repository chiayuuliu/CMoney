import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {

    // 拿資料
    useEffect(() => {
        const data =[]
        console.log('in')
        fetch('https://randomuser.me/api/')
        .then(r=>r.json())
        .then(data=>{
            console.log(data.results)
        })
    }, []);
    
    const [emailInput, setEmailInput] = useState('')
    const [pwdInput, setpwdInput] = useState('')

    const account = 'lucy.gutierrez@example.com'
    const pwd = 'passion'
    
    // 判斷是否有登入成功
    const isPassed =(pwdInput,emailInput)=>{
        const passAlert = document.querySelector('.login-success')
        const failAlert = document.querySelector('.login-fail')
        
        if(emailInput==account && pwdInput==pwd){
            passAlert.style.display='block'    
        }else{
            failAlert.style.display='block'
        }
        // 三秒後消失
        setTimeout(() => {
            passAlert.style.display='none'
            failAlert.style.display='none'
        }, 3000);
    }
    return (
    <><div className="login-background">
        
            <div className="infowrap">
                <p>帳號：lucy.gutierrez@example.com</p>
                <p>密碼：passion</p>
            </div>
            {/* 狀態提示語 */}
            <div className="login-success" >登入成功</div>

            <div className="login-fail">帳號或密碼有誤，請重新登入</div>
            <div className="loginwrap">
                <div className="logo">
                    <img src="http://localhost:3000/logo.png" alt/>
                </div>
                <div className="txt-login">請登入</div>
                <form action="">
                    <div className="inputwrap">
                        <input 
                        type="email" 
                        placeholder="電子郵件"
                        value={emailInput}
                        onChange={(e)=>{
                            setEmailInput(e.target.value)
                        }}
                        />
                        <input 
                        type="password" 
                        placeholder="密碼"
                        value={pwdInput}
                        onChange={(e)=>{
                            setpwdInput(e.target.value)
                        }}
                        />
                    </div>
                    <div className="btn-wrap">
                        
                        <button type="submit"
                        onClick={(e)=>{
                            e.preventDefault()
                            if(pwdInput && emailInput){
                                isPassed(pwdInput,emailInput)
                            }else{
                                console.log('no')
                                // **這邊要加警示語  
                            }
                        }}>送出</button>


                        <button type="submit"
                        onClick={(e)=>{
                            e.preventDefault()
                            setEmailInput('')
                            setpwdInput('')
                        }}>清除</button>
                    </div>
                </form>
                <div className="copyright">
                    &copy; 2021 Design by Away
                </div>
            </div>
    </div>
    </>
    );
};
export default Login;
