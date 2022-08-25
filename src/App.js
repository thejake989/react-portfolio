import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div class="bg-black">
      <Nav />
      <About />
      <Layout />
    </div>
  );
}



export default App;
