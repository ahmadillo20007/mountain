import React from 'react'
import Info from '../../components/Info/Info'
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