import { Link } from "react-router-dom";

import "./App.css";
import CopyText from "./CopyText";
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
            <div className=" flex-col sm:flex-row mr-3 hidden sm:flex">
              <Link to="/linkedin">
                <img
                  className="w-13 h-13 mb-2 sm:mb-0 mr-2 "
                  src={linkedin}
                  alt="linkedin"
                />
              </Link>
              <Link to="/zoom">
                <img className="w-11 h-12" src={zoom} alt="zoom" />
              </Link>
            </div>
            <div className="relative">
              <p className="text-sm text-gray-300">Test credentials</p>
              <p className="text-xs mr-10">test@example.com</p>
              <div className="absolute top-1 right-0 text-yellow-400">
                <CopyText copyText="test@example.com" />
              </div>
              <p className="text-xs">1234abc!</p>
              <div className="absolute bottom-[-2px] right-14 text-yellow-400">
                <CopyText copyText="1234abc!" />
              </div>
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
