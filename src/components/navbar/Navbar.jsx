import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => {
  return(
    <>
      <a href='#home'>Home</a>
      <a href='#wgpt4'>What is GPT?</a>
      <a href='#features'>Case Studies</a>
      <a href='#possibility'>Open AI</a>
      <a href='#blog'>Library</a>
    </>)
}

const Navbar = () => {
  // nav toggle state
  const [navToggle, setNavToggle] = useState(false)


  // mobile nav toggle button components
  const ToggleButtonOpen = () => {
    return(
      <RiMenu3Line className='riMenu3Line' color='white' size={30} cursor='pointer' onClick={() => setNavToggle(true)} />
    )
  }
  
  const ToggleButtonClose = () => {
    return(
      <RiCloseLine className='riCloseLine' color='white' size={30} cursor='pointer' onClick={() => setNavToggle(false)} />
    )
  }
  // end mobile nav toggle button components


  // navbar
  return (
    <div className='navbar'>
      {/* logo div */}
      <div className='navbar--logo'>
        <img src={logo} width='62.557px'/>
      </div>

      {/* links on desktop view */}
      <div className='navbar--links'>
        <Menu />
      </div>

      {/* toggle button on mobile and tablet */}
      {navToggle ?  <ToggleButtonClose /> : <ToggleButtonOpen />}

      {/* links on mobile and tablets  */}
      { navToggle && <div className='navbar--links-mobile slide-top'>
        <Menu />
      </div>}

      
      <div className='navbar--buttons flex'> 
        <button className='navbar--buttons--sign-in'>Sign in</button>
        <button className='navbar--buttons--sign-up'>Sign up</button>
      </div>
    </div>
  )
}// end navbar

export default Navbar
