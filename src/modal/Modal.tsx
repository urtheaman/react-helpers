import { ReactElement, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal: React.FC<{ className?: string }> = ({
  children,
  className,
  ...otherProps
}): ReactElement | null => {
  const [hide, setHide] = useState(false);
  if (!document.getElementById("#modal")) {
    console.error("div with id `modal` is not defined in the html");
  }
  if (!hide) {
    return createPortal(
      <div id="modal-container" onClick={(e) => setHide(true)}>
        <div
          id="modal-div"
          onClick={(e) => e.stopPropagation()}
          className={`${className ? className : ""}`}
          {...otherProps}
        >
          <div id="modal-btn" onClick={(e) => setHide(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div id="modal-content">{children}</div>
        </div>
      </div>,
      document.getElementById("modal")!
    );
  } else return null;
};

export default Modal;
