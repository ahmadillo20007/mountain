import './Menu.scss'
import logo from '../img/logo.png'
import home from '../img/home.png'
import mas from '../img/massage.png'
import moon from '../img/moon.png'
import per from '../img/person.png'
import mic from '../img/mic.png'
import graph from '../img/graph.png'
import sms from '../img/sms.png'
import set from '../img/setting.png'
import logout from '../img/logout.png'

function Menu() {
  return (
    <div className='menu'>
        <div className="container">
            <img className='menu__img' src={logo} alt="" /> 
            <ul className='menu__list'>
                <li><img src={home}  alt="" />Dashboard</li>
                <li><img src={mas}  alt="" />Note’s</li>
                <li><img src={moon}  alt="" />Theme</li>
                <li><img src={per}  alt="" />Account</li>
                <li><img src={mic}  alt="" />Explore</li>
                <li><img src={graph}  alt="" />Graph</li>
                <li><img src={sms}  alt="" />Messages</li>
                <li><img src={set}  alt="" />Setting</li>

            </ul>
            <li className='list__item'><img src={logout}  alt="" />Sign Out</li>
        </div>
    </div>
  )
}

export default Menu