import React from 'react';
import { useInternalRouter } from '../common/script/routing';
import { CenterPanel } from '../common/components';

function App() {
  const { push } = useInternalRouter();
  return (
    <>
      <CenterPanel>
        <img 
          src={require('../common/image/MarvelLogo.png')} 
          alt="" 
          onClick={() => push('/Main')}
          className={'App-logo'}
        />
      </CenterPanel>
      <CenterPanel>
        어쩌구 저쩌구
        {/* 화면 설명 문구 추가 예정 */}
      </CenterPanel>
    </>
  );
}

export default App;
