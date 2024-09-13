import { Link } from "react-router-dom";

import linkedinImg from "../assets/linkedinImg.png";
import zoomImg from "../assets/zoomImg.png";

function HomePage() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center sm:px-10 sm:pt-20">
        <div className="pt-20 text-xl sm:text-4xl font-bold text-blue-950">
          Click the card to view a live demo!
          <br />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-center pb-[140px] p-20 gap-20">
        <Link to="/zoom">
          <div>
            <div className="border-2 border-gray-300 rounded-3xl hover:border-4 hover:border-themeblue w-[301px] h-[501px]">
              <img src={zoomImg} alt="Zoom" />
            </div>

            <div className="flex flex-col items-center pt-5 p-2">
              <p className="font-bold text-lg"> 🗝️ Key Feature </p>
              <ul className="font-medium list-disc">
                <li className="text-gray-600"> Interactive support chatbot</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link to="/linkedin">
          <div>
            <div className="border-2 border-gray-300 rounded-3xl hover:border-4 hover:border-themeblue  w-[301px] h-[501px]">
              <img src={linkedinImg} alt="LinkedIn" />
            </div>
            <div className="flex flex-col items-center pt-5 p-2">
              <p className="font-bold text-lg"> 🗝️ Key Feature </p>
              <ul className="font-medium list-disc">
                <li className="text-gray-600"> Login validation</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
