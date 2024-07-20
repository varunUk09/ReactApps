import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted successfully! \n\n", {
      fName: firstName,
      lName: lastName,
      mobileNumber: mobileNumber,
      email: email,
      resume: resume,
    });
  };
  return (
    <>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}>
        <h1>Form</h1>
        <div className='formGroup'>
          <label>First Name</label>
          <input
            type='text'
            placeholder='First name'
            required
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className='formGroup'>
          <label>Last Name</label>
          <input
            type='text'
            placeholder='Last name'
            required
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className='formGroup'>
          <label>Mobile Number</label>
          <input
            type='number'
            placeholder='Mobile number'
            maxLength={10}
            required
            value={mobileNumber}
            onChange={e => {
              setMobileNumber(e.target.value);
            }}
          />
        </div>
        <div className='formGroup'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Your email'
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='formGroup'>
          <label>Resume</label>
          <input
            type='file'
            required
            onChange={e => {
              setResume(e.target.files[0]);
            }}
          />
        </div>
        <div className='formGroup'>
          <input type='submit' />
          <input type='reset' />
        </div>
      </form>
    </>
  );
}

export default App;
