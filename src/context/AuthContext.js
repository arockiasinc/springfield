import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check session OR remember_token cookie
    axios
      .get(`http://localhost/springfield_react/admin/config/check_login.php`, {
        withCredentials: true
      })
      .then((res) => {
        setIsAdminLoggedIn(res.data.loggedIn === true);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
