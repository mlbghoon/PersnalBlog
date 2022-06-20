import React, { useEffect, useRef } from 'react';
import { sh_ipt_props_default, sh_ipt_props_type } from '../TypeInterfaces';

export const Input =({ alertEmpty,type,id,mt,mr,mb,ml,disabled,readOnly,width,size,color,value,placeholder,minLength,maxLength,onChange,onKeyPress,onBlur,onKeyUp,focusOnRender }:sh_ipt_props_type & typeof sh_ipt_props_default) => { 
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
	// id    : string;   
	// target: HTMLInputElement;
	// key?  : string;
	// code? : string;
	// type? : string;

	const onChangeHandler = (e:React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		onChange({id: id, target : target});
	}
	const onKeyPressHandler = (e:React.KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		console.log(e)
		onKeyPress({id: id, target : target});
	}
	const onBlurHandler = (e:React.FocusEvent) => {
		const target = e.target as HTMLInputElement;
		onBlur({id: id, target : target});
	}
	const onKeyUpHandler = (e:React.KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		console.log(e)
		onKeyUp({id: id, target : target});
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
					onChange = {onChangeHandler}
					onKeyPress= {onKeyPressHandler}
					onBlur = {onBlurHandler}
					onKeyUp = {onKeyUpHandler}
					autoComplete  = 'off'
					ref={inputRef} 
			/>
		</div>
	);
}
Input.defaultProps = sh_ipt_props_default;