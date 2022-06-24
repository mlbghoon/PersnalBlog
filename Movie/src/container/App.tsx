import React from 'react';
import { useInternalRouter } from '../common/script/routing';
import { Button, CenterPanel } from '../common/components';

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
        <Button
          id   = {"test"}
          value= {"테스트페이지"}
          color= {"green"}
          onClick   = {() => push('/ComponentTest')}
        /> 
        <Button
          id   = {"buttotest"}
          value= {"버튼테스트"}
          color= {"green"}
          onClick   = {() => push('/ButtonTest')}
        /> 
        <Button
          id   = {"inputTest"}
          value= {"input테스트"}
          color= {"green"}
          onClick   = {() => push('/InputTest')}
        /> 
        <Button
          id   = {"CheckTest"}
          value= {"CheckBox테스트"}
          color= {"green"}
          onClick   = {() => push('/CheckTest')}
        /> 
      </CenterPanel>
    </>
  );
}

export default App;
