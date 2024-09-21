const InitialButtonOptions = (props) => {
  const handleAccountLockedClick = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleAccountLocked(message);
  };
  const handlePasswordLockedClick = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleResetPasswordDepth1(message);
  };

  return (
    <div className="text-zoomchatblue ml-12 font-extrabold text-[14px]">
      <button
        aria-label="My Account is Locked"
        title="My Account is Locked"
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => handleAccountLockedClick("My Account is Locked")}
      >
        My Account is Locked
      </button>
      <button
        aria-label="Reset Password"
        title="Reset Password"
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={() => handlePasswordLockedClick("Reset Password")}
      >
        Reset Password
      </button>
      <button
        aria-label="Not Receiving Emails from Zoom"
        title="Not Receiving Emails from Zoom"
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-not-allowed"
      >
        Not Receiving Emails from Zoom
      </button>
      <button
        aria-label="Zoom Account Does Not Exist"
        title="Zoom Account Does Not Exist"
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-not-allowed"
      >
        Zoom Account Does Not Exist
      </button>
    </div>
  );
};
export default InitialButtonOptions;
