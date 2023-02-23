import React from 'react';
import './AuthFolder.css'
import LoginInput from './LoginInput';

function Login() {
  return (
    <div className='Login '>
<div className='logo-div grid place-content-center'>
   <div >
   <img src='/images/logo.png' className='mx-auto' />
   </div>
    <img src='/images/belowlogo.png' className='below-logo mx-auto' /> 
</div>
    <LoginInput />
    </div>
  )
}

export default Login;