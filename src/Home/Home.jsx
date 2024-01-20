import React from 'react'
import {BiRightArrowCircle} from 'react-icons/bi'

import {AiFillGithub,AiFillLinkedin,AiOutlineLinkedin} from 'react-icons/ai';
import {HiOutlineDocumentDownload} from 'react-icons/hi';

import html from './../assets/html.png'
import tailwindCss from './../assets/tailwindCss.webp'
import js from './../assets/js.webp'
import react from './../assets/react.webp'
import pro from './../assets/credAll.webp'
import { Link } from 'react-router-dom';
import cv from './../assets/kaifShaikh-Resume.pdf'
import { motion } from 'framer-motion';

const Home = () => {


  let localAnimationn = {
    initial : {opacity:0,scale:0.2,},
    viewport : {once:true}, 
    transition : {duration:0.5,delay:0.3},
    whileInView : {opacity:1, scale:1},
  }

  let headingAnimation={
    initial : {opacity:0},
    viewport : {once:true}, 
    transition : {duration:1},
    whileInView:{opacity:1}
  }

  return (
    <>
    <motion.h1 {...headingAnimation} className='text-center text-[25px] sm:text-[40px] md:text-[55px] xl:text-[90px] text-[--hero-text] font-bold mt-20 mb-4'>FrontEnd Web Developer</motion.h1>
      <div className="md:flex mb-6 mx-auto w-[90%] gap-4 md:max-w-6xl md:w-[90%]">
        <motion.div {...localAnimationn} className="lg:h-60 h-52 sm:h-56 cardBg mb-6 w-full rounded-2xl flex flex-col gap-2 justify-center items-start px-2 md:px-4 md:w-2/4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[--primary-color]">
            Hello 👋
          </h2>
          <h1 className="text-[35px] md:text-[37px] lg:tex-[40px] text-[--text-color] font-bold">
            I am Shaikh Kaif
          </h1>
          <p className="text-[17px] md:text-[20px] text-[#afaeae]">
            ~Lets Connect And Build Together
          </p>

          <Link to='/about' className="overlay text-2xl md:text-4xl p-4 font-semibold flex flex-col gap-5 rounded-2xl">
            <h1 className="">Learn</h1>
            <h1>More</h1>
            <div className="overlayContainer flex justify-between items-center">
              <h1>About Me </h1>
              <BiRightArrowCircle className="text-2xl md:text-4xl" />
            </div>
          </Link>
        </motion.div>

        <motion.div {...localAnimationn} className="lg:h-60 h-52 sm:h-56 cardBg rounded-2xl w-full md:w-2/4 p-5 flex flex-col justify-evenly">
          <h1 className="text-center mb-2 text-[20px] md:text-3xl lg:text-4xl font-semibold">
            My <span className="locallocallocallocalAnimationmationmationmationmatedColor">Core</span> Technologies{" "}
          </h1>

          <div className="skill flex flex-wrap sm:gap-4 md:gap-[12px] justify-around lg:justify-around">
            <img src={html}  className='lg:h-[70px] h-[60px]' />
            <img src={tailwindCss} className='lg:h-[70px] h-[60px]' />
            <img src={js}  className='lg:h-[70px] h-[60px]'/>
            <img src={react} className='lg:h-[70px] h-[60px]' />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto w-[90%] lg:h-52 flex flex-col gap-4 md:flex md:flex-wrap md:max-w-6xl md:w-[90%] md:flex-row md:gap-[1.5rem] lg:flex-nowrap lg:gap-4">

        
        <motion.div {...localAnimationn} target='_blank' className="md:w-[48%] lg:w-3/12 lg:justify-center flex flex-col items-center gap-2 p-4 rounded-2xl cardBg">
          <a href={cv} target='_blank'>
            <HiOutlineDocumentDownload className="text-8xl popUp" />
            <p className="font-semibold text-2xl">Resume</p>
          </a>
        </motion.div>

        
        <motion.div {...localAnimationn} className="relative md:w-[48%] lg:w-3/12 lg:justify-center flex flex-col items-center gap-2 p-4 rounded-2xl cardBg">
          <AiFillLinkedin className="text-8xl" />
          <p className="font-semibold text-2xl">Linked In</p>
          <Link to='https://www.linkedin.com/in/shaikh-kaif-62ba3725b/' target="_blank" rel="noopener noreferrer" className="overlay text-2xl md:text-4xl p-4 font-semibold flex flex-col gap-3 rounded-2xl">
            <AiOutlineLinkedin />
            <h1>Lets</h1>
            <h1>Connect</h1>
          </Link>
        </motion.div>

       <motion.div {...localAnimationn} className="k hover:text-black md:w-[48%] relative lg:w-3/12 lg:justify-center box-border flex flex-col items-center lg:p-4 rounded-2xl cardBg">
        <Link to='/project'>
          <h1 className='absolute text-2xl font-semibold bottom-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Projects</h1>
          <img src={pro} className='lg:mb-8 md:h-32 h-36 mb-12 mt-4 lg:mt-0 protfoilo' />
        </Link>
       </motion.div>

        <motion.div {...localAnimationn} className='cursor-pointer md:w-[48%] lg:w-3/12 lg:justify-center flex flex-col items-center gap-2 p-4 rounded-2xl cardBg'>
          <Link to="https://github.com/sk-kaif" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <AiFillGithub className="text-8xl popUp" />
            <p className="font-semibold text-2xl">Github</p>
          </Link>
        </motion.div>

      </div>
    </>
  );
};

export default Home;