import { ComponentPanel, FullPanel, RelativePanel, SubFullPanel } from '../../common/components';
import { Button, Table, TabPanel, Tabs } from '../../common/components';
import { sh_evnt_return } from '../../common/components/TypeInterfaces';
import { ComLib } from '../../common/script';

export const ButtonTest = () => {  
  const test =(e:any) => {
    console.log("ButtonTest callbak function")
    console.log(e)
  }
  const buttonOnClick = (e:sh_evnt_return) => {
    const target = e.target as HTMLButtonElement;
    // ComLib.openDialog('A', "버튼클릭 : "+ e.id, e.id)
   
    ComLib.openDialog('C', "버튼클릭 : "+ e.id, e.id, test)
  }


  const color = ["antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

  const makeTbData = () => {
	
		const tbData: any[][] = [];
		let rowData: { type: string; value: JSX.Element; }[] = [];		
    
    color.map((item, i) => {			
			rowData.push({ type: 'D', value: <Button
                        id   = {item}
                        margin= {"0px 5px 0px 0px"}
                        value= {"Button"}
                        color= {item}
                        onClick = {buttonOnClick}
                      />})
      if ((i+1)%20 === 0) {
        tbData.push(rowData)
        rowData = [];
      } else if (i === color.length - 1) {
        tbData.push(rowData)
      }
      return null;
    })
    return tbData;
  }
  const makeTbData2 = () => {
	
		const tbData: any[][] = [];
		let rowData: { type: string; value: JSX.Element; }[] = [];		
    
    color.map((item, i) => {			
			rowData.push({ type: 'D', value: <Button
                        id   = {item}
                        margin= {"0px 5px 0px 0px"}
                        value= {"Button"}
                        color= {item}
                        filled  = {false}
                        onClick = {buttonOnClick}
                      />})
      if ((i+1)%20 === 0) {
        tbData.push(rowData)
        rowData = [];
      } else if (i === color.length - 1) {
        tbData.push(rowData)
      }
      return null;
    })
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
                  colGrp={[{width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}]} 
                  tbData={makeTbData()}
                />                    
                <Table 
                  colGrp={[{width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}]} 
                  tbData={makeTbData2()}
                />
              </RelativePanel>
            </TabPanel>
            <TabPanel label={'크기'} id={'11'} index={1}>
              <RelativePanel>
                <Table 
                  colGrp={[{width: '20%'}, {width: '20%'}, {width: '20%'}, {width: '20%'}, {width: '20%'}]} 
                  tbData={[
                    [	
                      {type : 'D', value :   
                        <Button
                          id   = {"xs"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"Button"}
                          color= {"aqua"}
                          onClick= {buttonOnClick}
                          size={"xs"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"sm"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"Button"}
                          color= {"aqua"}
                          onClick   = {buttonOnClick}
                          size={"sm"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"md"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"Button"}
                          color= {"aqua"}
                          onClick= {buttonOnClick}
                          size={"md"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"lg"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"Button"}
                          color= {"aqua"}
                          onClick   = {buttonOnClick}
                          size={"lg"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id   = {"xl"}
                          margin= {"0px 5px 0px 0px"}
                          value= {"Button"}
                          color= {"aqua"}
                          onClick   = {buttonOnClick}
                          size={"xl"}
                        />
                      }
                    ]]}
                />
              </RelativePanel>
            </TabPanel>
            <TabPanel label={'아이콘'} id={'11'} index={2}>
              <RelativePanel>
                <Table 
                  colGrp={[{width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}, {width: '5%'}]} 
                  tbData={[
                    [	
                      {type : 'D', value :   
                        <Button
                          id     = {"diskette"}
                          icon   = {"diskette"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"diskette"}
                          icon   = {"diskette"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"plus"}
                          icon   = {"plus"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"plus"}
                          icon   = {"plus"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"minus"}
                          icon   = {"minus"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"minus"}
                          icon   = {"minus"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"check"}
                          icon   = {"check"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"check"}
                          icon   = {"check"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"trash"}
                          icon   = {"trash"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"trash"}
                          icon   = {"trash"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"info"}
                          icon   = {"info"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"info"}
                          icon   = {"info"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"undo"}
                          icon   = {"undo"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"undo"}
                          icon   = {"undo"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"redo"}
                          icon   = {"redo"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"redo"}
                          icon   = {"redo"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-up"}
                          icon   = {"arrow-up"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-up"}
                          icon   = {"arrow-up"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-down"}
                          icon   = {"arrow-down"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-down"}
                          icon   = {"arrow-down"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      }                         
                    ],[	
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-left"}
                          icon   = {"arrow-left"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-left"}
                          icon   = {"arrow-left"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-right"}
                          icon   = {"arrow-right"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"arrow-right"}
                          icon   = {"arrow-right"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"close"}
                          icon   = {"close"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"close"}
                          icon   = {"close"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"play"}
                          icon   = {"play"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"play"}
                          icon   = {"play"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"pause"}
                          icon   = {"pause"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"pause"}
                          icon   = {"pause"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"documents"}
                          icon   = {"documents"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"documents"}
                          icon   = {"documents"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"download"}
                          icon   = {"download"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"download"}
                          icon   = {"download"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"search"}
                          icon   = {"search"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"search"}
                          icon   = {"search"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"angle-down"}
                          icon   = {"angle-down"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"angle-down"}
                          icon   = {"angle-down"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"youtube"}
                          icon   = {"youtube"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"youtube"}
                          icon   = {"youtube"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      }
                    ],[	
                      {type : 'D', value :   
                        <Button
                          id     = {"yahoo"}
                          icon   = {"yahoo"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"yahoo"}
                          icon   = {"yahoo"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"xing"}
                          icon   = {"xing"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"xing"}
                          icon   = {"xing"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"wordpress"}
                          icon   = {"wordpress"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"wordpress"}
                          icon   = {"wordpress"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"vine"}
                          icon   = {"vine"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"vine"}
                          icon   = {"vine"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"twitter"}
                          icon   = {"twitter"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"twitter"}
                          icon   = {"twitter"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"stumbleupon"}
                          icon   = {"stumbleupon"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"stumbleupon"}
                          icon   = {"stumbleupon"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"stack-overflow"}
                          icon   = {"stack-overflow"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"stack-overflow"}
                          icon   = {"stack-overflow"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"magento"}
                          icon   = {"magento"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"magento"}
                          icon   = {"magento"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"kakao"}
                          icon   = {"kakao"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"kakao"}
                          icon   = {"kakao"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"google"}
                          icon   = {"google"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"google"}
                          icon   = {"google"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      }
                    ],[	
                      {type : 'D', value :   
                        <Button
                          id     = {"sunset-up"}
                          icon   = {"sunset-up"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"sunset-up"}
                          icon   = {"sunset-up"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"umbrella"}
                          icon   = {"umbrella"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"umbrella"}
                          icon   = {"umbrella"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"copyleft"}
                          icon   = {"copyleft"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"copyleft"}
                          icon   = {"copyleft"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"copyright"}
                          icon   = {"copyright"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"copyright"}
                          icon   = {"copyright"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"500px"}
                          icon   = {"500px"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"500px"}
                          icon   = {"500px"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"digg"}
                          icon   = {"digg"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"digg"}
                          icon   = {"digg"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"flickr"}
                          icon   = {"flickr"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"flickr"}
                          icon   = {"flickr"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"ghost"}
                          icon   = {"ghost"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"ghost"}
                          icon   = {"ghost"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"github"}
                          icon   = {"github"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"github"}
                          icon   = {"github"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"git"}
                          icon   = {"git"}
                          value  = {"Button"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        /> 
                      },
                      {type : 'D', value :   
                        <Button
                          id     = {"git"}
                          icon   = {"git"}
                          color  = {"cadetblue"}
                          margin = {"0px 5px 0px 0px"}
                          onClick= {buttonOnClick}
                          size   = {"xl"}
                        />  
                      }
                    ],
                  ]}
                />
              </RelativePanel>
            </TabPanel>
          </Tabs>    
        </ComponentPanel>
      </SubFullPanel>
    </FullPanel>
  );
}


