import "./App.css";
import LinkedinPage from "./components/LinkedinPage";
import ZoomPage from "./components/ZoomPage";

function App() {
  return (
    <>
      <div className="flex justify-center items-center sticky top-0 h-20 bg-themeblue text-white font-semibold text-2xl z-50">
        <span className="inline-block align-middle ">
          Clone Coding: Login Form Page
        </span>
      </div>
      <div className="flex flex-col justfy-center items-center ">
        <LinkedinPage />
        <ZoomPage />
      </div>
    </>
  );
}

export default App;
