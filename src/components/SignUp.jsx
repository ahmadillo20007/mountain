import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const register = (e) =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.login.value);
        console.log(e.target.password.value);
        let newUser = {
            name: e.target.name.value,
            login: e.target.login.value,
            password: e.target.password.value
        }
        fetch('https://647092d63de51400f7248a57.mockapi.io/login',{
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify(newUser)
        })
        .then((res)=>{
            console.log(res.status);
            if(res.status){
                navigate('/home ')
            }
            res.json()})
        .then((data)=> console.log(data))
    }
  return (
    <div>
        <h2>
        Sign Up
        </h2>
        <Link to='/login '>Sign In</Link>
        <form onSubmit={register} action="#" className='form-control w-50'>
            <input className='form-control mt-3' type="text" placeholder='name  ' name='name' />
            <input className='form-control' type="text" placeholder='login' name='login' />
            <input className='form-control mt-3' type="text" placeholder='password' name='password' />
            <button className='btn btn-success mt-3'>
            Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUp