import React from 'react';
import '../common/css/App.css';
import { Link } from "react-router-dom";

function App2() {

  return (
    <div>
      <h1>app2</h1>
      <Link to="/">Page1로 이동</Link>
    </div>
  );
}

export default App2;


