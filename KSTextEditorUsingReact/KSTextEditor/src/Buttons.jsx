import './Buttons.css';
import Input from './Input';

export default function Buttons(props) {
  const { input } = props;
  const { textAreaInput } = props;
  console.log(textAreaInput);
  const { setTextAreaInput } = props;
  // const { setInput } = props;
  console.log(input);
  // only the last logic is left.It is basically to control the buttons
  
  return (
    <>
      <div className="btns-container w-75">
        <button type="button" className="btn btn-primary" onClick={() => {
          // making a separate function for implementing the upperCase functionality of the btns
          // doing a function call here
          console.log('upper case button pressed');
          console.log(textAreaInput);
          const upperCaseString = textAreaInput.toUpperCase();
          console.log(upperCaseString);
          setTextAreaInput(textAreaInput.toUpperCase());
          console.log(textAreaInput);
        }}>
          Convert to Upper
        </button>
        <button type="button" className="btn btn-success">
          Convert to Lower
        </button>
        <button type="button" className="btn btn-primary">
          Remove Spaces
        </button>
        <button type="button" className="btn btn-success">
          Remove LineBreak
        </button>
        <button type="button" className="btn btn-primary">
          Remove Extra Spaces
        </button>
        <button type="button" className="btn btn-success">
          Compress Text
        </button>
        <button type="button" className="btn btn-primary">
          Copy Text
        </button>
        <button type="button" className="btn btn-success">
          Clear Text
        </button>
        <button type="button" className="btn btn-warning">
          Install As App
        </button>
      </div>
    </>
  );
}
