function CopyText({ copyText }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("failed to copy: ", err);
      }
    );
  };
  return (
    <button
      className="text-xs text-yellow-400"
      onClick={() => copyToClipboard(copyText)}
    >
      Copy
    </button>
  );
}

export default CopyText;
