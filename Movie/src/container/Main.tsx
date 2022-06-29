

import { appRoute } from '../routes';

export const Main = (props:any) => {
  console.log(props)
  return (
    <div className={'scrm-main-view-area'}>
					{
						props.tray.map((tray:{id: string, nm:string, pare_id: string, path: string}) => {
							return (
								<div id={tray.id} style={{display : (props.selected.id === tray.id) ? 'block' : 'none'}} key={'_menu_div_' + tray.id}>
									{
										appRoute.filter(item => item.id === tray.id).map((prop) => {
											return <prop.component key = {'_menu_comp_' + prop.id}/>
										})
									}
								</div>
							)
						})
					}
				</div>
  );
}


