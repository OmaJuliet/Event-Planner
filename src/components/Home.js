import React from 'react'
import EventList from './EventList';
import useFetch from '../useFetch';
import { motion } from 'framer-motion';


const loaderVariants = {
  animationOne: {
    x: [ -20, 20 ],
    y: [ 0, -30 ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}
const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')


  return (
    <section className="home">
        { error && <p className="flex flex-col text-center w-full mb-12">{ error }</p> }  
        { isPending && <p className="flex flex-col text-center w-full mb-12">Fetching events...</p>}
        { isPending && <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>}
        {blogs && <EventList blogs={blogs} title="My Events"/> }  
    </section>
  )
}

export default Home



