import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <MenuIcon className='icon'/>
          </div>
          <div className="item">
            <img 
            src="https://images.saymedia-content.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_620/MTc1MTEyNTE1NDY1MDYyMjEy/the-minions.jpg" 
            alt=""
            className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}
