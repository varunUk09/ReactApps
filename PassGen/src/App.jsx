import { useEffect, useState, useRef } from "react";
import tickImg from "./assets/tick.png";
import copyImg from "./assets/copy.png";
let removeTimeout;
const copyToClipboard = pass => {
  // Create a temporary input element
  const input = document.createElement("input");
  input.setAttribute("value", pass);
  input.setAttribute("hidden", true);
  document.body.appendChild(input);

  // Select the text in the input element
  input.select();

  // Wait for a brief delay to ensure that the text has been selected
  setTimeout(() => {
    // Copy the selected text to the clipboard
    navigator.clipboard
      .writeText(pass)
      .then(() => {
        // console.log(`Copied to clipboard: ${pass}`);
        // Remove the temporary input element
        document.body.removeChild(input);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  }, 100); // Delay for 100 milliseconds (adjust as needed)
};
export default function App() {
  const [length, setLength] = useState("");
  const [generatedPass, setGeneratedPass] = useState(null);
  const [isChars, setIsChars] = useState(false);
  const [isCopied, setCopied] = useState(false);
  const copyBtn = useRef(null);
  useEffect(() => {
    clearTimeout(removeTimeout);
    if (isCopied) {
      document.querySelector(".copy-icons").classList.add("copied");
      removeTimeout = setTimeout(() => {
        document.querySelector(".copy-icons").classList.remove("copied");
        setCopied(false);
      }, 900);
    }
  }, [isCopied]);
  const genPass = e => {
    e.preventDefault();
    if (length !== "") {
      // create password
      creatPass();
    } else {
      // erase previous password
      setGeneratedPass(null);
    }
  };

  const updateLength = value => {
    setLength(value);
    if (value === "" || value < 6) {
      setGeneratedPass(null);
    }
  };

  const creatPass = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const sChars = "@!#$%^&*()+={}[]/?~`|";
    if (isChars) {
      charset += sChars;
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += charset[Math.floor(Math.random() * charset.length)];
    }
    setGeneratedPass(pass);
  };

  const handleClassChange = e => {
    setCopied(true);
    copyToClipboard(generatedPass);
  };
  let clipBoardIcons = (
    <button className='copy-icons' ref={copyBtn} onClick={handleClassChange}>
      <img src={copyImg} />
      <img src={tickImg} />
    </button>
  );
  return (
    <>
      <div className='wrapper'>
        {generatedPass !== null ? (
          <p className='pass-area'>
            {generatedPass}
            {clipBoardIcons}
          </p>
        ) : (
          ""
        )}
        <form className='pass-form' onSubmit={genPass}>
          <div className='pass-form-grp'>
            <input
              type='number'
              placeholder='Password length (6-16)'
              min='6'
              max='16'
              value={length}
              onChange={e => {
                updateLength(e.target.value);
              }}
            />
            <button type='submit'>Generate</button>
          </div>
          <div className='pass-form-more'>
            <label>
              <input type='checkbox' checked={isChars} onChange={() => setIsChars(!isChars)} />
              Include special chars?
            </label>
          </div>
        </form>
      </div>
    </>
  );
}
