import React, { useRef } from 'react';
import { sh_btn_pt } from '../TypeInterfaces';

//const Greet = ({ age = 21 }: GreetProps) => // etc
export const Button = ({id,margin,disabled,size="md",color="tomato",filled=true,value,icon="",onClick}:sh_btn_pt) => { 
	let btnClass, iconClass;
	let buttonRef = useRef<HTMLButtonElement>(null);
	let innerImage = icon === "" ? false : true;

	btnClass =  (value) ?
				 	'button ' + size + ' ' + color + (filled  ? '' : '-o') 
				: 
					'button ' + size + ' ' + color + (filled  ? '' : '-o') + (innerImage ? ' i' : '');

	if (innerImage) {
		switch (icon) {
			case "save"    : iconClass = 'xi-diskette xi-x'; break;
			case "add"     : iconClass = 'xi-plus xi-x';     break;
			case "del"     : iconClass = 'xi-minus xi-x';    break;
			case "check"   : iconClass = 'xi-check xi-x';    break;
			case "info"	   : iconClass = 'xi-info-o xi-x';   break;
			case "undo"    : iconClass = 'xi-undo';          break;
			case "redo"    : iconClass = 'xi-redo';          break;
			case "arrowUp" : iconClass = 'xi-arrow-up';      break;
			case "arrowDn" : iconClass = 'xi-arrow-down';    break;
			case "arrowL"  : iconClass = 'xi-arrow-left';    break;
			case "arrowR"  : iconClass = 'xi-arrow-right';   break;
			case "close"   : iconClass = 'xi-close';         break;
			case "play"    : iconClass = 'xi-play xi-x';     break;
			case "pause"   : iconClass = 'xi-pause xi-x';    break;
			case "srch"    : iconClass = 'xi-search xi-x';   break;
			case "left"    : iconClass = 'xi-arrow-left xi-x c-grey-6';   break;
			case "right"   : iconClass = 'xi-arrow-right xi-x c-grey-6';  break;
			case "trash"   : iconClass = filled ? 'xi-trash xi-x'     : 'xi-trash-o xi-x';     break;
			case "copy"    : iconClass = filled ? 'xi-documents xi-x' : 'xi-documents-o xi-x'; break;
			case "down"    : iconClass = filled ? 'xi-download xi-x'  : 'xi-download-o xi-x';  break;
			
			default : iconClass = null; break;
		}
	}
	
	const onClickHandler = (e:React.MouseEvent) => {
		onClick({id: id, target : e.target as HTMLButtonElement});
	}

	return (
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
	);
}

