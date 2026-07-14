import React from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted');
  };

  return (
    <div>
      <div className="max-w-md mx-auto my-10 p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Get in touch</h2>
        <p className="text-sm text-gray-500 mb-6">We'll get back to you as soon as possible.</p>

        <form className="space-y-4" onSubmit={(e) => {
          handleSubmit(e)
        }} >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Sarah Connor"
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none transition placeholder-gray-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black"
              
            />
          </div>

          {/* Email Field */}
          {/* <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="sarah@skynet.com"
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none transition placeholder-gray-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black"
              required
            />
          </div> */}

          {/* Message Field */}
          {/* <div>
            <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help?"
              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none transition resize-none placeholder-gray-400 focus:bg-white focus:border-black focus:ring-1 focus:ring-black"
              required
            ></textarea>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 text-sm font-medium text-white bg-black rounded-lg transition hover:bg-gray-800 active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default App