import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";

const About = () => {

    // use Navigate

    const navigate = useNavigate()

    // const btnClicked = () => {
    //     console.log("Button is clicked");
    //     navigate('/')
    // }

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
            <div className='py-28 gap-10 flex justify-center'>
                <Link to='me' className='font-bold'>About Me</Link>
                <Link to='platform' className='font-bold'>About Platform</Link>
                <Link to='policy' className='font-bold'>Policy</Link>
            </div>
            <Outlet />
            <button
                // onClick={btnClicked}
                onClick={() => {
                    navigate("/")
                }}
                className='bg-red-600 font-bold text-amber-50 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to Home
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-red-600 font-bold text-amber-50 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back to Previous Page
            </button>
        </div>
    );
};

export default About;