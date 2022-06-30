
import { useState } from 'react';
import { ComponentPanel, FullPanel, RelativePanel, SubFullPanel, Table, TabPanel, Tabs } from '../../common/components';
import { Input } from '../../common/components';
import { sh_evnt_return } from '../../common/components/TypeInterfaces';

export const InputTest = () => {  
  const [iptVal, setIptVal] = useState("가나다AaBbcC12340!@#$%");  
  
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

  const color = ["antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

  const makeTbData = () => {	
		let tbData: any[][] = [];
		let rowData: { type: string; value: JSX.Element; }[] = [];		
    
    color.map((item, i) => {			
			rowData.push({ type: 'D', value: <Input
                                        id        = {item}
                                        color     = {item}
                                        value     = {iptVal}
                                        onBlur    = {inputOnBlur}
                                        onKeyUp   = {inputOnKeyUp}
                                        onChange  = {inputOnChange}
                                        onKeyPress= {inputOnKeyPress}
                                      />})
      if ((i+1)%10 === 0) {
        tbData.push(rowData)
        rowData = [];
      } else if (i === color.length - 1) {
        tbData.push(rowData)
      }
      return null;
    })
    console.log(tbData)
    return tbData;
  }

                
  return (
    <FullPanel>
      <SubFullPanel>
        <ComponentPanel>
          <Tabs  tabWidth='100px'>
            <TabPanel label={'색상'} id={'11'} index={0}>
              <RelativePanel>
                <Table 
                  colGrp={[{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'}]} 
                  tbData={makeTbData()}
                />  
              </RelativePanel>
            </TabPanel>
            <TabPanel label={'크기'} id={'11'} index={1}>
              <RelativePanel>
                <Table 
                  colGrp={[{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'}]} 
                  tbData={[[{ type: 'D', value: 
                              <Input
                                id        = {"xs"}
                                size      = {"xs"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'D', value: 
                              <Input
                                id        = {"sm"}
                                size      = {"sm"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'D', value: 
                              <Input
                                id        = {"md"}
                                size      = {"md"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'D', value: 
                              <Input
                                id   = {"lg"}
                                size      = {"lg"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'D', value: 
                              <Input
                                id        = {"xl"}
                                size      = {"xl"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                  ]]}
                />  
              </RelativePanel>
            </TabPanel>
            <TabPanel label={'타입'} id={'11'} index={2}>
            <Table 
                  colGrp={[{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'},{width: '10%'}]} 
                  tbData={[[{ type: 'T', value:"alertEmpty"},
                            { type: 'D', value: 
                              <Input
                                id        = {"alertEmpty"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                                alertEmpty= {true}
                              />},
                            { type: 'T', value:"한글"},
                            { type: 'D', value: 
                              <Input
                                id        = {"onlyKor"}
                                type      = {"onlyKor"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'T', value:"영문"},
                            { type: 'D', value: 
                              <Input
                                id        = {"onlyEng"}
                                type      = {"onlyEng"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'T', value:"숫자"},
                            { type: 'D', value: 
                              <Input
                                id        = {"onlyNum"}
                                type      = {"onlyNum"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                            { type: 'T', value:"영문 + 숫자"},
                            { type: 'D', value: 
                              <Input
                                id        = {"engNum"}
                                type      = {"engNum"}
                                value     = {iptVal}
                                onBlur    = {inputOnBlur}
                                onKeyUp   = {inputOnKeyUp}
                                onChange  = {inputOnChange}
                                onKeyPress= {inputOnKeyPress}
                              />},
                  ]]}
                />  
            </TabPanel>
          </Tabs>
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


