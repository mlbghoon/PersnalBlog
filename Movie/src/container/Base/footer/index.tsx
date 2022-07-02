import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LFloatPanel, RFloatPanel, TrayPanel } from '../../../common/components';

const Footer = (props:any) => {

	return (
		<TrayPanel>
			<LFloatPanel>
				<div id="scrmFooterDiv" className="scrm-footer-div">
					<ul className="scrm-footer-pop-ul">
					{
						props.popupList.map((item: { id: string; name: string; }) => { return (
								<li className="scrm-footer-pop-li">
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
					{/* <IconButton classes='scrm-tray-btn-close' id='btnPopAllClose'
								onClick={e => {
									this.props.popupList.forEach(element => {
										ReactDOM.unmountComponentAtNode(document.getElementById(element.id));
										document.body.removeChild(document.getElementById(element.id));

									});
									AppModuleAction.delAllPop()
								}}
					/> */}
				</div>
			</RFloatPanel>
		</TrayPanel>
	);
}
export default Footer;