import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [data, setData] = useState("")
  const [task, setTask] = useState([])
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted", title, data, date);

    console.log(task);
    const copyTask = [...task]
    copyTask.push({ title, data, date })

    setTask(copyTask)
    console.log(copyTask);

    setTitle("")
    setData("")
  }



  return (
    <div className="min-h-screen bg-zinc-50/60 p-6 md:p-12 font-sans text-zinc-900 antialiased">
      <div className="max-w-6xl mx-auto">

        {/* App Header */}
        <header className="mb-10 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
          <h1 className="text-xl font-semibold tracking-tight">Pocket Notes</h1>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left Column: Submit Form */}
          <section className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm sticky top-6">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Create New Note</h2>

            <form className="space-y-4" onSubmit={(e) => {
              handleSubmit(e)
            }}>
              <div>
                <label htmlFor="title" className="sr-only">Note Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Note title..."
                  className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg outline-none transition placeholder-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setTitle(e.target.value)
                  }}
                  value={title}
                />
              </div>

              <div>
                <label htmlFor="content" className="sr-only">Note Content</label>
                <textarea
                  id="content"
                  name="content"
                  rows="5"
                  placeholder="Write your thoughts here..."
                  className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg outline-none transition resize-none placeholder-zinc-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black"
                  value={data}
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setData(e.target.value)
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white bg-black rounded-lg transition hover:bg-zinc-800 active:scale-[0.98]"
              >
                Save Note
              </button>
            </form>
          </section>

          {/* Right Column: Display Cards Grid */}
          <section className="lg:col-span-2">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Recent Notes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Card */}
              {/* <div className="bg-white p-5 rounded-xl border border-zinc-100 shadow-sm flex flex-col justify-between group transition hover:border-zinc-200">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-sm text-zinc-900 group-hover:text-black transition">Weekly Grocery List</h3>
                    <button type="button" className="text-zinc-400 hover:text-red-600 transition" aria-label="Delete note">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Eggs, sourdough bread, oat milk, cold brew coffee, and avocados for breakfast.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-zinc-50 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>Jul 15, 2026</span>
                  <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full font-medium">Personal</span>
                </div>
              </div> */}

              {task.map((elem, idx) => {
                return (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-zinc-100 shadow-sm flex flex-col justify-between group transition hover:border-zinc-200">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-semibold text-sm text-zinc-900 group-hover:text-black transition">{elem.title}</h3>
                        <button onClick={() => {
                          deleteNote(idx)
                        }} type="button" className="text-zinc-400 hover:text-red-600 transition" aria-label="Delete note">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {elem.data}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-50 flex items-center justify-between text-[10px] text-zinc-400">
                      <span>{date}</span>
                      <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full font-medium">Personal</span>
                    </div>
                  </div>
                )
              })}


            </div>
          </section>

        </div>
      </div>
    </div>
  );

}

export default App
