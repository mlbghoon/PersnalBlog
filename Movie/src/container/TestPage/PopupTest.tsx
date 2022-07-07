import { Button, ComponentPanel, FullPanel, RelativePanel, SubFullPanel } from '../../common/components';
import { sh_evnt_return } from '../../common/components/TypeInterfaces';

export const PopupTest = (props:any) => {  
  const buttonOnClick1 = (e:sh_evnt_return) => {
    props.onClose({data:"data"});
  
  }
  const buttonOnClick2 = (e:sh_evnt_return) => {
    props.onClose();
  
  }

                
  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <Button
              id={"onCallbackFunc"}
              margin= {"0px 5px 0px 0px"}
              value={"onCallbackFunc"}
              color={"blue"}
              onClick={buttonOnClick1} 
            /> 
              <Button
              id={"onClose"}
              margin= {"0px 5px 0px 0px"}
              value={"onClose"}
              color={"blue"}
              onClick={buttonOnClick2} 
            /> 
          </RelativePanel>
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


