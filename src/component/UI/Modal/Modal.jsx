import { useEffect } from "react";

import "./Modal.scss";

const Modal = ({ children, onModalClose }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onModalClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onModalClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onModalClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
