import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../common/css/App.css';
import App from './App';
import { Main } from './Main';

import { HeadPanel, MiddlePanel, MainPanel } from '../common/components';
import { ComponentTest } from './ComponentTest';

const Root = () => (
    <BrowserRouter>
      <HeadPanel>
        header
      </HeadPanel>
      <MiddlePanel>
        <MainPanel>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/ComponentTest" element={<ComponentTest />} />
          </Routes>
        </MainPanel>
      </MiddlePanel>
    </BrowserRouter>
);

export default Root;