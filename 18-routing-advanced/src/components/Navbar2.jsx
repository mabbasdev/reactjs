import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className='flex justify-center'>
            <button
                onClick={() => {
                    navigate("/")
                }}
                className='bg-blue-400 font-bold text-amber-50 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to Home
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-blue-600 font-bold text-amber-50 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='bg-emerald-600 font-bold text-amber-50 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}

export default Navbar2
