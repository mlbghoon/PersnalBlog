2022-06-28 V 0.9
================
1. AlertDialog, ConfirmDialog 추가

* npm install react-modeless --legacy-peer-deps
* react-modeless error > Conflicting peer dependency: react@15.7.0
* install 시 --legacy-peer-deps 추가로 작성하여 오류 해결

* react-modelss는 typescript전용으로 만들어진게 없어 오류발생
* tsconfig.json 에 "noImplicitAny": false 추가 하여 해결
* "noImplicitAny": false 추가하니까 다른 any들이 전부 허용되서....흠...

    ``` typescript
        const ComLib = {
            openDialog : (msg, headerColor) => {
                let dialog = document.getElementById(newScrmObj.constants.mdi.DIALOG)

                if ( document.getElementById(newScrmObj.constants.mdi.DIALOG) === undefined || document.getElementById(newScrmObj.constants.mdi.DIALOG) === null ) {			
                    dialog = document.createElement('div');
                    dialog.id = newScrmObj.constants.mdi.DIALOG;
                    document.body.appendChild(dialog);
                }

                const root = createRoot(dialog);

                root.render(<AlertDialog open={true} message={msg} headerColor={headerColor}
                    onClose={ () => { document.body.removeChild(document.getElementById(newScrmObj.constants.mdi.DIALOG));} }/>);
            },  
        }            
    ```  
    
    ``` typescript
        ComLib.openDialog("버튼클릭 : "+ e.id)        
    ```
* Dialog open 하는 공통 함수 추가
* 메세지코드로 메세지 띄우기 추가 작업 필요

    ```log
        reactdom.render is no longer supported in react 18
    ```

* ReactDOM.render => const root = createRoot(dialog);root.render(); 로 변경


### 2차 목표 Dialog 추가
### 3차 목표 공통 코드(dataset) 추가
