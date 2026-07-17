// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-6">
        Our Creative Mission
      </h2>
      <p className="text-slate-600 leading-relaxed text-base mb-8">
        Visual Canvas was designed to bring open-source art closer to developers and creators. By leveraging modern APIs, we construct light-weight interfaces that render high-quality imagery instantly.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200">
        <div>
          <span className="text-2xl block mb-2">⚡</span>
          <h4 className="font-bold text-slate-800">Ultra-Fast</h4>
          <p className="text-slate-500 text-xs mt-1">Rendered with speed optimizations.</p>
        </div>
        <div>
          <span className="text-2xl block mb-2">📱</span>
          <h4 className="font-bold text-slate-800">Responsive</h4>
          <p className="text-slate-500 text-xs mt-1">Designed for any screen size.</p>
        </div>
        <div>
          <span className="text-2xl block mb-2">🎨</span>
          <h4 className="font-bold text-slate-800">Curated</h4>
          <p className="text-slate-500 text-xs mt-1">Showcasing Unsplash talent.</p>
        </div>
      </div>
    </div>
  );
};

export default About;