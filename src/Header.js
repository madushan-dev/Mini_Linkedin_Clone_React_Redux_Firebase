import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" name="" id="" />
                
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> 
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> 
            <HeaderOption Icon={ChatIcon} title="Messaging"/> 
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/> 
            <HeaderOption avatar="https://media.licdn.com/dms/image/D5635AQHMzBYL_jK6HA/profile-framedphoto-shrink_100_100/0/1675328542391?e=1677816000&v=beta&t=V3oZz_j5uZjivo1YC0sLl370GpP8k4miUylwjDox2fA" title="me"/> 

        </div>
   
    </div>
  ) 
}
