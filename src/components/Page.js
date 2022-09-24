import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/plan.jpg';
import { motion } from 'framer-motion';



const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgba(99 102 241)",
        boxShadow: "0px 0px 8px rgba(99 102 241)",
        transition: {
            yoyo: Infinity
        }
    }
}

const sectionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.7, duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}


const Page = () => {
    return (
        <>
            <section>
                <section className="">
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" exit="exit" className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">

                        <section className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="sm:text-3xl text-2xl mb-2 font-medium text-indigo-600">Freedom to express 
                                <br className="hidden lg:inline-block" /> yourself.
                            </h1>
                            <p className="mb-8 text-base text-left">Are you a writer? If the answer is yes, you've come to the right website. We provide writers with the flexibility and platform to create and publish their writings, blogs, and articles at Rez's blog. 
                                Additionally, you are free to read as much as you like without any restrictions as you navigate through the various blog entries and articles. Try Rez's platform now!!
                            </p>

                            <aside className="flex justify-center">
                                <Link to="/bloglist"><motion.button variants={buttonVariants} whileHover="hover" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started</motion.button></Link>
                            </aside>
                        </section>


                        <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={hero} />
                        </figure>
                    </motion.section>
                </section>
            </section>

        </>
    )
}

export default Page
