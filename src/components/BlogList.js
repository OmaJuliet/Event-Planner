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


const BlogList = ({ blogs, title }) => {

  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <p className="text-center text-base text-indigo-500">Blogs</p>
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" exit="exit" class="container px-5 py-8 mx-auto">
          <section class="flex flex-wrap -m-12">
            {blogs.map((blog) => (
              <article class="p-12 md:w-1/2 flex flex-col items-start" key={blog.id}>
                <h2 class="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-2 mb-4">{blog.title}</h2>
                <p class="leading-relaxed mb-2">{blog.intro}</p>
                <figure class="flex items-center flex-wrap pb-4 mb-2 border-b-2 border-gray-100 mt-auto w-full">
                  <Link to={`/blogs/${blog.id}`}><motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="mx-auto text-white bg-indigo-500 border-0 px-2 py-0 focus:outline-none hover:bg-indigo-600 rounded text-lg">Full Blog</motion.button></Link>
                </figure>
                <a class="inline-flex items-center">
                  <img alt="blog" src={pic} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="font-medium text-gray-900">{blog.author}</span>
                    <span class="text-gray-500 text-xs tracking-widest mt-0.5">{blog.date}</span>
                  </span>
                </a>
              </article>
            ))}
          </section>
        </motion.div>
      </section>

    </>

  )
}

export default BlogList