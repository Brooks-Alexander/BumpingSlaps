import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);