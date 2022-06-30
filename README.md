2022-06-29 V 1.0
================
1. tsconfig.json, react-app-env.d.ts 수정

  ``` typescript
      // react-app-env.d.ts 추가
      declare module 'react-modeless'         
      // tsconfig.json 수정
      // "noImplicitAny": false (as-is)
      "noImplicitAny": true
  ```  

  * react-modelss는 typescript전용으로 만들어진게 없어 오류를 해결하기 위해 
    "noImplicitAny": false 추가하니까 다른 any들이 전부 허용되서 
    react-app-env.d.ts 파일에 react-modelss모듈을 declare해서 해결 하는 방식으로 변경
 
2. redux 작업 (popup쪽 작업중)
  * 연결은 완료 최적화를 하기위해 리펙토링 필요
  * https://react.vlpt.us/redux/01-keywords.html

      리덕스 키워드

      액션 (Action)
      상태에 변화가 필요할 때 발생시킴 (객체하나로 표현)
      type을 필수로 그외의 값들은 개발자 마음대로 생성

      액션 생성함수 (Action Creator)
      컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함
      필수 아님

      리듀서 (Reducer)
      변화를 일으키는 함수
      현재의 상태와 액션을 참조하여 새로운 상태를 반환

      스토어 (Store)
      한 애플리케이션당 하나의 스토어
      현재의 앱 상태와, 리듀서, 내장함수 포함

      디스패치 (dispatch)
      스토어의 내장함수
      액션을 발생 시키는 것

      구독 (subscribe)
      스토어의 내장함수
      subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출
      (리액트에서는 connect 함수 또는 useSelector Hook 을 사용)

3. webpack 공부
  * https://webpack.js.org/guides/getting-started


### 2차 목표 PopupDialog 추가, Menu 추가
### 3차 목표 공통 코드(dataset) 추가
