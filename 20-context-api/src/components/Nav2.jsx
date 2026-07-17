import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import Button from './Button';

const Nav2 = (props) => {

    // const data = useContext(ThemeDataContext)
    // console.log(data[0]);

    // Destructing Method
    const [theme, setTheme] = useContext(ThemeDataContext)
    console.log(theme);


    return (
        <div>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <span className="text-xl">📷</span>
                        <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                            Visual Canvas
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            Home
                        </a>
                        <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            About
                        </a>
                        <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                            Contact
                        </a>
                        <button onClick={() => {
                            setTheme("Dark")
                        }} className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm active:scale-95">
                            {theme} Mode
                        </button>
                        <Button />
                        {/* <button onClick={() => {
                            props.setTheme("Dark")
                        }} className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-sm active:scale-95">
                            {props.theme} Mode
                        </button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => props.setIsOpen(!props.isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none p-1.5 rounded-lg hover:bg-slate-50 transition"
                            aria-label="Toggle Menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {props.isOpen ? (
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
            {props.isOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3 shadow-inner">
                    <a href="/" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        Home
                    </a>
                    <a href="/" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        About
                    </a>
                    <a href="/" className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition py-1">
                        Contact
                    </a>
                    <button className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-2.5 rounded-lg transition">
                        {theme} Mode
                    </button>
                </div>
            )}
        </div>
    )
}

export default Nav2
