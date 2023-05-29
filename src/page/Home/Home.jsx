import React from 'react'
import logo from '../../components/img/logo.png'
import music from '../../components/img/musicc.png'
import pl from '../../components/img/pl.png'
import i1 from '../../components/img/img1.png'
import i2 from '../../components/img/img2.png'
import i3 from '../../components/img/img3.png'
import loc from '../../components/img/location.png'
import star from '../../components/img/star.png'
import './Home.scss'
function Home() {
  let dateNow = new Date()
  let date = dateNow.getDate()
let year = dateNow.getFullYear()
let month = dateNow.getMonth()
  return (
    <div className='comtainer'>
      <div className="home">
           <div className="menu">
              <img className='menu__img' src={logo} alt="" />
             <ul>
               <li>Dashboard</li>
               <li>Note’s</li>
                <li>Theme</li>
                <li>Account</li>
               <li>Explore</li>
                <li>Graph</li>
                <li>Messages</li>
                <li>Setting</li>
            </ul>
                <li>Sign Out</li>
           </div>
           <div className="main">
              <input placeholder='Search for places' type="text" />
              <img className='main__pl' src={pl} alt="" />
              <img className='main__header__img' src={music} alt="" />
             <h1 className='main__text'>
                       Discover World
              </h1>
             <ul className='main__list'>
               <li>Recommended</li>
               <li>Popular Places</li>
               <li>Trip’s</li>
            </ul>
             <ul className="cards">
                <li className="card">
                <img className='card__img' src={i1} alt="" />
                <h2>
                        Moonlight Night
                </h2>
              <div className="buttons">
                   <img className='cards__img' src={loc} alt="" />
                 <h6>
                   Canada
                 </h6>
                 <img src={star} alt="" />
                 4.7
              </div>
                </li>
                <li className="card">
                  <img className='card__img' src={i2} alt="" />
                  <h2>
                   Sahara Desert
                 </h2>
                <div className="buttons">
                    <img className='cards__img' src={loc} alt="" />
                    <h6>
                      canada
                   </h6>
                   <img src={star} alt="" />
                   4.8
                </div>
                </li>
                  <li className="card">
                    <img className='card__img' src={i3} alt="" />
                <h2>
                  Night Camping
              </h2>
             <div className="buttons">
               <img className='cards__img' src={loc} alt="" />
              <h6>
                canada
              </h6>
              <img src={star} alt="" />
             5.0
             </div>
            </li>

           </ul>
<div className="time">
  <h1>
  Event Dates
  </h1>
  <button>
    May 
    {
    date
    }-
{
  year
}
  </button>
</div>
  <ul className="date">
<li>
  {
    date-1
  }
</li>
<li>
  {
    date
  }
</li>
<li>
  {
    date+1
  }
</li>
<li>
  {
    date+2
  }
</li>
<li>
  {
    date+3
  }
</li>
<li>
  {
    date+4
  }
</li>
<li>
  {
    date+5
  }
</li>
<li>
  {
    date+6
  }
</li>
<li>
  {
    date+7
  }
</li>
  </ul>
           </div>
           <div className="info">
          s
           </div>
           </div>
    </div>
  )
}

export default Home