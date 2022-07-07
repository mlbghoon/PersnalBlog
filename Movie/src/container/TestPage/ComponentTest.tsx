import { useEffect, useRef, useState } from 'react';
import { ComponentPanel, FlexPanel, FullPanel, Label, LFloatPanel, RelativePanel, SelectBox, SubFullPanel, Switch, Table, TextArea } from '../../common/components';
import { Checkbox, MultiCheckBox, Button, Input, Radio } from '../../common/components';
import { TabPanel, Tabs } from '../../common/components/Tabs';
import { sh_evnt_return } from '../../common/components/TypeInterfaces';
import { ComLib, DataLib, useStateWithDataSet } from '../../common/script';



export const ComponentTest = () => {  
  const [iptVal, setIptVal] = useState("");  
  const [checked, setChecked] = useState(false);  
  const [multiChecked, setMultiChecked] = useState([{cd:"1_key", nm:"1123", checked: false},{cd:"2_key", nm:"2444444", checked: false}]);
  const [selected, setSelected] = useState("2_key");  
  const [textAreaValue, setTextAreaValue] = useState("");  
  const [dataSet, initDataset, setDataSet, setDataSetValue ] = useStateWithDataSet({ dataSetTest: DataLib.datalist.getInstance({})});  
  
  // button Event Test //
  const buttonOnClick = (e:sh_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    alert("버튼클릭 : " + e.id);
    console.log("btn.id : ", e.id);
    console.log("btn.target : ", target);
  }  

  
  const testsss = (e:any) => {
    console.log("4. ComponentTest onCallback")
    initDataset("dataSetTest", [{test: 1, test2: 2}])
 
  }
 
  const buttonOnClick2 = (e:sh_evnt_return) => {
    const param = {id:"modaless", data: "test"};
    const option2= { width: '600px', height: '830px', param: param, headerColor: "red"};

    ComLib.openPop("PopupTest", "팝업테스트 modaless", option2, testsss)
  }
  
  const buttonOnClick3 = (e:sh_evnt_return) => {
    const newRecords = dataSet.dataSetTest;
   
    setDataSetValue("dataSetTest", 0, "test", newRecords.records[0].test + 1)
  }
  const buttonOnClick4 = (e:sh_evnt_return) => {
    const dataSetTest = dataSet.dataSetTest;

    dataSetTest.addRow(1);
    console.log(dataSetTest)
    

    // let records = dataSetTest.orgrecords;
    
    // setDataSet("dataSetTest", records)
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
  
  const tabonClick = (index:number) => {
   console.log(index)
  }
  // checkBox Event Test //
  const checkBoxOnChange = (e:sh_evnt_return) => {
    switch (e.id) {
      case "Checkbox":
        setChecked(prev=>!prev)
        break;
      case "MultiCheckbox": {
        const newmultiChecked = [...multiChecked];

        for (let i = 0; i < newmultiChecked.length; i ++) {
          if (newmultiChecked[i].cd === e.key) {
            newmultiChecked[i].checked = !multiChecked[i].checked;

            break;
          }
        }

        setMultiChecked(newmultiChecked);
        break;
      }
      default: break;
    }
  }

  const checkBoxOnClick = (e:sh_evnt_return) => {
    console.log("checkBoxOnClick");
    console.log(e);
  }
  // checkBox Event Test //


  // radio Event Test //
  const radioOnChange = (e:sh_evnt_return) => {
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
                          disabled={true}
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
                          disabled  = {true}
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
                  id   = {"btn40"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn40"}
                  icon = {"copy"}
                  size = {"xl"}
                  onClick   = {buttonOnClick}
                /> 
                <Button
                  id   = {"btn41"}
                  margin= {"0px 5px 0px 0px"}
                  color= {"purple"}
                  value= {"btn41"}
                  icon = {"copy"}
                  size = {"xl"}
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
                <Label 
                  value={'all'}
                  req={true}
                />
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
                <Label 
                  value={'onlyNum'}
                />
                <Input
                  id={"onlyNum"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyNum"}
                />
                <Label 
                  value={'onlyKor'}
                />
                <Input
                  id={"onlyKor"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyKor"}
                />
                <Label 
                  value={'onlyEng'}
                />
                <Input
                  id={"onlyEng"}
                  value={iptVal}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  type={"onlyEng"}
                />
                <Label 
                  value={'engNum'}
                />
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
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                <Label 
                  value={'xs'}
                  size={"xs"}
                  req={true}
                />
                <Input
                  id={"allxs"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  alertEmpty={true}
                  size={"xs"}
                />
                <Label 
                  value={'sm'}
                  size={"sm"}
                />
                <Input
                  id={"alls"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  size={"sm"}
                />
                <Label 
                  value={'md'}
                  size={"md"}
                />
                <Input
                  id={"allm"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  size={"md"}
                />
                <Label 
                  value={'lg'}
                  size={"lg"}
                  req={true}
                />
                <Input
                  id={"allmd"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  alertEmpty={true}
                  size={"lg"}
                />
                <Label 
                  value={'xl'}
                  size={"xl"}
                />
                <Input
                  id={"allla"}
                  value={iptVal}
                  focusOnRender={true}
                  onChange={inputOnChange}
                  onKeyPress={inputOnKeyPress}
                  onKeyUp={inputOnKeyUp}
                  onBlur={inputOnBlur}
                  size={"xl"}
                  disabled={true}
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
                value={"value"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"xs"}
                  disabled={true}
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
                value={"value2"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"md"}
                disabled={true}
              />
              <Checkbox
                id={"Checkbox"}
                value={"value3"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"lg"}
              />
              <Checkbox
                id={"Checkbox"}
                value={"value4"}
                onChange={checkBoxOnChange}
                onClick={checkBoxOnClick}
                checked={checked}
                size={"xl"}
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
                size={"xs"}
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
                onChange={radioOnChange}
                selected={selected}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"}]}
                perRow ={2}
                size={"xs"}
              /> 
            </FlexPanel>
          </LFloatPanel>  
          <LFloatPanel>
            <FlexPanel>               
              <Label
                value={"라디오2"}      
              />
              <Radio
                id={"Radio2"}
                onChange={radioOnChange}
                selected={selected}
                disabled={true}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"}]}
                perRow ={1}
              />    
            </FlexPanel>
          </LFloatPanel>  
          <LFloatPanel>
            <FlexPanel>           
              <Label
                value={"라디오3"} 
                color={"red"}     
              />         
              <Radio
                id={"Radio3"}
                onChange={radioOnChange}
                selected={selected}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"},{cd:"3_key", nm:"3"},{cd:"4_key", nm:"4"}]}
                perRow ={4}
                size={"lg"}
              />   
            </FlexPanel>
          </LFloatPanel>  
          <LFloatPanel>
            <FlexPanel>               
              <Label
                value={"라디오4"}   
                color={"darkorchid"}   
              />             
              <Radio
                id={"Radio4"}
                onChange={radioOnChange}
                selected={selected}
                disabled={true}
                dataset={[{cd:"1_key", nm:"1"},{cd:"2_key", nm:"2"},{cd:"3_key", nm:"3"},{cd:"4_key", nm:"4"}]}
                perRow ={4}
                size={"xl"}
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
                color={"aquamarine"}
              />   
              <SelectBox
                id={"selBox3"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                color={"aquamarine"}
                size={"xs"}
              />   
              <SelectBox
                id={"selBox4"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                disabled={true}
                color={"red"}
                size={"sm"}
              />              
              <SelectBox
                id={"selBox5"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                color={"darkorchid"}
                size={"lg"}
              />           
              <SelectBox
                id={"selBox5"}
                dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                onChange={selBoxOnChange}
                color={"blue"}
                size={"xl"}
              />
           </FlexPanel>
          </LFloatPanel>
        </RelativePanel>
        <RelativePanel>
          <LFloatPanel>
            <FlexPanel>
              <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
                size={"xs"}
                color={"red"}
              />
              <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
                size={"sm"}
                color={"red"}
              />
              <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
              />
              <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
                size={"lg"}
                color={"indigo"}
              />
              <Switch
                id={"switch"}
                checked={checked}
                onChange={onSwitchChange}
                size={"xl"}
                color={"blue"}
              />
            </FlexPanel>
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
                size={"xs"}
                color={"mediumaquamarine"}
              />
              <TextArea 
                rows={4} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                size={"sm"}
                color={"paleturquoise"}
              />
              <TextArea 
                rows={4} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                color={"darkorchid"}
              />
              <TextArea 
                rows={4} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                size={"lg"}
                color={"aquamarine"}
              />
              <TextArea 
                rows={4} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                size={"xl"}
                color={"aquamarine"}
                disabled={true}
              />
              <TextArea 
                rows={5} 
                onChange={onTextAreaChanged} 
                value={textAreaValue}
                id={'textArea2'}
                resize={true}
                size={"lg"}
              />
            </FlexPanel>
          </LFloatPanel>
        </RelativePanel>
        <RelativePanel>
              <Tabs  tabWidth='100px' onClick = {tabonClick}>
                <TabPanel label={'test1'} id={'11'} index={0}>   
                  <FlexPanel>          
                    <Button
                      id={"modaless"}
                      margin= {"0px 5px 0px 0px"}
                      value={"modaless"}
                      color={"blue"}
                      onClick={buttonOnClick2} 
                    /> 
                    <Button
                      id={"modaless"}
                      margin= {"0px 5px 0px 0px"}
                      value={"modaless"}
                      color={"blue"}
                      onClick={buttonOnClick3} 
                    />
                     
                     <Button
                      id={"modaless"}
                      margin= {"0px 5px 0px 0px"}
                      value={"modaless"}
                      color={"blue"}
                      onClick={buttonOnClick4} 
                    />
                    {dataSet["dataSetTest"].records.map((item:any, key: number) => {
                      return <div key={key} style={{width: "200px", height: "20px"}}>test : {item.test}, test2 : {item.test2} </div>}
                    )}
                  </FlexPanel>
                </TabPanel>
                <TabPanel label={'test2'} id={'13'} index={1}>
                  <Switch
                    id={"switch"}
                    checked={checked}
                    onChange={onSwitchChange}
                    size={"xl"}
                    color={"blue"}
                  />
                </TabPanel>
                <TabPanel label={'test3'} id={'12'} index={2}>
                  <SelectBox
                    id={"selBox4"}
                    dataset={[{cd:"1", nm:"일"},{cd:"2", nm:"이"}]}
                    onChange={selBoxOnChange}
                    disabled={true}
                    color={"red"}
                    size={"sm"}
                  />     
                </TabPanel>
              </Tabs>
        </RelativePanel>
      </ComponentPanel>

     
      {/* {movieList.map(movie => <MovieDisplay key={movie.id} movie={movie} />)} */}
    </FullPanel>
  );
}


