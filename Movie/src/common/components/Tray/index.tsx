import { LFloatPanel } from '../Layout';
import { sh_tray_div_pt } from '../TypeInterfaces';


export const TrayDiv =({onSelect,onClose,selected,tray}:sh_tray_div_pt) => { 
	return (
		<>
			<LFloatPanel>
				<div className='sh-tray-div' id = {"tray_div"}>
					<ul id = { '_ul_tray_div'}>
						{
							tray.map((item: { id: string, nm: string }, key: string) => {
								return (
									<li className = {(item.id === selected?.id) ? 'sh-tray-div-li-selected' : undefined}
										key={'sh-tray-div' + key} id={'tray_li_' + item.id} onClick={() => {onSelect(item)}}
									>
										<div className='sh-tray-div-li-div' id={'tray_div_item_' + item.id}>{item.nm}</div>
										<button  className= {'sh-tray-div-btn-close'} id = {'btnClose'} onClick={(e) => {e.stopPropagation(); onClose(item);}}></button>
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
