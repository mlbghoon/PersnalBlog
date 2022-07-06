import { useEffect, useState } from 'react';


const HeaderMenu = (props: any) => {  
	const [open, setOpen] = useState(false); 	
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};

	}, []);

	const handleClickOutside = (e:MouseEvent) => {
		setOpen(false)
	}
	const setMenuDivOpen = () => { 
		setOpen(true);
	}
	const closeMenuList = () => { 
		setOpen(false);
	}
	return (
		<>
			<div className="scrm-header-menu-container">
				<ul className="scrm-header-menu-ul">
					{
						props.menu.filter((item: { PARE_MNU_ID: string; }) => item.PARE_MNU_ID === "").map((item: { MNU_NM: string}, key: string) => {
							return <li className="scrm-header-menu-li" key={'menu_' + key} onClick={setMenuDivOpen}>{item.MNU_NM}</li>
						})
					}
				</ul>
			</div>
			<div id="_scrm_menu_area" className= {(open) ? "scrm-header-menu-active" : "scrm-header-menu-nested"}>
					<ul className="scrm-header-menu-ul">
						{
							props.menu.filter((item: { PARE_MNU_ID: string; }) => item.PARE_MNU_ID === "").map((item: { MNU_ID: string; }, key: string) => {
								return (
									<li className="scrm-header-menu-li" key={'div_menu_' + key} onClick={closeMenuList}>
										<ul className="scrm-header-submenu-ul">
											{
												props.menu.filter((menu: { PARE_MNU_ID: string; }) => menu.PARE_MNU_ID === item.MNU_ID).map((subMenu: { MNU_ID: string; MNU_NM: string; }, subKey: string) => {
													return <li  className="scrm-header-submenu-li" key={'submenu_' + subKey} id={'subMenu_' + subMenu.MNU_ID}
																onClick = {
																	() => {
																		props.addTray(subMenu);
																		setOpen(false);
																	}
																}
															> {subMenu.MNU_NM} </li>;
												})
											}
										</ul>
									</li>
								);
							})
						}
					</ul>
				</div>
		</>
	)
}
// class Menu extends React.Component {
// 	onClick = () => {

// 	}
// 	setMenuOpen = (e) => {
// 		if (e.target.nextSibling.style.display === 'none' || e.target.nextSibling.style.display.length === 0) {
// 			e.target.nextSibling.style.display = 'block';
// 		} else {
// 			e.target.nextSibling.style.display = 'none';
// 		};
// 	}
// 	setMenuConfig = (data) => {
// 		let rtnUpMenu = [];
// 		data.map((item) => {
// 			if (item.PARE_MNU_ID === null || item.PARE_MNU_ID === '') {
// 				item = {...item, subMenuYn: 'N'};
// 				rtnUpMenu.push(item);
// 			} else {
// 				rtnUpMenu.map((arrJson) => {
// 					if (arrJson.id === item.PARE_MNU_ID) {
// 						arrJson.subMenuYn = 'Y';
// 					}
// 					return arrJson;
// 				});
// 			}
// 		});
// 		return (
// 			rtnUpMenu.map((json, i) => {
// 				if (json.subMenuYn === 'N') {
// 					if (json.id === 'BASE') {
// 						return (
// 							<li key={'up_menu_li_' + i}>
// 								 <Link style={{ textDecoration: 'none', color: '#000000'}} to= {'/' + json.id }>
// 									<div className='scrm-menu-side-li-div'>{json.MNU_NM}</div>
// 								</Link>
// 							</li>
// 						);
// 					} else {
// 						return (
// 							<li key={'up_menu_li_' + i}>
// 								<div className='scrm-menu-side-li-div' onClick={this.setMenuOpen}> {json.MNU_NM} </div>
// 							</li>
// 						);
// 					}
// 				} else {
// 					return (
// 						<li key={'up_menu_li_' + i}>
// 							<div>
// 								<div className='scrm-menu-side-li-div' onClick={this.setMenuOpen}>{json.MNU_NM}</div>
// 								<div className='scrm-menu-side-li-div-hide'>
// 									<ul key = {'sub_menu_ul' + i} >
// 									{
// 										data.map((menu, index) => {
// 											if (menu.PARE_MNU_ID === json.id) {
// 												return (
// 													<li key={'sub_mnu_li' + index}>
// 														<Link style={{ textDecoration: 'none', color: '#000000'}} to={menu.PGM_PATH}>
// 															<div className='scrm-menu-side-li-div' >{menu.MNU_NM}</div>
// 														</Link>
// 													</li>
// 												);
// 											}
// 										})
// 									}
// 									</ul>
// 								</div>
// 							</div>
// 						</li>
// 					);
// 				 }
// 			})
// 		);
// 	}
// 	render () {
// 		return (
// 			<nav className='scrm-menu-side'>
// 				<ul>
// 					{ this.setMenuConfig(this.props.data) }
// 				</ul>
// 			</nav>
// 		);
// 	}
// }

// export {Menu, HeaderMenu};
export { HeaderMenu};