import React, { useState } from 'react';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { motion } from 'framer-motion';

const skillsList = [
  {
    id: 1,
    name: 'ReactJs',
    img: '/react.png',
  },
  {
    id: 2,
    name: 'NextJs',
    img: '/nextjs.png',
  },
  {
    id: 3,
    name: 'Sanity',
    img: '/sanity.png',
  },
  {
    id: 4,
    name: 'Mongodb',
    img: '/mongodb.png',
  },
  {
    id: 5,
    name: 'Figma',
    img: '/figma.png',
  },
  {
    id: 6,
    name: 'Sass',
    img: '/sass.png',
  },
  {
    id: 7,
    name: 'Git',
    img: '/git.png',
  },
  {
    id: 8,
    name: 'Nodejs',
    img: '/node.png',
  },
  {
    id: 9,
    name: 'Python',
    img: '/python.png',
  },
  {
    id: 10,
    name: 'Redux',
    img: '/redux.png',
  },
  {
    id: 11,
    name: 'GraphQL',
    img: '/graphql.png',
  },
];

const Resume = () => {
  return (
    <motion.div
      //   whileInView={{ y: [-100, 0] }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      id="resume"
      className="prose mt-28 flex flex-col min-h-screen pt-24 items-center "
    >
      <h1 className="text-3xl text-center text-slate-800 font-bold">
        Skills & <span className="text-[#3c1aa3]">Resume</span>
      </h1>
      <motion.div
        whileInView={{ opacity: [0, 1], animationDelay: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn', delayChildren: 1.5 }}
        className="flex flex-col w-full items-center min-h-[50vh] justify-between gap-10   mt-24  "
      >
        <motion.div className="flex flex-wrap w-full md:w-[60%]  items-start justify-center   gap-6">
          {skillsList.map((items, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1], animationDelay: 2 }}
              transition={{ duration: 0.5, ease: 'easeIn', delayChildren: 1.5 }}
              whileHover={{ scale: [1, 1.1] }}
              key={items + i}
              className="  gap-4   rounded flex flex-col items-center justify-center"
            >
              <div className="h-[90px] w-[90px] bg-stone-100 rounded-full  flex items-center justify-center   ">
                <img
                  src={items.img}
                  className=" h-[50%] w-[50%] rounded-full "
                  alt={items.name}
                />
              </div>
              <p className="text-slate-600 text-sm">{items.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1], animationDelay: 3 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className=" grid md:place-items-center  mt-28 md:mt-0 "
        >
          <a href="/mid.pdf" target={'_blank'}>
            <button
              className="btn shadow flex capitalize justify-center items-center  bg-[#3c1aa3] outline-none
         border-none hover:bg-[#1e0c55]  text-[#ececec] text-xl"
            >
              Resume.pdf
              <span className="mx-4">
                <BsFileEarmarkPdf />
              </span>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
