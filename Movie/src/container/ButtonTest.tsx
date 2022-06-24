
import { ComponentPanel, FlexPanel, FullPanel, Label, LFloatPanel, RelativePanel, SelectBox, SubFullPanel, Switch, Table, TextArea } from '../common/components';
import { Button } from '../common/components';
import { sh_evnt_return } from '../common/components/TypeInterfaces';




export const ButtonTest = () => {  
  // button Event Test //
  const buttonOnClick = (e:sh_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    alert("버튼클릭 : " + e.id);
    console.log("btn.id : ", e.id);
    console.log("btn.target : ", target);
  }
  // button Event Test //

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
                          color={"blue"}
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
                          size={"xs"}
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
                          size={"sm"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn12"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn12"}
                          color= {"new_green"}
                          onClick   = {buttonOnClick}
                          size={"md"}
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
                          size={"lg"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn14"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn14"}
                          color= {"lightgreen"}
                          onClick   = {buttonOnClick}
                          size={"xl"}
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
                          icon = {"srch"}
                          size={"xs"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn16"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn16"}
                          color= {"green"}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"sm"}
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
                          icon = {"srch"}
                          size={"md"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn18"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"btn18"}
                          color= {"blue"}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"lg"}
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
                          icon = {"srch"}
                          size={"xl"}
                        />
                      },
                    ],
                    [	
                      {type : 'D', value :   
                        <Button
                          id   = {"btn10"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"tomato"}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"xs"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn11"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"tomato"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"sm"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn12"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"new_green"}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"md"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn13"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"new_green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"lg"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn14"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"lightgreen"}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                          size={"xl"}
                        />
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn15"}
                          margin= {"0px 5px 0px 0px"}
                          color= {"lightgreen"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                          icon = {"srch"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn16"}
                          margin= {"0px 5px 0px 0px"}
                          icon = {"srch"}
                          color= {"green"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn17"}
                          margin= {"0px 5px 0px 0px"}
                          icon = {"srch"}
                          color= {"green"}
                          filled    = {false}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn18"}
                          margin= {"0px 5px 0px 0px"}
                          icon = {"srch"}
                          color= {"blue"}
                          onClick   = {buttonOnClick}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"btn19"}
                          margin= {"0px 5px 0px 0px"}
                          icon = {"srch"}
                          color= {"blue"}
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
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


