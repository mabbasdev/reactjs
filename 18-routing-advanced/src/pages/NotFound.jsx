import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center max-w-md mx-auto my-auto">
            {/* Visual Indicator */}
            <span className="text-7xl mb-6 animate-bounce select-none" role="img" aria-label="shrugging photographer">
                📸❓
            </span>

            {/* Heading */}
            <h1 className="text-6xl font-black text-slate-900 tracking-tight mb-4">
                404
            </h1>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
                Frame Out of Focus
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                The page you are looking for doesn't exist, was removed, or is currently undergoing development. Let's get you back to the main canvas.
            </p>

            {/* Navigation CTA */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
                ← Back to Gallery
            </Link>
        </div>
    );
};

export default NotFound;