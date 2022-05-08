import React from 'react';
import './App.css';
import { Step1, Step2 } from './components/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Step1 />} />
        <Route path={`/step2`} element={<Step2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
