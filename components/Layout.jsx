import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { motion, useScroll } from 'framer-motion';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <Head>
        <title> Asraful Islam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex  flex-col  justify-between w-full mx-auto md:w-4/5 ">
        <Navbar />
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed inset-0 h-1 bg-[#200e57] origin-[0%] z-50 "
        />
        <main className="px-2">{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
