import { LFloatPanel } from '../Layout';
import { sh_tray_div_pt } from '../TypeInterfaces';


export const TrayDiv =({onSelect,onClose,selected,tray}:sh_tray_div_pt) => { 
	return (
		<>
			<LFloatPanel>
				<div className='scrm-tray-div' id = {"tray_div"}>
					<ul id = { '_ul_tray_div'}>
						{
							tray.map((item: { id: string }, key: string) => {
								return (
									<li className = {(item.id === selected?.id) ? 'scrm-tray-div-li-selected' : undefined}
										key={'scrm-tray-div' + key} id={'tray_li_' + item.id} onClick={() => {onSelect(item)}}
									>
										<div className='scrm-tray-div-li-div' id={'tray_div_item_' + item.id}>{item.id}</div>
										<button  className= {'scrm-tray-div-btn-close'} id = {'btnClose'} onClick={(e) => {e.stopPropagation(); onClose(item);}}></button>
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
