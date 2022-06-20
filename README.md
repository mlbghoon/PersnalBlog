2022-06-20 V 0.3
================

컴포넌트 계속추가
-------------------
1. MultuCheckBox 추가

    ```typescript                
        const checkBoxOnChange = (e:sh_chk_evnt_return) => {
            switch (e.id) {
            case "Checkbox":
                setChecked(prev=>!prev)
                break;
            case "MultiCheckbox":
                let newmultiChecked = [...multiChecked];


                for (let i = 0; i < newmultiChecked.length; i ++) {
                if (newmultiChecked[i].keyProp === e.key) {
                    newmultiChecked[i].checked = !multiChecked[i].checked;

                    break;
                }
                }
                
                setMultiChecked(newmultiChecked);
                break;
            default: break;
            }
        }
    ```
* sh_chk_evnt_return 변경, sh_multi_chk_props_type 추가 
* setMultiChecked 의 경우 Array안의 한 항목만 변경시 바뀐걸 인식 못해서 ... 으로 이전꺼러 새로운 곳에 담아서
보내야함


2. Radio 추가

    ```typescript                
        const radioOnChange = (e:sh_rdo_evnt_return) => {
            setSelected(e.key)
        }

        <Radio
            id={"Radio"}
            onChange={radioOnChange}
            selected={selected}
            dataset={[{keyProp:"1_key", value:"1"},{keyProp:"2_key", value:"2"}]}
        />
    ```
* Radio의 경우 keyProp를 selected에 넣어서 보낸 값이 선택 되어지는 방식으로 작성
* onChange의 key 값에 선택된 keyprops 가 넘어 와서 그 값을 state selected에 넣는 방식

