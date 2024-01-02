import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseFill} from 'react-icons/ri'
import logo from './../assets/FinalLogo1.svg'
import './navbar.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let headingAnimation={
    initial : {opacity:0, y:-20},
    viewport : {once:true}, 
    transition : {duration:0.7},
    whileInView:{opacity:1, y:0}
  }


  return (
    <>
    <motion.div className="mainNav lg:h-[80px] items-center" {...headingAnimation}>
      <nav className='p-4 lg:p-8'>
        <Link to='/' className='text-2xl md:text-3xl inline-block font-bold text-[--text-color] hover:text-[--primary-color]'>
          <span className=''>S-</span>Kaif
        </Link>

        <div className={isOpen ? 'menu active': 'menu'}>
          <Link to='/' onClick={()=>setIsOpen(!isOpen)} className='links text-xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion'>Home</Link>
          <Link to='/about' onClick={()=>setIsOpen(!isOpen)} className='links text-xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion'>About</Link>
          <Link to='/project' onClick={()=>setIsOpen(!isOpen)} className='links text-xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion'>Project's</Link>
          <Link to='/contact' onClick={()=>setIsOpen(!isOpen)} className='md:bg-[--primary-color] md:text-white md:py-1 md:px-3 md:rounded-md links text-xl font-semibold text-[--text-color] hover:text-black transtion'>Contact</Link>
        </div>

        <div className="mobile" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseFill className='text-[#d2dad5] text-3xl font-semibold'/> : <GiHamburgerMenu className='text-[#d2dad5] text-3xl font-semibold' />}
        </div>
      </nav>
    </motion.div>


    </>
  );
}
export default Navbar