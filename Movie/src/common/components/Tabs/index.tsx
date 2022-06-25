import React, { ReactElement, useEffect, useState } from 'react';
import { sh_tab_pt, sh_tabs_pt, sh_tabpanel_pt } from '../TypeInterfaces';
export const Tabs =({onClick=(e:number)=>{return;},tabWidth="100%",height="",children,color="darkslategrey",size="md"}:sh_tabs_pt) => { 
	const [active, setActive] = useState(0); 	

	const onClickTab = (index:number) => {
		setActive(index);
		onClick(index);
	}

	return (
		<React.Fragment>
			<div style={{marginBottom: '50px'}}>
				<ul className ='sh-tabs-ul'>
					{
						React.Children.toArray(children).filter(child => {
							let tab = child as ReactElement;
							return tab.props.display !== 'none';
						}).map((child) => {
							let tab = child as ReactElement 							
							return (
								<Tab tabWidth= {tabWidth} active ={active} key={tab.props.index} index= {tab.props.index} label = {tab.props.label} onClick = {onClickTab} color={color} size={size}/>
							)
						})
					}
				</ul>
			</div>
			<div className='sh-tab-container' style={{height: height}}>
				{   
					React.Children.toArray(children).filter(child => {
							let tab = child as ReactElement;
							return tab.props.display !== 'none';
						}).map((child) => {
							let tab = child as ReactElement;
							if (tab.props.index !== active) return undefined;
							return tab.props.children;
					})
				}
			</div>
		</React.Fragment>
	);
} 
const Tab =({active,label,onClick,tabWidth,index,color,size}:sh_tab_pt) => { 
	const onClickHandler = () => {
		onClick(index);
	}
	let className = size + ' sh-tabs-ul-li';
	if (active === index) {
		className += ' sh-tabs-ul-li-active'
	}
	return (
		<li className ={className + " color-" + color} style={{width: tabWidth}} onClick ={onClickHandler}> {label} </li>
	);
}

export const TabPanel =({id,children}:sh_tabpanel_pt) => { 

	return ( <div id={id} className='sh-tab-panel'> {children} </div> )
}
