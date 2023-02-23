import React from 'react'

function LoginInput() {
  return (
    <div className='LoginInput grid place-content-center'>
<form grid>
<div className='grid input-div  w-screen place-content-center'>
    <label className='input-div'>Email</label>
   <div className='input-div-space flex justify-between items-center'> 
   <div className='ml-6'><img src='/images/emailIcon.png' className='input-icon'/></div>
   <input type='text' placeholder='david@gmail.com' className='input-space'/>
   </div>
</div>
<div className='grid input-div w-screen place-content-center'>
    <label className='input-div'>Password</label>
    <div className='input-div-space flex justify-between items-center'>
    <div className='ml-6'><img src='/images/lockicon.png' className='input-icon'/></div>
    <input type='password' placeholder='*******' className='input-space'/>
    </div>
</div>

    <div className='submit-div pt-6'>
        <input  type='submit' value='Start Selling' className='submit-div-button flex place-content-center' />
    </div>
</form>

<div className='grid w-screen place-content-center py-4 text-zinc-600'>
    <p className='mx-auto'>Create Account</p>
    <p className='mx-auto'>Cancel</p>
</div>
    </div>
  )
}

export default LoginInput;