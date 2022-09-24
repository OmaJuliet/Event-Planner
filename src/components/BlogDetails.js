import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from '../useFetch';
import { motion } from 'framer-motion';



const loaderVariants = {
  animationOne: {
    x: [-20, 20],
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
      alert("Are you sure you want to delete this blog?");
      history.push('/bloglist');
    })
  }


  return (
    <>
      <section className="">
        <motion.article initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 150 }} className="container px-5 py-10 mx-auto">
          {isPending && <div className="flex flex-col text-center w-full mb-2">Loading...</div>}
          {isPending && <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div>}
          {error && <div className="flex flex-col text-center w-full mb-2">{error}</div>}
          {blog && (
            <summary className="flex flex-col w-full text-left mb-10">
              <p className="lg:w-2/3 mx-auto font-bold mb-0 text-indigo-500 text-xl sm:text-2xl">{blog.title}</p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-lg mt-0">Author: {blog.author}</p>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm text-gray-700 mt-0">Date: {blog.date}</p>
              <br />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{blog.body}</p>
              <br/>
              <motion.button onClick={handleClick} whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgba(99 102 241)"}} className="mx-auto text-indigo-500 border-0 mt-8 py-2 px-4 focus:outline-none border-1 border-indigo-500 hover:bg-white rounded text-lg items-start">Delete</motion.button>
            </summary>
          )}

        </motion.article>
      </section>



    </>

  )
}

export default EventDetails