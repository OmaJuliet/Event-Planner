import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../images/plan.jpg'
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}


const EventList = ({ blogs, title }) => {

  return (
    <section>

      <section className="body-font">
        <motion.section variants={sectionVariants} initial="hidden" animate="visible" exit="exit" className="container px-5 py-24 mx-auto">
          <article className="flex flex-wrap -m-4">
            {blogs.map((blog) => (
              <article className="p-4 md:w-1/3 w-full" key={blog.id}>
                <summary className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={pic} alt="event " />
                  <section className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.title}</h1>
                    <p className="leading-relaxed mb-3">Date: {blog.date}</p>
                    <Link to={`/blogs/${blog.id}`}><motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="mx-auto text-white bg-indigo-500 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">Event Details</motion.button></Link>
                  </section>
                </summary>
              </article>
            ))}
          </article>
        </motion.section>
      </section>
    </section>



  )
}

export default EventList