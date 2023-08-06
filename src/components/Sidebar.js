import React, { useState } from 'react'
import '../styles/sidebar.css'
import { GrDashboard, GrDocument, GrLogout } from 'react-icons/gr'
import { BsGlobe } from 'react-icons/bs'
import { PiUserSquare } from 'react-icons/pi'
import { FiBookOpen, FiSettings } from 'react-icons/fi'
import { AiOutlineAppstore, AiOutlineQuestionCircle, AiOutlineFolderOpen, AiOutlineOrderedList } from 'react-icons/ai'
import { RiInboxLine } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

function Sidebar() {

  const [showSidebar, setShowSidebar] = useState(false)

  const primaryOptions = [
    {
      label: 'Dashboard',
      icon: <GrDashboard color='red' />
    },
    {
      label: 'Discover',
      icon: <BsGlobe />
    },
    {
      label: 'Users',
      icon: <PiUserSquare />
    },
    {
      label: 'Documents',
      icon: <FiBookOpen />
    },
    {
      label: 'Applications',
      icon: <AiOutlineAppstore />
    },
    {
      label: 'Pages',
      icon: <GrDocument />
    }
  ]

  const secondaryOptions = [
    {
      label: 'Support Center',
      icon: <AiOutlineQuestionCircle />

    },
    {
      label: 'Inbox',
      icon: <RiInboxLine />
    },
    {
      label: 'File Manager',
      icon: <AiOutlineFolderOpen />
    },
    {
      label: 'Data List',
      icon: <AiOutlineOrderedList />

    }
  ]

  const bottomOptions = [
    {
      label: 'Settings',
      icon: <FiSettings />

    },
    {
      label: 'Log Out',
      icon: <GrLogout />
    }
  ]


  return (
    <>
      <GiHamburgerMenu id="sidebar-hamburger-menu" onClick={()=> setShowSidebar(true)}/>
      <div className={"sidebar-menu-bg " + (showSidebar ? "d-block": "")}  onClick={()=> setShowSidebar(false)}></div>
      <div className={"sidebar "+ (showSidebar ? "d-block": "")} >
        <div className="branding">
          <img src="/images/logo_artemis.png" alt="artemis" />
          <h3>Artemis</h3>
        </div>

        <div className="main option-list">
          <p className='heading'>MAIN</p>
          {
            primaryOptions.map((option) => (
              <div className="option">
                <div className='icon'>
                  {option.icon}
                </div>
                <p className="label">
                  {option.label}
                </p>
                <div className="down-icon">
                  <BiChevronDown />
                </div>
              </div>
            ))
          }
        </div>


        <div className="secondary option-list">
          <p className='heading'>SECONDARY</p>
          {
            secondaryOptions.map((option) => (
              <div className="option">
                <div className='icon'>
                  {option.icon}
                </div>
                <p className="label">
                  {option.label}
                </p>
              </div>
            ))
          }
        </div>

        <div className="bottom option-list">
          {
            bottomOptions.map((option) => (
              <div className="option">
                <div className='icon'>
                  {option.icon}
                </div>
                <p className="label">
                  {option.label}
                </p>
              </div>
            ))
          }
        </div>


      </div>
    </>
  )
}

export default Sidebar