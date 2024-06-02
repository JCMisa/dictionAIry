import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/CCS.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebase";
import { useContext } from "react";
import { InputContext } from "../../App";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const { userEmail } = useContext(InputContext);

  const goChatAi = () => {
    navigate("/chatai");
  };

  const backHome = () => {
    navigate("/");
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goContacts = () => {
    navigate("/contacts");
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} alt="" className="w-10 h-10" />
          <span className="ml-3 text-xl">Data Integration</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-white cursor-pointer"
            onClick={backHome}
          >
            Home
          </a>
          <a className="mr-5 hover:text-white cursor-pointer" onClick={goAbout}>
            About
          </a>
          <a
            className="mr-5 hover:text-white cursor-pointer"
            onClick={goContacts}
          >
            Contacts
          </a>
          <a
            className="mr-5 hover:text-white cursor-pointer"
            onClick={goChatAi}
          >
            Chat with AI
          </a>
        </nav>

        <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base mx-3 mt-4 md:mt-0">
          Hello! &nbsp; <span className="user-email">{userEmail}</span> &nbsp;{" "}
          <FontAwesomeIcon icon={faFaceSmile} />
        </button>

        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => {
            logout();
          }}
        >
          Logout &nbsp; <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </header>
  );
};

export default Header;
