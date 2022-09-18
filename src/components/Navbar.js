import React from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
      scale: 1.1, 
      boxShadow: "0px 0px 6px rgba(99 102 241)",
  }
}

const Navbar = () => {
  return (
    <>
      <header className="body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <motion.span initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 1, type: 'spring', stiffness: 150 }} className="ml-3 text-xl">YetToName</motion.span>
          </a>
          <motion.nav initial={{ y: -250 }} animate={{ y: -10 }} transition={{ delay: 1, type: 'spring', stiffness: 150 }} className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
            <Link to="/"className="mr-5 cursor-pointer">Home </Link>
            <Link to="/eventlist"className="mr-5 cursor-pointer">Events </Link>
            <Link to="/create" className="mr-5 cursor-pointer"><motion.button variants={buttonVariants} whileHover="hover" className="inline-flex items-center border-2 text-indigo-500 border-indigo-500 mr-2 text-white border-0 py-2 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0"><FaPlus class="mr-2"/>Add New Event</motion.button></Link>
          </motion.nav>
        </div>
      </header>
    </>
  )
}

export default Navbar