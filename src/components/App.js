import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";

function App({ children }) {
  return (
    <>
      <div className="flex justify-center items-center sticky top-0 h-20 bg-themeblue text-white font-semibold text-2xl z-50 shadow-lg">
        <Link to="/">
          <span className="inline-block align-middle ">
            Clone Coding: Login Form Page
          </span>
        </Link>
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default App;
