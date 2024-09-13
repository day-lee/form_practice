import cancelCircle from "../../assets/cancelCircle.svg";
import downArrow from "../../assets/down-arrow.svg";
import downloadArrow from "../../assets/downloadArrow.svg";
import microPhone from "../../assets/microphone.svg";
import zoomsupport from "../../assets/zoomsupport.png";

function ZoomSupport({ close, closeHandle, isModalOpen, closeSupportModal }) {
  const now = new Date();
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);

  return (
    <div
      className={`fixed right-5 bottom-5 shadow-lg rounded-lg z-50 ${
        close && "hidden"
      }`}
    >
      {/* modal */}
      <div className="relative w-[428px] h-[650px] bg-white">
        {isModalOpen && (
          <div className="absolute top-10 rounded-lg right-3 border-2 border-gray text-[13px] py-2 bg-white w-[222px] shadow-lg">
            <div className="flex items-center cursor-pointer h-[44px] py-2 gap-4 hover:bg-zoombtnblue">
              <div className="w-4 h-4 ml-3">
                <img src={microPhone} />
              </div>
              <div title="NOT IMPLEMENTED"> Mute Chat</div>
            </div>
            <div className="flex items-center cursor-pointer h-[44px] py-2 gap-4 hover:bg-zoombtnblue">
              <div className="w-4 h-4 ml-3">
                <img src={downloadArrow} />
              </div>
              <div title="NOT IMPLEMENTED"> Download Transcript</div>
            </div>
            <div className="flex items-center cursor-pointer h-[44px] py-2 gap-4 hover:bg-zoombtnblue">
              <div className="w-4 h-4 ml-3">
                <img src={cancelCircle} />
              </div>
              <div> End Chat</div>
            </div>
          </div>
        )}
        <div className="flex flex-col h-[96px] p-3  border-b border-gray ">
          <div className="flex justify-end">
            <div className="flex mx-2 gap-3">
              <button onClick={closeHandle}>
                <img
                  className="w-4 h-4 rounded-md hover:bg-gray-200 mt-1"
                  src={downArrow}
                  alt="close"
                />
              </button>
              <button onClick={closeSupportModal}>
                <span className="bold text-gray-500 font-extrabold px-1 rounded-md hover:bg-gray-200 hover:cursor-pointer">
                  ···
                </span>
              </button>
            </div>
          </div>
          <div className="flex ">
            <img
              className="w-11 h-11 mr-7"
              src={zoomsupport}
              alt="zoomsupport"
            />
            <div style={{ fontSize: "14px" }} className="flex flex-col">
              <p className="font-bold">Zoom Support</p>
              <p>Powered by Zoom Virtual Agent</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-start gap-2 p-3 text-[14px] font-">
            <div className="flex justify-between items-center gap-3">
              <img className="w-11 h-11 " src={zoomsupport} alt="zoomsupport" />
              <div className="flex flex-col">
                <div style={{ fontSize: "11px" }} className="pb-2 text-xs">
                  Bot{" "}
                  <span
                    style={{ fontSize: "10px" }}
                    className="inline-block bg-gray-100 text-[#02021c99] px-1 mx-1 font-bold"
                  >
                    BOT
                  </span>{" "}
                  <span
                    style={{ fontSize: "11px" }}
                    className="text-[#0404138f]"
                  >
                    {formattedTime}
                  </span>
                </div>
                <div className="bg-[#f7f7fc] rounded-xl p-3 italic">
                  Zoom may retain your chat transcript to use for quality,
                  training, and analysis purposes.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 ">
              <div className="flex justify-between items-center gap-3">
                <div className="w-[60px]"> </div>
                <div className="bg-[#f7f7fc] rounded-xl p-3 ">
                  Hi, I'm Zoe 🤖. Zoom's Virtual Agent for technical{" "}
                  <b>Support</b> and <b>Billing</b>.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 ">
              <div className="flex justify-between items-center gap-3">
                <div className="w-[80px]"> </div>
                <div className="bg-[#f7f7fc] rounded-xl p-3 ">
                  It looks like you need help accessing your Zoom account. I'm
                  here to help! How can I assist you?
                </div>
              </div>
            </div>
            <div className="text-zoomchatblue font-bold flex mb-20">
              <div className="w-[125px]"> </div>
              <div className="">
                <button
                  aria-label="My Account is Locked"
                  title="My Account is Locked"
                  className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
                >
                  My Account is Locked
                </button>
                <button
                  aria-label="Reset Password"
                  title="Reset Password"
                  className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
                >
                  Reset Password
                </button>
                <button
                  aria-label="Not Receiving Emails from Zoom"
                  title="Not Receiving Emails from Zoom"
                  className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
                >
                  Not Receiving Emails from Zoom
                </button>
                <button
                  aria-label="Zoom Account Does Not Exist"
                  title="Zoom Account Does Not Exist"
                  className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
                >
                  Zoom Account Does Not Exist
                </button>
              </div>
            </div>
            <div>
              <button className="w-full border bg-zoomchatblue p-3 rounded-xl text-white font-extrabold ">
                Start a New Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ZoomSupport;

/**
 * click start a new chat -> change the bottom layout to chat input area
 * click buttons -> same as sending a message, messaging depth 2 levels only
 */
