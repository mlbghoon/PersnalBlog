import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../common/css/App.scss';
import App from './App';
import { Main } from './Main';

import { HeadPanel, MiddlePanel, MainPanel } from '../common/components';
import { ComponentTest } from './ComponentTest';
import { ButtonTest } from './ButtonTest';
import { InputTest } from './InputTest';
import { CheckTest } from './CheckTest';



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
            <Route path="/ButtonTest" element={<ButtonTest />} />
            <Route path="/InputTest" element={<InputTest />} />
            <Route path="/CheckTest" element={<CheckTest />} />
          </Routes>
        </MainPanel>
      </MiddlePanel>
    </BrowserRouter>
);

export default Root;