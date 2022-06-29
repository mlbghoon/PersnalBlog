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

2. redux 공부
 * https://velopert.com/3528
 


### 2차 목표 Dialog 추가
### 3차 목표 공통 코드(dataset) 추가
