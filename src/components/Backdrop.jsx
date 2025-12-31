import ReactDOM from "react-dom";


export default function Backdrop({ show, onClick }) {
  if (!show) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="backdrop" onClick={onClick}></div>,
    modalRoot
  );
}
