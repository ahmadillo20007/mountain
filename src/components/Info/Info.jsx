import React from 'react'
import './Info.scss'
import loc from '../img/Vector.png'
import not from '../img/not.png'
import acc from '../img/acc.png'
import mountain from '../img/mountain.png'
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
          <img className='info__img' src={mountain} alt="" />
          <h2 className='status'>
            Brazil Forest
          </h2>
          <p className='info__item'>
            I spend ten minutes or so doing a couple of Duolingo <br />
            lessons in French so
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info