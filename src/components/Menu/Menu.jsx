import React from 'react'
import logo from '../img/logo.png'
import home from '../img/home.png'

function Menu() {
  return (
    <div className='menu'>
        <div className="container">
            <img src={logo} alt="" />
            <ul>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={home}  alt="" />Dashboard</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu