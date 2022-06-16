import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import App2 from './App2';

const Root = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page2" element={<App2 />} />
        </Routes>
    </BrowserRouter>
);

export default Root;