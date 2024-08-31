import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./components/HomePage";
import LinkedinPage from "./components/LinkedinPage";
import ZoomPage from "./components/ZoomPage";

export function MainPage() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="linkedin" element={<LinkedinPage />} />
          <Route path="zoom" element={<ZoomPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default MainPage;
