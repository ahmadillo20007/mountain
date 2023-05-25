import React from 'react'
import pl from '../img/pl.png'
import './Main.scss'
import i1 from '../img/img1.png'
import i2 from '../img/img2.png'
import i3 from '../img/img3.png'
import loc from '../img/Vector.png'
import star from '../img/star.png'

const arr =[
1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
]
let dateNow = new Date()
let day = dateNow.getDay()
let date = dateNow.getDate()
let year = dateNow.getFullYear()
let month = dateNow.getMonth()
// if(month == 4){
//    month == 'May'
// }
console.log(dateNow.getDay());
console.log(dateNow.getDate());
function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div className="header">
                <input placeholder='Search for places' className='header__inp' type="text" name="" id="" />
                <img className='pl__img' src={pl} alt="" />
            </div>
            <div className="hero">
              <h1 className='hero__text'>

              Discover World
              </h1>
              <ul className='hero__list'>
                <li className='hero__list__item'>Recommended</li>
                <li className='hero__list__item'>Popular Places</li>
                <li className='hero__list__item'>Trip’s</li>
              </ul>
              <div className="divs">
                <div className="left">
                  <img src={i1} alt="" />
               <h4>
                  Moonlight Night
                  </h4>
               <div className="button">

                  <img src={loc} alt="" />
                  Canada
                  <img src={star} alt="" />
                  4.7
               </div>
                </div>
               
                <div className="center">
                  <img src={i2} alt="" />
               <h4>
               Sahara Desert
                                 </h4>
               <div className="button">

                  <img src={loc} alt="" />
                  Africa
                  <img src={star} alt="" />
                  4.9
               </div>
                </div>
               
                <div className="right">
                  <img src={i3} alt="" />
               <h4>
               Night Camping
                  </h4>
               <div className="button">

                  <img src={loc} alt="" />
                  New York
                  <img src={star} alt="" />
                  5.0
               </div>
                </div>
               
           
               
              </div>
              <div className="time">
               <h1 className='time__text'>
                Event Dates
                </h1>
             <button className='time__btn'>
              May .
              {
               date
              }
              -
                {
               year
                }
                </button>
             </div>
             <div className="data">
         <ul className='data__list'>
            <li className='data__list__item'>
               {
                  date-1
               }
            </li>
            <li className='data__list__item2'>
               <div className="data__list__item2">
                     <h2 className='today'> 
                        {
                           date
                        }
                     </h2>
        
               </div>
            </li>
            <li className='data__list__item'>
               {
                  date+1
               }
            </li>
            <li className='data__list__item'>
               {
                  date+2
               }
            </li>
            <li className='data__list__item'>
               {
                  date+3
               }
            </li>
            <li className='data__list__item'>
               {
                  date+4
               }
            </li>
            <li className='data__list__item'>
               {
                  date+5
               }
            </li>
            <li className='data__list__item'>
               {
                  date+6
               }
            </li>
            <li className='data__list__item'>
               {
                  date+7
               }
            </li>
    
         </ul>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Main