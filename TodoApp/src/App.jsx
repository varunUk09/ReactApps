import React from "react";
import { Outlet } from "react-router-dom";
import { MainContext, HeaderContext } from "./Components/MyContext";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import UsernameForm from "./Components/UsernameForm";
import { getUserName, storeUserName, initShowNameForm, storeTheme, getTheme } from "./db";

// import ModalOverlay from "./Components/ModalOverlay";
import "./App.css";
export default function App() {
  const [username, setUsername] = useState(getUserName() || "");
  const [showUserNameForm, setShowUserNameForm] = useState(initShowNameForm());
  const [isDarkTheme, setTheme] = useState(getTheme());
  const updateTheme = () => {
    setTheme(!isDarkTheme);
  };
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
  // changing theme and storing
  useEffect(
    function () {
      if (isDarkTheme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      storeTheme(isDarkTheme);

      // Cleanup function
      return () => {
        document.body.classList.remove("dark");
      };
    },
    [isDarkTheme]
  );
  return (
    <>
      <MainContext.Provider value={{ username, updateUsername, showUserNameForm, setShowUserNameForm }}>
        <HeaderContext.Provider value={{ username, isDarkTheme, updateTheme }}>
          <Header />
        </HeaderContext.Provider>
        <Outlet />
        {showUserNameForm == true ? <UsernameForm /> : null}
      </MainContext.Provider>
    </>
  );
}
