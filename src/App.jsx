import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './styles/home.module.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from './paginas/home';
import postPagina from './paginas/postPagina';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Router path="/posts/:id" element={<PostPage />} />
      </Routes>
    </Router>
  )
}

export default App