import React from 'react';
import './AuthFolder.css'
import LoginInput from './LoginInput';
import RegisterInput from './RegisterInput';

function Register() {
  return (
    <div className='Login'>
        <div className='Login-nav'>
        <img src='/images/nav-login-register.png' className='mx-auto'/>
        </div>
        <div className='become-a-vendor pt-6 pb-10'>
            <p>Become a Vendor </p>
        </div>
<RegisterInput />
    </div>
  )
}

export default Register;