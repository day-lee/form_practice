import downArrow from "../assets/down-arrow.svg";
import zoomsupport from "../assets/zoomsupport.png";

function ZoomSupport({ close, closeHandle }) {
  const supportCloseHandle = () => {
    closeHandle();
  };

  return (
    <div className={`fixed right-0 bottom-0 z-50 ${close && "hidden"}`}>
      <div className="w-[428px] h-[650px] bg-white">
        <div className="flex flex-col h-[96px] p-3  border-b border-gray">
          <div className="flex justify-end">
            <div className="flex mx-2 gap-3">
              <button onClick={supportCloseHandle}>
                <img
                  className="w-4 h-4 hover:bg-gray-200 mt-1"
                  src={downArrow}
                  alt="close"
                />
              </button>
              <span className="bold text-gray-500 font-extrabold">···</span>
            </div>
          </div>
          <div className="flex">
            <img
              className="w-11 h-11 mr-7"
              src={zoomsupport}
              alt="zoomsupport"
            />
            <div className="flex flex-col">
              <p className="font-bold">Zoom Support</p>
              <p>Powered by Zoom Virtual Agent</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-start gap-2 p-3 text-[14px]">
            <div className="flex justify-between items-center gap-3">
              <img className="w-11 h-11 " src={zoomsupport} alt="zoomsupport" />
              <div className="flex flex-col">
                <div className="pb-2 text-xs">
                  {" "}
                  Bot{" "}
                  <span className="inline-block bg-gray-100 text-gray-500 px-1 mx-1 font-bold">
                    BOT
                  </span>{" "}
                  <span className="text-gray-400 ">11:26 AM </span>
                </div>
                <div className="bg-zoomsigningrey rounded-xl p-3 italic">
                  Zoom may retain your chat transcript to use for quality,
                  training, and analysis purposes.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 ">
              <div className="flex justify-between items-center gap-3">
                <div className="w-[60px]"> </div>
                <div className="bg-zoomsigningrey rounded-xl p-3 ">
                  Hi, I'm Zoe 🤖. Zoom's Virtual Agent for technical{" "}
                  <b>Support</b> and <b>Billing</b>.
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-5 ">
              <div className="flex justify-between items-center gap-3">
                <div className="w-[80px]"> </div>
                <div className="bg-zoomsigningrey rounded-xl p-3 ">
                  It looks like you need help accessing your Zoom account. I'm
                  here to help! How can I assist you?
                </div>
              </div>
            </div>
            <div className="text-zoomchatblue font-bold flex mb-20">
              <div className="w-[125px]"> </div>
              <div className="">
                <div className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1">
                  My Account is Locked
                </div>
                <div className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1">
                  Reset Password
                </div>
                <div className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1">
                  Not Receiving Emails from Zoom
                </div>
                <div className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1">
                  Zoom Account Does Not Exist
                </div>
              </div>
            </div>
            <div>
              <button className="w-full border bg-zoomchatblue p-3 rounded-xl text-white font-extrabold ">
                Start a New Chat
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ZoomSupport;
