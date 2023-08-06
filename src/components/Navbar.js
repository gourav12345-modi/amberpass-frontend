import React from 'react'
import '../styles/navbar.css'
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi'
import { BiMessageAlt, BiChevronDown } from 'react-icons/bi'



function Navbar() {
  return (
    <div className="navbar">
      <div className="search-bar">
        <FiSearch />
        <input placeholder="Type to search." />
      </div>

      <div className='right'>
        <FiSettings className="icon"/>
        <BiMessageAlt className="icon"/>
        <FiBell className="icon"/>
        <div className="user-wrapper">
          <div className="user-details">
            <p className="name">Thomas Brown</p>
            <p className="work">Developer</p>
          </div>
          <div className="menu-wrapper">
            <img src="/images/user.jpg" alt='Thomas Brown' />
            <BiChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar