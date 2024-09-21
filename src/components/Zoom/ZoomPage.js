import { useEffect, useState } from "react";

import ZoomHeader from "./ZoomHeader";
import ZoomSignin from "./ZoomSignin";

import fileUpload from "../../assets/chatbot/document-svgrepo-com.svg";
import emojiIcon from "../../assets/chatbot/smile-circle-svgrepo-com.svg";
import zoomhelpbf from "../../assets/zoom-help-1.png";
import zoomhelpaf from "../../assets/zoom-help-2.png";
import zoomImg from "../../assets/zoom-img.png";
import zoomAdImg from "../../assets/zoomAd.png";

import Chatbot from "react-chatbot-kit";

import ActionProvider from "../chatbot/ActionProvider";
import "../chatbot/ChatbotOverride.css";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";

function ZoomPage() {
  const [isHelp, setIsHelp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleChatbotModal = () => {
    setIsClose(!isClose);
    setIsModalOpen(false);
    setIsHelp(false);
  };

  const toggleSupportModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const validateInput = (message) => {
    if (!message.trim()) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const inputElement = document.querySelector(
      ".react-chatbot-kit-chat-input"
    );

    if (inputElement) {
      inputElement.placeholder = "Write a message";
      inputElement.blur();
    }

    const formElement = document.querySelector(
      ".react-chatbot-kit-chat-input-form"
    );

    if (formElement) {
      const iconsContainer = document.createElement("div");
      iconsContainer.style.display = "flex";
      iconsContainer.style.alignItems = "center";

      const fileButton = document.createElement("button");
      fileButton.style.background = "none";
      fileButton.style.border = "none";
      fileButton.style.cursor = "not-allowed";
      fileButton.disabled = true;

      const fileIconElement = document.createElement("img");
      fileIconElement.src = `${fileUpload}`;
      fileIconElement.alt = "file upload";
      fileIconElement.style.marginLeft = "14px";
      fileIconElement.style.marginTop = "14px";
      fileIconElement.style.width = "22px";
      fileIconElement.style.padding = "3px";

      fileIconElement.addEventListener("mouseover", () => {
        fileIconElement.style.backgroundColor = "#52528017";
        fileIconElement.style.borderRadius = "2px";
      });

      fileIconElement.addEventListener("mouseout", () => {
        fileIconElement.style.backgroundColor = "";
        fileIconElement.style.border = "none";
      });

      fileButton.appendChild(fileIconElement);
      iconsContainer.appendChild(fileButton);

      const emojiButton = document.createElement("button");
      emojiButton.style.background = "none";
      emojiButton.style.border = "none";
      emojiButton.style.cursor = "not-allowed";
      emojiButton.style.width = "22px";
      emojiButton.disabled = true;

      const emojiIconElement = document.createElement("img");
      emojiIconElement.src = `${emojiIcon}`;
      emojiIconElement.alt = "emoji icon";
      emojiIconElement.style.marginLeft = "2px";
      emojiIconElement.style.marginTop = "14px";
      emojiIconElement.style.padding = "3px";

      emojiIconElement.addEventListener("mouseover", () => {
        emojiIconElement.style.backgroundColor = "#52528017";
        emojiIconElement.style.borderRadius = "2px";
      });

      emojiIconElement.addEventListener("mouseout", () => {
        emojiIconElement.style.backgroundColor = "";
        emojiIconElement.style.border = "none";
      });

      emojiButton.appendChild(emojiIconElement);
      iconsContainer.appendChild(emojiButton);

      formElement.appendChild(iconsContainer);

      return () => {
        if (iconsContainer) {
          formElement.removeChild(iconsContainer);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="flex flex-col bg-white w-screen">
        <ZoomHeader />
        <div className="flex relative w-full mx-auto sm:h-[900px] h-[1000px]">
          {/* desktop img */}
          <div className="bg-zoomgrey lg:w-3/5 lg:p-[6rem]">
            <div className="hidden lg:pt-[160px] lg:inline-block">
              <img
                className="w-[400px] min-w-[360px]"
                src={zoomImg}
                alt="zoomimg"
              />
            </div>
            <div className="absolute top-16 left-[90px] hidden 2xl:pt-[160px] 2xl:inline-block z-10">
              <a
                href="https://www.zoom.com/en/blog/zoom-docs-guide/?itm_source=signinpage&itm_medium=imm-en&itm_campaign=FY25_ZoomDocs_Aug5"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[555px] min-w-[360px]"
                  src={zoomAdImg}
                  alt="zoomAdimg"
                />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
            <div className="flex justify-center absolute w-full bg-zoomgrey top-0 lg:hidden">
              <img className="w-[205px]" src={zoomImg} alt="zoomimg" />
            </div>
            <div className="absolute top-[200px] lg:top-20 h-[536px]">
              <div className="">
                <ZoomSignin help={isHelp} helpHandle={() => setIsHelp(true)} />
              </div>
              {/* <ZoomSupport
                close={isClose}
                closeHandle={handleChatbotModal}
                isModalOpen={isModalOpen}
                closeSupportModal={toggleSupportModal}
              /> */}
              <div
                className={`fixed right-5 bottom-5 shadow-lg rounded-lg z-100 ${
                  isClose && "hidden"
                }`}
              >
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                  validator={validateInput}
                  isClose={isClose}
                  isModalOpen={isModalOpen}
                  setIsClose={setIsClose}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
          </div>
          <button
            className="fixed bottom-5 right-5 z-10"
            aria-label="help button"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleChatbotModal}
          >
            {isHelp && (
              <img
                className="b-2"
                src={isHovered ? zoomhelpaf : zoomhelpbf}
                alt="help"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default ZoomPage;
