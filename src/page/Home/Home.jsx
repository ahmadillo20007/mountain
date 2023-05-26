import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Info from '../../components/Info/Info'
import Login from '../../components/login/Login'
import Main from '../../components/Main/Main'
import Menu from '../../components/Menu/Menu'
import './Home.scss'
function Home() {
  return (
    <div className='home'>
      

        <Menu/>
        <Main/>
        <Info/>
      </div>
  )
}

export default Home