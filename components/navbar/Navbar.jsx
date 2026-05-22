import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import SubscriptionPolicy from '../SubscriptionPolicy/SubscriptionPolicy';

export default function Navbar() {
    const [change, setChange] = useState(false);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/Pizza", label: "Pizza" },
        { path: "/Carrot", label: "Carrot" },
        { path: "/Pasta", label: "Pasta" },
        { path: "/AboutUs", label: "About Us" },
    ];
    return (
        <section>
            <div className='navbar'>
                <div className='leftNavbar'>
                    <p>Forkify</p>
                </div>
                <div className='centerNavbar'>
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Link to="/SubscriptionPolicy">
                    <button className='subscriptionPolicyButton'>
                        Subscription Policy
                    </button>
                </Link>
                <div className='menuBarIcon' onClick={() => setChange(!change)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className={change ? "overlay activeOverlay" : "overlay"} onClick={() => setChange(false)}></div>
            <div className={change ? "menuBar active" : "menuBar"}>
                <div className='menuList'>
                    {navLinks.map((link) => (
                        <Link key={link.path} to={link.path} onClick={() => setChange(false)}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link to="/SubscriptionPolicy">
                    <button className='subscriptionPolicyButtonMenu'>
                        Subscription Policy
                    </button>
                </Link>
            </div>

        </section>
    )
}
