import React from 'react';
import { Home } from 'pages/Home';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/skills' element={<Home/>} />
        <Route path='/works' element={<Home/>} />
        <Route path='/experiences' element={<Home/>} />
        <Route path='/certificates' element={<Home/>} />
        <Route path='/contact' element={<Home/>} />
        {/* <Route path='/section/:sectionId' element={<Home/>} /> */}
        {/* <Route path='/section/sectionA' element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
