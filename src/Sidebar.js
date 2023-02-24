import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    const rectentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media.licdn.com/dms/image/D5616AQEvk_SEgPTkTg/profile-displaybackgroundimage-shrink_200_800/0/1674878957469?e=1682553600&v=beta&t=_34B8W9Zlyfbj6yQqdfTpQZKRrgb3PU5ZfpnPWWS-7g" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Madushan Gunarathne</h2>
            <h4>madushangunarathne@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat"> 
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>150</p>
            </div>

            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>450</p>
                
            </div>

        </div>
        <div className="sidebar__bottom">
                <p>Recent </p>
                {rectentItem("reactjs")}
                {rectentItem("nodejs")}
                {rectentItem("mongodb")}
                {rectentItem("express")}
        
            </div>
    </div>
  )
}

export default Sidebar