import React from 'react'
import "./SidebarChat.css";
import { Avatar } from '@mui/material';


function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar src="https://i.pravatar.cc/" />
      <div className='sidebarChat__info'>
        <h2>room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

export default SidebarChat
