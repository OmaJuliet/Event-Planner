import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../useFetch';
import { motion } from 'framer-motion';



const loaderVariants = {
  animationOne: {
    x: [ -20, 20 ],
    // y: [ 0, -30 ],
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


const EventDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory()


  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/eventlist');
    })
  }


  return (
    <section>

      <section className="text-gray-600 body-font">
        <motion.section initial={{ x: '-100vw'}} animate={{ x: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 150 }} className="container px-5 py-24 mx-auto flex flex-wrap">
          <article className="lg:w-1/2 w-full mx-auto">
            <figure className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img alt="event" className="w-full object-cover h-full lg:h-1/6 object-center block border-gray-500 border-2 absolute inset-0" src="" />
            </figure>

            {isPending && <div className="flex flex-col text-center w-full mb-2">Loading...</div>}
            { isPending && <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>}
            {error && <div className="flex flex-col text-center w-full mb-12">{error}</div>}
            {blog && (
              <aside>
                <h2 className="font-bold mt-4 mb-4 text-gray-900 text-2xl sm:text-3xl">{blog.title}</h2>
                <figure className="w-20 h-1 bg-indigo-500 rounded mt-0 lg:mt-0 mb-4"></figure>
                <p className="font-semibold mt-4 mb-4 text-gray-900 text-xl">Location: {blog.location}</p>
                <p className="font-medium mt-2 mb-4 text-indigo-500 text-lg sm:text-xl">Date: {blog.date}</p>
                <aside className="text-lg text-black">{blog.body}</aside>
                <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="mx-auto text-white bg-indigo-500 border-0 mt-4 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Edit</motion.button>
                <motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgba(99 102 241)" }} onClick={handleClick} class="mx-auto  ml-4 text-indigo-500 border-1 border-indigo-500 mt-4 py-2 px-8 focus:outline-none hover:bg-white rounded text-lg">Delete</motion.button>
              </aside>
            )}

          </article>
        </motion.section>
      </section>
    </section>

  )
}

export default EventDetails