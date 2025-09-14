import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("Login");
    
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
           <h2>{currState}</h2>
           <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type='text' placeholder='Enter your name' />}
            <input type='email' placeholder='Enter your email' />
            <input type='password' placeholder='Re-enter your password' style={currState==="Login"?{display:"none"}:{display:"block"}} />
        </div>
        <button className='login-popup-btn'>{currState==="Sign Up"?"Create account":"login"}</button>
        <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"    
          ?<p>Create a new account ? <span onClick={()=>setCurrState("Sing Up")}>Clike here</span></p>
          :<P>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></P>
      }
      </form>
    </div>
  )
}

export default LoginPopup
