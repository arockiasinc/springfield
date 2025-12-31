import { Link } from "react-router-dom"
export default function Navigation({...props}){
    return (
            <nav {...props}>
              <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/">Cabinet Doors</Link></li>
            <li><Link to="/">Custom Quote</Link></li>
            <li><Link to="/">Gallery</Link></li>
           <li><Link to="/">Contact us</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
    )
}