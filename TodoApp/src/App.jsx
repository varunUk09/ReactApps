import React from "react";
import { Outlet } from "react-router-dom";
import { MainContext } from "./Components/MyContext";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import UsernameForm from "./Components/UsernameForm";
import { getUserName, storeUserName, initShowNameForm } from "./db";
// import ModalOverlay from "./Components/ModalOverlay";
import "./App.css";
export default function App() {
  const [username, setUsername] = useState(getUserName() || "");
  const [showUserNameForm, setShowUserNameForm] = useState(initShowNameForm());
  const updateUsername = value => {
    setUsername(function () {
      setShowUserNameForm(false);
      return value.toLowerCase();
    });
  };
  // storing userName to local storage
  useEffect(
    function () {
      storeUserName(username);
    },
    [username]
  );
  return (
    <>
      <MainContext.Provider value={{ username, updateUsername, showUserNameForm, setShowUserNameForm }}>
        <Header username={username} />
        <Outlet />
        {showUserNameForm == true ? <UsernameForm /> : null}
      </MainContext.Provider>
    </>
  );
}
