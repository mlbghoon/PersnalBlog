

import { LFloatPanel, RFloatPanel, TrayPanel } from '../common/components';
import { appRoute } from '../routes';
import store from '../store';

export const Main = (props:any) => {
	const porpstate = store.getState()
	const { selected, tray } = porpstate.menus.appModule; 

  return (
	<>
		{/* <TrayPanel>
			<LFloatPanel>
				<TrayDiv id={"_mainTrayDiv"} data= {tray} selected = {selected} onClick = {onClick} onClose = {onClose} onSelect={onSelect}/>
			</LFloatPanel>
			<RFloatPanel>
				<div className="scrm-tray-btn-div" id = "_trayBtnPanel">
					<IconButton classes='scrm-tray-btn-prev' id='btnPrev' onClick={event.button.onClick} />
					<IconButton classes='scrm-tray-btn-next' id='btnNext' onClick={event.button.onClick} />
					<IconButton classes='scrm-tray-btn-close' id='btnClose' onClick={event.button.onClick} />
				</div>
			</RFloatPanel>
		</TrayPanel> */}
		<div className={'scrm-main-view-Panel'}>
			{
				tray.map((item:{id: string, nm:string, pare_id: string, path: string}) => {
					return (
						<div id={item.id} style={{display : (selected?.id === item.id) ? 'block' : 'none'}} key={'_menu_div_' + item.id}>
							{
								appRoute.filter(item => item.id === item.id).map((prop) => {
									return <prop.component key = {'_menu_comp_' + prop.id}/>
								})
							}
						</div>
					)
				})
			}
		</div>
	</>
  );
}


