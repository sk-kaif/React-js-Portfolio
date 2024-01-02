import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import projectsList from "./allProjects";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { motion } from "framer-motion";

const Projects = () => {
  let localAnimationn = {
    initial: { opacity: 0, scale: 0.2 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.3, yoyo: false },
    animate: { opacity: 1, scale: 1 },
  };
  let headingAnimation = {
    initial: { opacity: 0, y: "-10vh" },
    viewport: { once: true },
    transition: { duration: 0.5 },
    whileInView: { opacity: 1, y: "0vh" },
  };

  return (
    <>
      <div className="mainProject mt-24">
        <motion.h1
          {...headingAnimation}
          className="text-center text-[25px] sm:text-[40px] md:text-[55px] xl:text-[90px] text-[--hero-text] font-bold mt-20 mb-4"
        >
          Project's
        </motion.h1>
        {projectsList.map((item) => {
          return (
            <motion.div
              {...localAnimationn}
              key={uuid()}
              className="projectSection rounded-3xl border-[3px] overflow-hidden w-[90%] mx-auto 
              my-10 md:max-w-6xl flex flex-col-reverse md:flex-col lg:flex-row relative"
            >
              {/*Content Con */}
              <div className="content p-4 sm:p-16 lg:w-[60%] lg:p-9 md:py-6">
                <h1 className="text-xl md:text-[26px] lg:text-[33px] w-full text-white font-semibold">
                  {item.id}
                  <span> - </span>
                  {item.heading}.
                </h1>
                <p className="text-[#cbd5e1] text-md md:text-lg leading-12 mt-4 mb-6 lg:my-10">
                  {item.desp}
                </p>
                <h1 className="font-semibold lg:text-lg text-[--primary-color]">
                  Tech Stack :{" "}
                </h1>
                <div className="teckStack flex gap-4 flex-wrap mt-4 mb-4 lg:w-[70%]">
                  {item.techStacks.map((tech) => {
                    return (
                      <div
                        key={uuid()}
                        className="tech rounded-md hover:border-[--primary-color] px-3 py-1 lg:py-1.5 lg:px-6 border"
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>

                <div className="btnCon mt-8 gap-4 md:flex ">
                  <Link
                    to={item.previewLink}
                    target="_blank"
                    className="preview mb-4 bg-[--primary-color] transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color] flex items-center justify-between p-1.5 md:p-2 lg:py-3 lg:px-5 sm:w-[50%] lg:w-[35%] lg:text-xl"
                  >
                    Preview
                    <span>
                      <BsArrowUpRight />
                    </span>
                  </Link>

                  <Link
                    to={item.soucresLink}
                    target="_blank"
                    className="sorceCode mb-4 bg-[--primary-color] transition duration-150 ease-in-out border-2 border-indigo-500 rounded-md text-[#fff] bg-indigo-500 hover:border-2 hover:bg-transparent hover:border-[--text-color] flex items-center justify-between p-1.5 md:p-2 lg:py-3 lg:px-5 sm:w-[50%] lg:w-[35%] lg:text-xl"
                  >
                    Source Code
                    <span>
                      <VscGithub />
                    </span>
                  </Link>
                </div>
              </div>

              <div className="project-img w-full lg:mr-3 lg:w-[40%] md:block mt-4 md:mt-0">
                <div className="w-full h-full flex justify-center items-center">
                  {item.img && (
                    <img
                      alt="Portfolio"
                      loading="lazy"
                      src={item.img}
                      className="text-transparent lg:max-w-full md:max-w-[60%]"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
