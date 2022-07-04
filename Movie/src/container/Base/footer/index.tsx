import { LFloatPanel, RFloatPanel, TrayPanel } from '../../../common/components';

const Footer = (props:any) => {
	const closeAllhander = () => {
		props.deleteAllPop();
		props.popupList.forEach((element: { id: string; }) => {
			let target = document.getElementById(element.id) as HTMLElement;
			document.body.removeChild(target);

		});
	}

	return (
		<TrayPanel>
			<LFloatPanel>
				<div id="scrmFooterDiv" className="scrm-footer-div">
					<ul className="scrm-footer-pop-ul">
					{
						props.popupList.map((item: { id: string; name: string; }) => { return (
								<li className="scrm-footer-pop-li" key={item.id}>
									<div onClick={e => {let pop = document.getElementById(item.id) as HTMLElement; pop.hidden = false; props.selectPop(item)}}>
										{item.name}
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