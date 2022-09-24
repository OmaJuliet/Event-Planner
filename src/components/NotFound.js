import React from 'react'
import { Link } from 'react-router-dom';
import pic from '../images/error.jpg';
import { motion } from 'framer-motion';


const NotFound = () => {
  return (
    <>
      <section>
        <article className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <aside className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Oops!
            <br />Sorry, page not found. </h1>

            <p className="mb-8 text-gray-700 leading-relaxed">You seem lost. Seems like you entered a wrong url link. Contact the owner of the page or go back to the home page.</p>
            <summary className="flex justify-center">
            <Link to="/"><motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back to home page...</motion.button></Link>
            </summary>
          </aside>
          <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="page not found" src={ pic } />
          </figure>
        </article>
      </section>
    </>
  )
}

export default NotFound