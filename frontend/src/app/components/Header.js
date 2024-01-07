import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

const Header = () =>{
    return(
        <header className='header'>
            <div style={{marginLeft:'20px',display:'flex'}}>
            <Link to="/" className='header-btn'>Home</Link>
            </div>
            <div style={{marginRight:'20px',width:'20em',display:'flex',justifyContent:'space-between'}}>
            <Link to="/order" className='header-btn'>Order</Link>
            <Link to="/previous-purchases" className='header-btn'>Previous Purchases</Link>
            <Link to="/login" className='header-btn'>Login</Link>

            </div>
        </header>
    )
}


export default Header;