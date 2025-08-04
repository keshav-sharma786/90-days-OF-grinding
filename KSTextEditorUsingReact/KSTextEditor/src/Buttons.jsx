import "./Buttons.css";


export default function Buttons(props) {
  const { input } = props;
  const { setInput } = props;
  const { setWordLength, setNumberOfChars } = props;
  const { setAlertMessage } = props;
  // const { setInput } = props;
  console.log(input);
  // only the last logic is left.It is basically to control the buttons
  const handleCopyClick = async (input) => {
    try {
      await window.navigator.clipboard.writeText(input);
      // alert("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      // alert("Copy to clipboard failed.");
    }
  };
  return (
    <>
      <div className="btns-container w-75">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            // making a separate function for implementing the upperCase functionality of the btns
            // doing a function call here

            // changing input to the uppercase

            // changing setInput state here only
            setInput(input.toUpperCase());
            // calling the alert component
            setAlertMessage('converted to uppercase');
            setTimeout(() => {
              setAlertMessage(null);
            }, 2000);
          }}
        >
          Convert to Upper
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            console.log("Lower case btn pressed");
            setInput(input.toLowerCase());
          }}
        >
          Convert to Lower
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setInput(input.split(" ").join(""));
          }}
        >
          Remove Spaces
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setInput(input.replace(/[\r\n]+/gm, " "));
          }}
        >
          Remove LineBreak
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setInput(input.replace(/\s+/g, " ").trim());
          }}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setInput(input.split(" ").join(""));
            
          }}
        >
          Compress Text
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            // selecting the input field
            handleCopyClick(input);
          }}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setInput("");
            setWordLength(0);
            setNumberOfChars(0);
          }}
        >
          Clear Text
        </button>
        <button type="button" className="btn btn-warning">
          Install As App
        </button>
      </div>
    </>
  );
}
