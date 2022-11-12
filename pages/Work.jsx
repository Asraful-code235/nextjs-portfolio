import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const data = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Ecommerce',
    descripton:
      ' A web shopping market for selling products with crud functionalitys.I used Next.js,mongodb,tailwindcss,next-Auth ect.',
    liveLInk: '',
    githubLink: '',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Todo',
    descripton:
      ' A web shopping market for selling products with crud functionalitys.I used Next.js,mongodb,tailwindcss,next-Auth ect.',
    liveLInk: '',
    githubLink: '',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600',
    name: 'Todo',
    descripton:
      ' A web shopping market for selling products with crud functionalitys.I used Next.js,mongodb,tailwindcss,next-Auth ect.',
    liveLInk: '',
    githubLink: '',
  },
];
const scaleVariants = {
  whileInView: {
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Work = () => {
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
        <motion.div
          whileInView={scaleVariants.whileInView}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className=" w-full grid grid-cols-1  min-[936px]:grid-cols-2 auto-cols-auto gap-6   mt-6"
        >
          {data.map((items, i) => (
            <motion.div
              key={items + i}
              whileHover={{ scale: [1, 1.01] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-stone-50  min-w-[350px] max-w-full    rounded-md "
            >
              <div className="bg-stone-200  relative h-[26rem]">
                <div className=" absolute bg-stone-300 inset-8 rounded-sm">
                  <img
                    src={items.image}
                    alt={'project'}
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
              <div className="prose ">
                <h1 className="font-semibold text-xl mt-2 text-slate-600  ">
                  {items.name}
                </h1>
                <p className=" text-slate-600 text-base break-normal ">
                  {items.descripton}
                </p>
                <div className=" mt-4 flex justify-start items-center">
                  <button className="capitalize rounded-sm text-white  bg-[#323436] px-3 py-2 ">
                    <Link
                      href={items.liveLInk}
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
                      href={items.githubLink}
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
