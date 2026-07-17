import React, { useState } from 'react';
import Nav2 from './Nav2';
import { useContext } from 'react';
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [theme] = useContext(ThemeDataContext)
    // console.log(data)


    return (
        <div className={theme}>
            <nav className="border-b border-slate-200 sticky top-0 z-50">
                <Nav2 isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* <h2>{data}</h2> */}
                {/* <Nav2 setTheme={props.setTheme} theme={props.theme} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                {/* {props.children[0]}
            {props.children[1]} */}

            </nav>
        </div>
    );
};

export default Navbar;