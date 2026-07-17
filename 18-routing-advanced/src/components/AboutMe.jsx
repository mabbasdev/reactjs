// AboutMe.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Profile Photo Mock */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex-shrink-0 flex items-center justify-center text-4xl font-extrabold shadow-md">
        DEV
      </div>

      {/* Biography Details */}
      <div className="space-y-6 flex-1">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Hey, I'm the Developer!</h2>
          <p className="text-sm text-blue-600 font-semibold mt-1">Full-Stack Frontend Engineer</p>
        </div>

        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          I build minimalist web projects with a heavy focus on user performance, smooth route transitions, and responsive structural grid layouts. I built Visual Canvas to experiment with fluid animations, dynamic data fetching, and API state integration.
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {['React', 'React Router', 'Tailwind CSS', 'Axios API', 'Responsive UI'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full border border-slate-200/50">
              {skill}
            </span>
          ))}
        </div>

        {/* Quick Social / Action Links */}
        <div className="flex gap-4 pt-4 border-t border-slate-100 items-center">
          <Link
            to="/contact"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition active:scale-95"
          >
            Work with me
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;