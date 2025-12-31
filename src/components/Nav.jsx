import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Button from './Buttons';

export default function  Nav(){

const [menus, setMenus] = useState([]);

useEffect(() => {
  axios.get(`http://localhost/springfield_react/admin/api/get_menu.php`)
    .then(res => {
      setMenus(Array.isArray(res.data) ? res.data : []);
    });
}, []);
return(
    <nav id="navmenu" className="navmenu">
  <ul>
    {menus.map((menu) => (
      <li key={menu.id}>
        <NavLink
          to={menu.link}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {menu.name}
        </NavLink>
      </li>
    ))}
  </ul>
  <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          <Button onClick={() => window.location.href = `http://localhost/springfield_react/admin/menus.php`}>
              Add/Edit Menu
    </Button>
</nav>

)
}