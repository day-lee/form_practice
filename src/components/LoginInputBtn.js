function LoginInputBtn({
  email,
  password,
  errorEmail,
  errorPassword,
  isError,
  isShow,
  isDisabled,
  onInputChangeHandle,
  onShowHandle,
}) {
  const forgotHandle = () => {
    window.open(
      "https://www.linkedin.com/checkpoint/rp/request-password-reset",
      "_blank"
    );
  };

  const onInputChange = (e) => {
    onInputChangeHandle(e);
  };
  const showHandle = () => {
    onShowHandle();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("linkedinSignin").click();
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email"></label>
        <input
          className={`w-[352px] h-[52px]  rounded p-2 mt-1 ${
            !isError
              ? "border border-solid border-slate-500"
              : "border border-2 border-red-500"
          }`}
          id="email"
          name="email"
          type="text"
          value={email}
          required
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Email"
        />
        {errorEmail && (
          <p className="text-themered text-[14px] font-semibold">
            {errorEmail}
          </p>
        )}
      </div>
      <div className="relative w-full ">
        <label htmlFor="password"></label>
        <input
          className={`w-full w-[352px] h-[52px]  rounded p-2 mt-5 ${
            !isError
              ? "border border-solid border-slate-500"
              : "border border-2 border-red-500"
          }`}
          id="password"
          name="password"
          type={isShow ? "text" : "password"}
          value={password}
          required
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Password"
        />
        <div className="absolute h-[30px] inset-y-0 flex right-0 mt-8 items-center pr-3">
          <button
            className="text-themeblue font-medium 
             hover:bg-themelightblue hover:border-themeblue hover:rounded-3xl hover: pl-2 pr-2 "
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={showHandle}
            type="button"
          >
            {!isShow ? "show" : "hide"}
          </button>
        </div>
        <div>
          {errorPassword && (
            <p className="text-themered text-[14px] font-semibold">
              {errorPassword}
            </p>
          )}
        </div>
      </div>
      <button
        className="bg-white text-themeblue font-semibold p-1 mt-1
       hover:bg-themelightblue hover:border-themelightblue hover:rounded-3xl"
        onClick={forgotHandle}
      >
        Forgot password?
      </button>
      <button
        id="linkedinSignin"
        name="linkedinSignin"
        className="w-[352px] bg-themeblue p-3 rounded-3xl font-semibold text-white mt-5 mb-3 hover:bg-hoverblue"
        type="submit"
        disabled={isDisabled}
      >
        Sign in
      </button>
    </>
  );
}

export default LoginInputBtn;
