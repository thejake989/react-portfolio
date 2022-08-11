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

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default App;
