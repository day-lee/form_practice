import "./App.css";
import zoomImg from "./assets/zoom-img.png";
import LinkedinPage from "./components/LinkedinPage";
import ZoomHeader from "./components/ZoomHeader";
import ZoomPage from "./components/ZoomPage";

function App() {
  return (
    <>
      <div className="flex flex-col justfy-center items-center ">
        <div className="flex flex-col h-[900px] w-max sm:w-screen justfy-center items-center">
          <div className="text-2xl p-20 h-10">
            <p>Clone coding: Linkedin login form</p>
          </div>
          <LinkedinPage />
        </div>

        <div className="text-2xl p-20 h-10">
          <p>Clone coding: Zoom login form</p>
        </div>
        <div className="flex flex-col bg-white w-screen">
          <ZoomHeader />
          <div className="flex relative bg-white w-full sm:h-[900px] h-[1000px]">
            <div className="bg-zoomgrey w-1/2 sm:p-[6rem]">
              <div>
                <div className="pt-[160px]">
                  {/* desktop img */}
                  <img src={zoomImg} alt="zoomimg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
              <div className="w-[352px] h-[536px]">
                {" "}
                <ZoomPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
