import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, location, date, selectedImage };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New event added");
      setIsPending(false);
      // To redirect users back to the eventlist page
      history.push('/eventlist')
    })
  }


  return (
    <section>

      <motion.section initial={{ x: '100vw'}} animate={{ x: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 150 }} className="text-gray-600 body-font relative">
        <section className="container px-5 py-24 mx-auto">
          <article className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Add Event</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Input event details</p>
          </article>


          <section className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>


              <section className="text-gray-600 body-font">
                <section className="container mx-auto flex flex-col px-5 py-2 items-center justify-center">
                  <h1>Upload Event's Image</h1>
                  {selectedImage && (
                    <>
                      <aside className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img alt="not found" class="lg:w-2/6 md:w-3/6 w-3/6 mb-2 object-cover object-center rounded" src={URL.createObjectURL(selectedImage)} />
                        <br />
                        <button onClick={() => setSelectedImage(null)} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Remove Image</button>
                      </aside>
                    </>
                  )}
                  <br />
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setSelectedImage(event.target.files[0]);
                    }}
                  />

                </section>
              </section>


              <section className="flex flex-wrap -m-2">
                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Event Name</label>
                    <input 
                      type="text"
                      name="ename"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </aside>
                </article>

                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label className="leading-7 text-sm text-gray-600">Event Location</label>
                    <input 
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </aside>
                </article>

                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label className="leading-7 text-sm text-gray-600">Event Date</label>
                    <input
                      type="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </aside>
                </article>

                <article className="p-2 w-full">
                  <aside className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">Additional Details</label>
                    <textarea 
                      name="deet"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6">
                    </textarea>
                  </aside>
                </article>
                <figure className="p-2 w-full">
                  {!isPending && <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Add Event </motion.button>}
                  {isPending && <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} disabled className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Adding Event.... </motion.button>}
                </figure>
              </section>
            </form>
          </section>
        </section>
      </motion.section>
    </section>
  )
}

export default Create