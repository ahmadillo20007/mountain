import React from 'react'
import logo from '../../components/img/logo.png'
import music from '../../components/img/musicc.png'
import pl from '../../components/img/pl.png'
import i1 from '../../components/img/img1.png'
import i2 from '../../components/img/img2.png'
import i3 from '../../components/img/img3.png'
import i6 from '../../components/img/img6.png'
import loc from '../../components/img/location.png'
import star from '../../components/img/star.png'
import not from '../../components/img/not.png'
import acc from '../../components/img/acc.png'
import nat from '../../components/img/nat.png'
import heroDest from "../../components/img/imgbg.png"
import hero2 from "../../components/img/Rectangle 23.png"
import hero3 from "../../components/img/Rectangle 24.png"
import hero4 from "../../components/img/Rectangle 25.png"
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
                date - 1
              }
            </li>
            <li>
              {
                date
              }
            </li>
            <li>
              {
                date + 1
              }
            </li>
            <li>
              {
                date + 2
              }
            </li>
            <li>
              {
                date + 3
              }
            </li>
            <li>
              {
                date + 4
              }
            </li>
            <li>
              {
                date + 5
              }
            </li>
            <li>
              {
                date + 6
              }
            </li>
            <li>
              {
                date + 7
              }
            </li>
          </ul>
          <div className="main__footer">
            <div className="div1">
              <img src={i6} alt="" />
              <h3 className='main__footer__text'>
                Netherlands Travel Tour
              </h3>
              <div className="b">
                <img src={star} alt="" />

                <p>
                  4.7
                </p>
              </div>
            </div>
            <div className="div2">
            </div>
            <div className="div3"></div>
          </div>
        </div>
        <div className='info'>
          <div className="container">
            <div className='info-head-wrap'>
              <span></span>
              <h4>New York/ Dc</h4>
              <div><img src={not} alt="" /></div>
              <img className='info-img-acc' src={acc} alt="" />
            </div>

            <div className='info-hero'>
              <div className="container">
                <div className='info-hero-wrap'>
                  <div>
                    <img src={heroDest} alt="" />
                    <img src={hero2} alt="" />
                    <img src={hero3} alt="" />
                    <img src={hero4} alt="" />
                  </div>
                </div>
                <div className='info-forest'>
                  <h4 className='info-h4-brazil'>Brazil Forest</h4>
                  <p>
                    I spend ten minutes or so doing a couple of Duolingo <br />
                    lessons in French so
                  </p>
                  <div className='info-person'>
                    <div>
                      <h5>per/person</h5>
                      <h4>$1540</h4>
                    </div>
                    <button>Book Travel</button>
                  </div>
                </div>
              </div>
            </div>











            {/* <div className="info__header">
          <img src={loc} alt="" />
          <i className='status'></i>
          <button className='info__btn'>
            <img src={not} alt="" />
          </button>
          <button className='info__btn2'>
            <img src={acc} alt="" />
          </button>
        </div> */}
            {/* <div className="info__hero">
         <div className="info__bg__img">
          <ul className='info__list'>
            <li className='li1'></li>
            <li className='li2'></li>
            <li className='li3'></li>
            <li className='li4'></li>
           
          </ul>
         </div>
          <h2 className='status'>
            Brazil Forest
          </h2>
          <p className='info__item'>
            I spend ten minutes or so doing a couple of Duolingo <br />
            lessons in French so
          </p>
        
        

<div className="c">
<div className="fg"><p className='info__hero__item'>
        per/person</p>
        <h1 className='info__hero__text'>
        $1540
        </h1></div>
<div className="afsd">        <button className='info__hero__btn'>
<p>
Book Travel

</p>        
</button>
</div>
</div>
<ul className='list'>
  <li className='list__item'>
    <img src={nat} alt="" />
  </li>
  <li className='list__item'>
    <img src={caravan} alt="" />
  </li>
  <li className='list__item'>
    <img src={flat} alt="" />
  </li>
</ul>
        </div> */}

          </div>











        </div>

















      </div>
    </div>
  )
}

export default Home