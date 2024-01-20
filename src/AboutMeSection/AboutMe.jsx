import {BsArrowRightCircle} from 'react-icons/bs'
import {AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import cv from './../assets/kaifShaikh-Resume.pdf'


const AboutMe = () => {
  const skills = ['HTML','CSS','JS','TAILWIND CSS','REACT JS','SASS','REDUX TOOLKIT','GIT','FIGMA','GITHUB','TYPESCRIPT']
  let localAnimationn = {
    initial : {opacity:0,scale:0.2,},
    viewport : {once:true}, 
    transition : {duration:0.5,delay:0.3,yoyo:false},
   animate: {opacity:1, scale:1},
  }

  let headingAnimation={
    initial : {opacity:0, y:'-10vh'},
    viewport : {once:true}, 
    transition : {duration:0.5},
    whileInView:{opacity:1, y:'0vh'}
  }

  return (
    <>
      {/* Heading */}
      <motion.h1 {...headingAnimation} className='text-center text-[25px] sm:text-[40px] md:text-[55px] xl:text-[90px] text-[--hero-text] font-bold mt-20 mb-4'>About</motion.h1>

      {/* About And Img */}
      <motion.div {...localAnimationn} className="upperSection w-[90%] mx-auto md:flex md:max-w-6xl md:gap-4 md:w-[90%] md:mx-auto ">

        <div className="upperleft p-4 mb-4 w-full flex flex-col justify-around md:w-3/5 md:h-60 bg-[--card-bg] rounded-2xl">
          <h1 className="text-2xl mb-2 text-[--primary-color] font-semibold border-b pb-2">
            Shaikh Mohd-Kaif
          </h1>
          <p className="mb-3">
            Hello there! Welcome to my Profile. I'm shaikh Mohd Kaif,
            <span className='font-semibold text-[--primary-color]'> A Self Taught Developer </span> 
            and curious,
            explorer deeply immersed in the world of web development. My compass
            is set towards creating exceptional digital experiences that leave a
            mark.
          </p>
          <div className="flex items-center justify-between">
            <a href={cv} target='_blank' className="text-lg md:text-xl">
              See Resume
            </a>
            <a href={cv} target='_blank'>
              <BsArrowRightCircle className="text-lg md:text-2xl" />
            </a>
          </div>
        </div>
        <div className="upperRight mb-4 w-full h-60 md:w-2/5 --card-bg rounded-2xl prBg">
        </div>
      </motion.div>

      {/* ====================Eductaion And Skills================== */}
      <motion.div {...localAnimationn} className="w-[90%] mx-auto md:flex md:max-w-6xl md:mx-auto md:mt-4 md:mb-8 md:gap-4 lg:mx-auto ">
        <div className="left bg-[--card-bg] p-4 mb-4 h-[450px] flex flex-col justify-around md:w-3/5 rounded-2xl">
          <h2 className="text-[25px] font-semibold text-[--primary-color] border-b p-2">
            Education
          </h2>

          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-[--text-color]">
              Maharashtra State Board-SSC
            </h2>
            <p className="text-white text-lg">SCD Barfiwala High School</p>
            <p className="text-md text-[#999] font-semibold">2012~2018</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-[--text-color]">
              Higher Secondary~HSC
            </h2>
            <p className="text-white text-lg">RB Junior College</p>
            <p className="text-md text-[#999] font-semibold">2018~2020</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-[--text-color]">
              Bachelor of Commerce
            </h2>
            <p className="text-white text-lg">
              Tilak Maharashtra Vidyapeeth University
            </p>
            <p className="text-md text-[#999] font-semibold">2020~2023</p>
          </div>
        </div>

        <div className="Right h-[450px] md:w-2/5 md:flex md:flex-col md:gap-4">
          {/* Skills Container */}
          <div className="right1 --card-bg h-[300px] p-2 mb-4 flex flex-col md:p-4 bg-[--card-bg] rounded-2xl">
            <h2 className="text-[25px] font-semibold text-[--primary-color] mt-2 pb-2 border-b p-2">
              Skills
            </h2>
            {/*  */}

            <div className="skills flex flex-wrap gap-4 mt-6 items-center justify-start md:justify-start overflow-auto lg:overflow-hidden ">
              {skills && skills.map((skill)=>(
                <div key={crypto.randomUUID()} className="skill html px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">{skill}</div>
              ))}
            </div>
          </div>

          <div className="right2 --card-bg h-[100px] md:h-[150px] lg:p-4 md:p-2 px-2 flex flex-col md:justify-between justify-around bg-[--card-bg] rounded-2xl">
            <h2 className="text-[25px] font-semibold text-[--primary-color] mt-2 pb-1 border-b">
              Get ~ Connect
            </h2>
            <div className="socialIcons flex justify-between items-center text-2xl md:text-3xl lg:text-4xl px-2 py-2">
              {/* <Link to="https://github.com/kaif-shk" target="_blank" rel="noopener noreferrer"> */}
              <Link to="https://github.com/sk-kaif" target="_blank" rel="noopener noreferrer">
                <AiOutlineGithub className="i" />
              </Link>
              <Link to="https://www.linkedin.com/in/shaikh-kaif-62ba3725b/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="i" />
              </Link>
              <Link to='https://twitter.com/Shaikhkaif' target="_blank" rel="noopener noreferrer">
                <RiTwitterXFill className="i" />
              </Link>
              <Link to='tel:9920489366' target="_blank" rel="noopener noreferrer">
                <IoMdContact className="i" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
