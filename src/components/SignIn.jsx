import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

function SignIn() {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    fetch('https://647092d63de51400f7248a57.mockapi.io/login')
    .then((res)=>res.json())
    .then((data)=> setData(data))
  })
  const handlerSignIn = (e) =>{
    e.preventDefault()
    let newUser = {
        login: e.target.login.value,
        password: e.target.password.value
    }
if(    data.find((item) =>item.login == newUser.login && item.password == newUser.password)) {
navigate('/home')
}
}
  return (
    <div>
        <h2>
        SignIn
        </h2>
        <Link to='signup'>Sign Up</Link>
        <form onSubmit={handlerSignIn} action="#" className='form-control w-50'>
            <input className='form-control' type="text" placeholder='login'  name='login'/>
            <input className='form-control mt-3' type="text" placeholder='password' name='password' />
            <button className='btn btn-success mt-3'>
Sign In 
            </button>
        </form>
    </div>
  )
}

export default SignIn