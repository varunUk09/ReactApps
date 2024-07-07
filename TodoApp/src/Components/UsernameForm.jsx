import { useState, useContext } from "react";
import { MainContext } from "./MyContext";
import ModalOverlay from "../Components/ModalOverlay";
export default function UsernameForm() {
  const { username, updateUsername, showUserNameForm, setShowUserNameForm } = useContext(MainContext);
  const [value, setValue] = useState(username);
  return (
    <>
      <div className='UserNameFromWrapper'>
        <p style={{ fontSize: "14px", textAlign: "center" }}>{username == "" ? "Hey, What's your name?" : "Update your name"}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateUsername(value);
          }}
          className='Form'
          id='UsernameForm'>
          <input type='text' maxLength='8' onChange={e => setValue(e.target.value)} value={value} className='FormInput' required />
          <button className='Submit Button' type='submit'>
            {username === "" ? "Add me" : "Update"}
          </button>
        </form>
      </div>
      {showUserNameForm == true ? (
        <ModalOverlay
          onclick={function () {
            setShowUserNameForm(false);
          }}
        />
      ) : null}
    </>
  );
}
