import React from 'react'
import './Info.scss'
import loc from '../img/Vector.png'
import not from '../img/not.png'
import acc from '../img/acc.png'
import nat from '../img/nat.png'
import caravan from '../img/caravan.png'
import flat from '../img/flat.png'
const findMyState = () => {
  const status = document.querySelector('.status')
const success = (position)=>{
  const latitude = position.cooords.latitude;
  const longitude = position.cooords.longitude;

  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

  fetch(geoApiUrl)
.then(res => res.json())
.then(data =>{
  status.textContent = data.principalSubdivision
})
  

}
const error = ()=>{
  status.textContent = 'error'
}
navigator.geolocation.getCurrentPosition(success , error)
}

function Info() {
  return (
    <div className='info'>
      <div className="container">

        <div className="info__header">
          <img src={loc} alt="" />
          <i className='status'></i>
          <button className='info__btn'>
            <img src={not} alt="" />
          </button>
          <button className='info__btn2'>
            <img src={acc} alt="" />
          </button>
        </div>
        <div className="info__hero">
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
        </div>

      </div>
    </div>
  )
}

export default Info