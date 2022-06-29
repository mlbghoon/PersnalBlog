import { menuAction } from "../store/modules/appModule";
import { PropsFromRedux } from "./App";

interface PropTypes extends PropsFromRedux{	
  menu: string; 
};


export const Main = (props:PropTypes) => {
  console.log(props)
  return (
    <>
      
     
    </>
  );
}


