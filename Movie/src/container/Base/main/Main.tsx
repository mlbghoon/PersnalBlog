

import { LFloatPanel, RFloatPanel, TrayDiv, TrayPanel } from '../../../common/components';
import { appRoute } from '../../../routes';

const Main = (props:any) => {
	return (
		<>
			<TrayPanel>
				<LFloatPanel>
					<TrayDiv id={"_mainTrayDiv"} tray={props.openedMenu} selected={props.selected} onClose={props.delTray} onSelect={props.selectTray}/>
				</LFloatPanel>
				<RFloatPanel>
					<div className="sh-tray-btn-div" id = "_trayBtnPanel">
						<button  className= {'sh-tray-btn-prev'} id = {'btnPrev'} onClick={(e) => {e.stopPropagation(); props.prevTray(props.selected)}}></button>
						<button  className= {'sh-tray-btn-next'}  id = {'btnNext'} onClick={(e) => {e.stopPropagation(); props.nextTray(props.selected)}}></button>
						<button  className= {'sh-tray-btn-close'} id = {'btnClose'} onClick={(e) => {e.stopPropagation(); props.delAllTray()}}></button>
					</div>
				</RFloatPanel>
			</TrayPanel>
			<div className={'sh-main-view-Panel'}>
				{
					props.openedMenu.map((item:{MNU_ID: string, MNU_NM:string, PARE_MNU_ID: string, PGM_PATH: string}) => {
						return (
							<div id={item.MNU_ID} style={{display : (props.selected?.MNU_ID === item.MNU_ID) ? 'block' : 'none'}} key={'_menu_div_' + item.MNU_ID}>
								{
									appRoute.filter(route => route.id === item.MNU_ID).map((prop) => {
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


export default Main;