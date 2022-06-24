
import { useState } from 'react';
import { ComponentPanel, FlexPanel, FullPanel, LFloatPanel, RelativePanel, SubFullPanel } from '../common/components';
import { Checkbox } from '../common/components';
import { sh_evnt_return } from '../common/components/TypeInterfaces';

export const CheckTest = () => {  
  const [checked, setChecked] = useState(false);  
  // checkBox Event Test //
  const checkBoxOnChange = (e:sh_evnt_return) => {
    switch (e.id) {
      case "Checkbox":
        setChecked(prev=>!prev)
        console.log("checkBoxOnChange")
        break;    
      default: break;
    }
  }

  const checkBoxOnClick = (e:sh_evnt_return) => {
    console.log("checkBoxOnClick");
    console.log(e);
  }
  // checkBox Event Test //
                
  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
              <Checkbox
                id={"Checkbox"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"xs"}
                color={"red"}
              />   
              <Checkbox
                id={"Checkbox"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"sm"}
              />   
              <Checkbox
                id={"Checkbox"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"md"}
                color={"blue"}
              />   
              <Checkbox
                id={"Checkbox"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"lg"}
              />   
              <Checkbox
                id={"Checkbox"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"xl"}
              />              
              </FlexPanel>
            </LFloatPanel> 
          </RelativePanel>      
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


