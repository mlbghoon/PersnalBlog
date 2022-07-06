import { LFloatPanel, RFloatPanel, TrayPanel } from '../../../common/components';

const Footer = (props:any) => {
	const closeAllhander = () => {
		props.deleteAllPop();
		props.popupList.forEach((element: { MNU_ID: string; }) => {
			let target = document.getElementById(element.MNU_ID) as HTMLElement;
			document.body.removeChild(target);

		});
	}

	return (
		<TrayPanel>
			<LFloatPanel>
				<div id="scrmFooterDiv" className="scrm-footer-div">
					<ul className="scrm-footer-pop-ul">
					{
						props.popupList.map((item: { POP_ID: string; POP_NM: string; }) => { return (
								<li className="scrm-footer-pop-li" key={item.POP_ID}>
									<div onClick={e => {let pop = document.getElementById(item.POP_ID) as HTMLElement; pop.hidden = false; props.selectPop(item)}}>
										{item.POP_NM}
									</div>
								</li>
						)})
					}
					</ul>
				</div>
			</LFloatPanel>
			<RFloatPanel>
				<div className="scrm-tray-btn-div">
					<button  className= {'sh-tray-btn-close'} id = {'btnClose'} onClick={closeAllhander}></button>
				</div>
			</RFloatPanel>
		</TrayPanel>
	);
}
export default Footer;