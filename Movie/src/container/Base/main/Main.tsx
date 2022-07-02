

import { LFloatPanel, RFloatPanel, TrayDiv, TrayPanel } from '../../../common/components';
import { appRoute } from '../../../routes';

const Main = (props:any) => {
	return (
		<>
			<TrayPanel>
				<LFloatPanel>
					<TrayDiv id={"_mainTrayDiv"} tray={props.tray} selected={props.selected} onClose={props.delTray} onSelect={props.selectTray}/>
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
					props.tray.map((item:{id: string, nm:string, pare_id: string, path: string}) => {
						return (
							<div id={item.id} style={{display : (props.selected?.id === item.id) ? 'block' : 'none'}} key={'_menu_div_' + item.id}>
								{
									appRoute.filter(route => route.id === item.id).map((prop) => {
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