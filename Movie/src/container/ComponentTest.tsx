import React from 'react';
import '../common/css/App.css';
import { useEffect, useState } from 'react';
import { ComponentPanel, FlexPanel, FullPanel, Label, LFloatPanel, RelativePanel, RFloatPanel, SubFullPanel, Table } from '../common/components';
import { Checkbox, MultiCheckBox, Button, Input, Radio } from '../common/components';
import { sh_btn_evnt_return, sh_chk_evnt_return, sh_ipt_event_return, sh_rdo_evnt_return } from '../common/components/TypeInterfaces';




export const ComponentTest = () => {  
  const [iptVal, setIptVal] = useState("");  
  const [checked, setChecked] = useState(false);  
  const [multiChecked, setMultiChecked] = useState([{keyProp:"1_key", value:"1", checked: false},{keyProp:"2_key", value:"2", checked: false}]);
  const [selected, setSelected] = useState("2_key");  

  // button Event Test //
  const buttonOnClick = (e:sh_btn_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    alert("버튼클릭 : " + e.id);
    console.log("btn.id : ", e.id);
    console.log("btn.target : ", target);
  }
  // button Event Test //

  // input Event Test //
  const inputOnChange = (e:sh_ipt_event_return) => {
    const value = (e.target as HTMLInputElement).value;
    //console.log(e)
    setIptVal(value);
  }

  const inputOnKeyPress = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onKeyPress")
    // console.log(target.id)
    // console.log(e.key)
   
  }

  const inputOnKeyUp = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onKeyUp")
    // console.log(target.id)
    // console.log(e.key)
  }

  const inputOnBlur = (e:sh_ipt_event_return) => {
    const target = e.target as HTMLInputElement;
    // console.log("onBlur")
    // console.log(target)    
  }
  // input Event Test //

  // checkBox Event Test //
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

  const checkBoxOnClick = (e:sh_chk_evnt_return) => {
    console.log("checkBoxOnClick");
    console.log(e);
  }
  // checkBox Event Test //


  // radio Event Test //
  const radioOnChange = (e:sh_rdo_evnt_return) => {
    //setSelected(prev=>!prev)
    console.log("radioOnChange")
    setSelected(e.key)
  }
  
  // radio Event Test //

  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                <Table 
                  footer={undefined} 
                  head={undefined} 
                  id={''} 
                  colGrp={[{width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}, {width: '10%'}]} 
                  tbData={[
                    [	
                      {type : 'D', value :   
                        <Button
                          id   = {"btn0"}
                          mr   = {"5px"}
                          value= {"btn0"}
                          color= {"white"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn1"}
                          mr   = {"5px"}
                          value= {"btn1"}
                          color= {"white"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn2"}
                          mr   = {"5px"}
                          value= {"btn2"}
                          color= {"purple"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn3"}
                          mr   = {"5px"}
                          value= {"btn3"}
                          color= {"purple"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn4"}
                          mr   = {"5px"}
                          value= {"btn4"}
                          color= {"yellow"}
                          onClick   = {buttonOnClick}
                        />
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn5"}
                          mr   = {"5px"}
                          value= {"btn5"}
                          color= {"yellow"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn6"}
                          mr   = {"5px"}
                          value= {"btn6"}
                          color= {"grey"}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn7"}
                          mr   = {"5px"}
                          value= {"btn7"}
                          color= {"grey"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn8"}
                          mr   = {"5px"}
                          value= {"btn8"}
                          color= {"red"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn9"}
                          mr   = {"5px"}
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
                          mr   = {"5px"}
                          value= {"btn10"}
                          color= {"tomato"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn11"}
                          mr   = {"5px"}
                          value= {"btn11"}
                          color= {"tomato"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn12"}
                          mr   = {"5px"}
                          value= {"btn12"}
                          color= {"new_green"}
                          onClick   = {buttonOnClick}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn13"}
                          mr   = {"5px"}
                          value= {"btn13"}
                          color= {"new_green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn14"}
                          mr   = {"5px"}
                          value= {"btn14"}
                          color= {"lightgreen"}
                          onClick   = {buttonOnClick}
                        />
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn15"}
                          mr   = {"5px"}
                          value= {"btn15"}
                          color= {"lightgreen"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn16"}
                          mr   = {"5px"}
                          value= {"btn16"}
                          color= {"green"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn17"}
                          mr   = {"5px"}
                          value= {"btn17"}
                          color= {"green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn18"}
                          mr   = {"5px"}
                          value= {"btn18"}
                          color= {"blue"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn19"}
                          mr   = {"5px"}
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
                  mr   = {"5px"}
                  color= {"purple"}
                  icon = {"save"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn21"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn21"}
                  icon = {"add"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn22"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn22"}
                  icon = {"del"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn23"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn23"}
                  icon = {"check"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn24"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn24"}
                  icon = {"info"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn25"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn25"}
                  icon = {"undo"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn26"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn26"}
                  icon = {"redo"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn27"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn27"}
                  icon = {"arrowUp"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn28"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn28"}
                  icon = {"arrowDn"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn29"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn29"}
                  icon = {"arrowL"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                />  
                <Button
                  id   = {"btn30"}
                  mr   = {"5px"}
                  size = {"xs"}
                  color= {"purple"}
                  icon = {"arrowR"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn31"}
                  mr   = {"5px"}
                  size = {"xs"}
                  color= {"purple"}
                  icon = {"close"}
                  value= {"btn31"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                />  
                <Button
                  id   = {"btn32"}
                  mr   = {"5px"}
                  size = {"s"}
                  color= {"purple"}
                  icon = {"play"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn33"}
                  mr   = {"5px"}
                  size = {"s"}
                  color= {"purple"}
                  value= {"btn33"}
                  icon = {"pause"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn34"}
                  mr   = {"5px"}
                  size = {"m"}
                  color= {"purple"}
                  icon = {"left"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn35"}
                  mr   = {"5px"}
                  size = {"m"}
                  color= {"purple"}
                  value= {"btn35"}
                  icon = {"right"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn36"}
                  mr   = {"5px"}
                  color= {"purple"}
                  icon = {"trash"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn37"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn37"}
                  icon = {"trash"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn38"}
                  mr   = {"5px"}
                  size = {"lg"}
                  color= {"purple"}
                  icon = {"trash"}
                  filled    = {false}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn39"}
                  mr   = {"5px"}
                  size = {"lg"}
                  color= {"purple"}
                  value= {"btn39"}
                  icon = {"trash"}
                  filled    = {false}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn40"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn40"}
                  icon = {"copy"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn41"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn41"}
                  icon = {"copy"}
                  filled    = {false}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn42"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn42"}
                  icon = {"down"}
                  innerImage= {true}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn43"}
                  mr   = {"5px"}
                  color= {"purple"}
                  value= {"btn43"}
                  icon = {"srch"}
                  innerImage= {true}
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
                  mr   = {"5px"}
                  value= {"btn44"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn45"}
                  mr   = {"5px"}
                  mt   = {"5px"}
                  value= {"btn45"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn46"}
                  mt   = {"10px"}
                  value= {"btn46"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn47"}
                  ml   = {"10px"}
                  value= {"btn47"}
                  color= {"green"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn48"}
                  ml   = {"15px"}
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
                checked={checked}
                dataset={multiChecked}
                disabled={true}
              />
              <MultiCheckBox
                id={"MultiCheckbox"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
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
                value= {"라디오"}
                req  = {true}
              />
              <Radio
                id={"Radio"}
                onChange={radioOnChange}
                selected={selected}
                dataset={[{keyProp:"1_key", value:"1"},{keyProp:"2_key", value:"2"}]}
              />
           </FlexPanel>
          </LFloatPanel>
        </RelativePanel>
      </ComponentPanel>

      
      {/* {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)} */}
    </FullPanel>
  );
}


