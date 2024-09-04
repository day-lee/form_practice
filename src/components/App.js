import { Link } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";

import linkedin from "../assets/icons8-linkedin.svg";
import zoom from "../assets/zoom-svgrepo-com.svg";

function App({ children }) {
  return (
    <>
      <div className=" sticky top-0 h-[120px] sm:h-20 bg-blue-900 text-white font-semibold text-3xl z-50 shadow-lg">
        <div className="flex items-center justify-between py-3 px-3 sm:px-5 h-[120px] sm:h-20">
          <Link to="/">
            <div className="flex justify-center ml-4">
              <p className="font-mono">
                Clone Coding
                <p className="text-sm text-gray-300">Login form pages</p>
              </p>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="flex flex-col sm:flex-row mr-3">
              <Link to="/linkedin">
                <img
                  className="w-13 h-13 mb-2 sm:mb-0 mr-2"
                  src={linkedin}
                  alt="linkedin"
                />
              </Link>
              <Link to="/zoom">
                <img className="w-11 h-12" src={zoom} alt="zoom" />
              </Link>
            </div>
            <div>
              <p className="text-sm text-gray-300">Test login credentials</p>
              <p className="text-xs">test@example.com</p>
              <p className="text-xs">snrnsk!@</p>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default App;
