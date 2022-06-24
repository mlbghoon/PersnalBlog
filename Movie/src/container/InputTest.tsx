
import { useState } from 'react';
import { ComponentPanel, FlexPanel, FullPanel, LFloatPanel, RelativePanel, SubFullPanel, Table } from '../common/components';
import { Input } from '../common/components';
import { sh_evnt_return } from '../common/components/TypeInterfaces';




export const InputTest = () => {  
  const [iptVal, setIptVal] = useState("");  
  
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
                
  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <RelativePanel>
            <LFloatPanel>
              <FlexPanel>
                <Table 
                  colGrp={[{width: '4%'}, {width: '16%'}, {width: '4%'}, {width: '16%'}, {width: '4%'}, {width: '16%'}, {width: '4%'}, {width: '16%'}, {width: '4%'}, {width: '16%'}]} 
                  tbData={[
                    [	
                      {type: 'T', value: "인풋", req: true},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          size={"xs"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          size={"sm"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          size={"md"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :  
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          size={"lg"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :   
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          size={"xl"}
                        />
                      },
                    ],
                    [	
                      {type: 'T', value: "인풋", req: true},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          color={"red"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          placeholder="abcdefg가나다라"
                          color={"red"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          placeholder="abcdefg가나다라"
                          color={"red"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :  
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          color={"blue"}
                        />
                      },
                      {type: 'T', value: "인풋"},
                      {type : 'D', value :   
                        <Input
                          id={"allla"}
                          value={iptVal}
                          onChange={inputOnChange}
                          onKeyPress={inputOnKeyPress}
                          onKeyUp={inputOnKeyUp}
                          onBlur={inputOnBlur}
                          alertEmpty={true}
                          placeholder="abcdefg가나다라"
                          color={"blue"}
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


