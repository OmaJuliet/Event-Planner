import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';


const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [intro, setIntro] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, intro, body, author, date };
    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      // To redirect users back to the blog's list page
      history.push('/bloglist')
    })
  }


  return (
    <section>

      <motion.section initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 150 }} className="text-gray-600 relative">
        <section className="container px-5 py-6 mx-auto">
          <article className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Add Blog</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Input blog details</p>
          </article>


          <section className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <section className="flex flex-wrap -m-2">
                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600">Blog Title</label>
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
                    <label className="leading-7 text-sm text-gray-600">Author Name</label>
                    <input
                      name="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </aside>
                </article>

                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label className="leading-7 text-sm text-gray-600">Date</label>
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

                <article className="p-2 w-1/2">
                  <aside className="relative">
                    <label className="leading-7 text-sm text-gray-600">Blog Short Intro</label>
                    <input
                      type="text"
                      name="intro"
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      required
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </aside>
                </article>

                <article className="p-2 w-full">
                  <aside className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">Full Blog</label>
                    <textarea
                      name="deet"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6">
                    </textarea>
                  </aside>
                </article>
                <figure className="p-2 w-full">
                  {!isPending && <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Add Blog </motion.button>}
                  {isPending && <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgba(99 102 241)", boxShadow: "0px 0px 8px rgba(99 102 241)" }} disabled className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Adding Blog.... </motion.button>}
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