import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center hidden md:block border-t border-[#555] mt-12 w-full p-3'>
        Designed & Developed by ~ <Link to='https://www.linkedin.com/in/shaikh-kaif-62ba3725b/' target="_blank" >Shaikh Mohammed Kaif✨</Link>
    </footer>
  )
}

export default Footer