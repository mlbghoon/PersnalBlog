2022-06-23 V 0.6
================

컴포넌트 계속추가
-------------------
1. Switch 추가

2. TextArea 추가

3. 모든 return 타입 하나로 통일

    ```typescript
        export interface sh_evnt_return {	
            id      : string;   
            target  : HTMLButtonElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
            key?    : string;
            code?   : string;
            type?   : string;
            checked?: boolean; 
        };
    ```

* event return이 너무 많아져서 하나로 통일 

4. props extends사용, 디폴트 모두 제거하고 ES6 문법 '?' 사용하여 디폴트값 전달

    ```typescript    
        interface html_base_pt {
            id       : string;
            margin?  : string;
            disabled?: boolean;
        }
        export interface sh_btn_pt extends html_base_pt {	
            icon?   : string;
            size?   : string;
            value?  : string;
            color?  : string;
            filled? : boolean;
            onClick : (e:sh_evnt_return) => void;
        };
        
    ```

* margin도 하나로 통일 (기존: mt, mr, mb, ml)
* undefied로 되도 상관없는 값은 해당컴포넌트에서 default 값을 주지 않아도 정상 작동
* html_base_pt 에 color, size 등등 모두 적용할수 있는 것들은 공통으로 빼는 것도 좋을듯
* 현제 color, size는 일부 컴포넌트에서만 사용함 전부 사용할 수 있게 수정하고 해야 할듯

### 1차 목표 Tab, Tray 추가
### 2차 목표 Dialog 추가
### 3차 목표 공통 코드(dataset) 추가

### default porps 수정이유 https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/ 

