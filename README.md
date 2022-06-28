2022-06-28 V 0.9
================
1. AlertDialog

* npm install react-modeless --legacy-peer-deps
* react-modeless error > Conflicting peer dependency: react@15.7.0
* install 시 --legacy-peer-deps 추가로 작성하여 오류 해결

* react-modelss는 typescript전용으로 만들어진게 없어 오류발생
* tsconfig.json 에 "noImplicitAny": false 추가 하여 해결

    ``` typescript
    const ComLib = {
        openDialog : (msg) => {
            if ( document.getElementById(newScrmObj.constants.mdi.DIALOG) === undefined || document.getElementById(newScrmObj.constants.mdi.DIALOG) === null ) {
                let dialog = document.createElement('div');
                dialog.id = newScrmObj.constants.mdi.DIALOG;
                document.body.appendChild(dialog);
            }
            ReactDOM.render( <AlertDialog   open={true} message={msg}
                                            onClose={ () => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG));} }/>
            , document.getElementById(newScrmObj.constants.mdi.DIALOG) );
        },   
    }            
    ```  
    
    ``` typescript
        ComLib.openDialog("버튼클릭 : "+ e.id)        
    ```
* Dialog open 하는 공통 함수 추가
* 메세지코드로 메세지 띄우고, 헤더 색 변경등 추가 작업 필요
* 메세지가 label로 보여 져서 대소문자 구분이 잘 안됨 수정 필요


### 2차 목표 Dialog 추가
### 3차 목표 공통 코드(dataset) 추가
