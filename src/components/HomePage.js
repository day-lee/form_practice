import { Link } from "react-router-dom";

import linkedinImg from "../assets/linkedinImg.png";
import zoomImg from "../assets/zoomImg.png";

function HomePage() {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-center px-10 pt-20">
          <div className="text-4xl font-bold text-blue-950">
            Click the card to view a live demo!
            <br />
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center pb-[140px] p-20 gap-20">
          <Link to="/linkedin">
            <div className="border-2 border-gray-300 rounded-3xl hover:border-4 hover:border-themeblue  w-[301px] h-[501px]">
              <img src={linkedinImg} alt="LinkedIn" />
            </div>
          </Link>
          <Link to="/zoom">
            <div className="border-2 border-gray-300 rounded-3xl hover:border-4 hover:border-themeblue w-[301px] h-[501px]">
              <img src={zoomImg} alt="Zoom" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
