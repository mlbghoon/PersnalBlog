import React, { useEffect, useRef } from 'react';


interface IptProps {
	type:string;
	id: string; 
	mt: string; 
	mr: string; 
	mb: string; 
	ml: string; 
	width: string;
	disabled: boolean; 
	readOnly: boolean; 
	size: string; 
	color: string; 
	value: string; 
	placeholder: string; 
	minLength: number; 
	maxLength: number; 	
	onChange: (e:React.ChangeEvent) => void;
	onKeyPress: (e:React.KeyboardEvent) => void;
	onBlur: (e:React.FocusEvent) => void;
	onKeyUp: (e:React.KeyboardEvent) => void;
};

const defaultProps = {
	type: "",
	mt: '0px',
	mr: '0px',
	mb: '0px',
	ml: '0px',
	width: "",
	disabled: false, 
	readOnly: false, 
	size   : "",
	color  : "",
	value  : "",
	placeholder: "",
	minLength: 1,
	maxLength: 100,	
	onKeyPress: (e:React.KeyboardEvent) => {return;},
	onBlur: (e:React.FocusEvent) => {return;},
	onKeyUp: (e:React.KeyboardEvent) => {return;},
	tooltip : false,
	focusOnRender : false,
	alertEmpty: false,
};
export const Input =({ alertEmpty,type,id,mt,mr,mb,ml,disabled,readOnly,width,size,color,value,placeholder,minLength,maxLength,onChange,onKeyPress,onBlur,onKeyUp,focusOnRender }:IptProps & typeof defaultProps) => { 
	let inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (focusOnRender) {
			inputRef.current?.focus();	
		}
	}, []);
	
	const rtnVal = (value:string) => {		
		if (type !== undefined) {
			switch (type) {
			case 'onlyNum' :
				return value.replace(/[^0-9]/g,"")
			case 'onlyKor' :
				return value.replace(/[a-z0-9]|[ \]{}()<>?|`~!@#$%^&*-_+=,.;:'\\]/g,"");
			case 'onlyEng' :
				return value.replace(/[^a-zA-Z]/g,"");				
			case 'engNum' :
				return value.replace(/[^a-zA-Z0-9]/g,"");
			default :
				return value;
			}
		} else {
			return value;
		}	
	}
	
	let inputClass = "scrm-input-div";

	if (alertEmpty) {
		inputClass += " border_red";

	} 

	if (color === "grey") {
		inputClass += " textfield_color";
	}

	return (
		<div className={inputClass} style={{width: width, marginLeft: ml, marginRight: mr, marginTop: mt, marginBottom: mb}}>
			<input	className={size === 'h1' ? "scrm-input-h1" : "scrm-input-text"}
					type="text"
					id = {id}
					value = {rtnVal(value)}
					placeholder = {placeholder}
					minLength =  {minLength}
					maxLength = {maxLength}
					readOnly = {readOnly}
					disabled = {disabled}
					onChange = {onChange}
					onKeyPress= {onKeyPress}
					onBlur = {onBlur}
					onKeyUp = {onKeyUp}
					autoComplete  = 'off'
					ref={inputRef} 
			/>
		</div>
	);
}
Input.defaultProps = defaultProps;