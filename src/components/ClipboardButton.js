import "../App.css";

const ClipboardButton = ({ text, setMsg, setType, colorMode }) => {

  const copyContent = async () => {
    try {
      if (!text?.length) throw new Error('Please enter some text to be copied');
      await navigator.clipboard.writeText(text);
      setMsg("Copied successfully");
      setType("success");
      setTimeout(() => {
        setMsg('');
        setType('');
      }, 3000)
    } catch (error) {
      setMsg(error.message);
      setType("warning");
    }
  }

  return (
    <div className={`m-2 px-4`}>
      <button
        onClick={copyContent}
        className={`button-01 ${colorMode}`}
      >
        Copy To Clipboard
      </button>
    </div>
  );
};

export default ClipboardButton;