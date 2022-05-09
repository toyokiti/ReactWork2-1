import React from 'react';
import './App.css';
import { Step1, Step2, Step3 } from './components/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* step1のルーティング */}
        <Route path={`/`} element={<Step1 />} />
        {/* step2のルーティング */}        
        <Route path={`/step2`} element={<Step2 />} />
        {/* step3のルーティング */}        
        <Route path={`/step3`} element={<Step3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
