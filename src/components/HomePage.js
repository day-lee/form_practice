import { Link } from "react-router-dom";
import linkedinLogo from "../assets/linkedin-logo.png";
import zoomLogo from "../assets/zoom-logo.png";

function HomePage() {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-center h-[800px] p-20 gap-20">
          <Link to="/linkedin">
            <div className="border-2 border-gray-300 rounded-lg p-3 hover:border-4 hover:border-themeblue">
              <img src={linkedinLogo} atl="LinkedIn" />
            </div>
          </Link>
          <Link to="/zoom">
            <div className="border-2 border-gray-300 rounded-lg p-3 hover:border-4 hover:border-themeblue">
              <img src={zoomLogo} atl="Zoom" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
