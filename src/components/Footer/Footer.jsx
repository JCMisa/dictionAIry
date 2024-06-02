import logo from "../../assets/CCS.png";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="ml-3 text-xl">Data Integration</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 CCS —
            <a
              href="#"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              BSINFO2B
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
