import React from 'react'; 

const Navbar = () => {
    return(
        <nav className="nav wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Mostafa Sadek</a>
                <ul className='right'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;