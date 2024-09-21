const AccountBlockedOption = (props) => {
  const resetPasswordHandle = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleBlockedAccount(message);
  };

  return (
    <div className="text-zoomchatblue ml-12 font-extrabold text-[14px]">
      <button
        className="inline-block border border-zoomchatblue rounded-3xl px-4 py-1.5 m-1 hover:bg-zoomchatblue hover:text-white hover:cursor-pointer"
        onClick={resetPasswordHandle("Reset Password")}
      >
        Reset Password
      </button>
    </div>
  );
};

export default AccountBlockedOption;
