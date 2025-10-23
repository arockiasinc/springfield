
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header id="header" className="header sticky-top">

            <div className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
               
                </div>
            </div>

            <div className="branding d-flex align-items-cente">

                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">

                        <img src="assets/images/logo.png" alt="" />

                    </a>


               

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                                About
                            </NavLink></li>
                            <li><NavLink to="/get-started" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Get Started
                            </NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Contact
                            </NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>


                </div>

            </div>

        </header>

    )
}