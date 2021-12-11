import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
