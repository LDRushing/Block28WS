import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
      <div id="navbar">
        <link to="/blue">Blue</link>
        <link to="/red">Red</link>
      </div>
      <div id="main-section"> 
        <Routes> 
          <Route path="/blue" element={<h1>Blue</h1>
          } />
          <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
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
  )
}

export default App
