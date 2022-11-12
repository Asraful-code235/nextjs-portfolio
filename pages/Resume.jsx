import React, { useState } from 'react';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { motion } from 'framer-motion';

const skillsList = [
  {
    id: 1,
    name: 'ReactJs',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
  {
    id: 2,
    name: 'NextJs',
    img: 'https://vectorseek.com/wp-content/uploads/2021/12/Next.js-Logo-Vector-730x730.jpg',
  },
  {
    id: 3,
    name: 'Sanity',
    img: 'data:image/png;base64,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',
  },
  {
    id: 4,
    name: 'Mongodb',
    img: 'data:image/png;base64,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',
  },
  {
    id: 5,
    name: 'Figma',
    img: 'data:image/png;base64,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',
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
        <motion.div className="flex flex-wrap items-start justify-center   gap-6">
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
