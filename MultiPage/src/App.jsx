import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
