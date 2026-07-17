// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto px-6 py-20 w-full">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2 text-center">
        Let's Connect
      </h2>
      <p className="text-slate-500 text-sm mb-8 text-center">
        Got feedback, ideas, or questions? Send us a message below.
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Name</label>
          <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Message</label>
          <textarea rows="4" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition resize-none" placeholder="What's on your mind?"></textarea>
        </div>
        <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-sm transition shadow-sm active:scale-95">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;