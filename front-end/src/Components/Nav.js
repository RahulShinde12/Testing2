import React from 'react'
import logo from './cap_logo.png';
import { Link } from 'react-router-dom';
 

const Nav=()=>{
    return(
        <div>
            
            <ul className='nav-ul'>
                <img src={logo} alt='Logo'></img>
                <div className='nav-list'>
                <li><Link to="/">Dashborad</Link></li>
                <li><Link to="/view">View RM</Link></li>
                <li><Link to="/add">Add RM</Link></li>
                <li><Link to="/update">Update RM</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>

                <li><Link to="/signup">SignUp</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Nav;