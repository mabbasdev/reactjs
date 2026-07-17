// AboutPlatform.jsx
import React from 'react';

const AboutPlatform = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center sm:text-left">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Uncompromising Visual Quality
        </h2>
        <p className="text-slate-600 leading-relaxed text-base">
          Visual Canvas is a minimalist gallery designed to remove the clutter from digital photography exploration. Powered by the open-source Picsum API, we bring beautifully captured, high-resolution original stock assets into a fast, highly responsive frontend playground.
        </p>
      </section>

      {/* Key Architectural Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg mb-4">
            🚀
          </div>
          <h3 className="font-bold text-slate-900 mb-2">On-Demand Rendering</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            By lazy-loading physical image blocks, page sizes are minimized to load content within milliseconds regardless of your network connection speed.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-lg mb-4">
            🎨
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Tailwind Styling Systems</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Built using standard Tailwind configurations to guarantee dynamic layouts look pixel-perfect whether you are browsing on mobile, tablet, or large 4K monitors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPlatform;