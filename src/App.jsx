import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import red from "./components/red";
import blue from "./components/blue";
import home from "./components/home";
import Navbar from ".components/Navbar";
import footer from "./components/footer";
import MainContainer from "./components/MainContainer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <link to="/blue">Blue</link>
          <link to="/red">Red</link>
          <link to="/">Home</link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
      <div id="home">
        <Routes>
          <Route path="/home" element={<h1>Home</h1>} />
        </Routes>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
