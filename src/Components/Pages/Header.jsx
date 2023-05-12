import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between h-20 px-20 items-center pt-3'>

            <Link className='text-2xl font-bold' to="/">Digital Doctor</Link>

                <ul className='flex gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;