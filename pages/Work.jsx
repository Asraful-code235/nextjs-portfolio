import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { client, urlFor } from '../client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleworkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'all') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  useEffect(() => {
    const query = "*[_type == 'works']";
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  return (
    <motion.div
      id="work"
      className="prose pt-8 md:pt-16 lg:prose-xl w-full mt-24 md:mt-20 "
    >
      <motion.div
        // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        // transition={{ duration: 0.5, ease: 'easeInOut' }}
        className=" w-full "
      >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="max-w-md text-start ml-4 md:ml-0 mt-4 md:mt-0"
        >
          <p className="text-slate-600 text-xl ">
            Hello! I&apos;m a Web developer/UI/UX desiginer strongly forused on
            creating beautiful, functional UI&apos;s and responsive
            website&apos;s.
          </p>
        </motion.div>
        <div className="flex flex-wrap  my-4">
          {['ui/ux', 'nextjs', 'reactjs', 'all'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleworkFilter(item)}
              className={` m-2 rounded-sm  cursor-pointer capitalize px-3 py-2 flex items-center justify-center ${
                activeFilter === item
                  ? 'bg-[#323436] text-white font-semibold'
                  : ' font-semibold border shadow'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          // whileInView={scaleVariants.whileInView}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className=" w-full grid grid-cols-1  min-[936px]:grid-cols-2 auto-cols-auto gap-6   mt-6"
        >
          {filterWork.map((work, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: [1, 1.01] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-stone-50  min-w-[350px] max-w-full    rounded-md "
            >
              <motion.div
                whileHover={{ opacity: [1, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="bg-stone-200  relative h-[26rem]"
              >
                <div className=" absolute bg-stone-300 inset-8 rounded-sm">
                  <img
                    src={urlFor(work.imgUrl)}
                    alt={work.name}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </motion.div>
              <div className="prose ">
                <h1 className="font-semibold text-xl mt-2 text-slate-600  ">
                  {work.name}
                </h1>
                <p className=" text-slate-600 text-base break-normal ">
                  {work.description}
                </p>
                <div className=" mt-4 flex justify-start items-center">
                  <button className="capitalize rounded-sm text-white  bg-[#323436] px-3 py-2 ">
                    <Link
                      href={`${work.projectLink}`}
                      className="flex items-center justify-between"
                    >
                      <span className="mx-2">
                        <AiOutlineArrowRight />
                      </span>
                      Live Demo
                    </Link>
                  </button>
                  <button className=" bg-[#323436] px-3 py-2   rounded-sm text-white m-2 capitalize ">
                    <Link
                      href={`${work.codeLink}`}
                      className="flex items-center justify-between"
                    >
                      {' '}
                      <span className="mx-2">
                        <AiFillGithub />
                      </span>{' '}
                      Github
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
