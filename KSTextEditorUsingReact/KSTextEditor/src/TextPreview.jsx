import "./TextPreview.css";

export default function TextPreview(props) {
  const { input } = props;
  console.log(input);
  const { wordLength } = props;
  const { numberOfChars } = props;
  // initially it will take 0 minutes to read the text beacause there is no word in the text Area.
  // const [timeToRead, setTimeToRead] = useState(0);
  
  // let us implement a separate function to calculate the time it takes for reading the words as well as characters

  const wpm = 250;
  const words = input.trim().split(/\s+/).length;

  const time = (words / wpm).toFixed(2);
  
  // setTimeToRead(time);
  return (
    <>
      <div className="textPreview-container" style={{ color: "whitesmoke" }}>
        <h2 style={{ color: "whitesmoke" }}>Your text Summary</h2>
        <h4>
          <span>{wordLength}</span>&nbsp;words&nbsp;<span>{numberOfChars}</span>
          &nbsp;characters
        </h4>
        {/* function call */}

        <h4>
          It will take <span>{time}</span> minutes to read this text
        </h4>
        <p>{input}</p>
        <p>Here will be a preview of your text</p>
      </div>
    </>
  );
}
