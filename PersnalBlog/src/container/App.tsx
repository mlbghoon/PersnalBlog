import React from 'react';
import '../common/css/App.css';
import { Link } from "react-router-dom";

function App(props: any) {
  console.log(props)
  return (
    <div>
         <h1>app1</h1>
         <Link to="/page2">Page2로 이동</Link>
    </div>
  );
}

export default App;
