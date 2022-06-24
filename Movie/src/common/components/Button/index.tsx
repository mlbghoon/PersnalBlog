import React, { useRef } from 'react';
import { sh_btn_pt } from '../TypeInterfaces';

export const Button = ({id,margin,disabled,size="md",color="tomato",filled=true,value,icon="",onClick}:sh_btn_pt) => { 
	let btnClass, iconClass;
	let buttonRef = useRef<HTMLButtonElement>(null);
	let innerImage = icon === "" ? false : true;

	btnClass =  (value) ?
				 	'button ' + size + ' color-' + color + (filled  ? '' : '-o') 
				: 
					'button ' + size + ' color-' + color + (filled  ? '' : '-o') + (innerImage ? ' i' : '');

	if (innerImage) {
		switch (icon) {
			case "save"    : iconClass = 'xi-x xi-diskette';     break;
			case "add"     : iconClass = 'xi-x xi-plus';         break;
			case "del"     : iconClass = 'xi-x xi-minus';        break;
			case "check"   : iconClass = 'xi-x xi-check';        break;
			case "info"	   : iconClass = 'xi-x xi-info-o';       break;
			case "undo"    : iconClass = 'xi-x xi-undo';         break;
			case "redo"    : iconClass = 'xi-x xi-redo';         break;
			case "arrowUp" : iconClass = 'xi-x xi-arrow-up';     break;
			case "arrowDn" : iconClass = 'xi-x xi-arrow-down';   break;
			case "arrowL"  : iconClass = 'xi-x xi-arrow-left';   break;
			case "arrowR"  : iconClass = 'xi-x xi-arrow-right';  break;
			case "close"   : iconClass = 'xi-x xi-close';        break;
			case "play"    : iconClass = 'xi-x xi-play';         break;
			case "pause"   : iconClass = 'xi-x xi-pause';        break;
			case "srch"    : iconClass = 'xi-x xi-search';       break;
			case "left"    : iconClass = 'xi-x xi-arrow-left';   break;
			case "right"   : iconClass = 'xi-x xi-arrow-right';  break;
			case "trash"   : iconClass = filled ? 'xi-x xi-trash'     : 'xi-x xi-trash-o';     break;
			case "copy"    : iconClass = filled ? 'xi-x xi-documents' : 'xi-x xi-documents-o'; break;
			case "down"    : iconClass = filled ? 'xi-x xi-download'  : 'xi-x xi-download-o';  break;
			
			default : iconClass = null; break;
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

