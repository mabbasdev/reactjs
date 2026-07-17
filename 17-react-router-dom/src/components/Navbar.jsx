import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📷</span>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                            Visual Canvas
                        </span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            Home
                        </Link>
                        <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            Contact
                        </Link>
                        <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            About
                        </Link>
                        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm active:scale-95">
                            Upload
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 rounded-lg hover:bg-slate-50 transition"
                            aria-label="Toggle Menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3 shadow-inner">
                    <Link to="/" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        Home
                    </Link>
                    <Link to="/contact" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        Contact
                    </Link>
                    <Link to="/about" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        About
                    </Link>
                    <button className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 rounded-lg transition">
                        Upload
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;