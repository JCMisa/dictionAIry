import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function GeminiModal({ children, isOpen, onClose }) {
  const modalRef = useRef(null);

  const { newChat } = useContext(Context);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-700 bg-opacity-50 transition-all ease-in-out duration-300"
          ref={modalRef}
        >
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 max-w-[90%] max-h-[95%] w-full relative">
            {children}
            <button
              className="text-white px-3 py-1 rounded-md hover:scale-150 focus:outline-none z-90 absolute top-5 left-5"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <div
              onClick={() => newChat()}
              className="new-chat cursor-pointer z-90 absolute top-5 right-5"
            >
              <img src={assets.plus_icon} alt="" className="text-lg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GeminiModal;
