import React, { useState } from 'react';
import {
    FaApple, FaGooglePlay, FaCloudDownloadAlt, FaUsers,
    FaStar, FaUserCheck, FaTwitter, FaLinkedin, FaFacebookF, FaInstagram
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import hero from '../images/plan.jpg';
import event1 from '../images/Baby Shower event.jpg';
import event2 from '../images/Birthday event.jpg';
import event3 from '../images/concert event.jpg';
import event4 from '../images/conference event.jpg';
import event5 from '../images/Graduation event.jpg';
import event6 from '../images/Hangout event.jpg';
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

    const [testimonials, setTestimonials ] = useState ([
        { image:'images/test1.jpg', name: 'Eric Uwimana', icons: <FaStar />, location: 'Rwanda', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia purus vitae dui scelerisque, at faucibus mauris pellentesque.' },
        { image:'images/test2.jpg', name: 'Isabella Ricci', icons: <FaStar />, location: 'Italy', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia purus vitae dui scelerisque, at faucibus mauris pellentesque.' }
    ])


    return (
        <>
            <section>
                <section className="text-gray-600 body-font">
                    <motion.section variants={sectionVariants} initial="hidden" animate="visible" exit="exit" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                        <section className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-indigo-600">An easy way to plan
                                <br className="hidden lg:inline-block" /> your events
                            </h1>
                            <p className="mb-8 leading-relaxed">You get to plan your events and automatically get notified close to your event date
                                A perfect site and app for event planners and basically anybody who likes to get their events planned out ahead of time.
                                Now, you can't say you forgot that special day!!
                            </p>

                            <aside className="flex justify-center">
                                <Link to="/create"><motion.button variants={buttonVariants} whileHover="hover" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Get Started</motion.button></Link>
                            </aside>

                            <article className="flex lg:flex-row md:flex-col mt-12">
                                <button className="bg-gray-300 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-400 focus:outline-none">
                                    <FaApple className="w-8 h-8" />
                                    <span className="ml-4 flex items-start flex-col leading-none">
                                        <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                        <span className="title-font font-medium">App Store</span>
                                    </span>
                                </button>

                                <button className="bg-gray-300 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-400 focus:outline-none">
                                    <FaGooglePlay className="w-6 h-6" />
                                    <span className="ml-4 flex items-start flex-col leading-none">
                                        <span className="text-xs text-gray-600 mb-1">Download on</span>
                                        <span className="title-font font-medium">Google Play</span>
                                    </span>
                                </button>

                            </article>
                        </section>


                        <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src={hero} />
                        </figure>
                    </motion.section>
                </section>
            </section>




            {/* Gallery Section */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Events</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Make plans for future events; birthdays, graduation, conferences, parties and lots more.</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={event4} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={event5} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={event6} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={event1} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={event2} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={event3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Statistics Section */}
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6">
                                <FaStar className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="font-medium text-3xl text-black">2.2K</h2>
                                <p className="leading-relaxed text-gray-600">Reviews</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 rounded-lg">
                                <FaUsers className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="font-medium text-3xl text-black">3.1K</h2>
                                <p className="leading-relaxed text-gray-600">Users</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 rounded-lg">
                                <FaCloudDownloadAlt className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="font-medium text-3xl text-black">3.12K</h2>
                                <p className="leading-relaxed text-gray-600">Downloads</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="px-4 py-6 rounded-lg">
                                <FaUserCheck className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                                <h2 className="font-medium text-3xl text-black">Stat</h2>
                                <p className="leading-relaxed text-gray-600">Verified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonial Section */}
            <section className="">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-6 rounded">
                                <a className="inline-flex items-center">
                                    <img alt="testimonial" src={testimonial.image} className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="text-lg font-medium text-gray-900">{testimonial.name}</span>
                                        <span className="flex flex-row text-orange-500 my-2">{testimonial.icons}{testimonial.icons}{testimonial.icons}{testimonial.icons}{testimonial.icons}</span>
                                        <span className="text-gray-700 text-base">{testimonial.location}</span>
                                    </span>
                                </a>
                                <p className="leading-relaxed mb-2">{testimonial.text}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>




            {/* Footer Section */}
            <footer>
                <aside className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-black">
                        <span className="ml-3 text-xl">Events</span>
                    </h1>
                    <p className="text-sm text-gray-700 sm:ml-0 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2022 All rights reserved</p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-indigo-500 cursor-pointer">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-indigo-500 cursor-pointer">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-indigo-500 cursor-pointer">
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a className="ml-3 text-indigo-500 cursor-pointer">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </span>
                </aside>
            </footer>


        </>
    )
}

export default Page
