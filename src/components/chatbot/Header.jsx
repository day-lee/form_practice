import downArrow from "../../assets/down-arrow.svg";

import cancelCircle from "../../assets/cancelCircle.svg";

import downloadArrow from "../../assets/downloadArrow.svg";
import microPhone from "../../assets/microphone.svg";
import zoomsupport from "../../assets/zoomsupport.png";

const Header = ({
  isChatbotHeaderClose,
  handleChatbotModal,
  toggleHeaderActionMenuModal,
}) => {
  return (
    <div className="relative w-[428px] h-[96px] bg-white rounded-t-3xl">
      {isChatbotHeaderClose && (
        <div className="absolute top-10 rounded-lg right-3 border-2 border-gray text-[13px] py-2 bg-white w-[222px]">
          <div className="flex items-center h-[44px] py-2 gap-4 hover:bg-zoombtnblue cursor-not-allowed">
            <div className="w-4 h-4 ml-3 ">
              <img src={microPhone} alt="microphone" />
            </div>
            <div title="NOT IMPLEMENTED">Mute Chat</div>
          </div>
          <div className="flex items-center h-[44px] py-2 gap-4 hover:bg-zoombtnblue cursor-not-allowed ">
            <div className="w-4 h-4 ml-3 cursor-not-allowed">
              <img src={downloadArrow} alt="download arrow" />
            </div>
            <div className="cursor-not-allowed" title="NOT IMPLEMENTED">
              Download Transcript
            </div>
          </div>

          <div
            className="flex items-center cursor-pointer h-[44px] py-2 gap-4 hover:bg-zoombtnblue"
            role="button"
            aria-label="end chat button"
            onClick={handleChatbotModal}
          >
            <div className="w-4 h-4 ml-3">
              <img src={cancelCircle} alt="cancel" />
            </div>
            <div>End Chat</div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-[96px] p-3  border-b border-gray">
        <div className="flex justify-end">
          <div className="flex mx-2 gap-3">
            <button onClick={handleChatbotModal}>
              <img
                className="w-4 h-4 rounded-md hover:bg-gray-200 mt-1"
                src={downArrow}
                alt="close"
              />
            </button>
            <button onClick={toggleHeaderActionMenuModal}>
              <span className="bold text-gray-500 font-extrabold px-1 rounded-md hover:bg-gray-200 hover:cursor-pointer">
                ···
              </span>
            </button>
          </div>
        </div>
        <div className="flex ">
          <img className="w-11 h-11 mr-7" src={zoomsupport} alt="zoomsupport" />
          <div style={{ fontSize: "14px" }} className="flex flex-col">
            <p className="font-bold">Zoom Support</p>
            <p>Powered by Zoom Virtual Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
