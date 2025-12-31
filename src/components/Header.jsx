

import { Link } from 'react-router-dom';
import Nav from './Nav';


export default function Header() {

    return (
        <header id="header" className="header sticky-top">



            <div className="branding d-flex align-items-cente">

                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">

                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} />

                    </Link>


                    <Nav />




                </div>

            </div>

        </header>

    )
}