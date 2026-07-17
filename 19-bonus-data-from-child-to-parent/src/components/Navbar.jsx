import React from 'react'

const Navbar = (props) => {
    console.log(props.theme);
    // console.log(props.setTheme);

    return (
        <div>
            <button
                onClick={() => {
                    props.setTheme("Dark")
                }}
                className='py-6 px-6 rounded-2xl bg-blue-500 text-white font-bold text-3xl'>
                Change Theme
            </button>
            <h3 className='font-semibold py-30'>Theme is {props.theme}</h3>
        </div>
    )
}

export default Navbar
