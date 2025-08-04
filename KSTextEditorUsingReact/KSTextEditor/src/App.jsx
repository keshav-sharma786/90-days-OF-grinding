import Navbar from "./Navbar";
import Input from "./Input";
import Buttons from "./Buttons";
import TextPreview from "./TextPreview";

// import Temporary from "./Temporary"
import { useState } from "react";
import AlertMessage from "./AlertMessage";

export default function App() {
  const [input, setInput] = useState('');
  // making a state for all the btns
  
  
  // using the useState hook for setting as well as counting the length of the words
  // basically in the starting the the length of the word will be zero because the user has not entered any word yet in the textArea box
  const [wordLength, setWordLength] = useState(0);
  // initially 0 chars would be there, because initially no characters have been selected by the user
  const [numberOfChars, setNumberOfChars] = useState(0);
  const [alertMessage, setAlertMessage] = useState(null);
  
  // console.log(setInput);
  return(
    <>
      
      <Navbar />
      {/* passing setInput as a props in the Input component */}
      <Input setInput={setInput} input={input}   setWordLength={setWordLength} setNumberOfChars={setNumberOfChars}/>
      <Buttons input={input}  setInput={setInput} setWordLength={setWordLength} setNumberOfChars={setNumberOfChars} setAlertMessage={setAlertMessage} />
      <TextPreview input={input} wordLength={wordLength} numberOfChars= {numberOfChars} />
      {/* <Alert /> */}
      {/* <Temporary /> */}
      {/* now here i want to render the alert component */}
      <div className="container mt-3">
        {alertMessage && <AlertMessage message={alertMessage} />}
      </div>
    </>
  )
}
