import "./Input.css";
import TextPreview from "./TextPreview";

export default function Input(props) {
  // deconstructing the setInput method from the props object
  const { setInput } = props;
  const { setWordLength } = props;
  const { setNumberOfChars } = props;
  //   console.log(setInput);
  // initially the userInput will be completely in the text area, that's why initially the input value will be the empty string
  //   console.log("Namaste Javascript");
  // function to count the total characters
  function countCharacters(charContent) {
    const charList = charContent.split("");
    const charArr = charList.filter((el) => {
      // donot count spaces
      return el != " ";
    });
    const charArrLength = charArr.length;
    setNumberOfChars(charArrLength);
  }
  return (
    <>
      <h3 className="main-heading mt-2" style={{ color: "white" }}>
        Enter Text Here
      </h3>
      {/* text area input field */}
      <div className="text-div">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control text-area bg-dark text-white mt-0"
          id="exampleFormControlTextarea1"
          rows={6}
          defaultValue={""}
          onInput={(e) => {
            // i want that whatever the user is writing in the text area, it should successfully reflect in the text preview component.
            // so we will use setState here
            // for simplicity i will use this state in the App component.
            setInput(e.target.value);
            // i also want to read total number of words as well as the characters entered in the text area by the user.
            let userContent = e.target.value;
            const charContent = userContent;
            console.log(userContent);
            let userContentLength = userContent.length;
            // setNumberOfChars(userContentLength);
            console.log(userContentLength);
            // removing the empty spaces from start and end
            // userContent.trim();
            let wordList = userContent.split(/\s/);
            console.log(wordList);
            let words = wordList.filter((el) => {
              return el != "";
            });
            const wordLength = words.length;
            setWordLength(wordLength);
            // setNumberOfChars(userContentLength);
            // let us create a separate function for counting the number of characters
            // function call
            countCharacters(charContent);
          }}
        />
      </div>
    </>
  );
}
