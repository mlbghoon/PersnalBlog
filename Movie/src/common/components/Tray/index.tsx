import { menu_tp } from '../../../store/modules/appModule';
import { LFloatPanel } from '../Layout';
import { sh_tray_div_pt } from '../TypeInterfaces';


export const TrayDiv =({selectTray,delTray,selected,tray}:sh_tray_div_pt) => { 
	return (
		<>
			<LFloatPanel>
				<div className='sh-tray-div' id = {"tray_div"}>
					<ul id = { '_ul_tray_div'}>
						{
							tray.map((item: menu_tp) => {
								return (
									<li className = {(item.MNU_ID === selected?.MNU_ID) ? 'sh-tray-div-li-selected' : undefined}
										key={'sh-tray-div_' + item.MNU_ID} id={'tray_li_' + item.MNU_ID} onClick={() => {selectTray(item)}}
									>
										<div className='sh-tray-div-li-div' id={'tray_div_item_' + item.MNU_ID}>{item.MNU_NM}</div>
										<button  className= {'sh-tray-div-btn-close'} id = {'btnClose'} onClick={(e) => {e.stopPropagation(); delTray(item);}}></button>
									</li>
								)
							})
						}
					</ul>
				</div>
			</LFloatPanel>
		</>
	)
}
