import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Settings from './pages/Settings';
import PrizeDraw from './pages/PrizeDraw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Settings />}/>
          <Route path='/PrizeDraw' element={<PrizeDraw />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
