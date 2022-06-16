import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../common/css/App.css';
import App from './App';
import { Main } from './Main';

const Root = () => (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
    </BrowserRouter>
);

export default Root;