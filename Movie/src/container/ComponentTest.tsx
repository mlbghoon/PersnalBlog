import { useState } from 'react';
import { ComponentPanel, FlexPanel, FullPanel, Label, LFloatPanel, RelativePanel, SelectBox, SubFullPanel, Switch, Table, TextArea } from '../common/components';
import { Checkbox, MultiCheckBox, Button, Input, Radio } from '../common/components';
import { sh_evnt_return } from '../common/components/TypeInterfaces';




export const ComponentTest = () => {  
  const [iptVal, setIptVal] = useState("");  
  const [checked, setChecked] = useState(false);  
  const [multiChecked, setMultiChecked] = useState([{cd:"1_key", nm:"1", checked: false},{cd:"2_key", nm:"2", checked: false}]);
  const [selected, setSelected] = useState("2_key");  
  const [textAreaValue, setTextAreaValue] = useState("");  
  
  // button Event Test //
  const buttonOnClick = (e:sh_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    alert("버튼클릭 : " + e.id);
    console.log("btn.id : ", e.id);
    console.log("btn.target : ", target);
  }
  // button Event Test //

  // input Event Test //
  const inputOnChange = (e:sh_evnt_return) => {
    const value = (e.target as HTMLInputElement).value;
    //console.log(e)
    setIptVal(value);
  }

  const inputOnKeyPress = (e:sh_evnt_return) => {
    //const target = e.target as HTMLInputElement;
    // console.log("onKeyPress")
    // console.log(target.id)
    // console.log(e.key)
   
  }

  const inputOnKeyUp = (e:sh_evnt_return) => {
    //const target = e.target as HTMLInputElement;
    // console.log("onKeyUp")
    // console.log(target.id)
    // console.log(e.key)
  }

  const inputOnBlur = (e:sh_evnt_return) => {
    //const target = e.target as HTMLInputElement;
    // console.log("onBlur")
    // console.log(target)    
  }
  // input Event Test //


  
  // switch Event Test //
  const onSwitchChange = (e:sh_evnt_return) => {
    setChecked(prev=>!prev)
  }
  // switch Event Test //
  
  // TextArea Event Test //
  const onTextAreaChanged = (e:sh_evnt_return) => {
    setTextAreaValue(e.target.value)
  }
  // TextArea Event Test //
  
  // checkBox Event Test //
  const checkBoxOnChange = (e:sh_evnt_return) => {
    switch (e.id) {
      case "Checkbox":
        setChecked(prev=>!prev)
        break;
      case "MultiCheckbox":
        let newmultiChecked = [...multiChecked];

        for (let i = 0; i < newmultiChecked.length; i ++) {
          if (newmultiChecked[i].cd === e.key) {
            newmultiChecked[i].checked = !multiChecked[i].checked;

            break;
          }
        }

        setMultiChecked(newmultiChecked);
        break;
      default: break;
    }
  }

  const checkBoxOnClick = (e:sh_evnt_return) => {
    console.log("checkBoxOnClick");
    console.log(e);
  }
  // checkBox Event Test //


  // radio Event Test //
  const radioOnClick = (e:sh_evnt_return) => {
    //setSelected(prev=>!prev)
    console.log(e)
    console.log(e.key)

    if (e.key) {      
      setSelected(e.key)
    }
    
  }
  // radio Event Test //

  const selBoxOnChange = (e:sh_evnt_return) => {
    console.log(e)
    
  }

  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                <Table 
                  colGrp={[{width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}]} 
                  tbData={[
                    [	
                      {type : 'D', value :   
                        <Button
                          id={"btn0"}
                          margin= {"0px 5px 0px 0px"}
                          value={"btn0"}
                          color={"white"}
                          onClick={buttonOnClick} 
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn1"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn1"}
                          color= {"white"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn2"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn2"}
                          color= {"purple"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn3"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn3"}
                          color= {"purple"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn4"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn4"}
                          color= {"yellow"}
                          onClick   = {buttonOnClick}
                        />
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn5"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn5"}
                          color= {"yellow"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn6"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn6"}
                          color= {"grey"}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn7"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn7"}
                          color= {"grey"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn8"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn8"}
                          color= {"red"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn9"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn9"}
                          color= {"red"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        />
                      },
                    ],
                    [	
                      {type : 'D', value :   
                        <Button
                          id   = {"btn10"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn10"}
                          color= {"tomato"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn11"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn11"}
                          color= {"tomato"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn12"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn12"}
                          color= {"new_green"}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn13"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn13"}
                          color= {"new_green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn14"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn14"}
                          color= {"lightgreen"}
                          onClick   = {buttonOnClick}
                        />
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn15"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn15"}
                          color= {"lightgreen"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn16"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn16"}
                          color= {"green"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn17"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn17"}
                          color= {"green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn18"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn18"}
                          color= {"blue"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn19"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn19"}
                          color= {"blue"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        />
                      },
                    ]
                  ]}
                />

              </FlexPanel>
            </LFloatPanel> 
          </RelativePanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
              <Button
                  id   = {"btn20"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  icon = {"save"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn21"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn21"}
                  icon = {"add"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn22"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn22"}
                  icon = {"del"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn23"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn23"}
                  icon = {"check"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn24"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn24"}
                  icon = {"info"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn25"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn25"}
                  icon = {"undo"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn26"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn26"}
                  icon = {"redo"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn27"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn27"}
                  icon = {"arrowUp"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn28"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn28"}
                  icon = {"arrowDn"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn29"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn29"}
                  icon = {"arrowL"}
                  onClick   = {buttonOnClick}
                />  
                <Button
                  id   = {"btn30"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"xs"}
                  color= {"purple"}
                  icon = {"arrowR"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn31"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"xs"}
                  color= {"purple"}
                  icon = {"close"}
                  value= {"btn31"}
                  onClick   = {buttonOnClick}
                />  
                <Button
                  id   = {"btn32"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"s"}
                  color= {"purple"}
                  icon = {"play"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn33"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"s"}
                  color= {"purple"}
                  value= {"btn33"}
                  icon = {"pause"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn34"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"m"}
                  color= {"purple"}
                  icon = {"left"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn35"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"m"}
                  color= {"purple"}
                  value= {"btn35"}
                  icon = {"right"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn36"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  icon = {"trash"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn37"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn37"}
                  icon = {"trash"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id    = {"btn38"}
                  margin= {"0px 5px 0px 0px"}
                  size  = {"lg"}
                  color = {"purple"}
                  icon  = {"trash"}
                  filled  = {false}
                  onClick = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn39"}
                  margin= {"0px 5px 0px 0px"}
                  size = {"lg"}
                  color= {"purple"}
                  value= {"btn39"}
                  icon = {"trash"}
                  filled    = {false}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn40"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn40"}
                  icon = {"copy"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn41"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn41"}
                  icon = {"copy"}
                  filled    = {false}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn42"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn42"}
                  icon = {"down"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn43"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn43"}
                  icon = {"srch"}
                  onClick   = {buttonOnClick}
                />                
              </FlexPanel>
            </LFloatPanel>  
          </RelativePanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                <Button
                  id   = {"btn44"}
                  margin= {"0px 5px 0px 0px"}
                  value= {"btn44"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn45"}
                  margin= {"5px 5px 0px 0px"}
                  value= {"btn45"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn46"}
                  margin= {"10px 0px 0px 0px"}
                  value= {"btn46"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn47"}
                  margin= {"0px 0px 0px 10px"}
                  value= {"btn47"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn48"}
                  margin= {"0px 0px 0px 15px"}
                  value= {"btn48"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
               
              </FlexPanel>
            </LFloatPanel> 
          </RelativePanel>
        </ComponentPanel>
      </SubFullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                {"all"}
                <Input
                  id={"all"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  alertEmpty={true}
                />
                {"onlyNum"}
                <Input
                  id={"onlyNum"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyNum"}
                />
                {"onlyKor"}
                <Input
                  id={"onlyKor"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyKor"}
                />
                {"onlyEng"}
                <Input
                  id={"onlyEng"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyEng"}
                />
                {"engNum"}
                <Input
                  id={"engNum"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"engNum"}
                />
              </FlexPanel>
            </LFloatPanel>
          </RelativePanel>
        </ComponentPanel>
      </SubFullPanel>
      <ComponentPanel>
        <RelativePanel>
          <LFloatPanel>
            <FlexPanel>
              <Checkbox
                id={"Checkbox"}
                keyProp={"keyProp"}
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
              />
              <MultiCheckBox
                id={"MultiCheckbox"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                dataset={multiChecked}
                disabled={true}
              />
              <MultiCheckBox
                id={"MultiCheckbox"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                dataset={multiChecked}
              />
           </FlexPanel>
          </LFloatPanel>
        </RelativePanel>
      </ComponentPanel>
      <ComponentPanel>
        <RelativePanel>
          <LFloatPanel>
            <FlexPanel>
              <Label
                value={"라디오"}
                req={true}             
              />
              <Radio
                id={"Radio"}
                onChange={radioOnClick}
                selected={selected}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"}]}
                perRow ={1}
              />              
              <Label
                value={"라디오2"}      
              />
              <Radio
                id={"Radio2"}
                onChange={radioOnClick}
                selected={selected}
                disabled={true}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"}]}
                perRow ={2}
              />              
              <Radio
                id={"Radio3"}
                onChange={radioOnClick}
                selected={selected}
                disabled={true}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"},{cd:"3_key", nm:"3"},{cd:"4_key", nm:"4"}]}
                perRow ={2}
              />
           </FlexPanel>
          </LFloatPanel>
          <LFloatPanel>
            <FlexPanel>
              <SelectBox
                id={"selBox"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
              />
              <SelectBox
                id={"selBox2"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                disabled={true}
                color={"darkRed"}
              />
              
              <SelectBox
                id={"selBox3"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                color={"dodgerBlue"}
              />
           </FlexPanel>
           
           <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
              />
          </LFloatPanel>
        </RelativePanel>
        <RelativePanel>
          <LFloatPanel>
            <FlexPanel>
              <TextArea 
                rows={2} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea'}
              />
              <TextArea 
                rows={4} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
              />
              <TextArea 
                rows={5} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                resize={true}
              />
            </FlexPanel>
          </LFloatPanel>
        </RelativePanel>
      </ComponentPanel>

      
      {/* {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)} */}
    </FullPanel>
  );
}


