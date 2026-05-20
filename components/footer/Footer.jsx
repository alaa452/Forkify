import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerLogo">
        <h2>Forkify</h2>
        <p>Discover delicious recipes easily.</p>
      </div>

      <div className="footerLinks">
        <a href="">Home</a>
        <a href="">Pizza</a>
        <a href="">Burger</a>
        <a href="">Pasta</a>
      </div>

      <div className="footerIcons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>

    </footer>

  )
}
