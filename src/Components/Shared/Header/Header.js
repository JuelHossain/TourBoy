import React from 'react';
import CustomLink from '../../../Utilities/CustomLInk/CustomLink';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>Tour boy</h1>
            </div>
            <nav>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/services'}>Services</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </nav>
            <div className="authenthication">
                <button>Register</button>
                <button>Login</button>
            </div>
        </header>
    );
};

export default Header;