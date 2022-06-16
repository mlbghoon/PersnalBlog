import React from 'react';
import { useInternalRouter } from '../common/script/routing';

function App() {
  const { push } = useInternalRouter();
  return (
    <div className={'App-logo-div'}>
      <img 
        src={require('../common/image/MarvelLogo.png')} 
        alt="" 
        onClick={() => push('/Main')}
        className={'App-logo'}
      />
    </div>
  );
}

export default App;
