2022-06-17 V 0.2
================

TypeScript 공부 (Movie)
-------------------
1. Layout PropsType 변경

    ```typescript
        interface PropTypes {
            children: React.ReactNode;
        };
    ```
    
* 기존 : any
* 변경 : React.ReactNode
* React.ReactNode = string | number | boolean | React.ReactElement&#60any, string | React.JSXElementConstructor&#60any&#62&#62 | React.ReactFragment | React.ReactPortal | null | undefined
* js파일 일때 : static propTypes = { children: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.array, PropTypes.object]).isRequired }; 선언 하고 사용함


2. Button 수정

    ```typescript
        let buttonRef = useRef<HTMLButtonElement>(null);

        return (
            <button className={btnClass} ref={buttonRef}  id={id} onClick={onClick} ...>
                <span className={"button__text"}>{value}</span>
                {
                    (innerImage && iconClass !== null) 
                    ? 
                        <span className={"button__icon"} onClick={(e) => {e.stopPropagation(); buttonRef.current?.click()}}>
                            <i className={ iconClass }></i> 
                        </span>	 
                    :  
                        null
                }
            </button>
        );
    ```
    
* 버튼안에 아이콘을 클릭해도 ref 사용하여 버튼의 클릭에 연결된 props의 onClick 작동하게 변경
* typeScript 이여서 ref도 HTMLButtonElement 선언후 사용

    ```typescript
        interface BtnProps {
            id: string;
            ...
            onClick: (e:React.MouseEvent) => void;
        };
    ```
    
* btnProps 에서 onClick에 타입을 지정해주고 넘겨야지 props로 event 가 넘어감

    ```typescript
        const onClick = (e:React.MouseEvent) => {
            const target = e.target as HTMLButtonElement;
            console.log(target)
            console.log(target.id)
        }
    ```

* Props 쪽에서도 전달받은 event 가 mouseEvent 이다 타입 지정 해줘야 함
* event 안에 target도 as HTMLButtonElement 사용 안할시 id에서 오류 발생
* terget의 타입을 지정 안해주면 id가 있는지 없는지 알수 없어 오류 발생 하는거라 보여짐


3. Input 추가

    ```typescript
        interface IptProps {
            ...
            onChange: (e:React.ChangeEvent) => void;
            onKeyPress: (e:React.KeyboardEvent) => void;
            onBlur: (e:React.FocusEvent) => void;
            onKeyUp: (e:React.KeyboardEvent) => void;
        };
    ```
* IptProps event 타입지정 

    ```typescript
        const onKeyUp = (e:React.KeyboardEvent) => {
            const target = e.target as HTMLButtonElement;
            console.log("onKeyUp")
            console.log(target.id)
            console.log(e.key)
        }
    ```
    
* KeyboardEvent의 경우 한글 입력시 IME composing 단계를 거친다. 이때 keyEvents 를 처리시 composing 이 완료되지 않았기에 비정상적인 key, keycode 값이 넘어온다
* 영문에서는 문제 없음, 한글입력시에는 사용못 함

### TypeScript 개념이 슬슬 잡힘, 확실히 기본 javascript 에 비하면 코딩량이 많아 보임
### 여러 사람이 개발 할때는 타입체크가 되서 에러 발생이 줄어 들거 같신 하나 혼자 개발시에는
### 아직 모르겟음

