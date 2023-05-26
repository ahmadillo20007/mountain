import React from 'react'
import './SignUp.scss'
function SignUp() {
  fetch('https://643c0bc570ea0e6602a02485.mockapi.io/',{
    method: 'POST',
    headers :{
      'Contetn-Type':'application/json'
    },
    body:JSON.stringify ({
      name: 'User 1'

    })
  }).then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error('ERROR'))
  return (
    <div className='login'> 
      <p className='er'>
      Welcome back
      </p>
      <h3 className='aer'>
      Login to your account
      </h3>
      <label className='tq4' htmlFor="">Email</label><br />
      <input className='qq34t' type="text" name="" id="" /><br />
      <label  className='q34q43' htmlFor="">Password</label><br />
      <input className='rehy' type="password" name="" id="" />
      <input className='etyr' type="radio" name="" id="" />
      <p className='wyyw'>
      Remember me
      </p>
      <p className='awtgaer'>
      Forgot password?
      </p>
      <button className='eagear'><p>
      Login now
      </p>
      </button>
      <button className='sery56'><p>
      Or sign-in with google
        </p></button>
    </div>
  )
}

export default SignUp