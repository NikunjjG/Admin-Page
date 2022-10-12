import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export default function Widget({ type }) {
    let data;
    const amount = 100;
    const diff = 20; 
    switch (type) {
        case 'user':
            data={
                title : 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: (<PersonOutlineOutlinedIcon className='icon' style = {{
                    color :'crimson'
                }}/>)
            }
            break;
        case 'order':
            data={
                title : 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (<ShoppingCartOutlinedIcon className='icon' style = {{
                    color: 'green'
                }}/>)
            }
            break;
        case 'balance':
            data={
                title : 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (<AccountBalanceWalletOutlinedIcon className='icon' stye = {{
                    color: '#AE5108'
                }}/>)
            }
            break;
        case 'earning':
            data={
                title : 'FINANCES',
                isMoney: true,
                link: 'View net earnings',
                icon: (<MonetizationOnOutlinedIcon className='icon' style = {{
                    color: '#E4C606'
                }}/>)
            }
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'} {amount}</span>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}
