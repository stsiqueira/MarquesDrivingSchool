import React from 'react'
import logo from '../img/logo.JPG';
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" className='header-logo'/>
      <FaBars className='menu' />
    </div>
  )
}

export default Header
