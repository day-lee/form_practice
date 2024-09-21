const FlightBotAvatar = (props) => {
  const now = new Date();
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(now);
  return (
    <div className="flex absolute top-[-20px] right-2 items-baseline gap-3">
      <div className="flex">
        <div style={{ fontSize: "11px" }} className="pb-2 pl-16 text-xs ">
          <span style={{ fontSize: "11px" }} className="text-[#0404138f]">
            {formattedTime} <span className="text-[#222230] ml-1"> You</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default FlightBotAvatar;
