import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PlayGame from './components/PlayGame';
import Scoreboard from './components/Scoreboard';
import Credits from './components/Credits';

import styles from './app.module.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    /*<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
    </>*/

    <div id={styles.app}>
      <Analytics />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<PlayGame />} />
          <Route path="scoreboard" element={<Scoreboard />} />
          <Route path="credits" element={<Credits />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
