import React, { useRef } from 'react';
import { sh_btn_pt } from '../TypeInterfaces';

export const Button = ({id,margin,disabled,size="md",color="tomato",filled=true,value,icon="",onClick, extraClass}:sh_btn_pt) => { 
	let btnClass, iconClass;
	let buttonRef = useRef<HTMLButtonElement>(null);
	let innerImage = icon === "" ? false : true;

	btnClass =  (value) ?
				 	'button ' + size + ' color-' + color + (filled  ? '' : '-o') 
				: 
					'button ' + size + ' color-' + color + (filled  ? '' : '-o') + (innerImage ? ' i' : '');

	if (extraClass) {
		btnClass += " " + extraClass;

	}

	if (innerImage) {
		iconClass = 'xi-' + icon;
		if (!filled) {
			iconClass += '-o';
		}
	}
	
	const onClickHandler = (e:React.MouseEvent) => {
		onClick({id: id, target : e.target as HTMLButtonElement});
	}

	return (
		<>
			<button 
				id       = {id} 
				ref      = {buttonRef} 
				onClick  = {onClickHandler} 
				className= {btnClass} 
				disabled = {disabled}
				style    = {{ margin: margin}}
			>	
				{
					(innerImage && iconClass !== null) 
					? 	
						<span className={"button__icon"} onClick= {(e) => {e.stopPropagation(); buttonRef.current?.click()}}>
							<i className={ iconClass }></i> 
						</span>					
					:  
						null
				}
				<span className={"button__text"}>{value}</span>			
			</button>
		</>
	);
}

