import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getGitHubUser } from './services/githubApi'; 

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <div>
        <h1></h1>
        <div>
        <a href="https://vite.dev" target="_blank">
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
        
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>

        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
