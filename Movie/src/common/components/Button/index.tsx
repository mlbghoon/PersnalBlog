import React from 'react';

interface BtnProps {
	id: string;
	mt: string;
	mr: string;
	mb: string;
	ml: string;
	disabled: boolean;
	onlyDisplay: boolean;
	type: string;
	size: string;	
	color: string;
	filled: boolean;
	innerImage: boolean;
	icon: string;
	onClick: () => void;
};

const defaultProps = {	
	mt: '0px',
	mr: '0px',
	mb: '0px',
	ml: '0px',
	disabled: false,
	onlyDisplay: false,
	type : 'default',
	size : 'md',
	color : 'grey',
	filled : false,
	innerImage : false,
	value: "",
	icon: "",
	hidden: false,
};
//scrm-btn md grey-o
export const Button = ({ id, mt, mr, mb, ml, disabled, onlyDisplay, type, size, color, filled, innerImage, value, icon, hidden, onClick }:BtnProps & typeof defaultProps) => { 
	let btnClass, iconClass;

	btnClass =  (value) ?
				 	'scrm-btn ' + size + ' ' + color + (filled  ? '' : '-o') + (onlyDisplay? ' display-only' : '')
				: 
					'scrm-btn ' + size + ' ' + color + (filled  ? '' : '-o') + (innerImage ? ' i' : '') + (onlyDisplay? ' display-only' : '');

	if (innerImage) {
		switch (icon) {
			case "save"    : iconClass = 'xi-diskette xi-x'; break;
			case "add"     : iconClass = 'xi-plus xi-x';     break;
			case "del"     : iconClass = 'xi-minus xi-x';    break;
			case "check"   : iconClass = 'xi-check xi-x';    break;
			case "trash"   : iconClass = 'xi-trash-o xi-x';  break;
			case "info"	   : iconClass = 'xi-info-o xi-x';  break;
			case "undo"    : iconClass = 'xi-undo';          break;
			case "redo"    : iconClass = 'xi-redo';          break;
			case "arrowUp" : iconClass = 'xi-arrow-up';      break;
			case "arrowDn" : iconClass = 'xi-arrow-down';    break;
			case "arrowL" : iconClass = 'xi-arrow-left';      break;
			case "arrowR" : iconClass = 'xi-arrow-right';    break;
			case "close"   : iconClass = 'xi-close';         break;
			case "play"    : iconClass = 'xi-play xi-x';     break;
			case "pause"   : iconClass = 'xi-pause xi-x';    break;
			case "left"    : iconClass = 'xi-arrow-left xi-x c-grey-6';   break;
			case "right"   : iconClass = 'xi-arrow-right xi-x c-grey-6';  break;
			case "copy"    : iconClass = filled ? 'xi-documents xi-x'  : 'xi-documents-o xi-x'; break;
			case "down"    : iconClass = filled ? 'xi-download xi-x'   : 'xi-download-o xi-x';  break;
			case "srch"    : iconClass = filled ? 'xi-search xi-x'     : 'xi-search-o xi-x';    break;
			default : iconClass = null; break;
		}
	}
	return (
		<button className = {btnClass}  id = {id} onClick = {onClick} disabled={disabled }
				style={{ marginTop: mt, marginRight: mr, marginBottom: mb, marginLeft: ml, visibility : hidden ? 'hidden' :  'visible'}}
		>
			{(innerImage && iconClass !== null) ? <i onClick= {(e) => { e.stopPropagation(); }} className={ iconClass }></i> :  null}
			{value}
		</button>
	);
}
Button.defaultProps = defaultProps;
