import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='max-w-[1370px] mx-auto py-[20px] flex justify-between items-center'>
      <img src={Logo} alt="logo" height={32} width={130} />
      <div className='flex gap-[21px] text-gray-500'>
        <NavLink to={`/`} className={``}>Home</NavLink>
        <NavLink to={`/collection`} className={``}>Collection</NavLink>
        <NavLink to={`/about`} className={``}>About Us</NavLink>
        <NavLink to={`/contacts`} className={``}>Contacts</NavLink>
      </div>
      <select className='border border-gray-800 rounded-lg p-[5px]'>
        <option className=''>English</option>
        <option>Uzbek</option>
      </select>
    </header>
  )
}

export default Header