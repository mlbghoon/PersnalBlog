import { menuAction } from "../store/modules/appModule";
import { PropsFromRedux } from "./App";

interface PropTypes extends PropsFromRedux{	
  menu: string; 
};


export const Main = (props:any) => {
  console.log(props)
  return (
    <>
      
     
    </>
  );
}


