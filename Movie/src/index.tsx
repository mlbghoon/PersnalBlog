import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Root from './container/Root';

// import reportWebVitals from './reportWebVitals';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
);
root.render(
    <BrowserRouter><Routes><Route path='/'  element={<Root/>} /></Routes></BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
