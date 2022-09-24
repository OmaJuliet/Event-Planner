import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';


const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 6px rgba(99 102 241)",
  }
}

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }


  return (
    <>
      <header>
        <nav className={toggle ? 'navbar expanded' : 'navbar'}>
          <h2 className='logo'>Rez</h2>
          <div className='toggle-icon' onClick={handleToggle}>
            {toggle ? <p className="menu-close">X</p> : <FaBars />}
          </div>
          <ul className='links'>
            <Link to="/" id="active"><li>Home</li></Link>
            <Link to="/bloglist"><li>Blogs</li></Link>
            <Link to="/"><li>About</li></Link>
            <motion.div variants={buttonVariants} whileHover="hover" className="btn-content"><Link to="/create" className="btn">Post a Blog</Link></motion.div>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Navbar