import { useState } from "react";
export default function App() {
  const [length, setLength] = useState("");
  const [generatedPass, setGeneratedPass] = useState(null);
  const [isChars, setIsChars] = useState(false);
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
    if (value == "" || value < 6) {
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
  return (
    <>
      <div className='wrapper'>
        {generatedPass !== null ? <p className='pass-area'>{generatedPass}</p> : ""}
        <form className='pass-form' onSubmit={genPass}>
          <div className='pass-form-grp'>
            <input
              type='number'
              placeholder='Password length'
              min='6'
              max='16'
              value={length}
              onChange={e => {
                updateLength(e.target.value);
              }}
            />
            <button type='submit'>Generate</button>
          </div>
          <div class='pass-form-more'>
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
