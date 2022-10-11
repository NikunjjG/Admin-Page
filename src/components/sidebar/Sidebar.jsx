import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">
            NetAdmin
        </span>
      </div>
      <hr />
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
            <li>
              <DashboardIcon className = 'icon'/>
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonOutlineOutlinedIcon className = 'icon'/>
              <span>Users</span>
            </li>
            <li>
              <InventoryIcon className = 'icon'/>
              <span>Products</span>
            </li>
            <li>
              <BusinessCenterIcon className = 'icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className = 'icon'/>
              <span>Delivery</span>
            </li>
            <p className="title">UTILITIES</p>
            <li>
              <AnalyticsIcon className = 'icon'/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className = 'icon'/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
              <MonitorHeartIcon className = 'icon'/>
              <span>System Health</span>
            </li>
            <li>
              <AddToQueueOutlinedIcon className = 'icon'/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className = 'icon'/>
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <PortraitIcon className = 'icon'/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className = 'icon'/>
              <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}
