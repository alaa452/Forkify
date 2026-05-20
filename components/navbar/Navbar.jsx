import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import SubscriptionPolicy from '../SubscriptionPolicy/SubscriptionPolicy';

export default function Navbar() {
    return (
        <section>
            <div className='navbar'>
                <div className='leftNavbar'>
                    <p>Forkify</p>
                </div>
                <div className='centerNavbar'>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/Pizza'>Pizza</Link>
                    <Link to='/Carrot'>Carrot</Link>
                    <Link to='/Pasta'>Pasta</Link>
                    <Link to='/AboutUs'>About Us</Link>
                </div>
                <Link to="/SubscriptionPolicy">
                    <button className='subscriptionPolicyButton'>
                        Subscription Policy
                    </button>
                </Link>

            </div>
        </section>
    )
}
