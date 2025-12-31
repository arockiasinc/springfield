import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Button({ children, onClick, ...props }) {
  const { isAdminLoggedIn } = useContext(AuthContext);

  if (!isAdminLoggedIn) return null; // hide button completely

  return (
    <button
      {...props}
      className="btn btn-primary mt-3 mb-3 m-auto d-block"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
